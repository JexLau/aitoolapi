import { Service } from 'egg';
import moment = require('moment-timezone');

export default class BacktestResult extends Service {
  public async StrategyOrderList(BacktestId: string, data?: any) {
    let StrategyOrderList = [];
    if (data && data.Page) {
      const Page = data.Page * 1;
      const PageSize = data.PageSize ? data.PageSize * 1 : 10;
      StrategyOrderList = await this.ctx.model.Strategyorder.findAll({
        where: {
          JobId: BacktestId,
        },
        order: [ 'FillTime' ],
        limit: PageSize,
        offset: (Page - 1) * PageSize,
        raw: true,
      });
    } else {
      StrategyOrderList = await this.ctx.model.Strategyorder.findAll({
        where: {
          JobId: BacktestId,
        },
        order: [ 'FillTime' ],
        raw: true,
      });
    }
    const [ StrategyorderCount = 0 ] = await this.ctx.model.Strategyorder.findAll({
      attributes: [
        [ this.app.Sequelize.fn('COUNT', this.app.Sequelize.col('Id')), 'total' ],
      ],
      where: {
        JobId: BacktestId,
      },
      raw: true,
    });
    const Result = {
      StrategyOrderList,
      Total: StrategyorderCount.total,
    };
    return {
      Head: {
        Code: '200', Message: '获取列表成功！', CallTime: moment().tz('UTC').format('YYYYMMDDHHmmss'),
      },
      Result,
    };
  }

  public async PositionOrders(BacktestId: string) {
    let StrategyOrderList = [];
    StrategyOrderList = await this.ctx.model.Strategyorder.findAll({
      where: {
        JobId: BacktestId,
      },
      order: [[ 'FillTime', 'DESC' ]],
      raw: true,
    });
    const PositionSorted = this.groupBy(StrategyOrderList, (item: any) => {
      return [ item.PositionId ];
    });
    const PositionData: any = [];
    PositionSorted.forEach(data => {
      const len = data.length;
      const PStartTime = moment.tz(data[len - 1].FillTime, 'UTC').format('YYYY-MM-DD HH:mm:ss');
      const PEndTime = moment.tz(data[0].FillTime, 'UTC').format('YYYY-MM-DD HH:mm:ss');

      const Orders = data;
      const PositionId = data[0].PositionId;
      const Status = data[0].Offset;
      const PositionTime = `${PStartTime} ~ ${PEndTime}`;
      const CumProfit = data[0].Nav - data[len - 1].Nav;
      const CumProfitRatio = data[0].CloseProfitRatio;
      let MaxPosition = 0;
      data.forEach(item => {
        const OldMaxPosition = MaxPosition;
        const Direction = item.Direction === 'Sell' ? -1 : 1;
        const Quantity = parseFloat(item.Quantity);
        const Position = MaxPosition + Direction * Quantity;
        MaxPosition = Math.abs(OldMaxPosition) > Math.abs(Position) ? OldMaxPosition : Position;
      });

      PositionData.push({
        PositionId,
        PositionTime,
        CumProfit,
        CumProfitRatio,
        MaxPosition: Math.abs(MaxPosition),
        Status,
        Orders,
      });
    });
    const Result = PositionData;
    return {
      Head: {
        Code: '200', Message: '获取列表成功！', CallTime: moment().tz('UTC').format('YYYYMMDDHHmmss'),
      },
      Result,
    };
  }

  public async LogsList(BacktestId: string, data?: any) {
    let LogsList = [];
    if (data && data.Page) {
      const Page = data.Page * 1;
      const PageSize = data.PageSize ? data.PageSize * 1 : 10;
      LogsList = await this.ctx.model.Logs.findAll({
        where: {
          BacktestId,
        },
        limit: PageSize,
        offset: (Page - 1) * PageSize,
        raw: true,
      });
    } else {
      LogsList = await this.ctx.model.Logs.findAll({
        where: {
          BacktestId,
        },
        raw: true,
      });
    }
    const [ LogsListCount ] = await this.ctx.model.Logs.findAll({
      attributes: [
        [ this.app.Sequelize.fn('COUNT', this.app.Sequelize.col('Id')), 'total' ],
      ],
      where: {
        BacktestId,
      },
      raw: true,
    });
    const Result = {
      LogsList,
      Total: LogsListCount.total,
    };

    return {
      Head: {
        Code: '200', Message: '获取列表成功！', CallTime: moment().tz('UTC').format('YYYYMMDDHHmmss'),
      },
      Result,
    };
  }

  public async Backtestinfo(BacktestId: string) {
    const Backtestinfo = await this.ctx.model.Backtestinfo.findOne({
      where: {
        BacktestId,
      },
      raw: true,
    });
    return {
      Head: {
        Code: '200', Message: '获取成功！', CallTime: moment().tz('UTC').format('YYYYMMDDHHmmss'),
      },
      Result: Backtestinfo,
    };
  }

  public async Standard(data: any) {
    try {
      let Interval = data.Interval;
      if (data.TradeType === 'Forex') {
        // 1:1m 2:5m 3:15m 4:30m 5:1h
        if (data.Interval === '1m') {
          Interval = 60;
        } else if (data.Interval === '5m') {
          Interval = 300;
        } else if (data.Interval === '15m') {
          Interval = 900;
        } else if (data.Interval === '30m') {
          Interval = 1800;
        } else if (data.Interval === '30m') {
          Interval = 3600;
        }
      }
      const DatadetailsList = await this.ctx.model.Datadetails.findAll({
        where: {
          Exchange: data.Exchange || '',
          Type: data.Type,
          Symbol: data.Symbol,
          DataType: data.DataType,
          TradeType: data.TradeType,
          Interval,
        },
        raw: true,
      });
      console.log(DatadetailsList[0]);
      if (DatadetailsList.length > 0) {
        const DPIDArr = DatadetailsList.map(DataPacket => {
          return DataPacket.DataPacketId;
        });

        const res = await this.ctx.service.backtestresult.StrategyOrderList(data.BacktestId);
        const StrategyOrderList = res.Result.StrategyOrderList;
        let FirstFillPrice = 0;
        if (StrategyOrderList.length) {
          const list: any = StrategyOrderList[0];
          FirstFillPrice = list.FillPrice;
        }
        const timeArr: any = [];
        const filltimeArr: any = [];
        const Result: any = {};
        const OrderResult: any = {};
        StrategyOrderList.forEach((item: any) => {
          const filltime = moment.tz(item.FillTime, 'UTC').format('YYYY-MM-DD HH:mm:ss');
          const time = moment.tz(item.FillTime, 'UTC').format('YYYY-MM-DD HH:mm:00 Z');
          timeArr.push(`'${time}'`);
          filltimeArr.push(filltime);
        });
        const timeStr = timeArr.toString();
        const { QueryTypes } = this.app.Sequelize;
        const Datapacket: any = await this.app.pgmodel.query(
          `select * from ${DPIDArr[0]} where date_trunc('min', time) in (${timeStr})`,
          { type: QueryTypes.SELECT },
        );
        console.log(Datapacket);
        if (Datapacket.length > 0) {
          Datapacket.forEach(data => {
            let time = moment.tz(data.time, 'UTC').format('YYYY-MM-DD HH:mm:00');
            time = time.toString();
            Result[time] = data.close;
          });
          console.log(DPIDArr, Datapacket);
          let OldValue = 0;
          filltimeArr.forEach(item => {
            const filltime = item.toString();
            let time = moment.tz(item, 'UTC').format('YYYY-MM-DD HH:mm:00');
            time = time.toString();
            if (Result[time]) {
              OldValue = Result[time];
            }
            OrderResult[filltime] = ((OldValue - FirstFillPrice) / data.Amount).toFixed(4);
          });
          let Standart: any = [];
          Object.keys(OrderResult).forEach(function(key) {
            const time = parseFloat(moment.tz(key, 'UTC').format('x'));
            const value = parseFloat(OrderResult[key]);
            Standart.push([ time, value ]);
          });
          Standart = Standart.sort(function(val1, val2) {
            return val1[0] - val2[0];
          });
          return {
            Head: {
              Code: '200', Message: '获取列表成功！', CallTime: moment().tz('UTC').format('YYYYMMDDHHmmss'),
            },
            Result: Standart,
          };
        }
      }
      return {
        Head: {
          Code: '500', Message: '基准数据包无数据/不存在，请同步数据库', CallTime: moment().tz('UTC').format('YYYYMMDDHHmmss'),
        },
        Result: [],
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // 盈亏分析
  public async Profitloss(BacktestId: string, data?: any) {
    try {
      const Report: any = {};
      const StartTime = moment.tz(data.StartTime, 'UTC').format('YYYY-MM-DD 00:00:00');
      const EndTime = moment.tz(data.EndTime, 'UTC').format('YYYY-MM-DD 23:59:59');
      console.log(StartTime, EndTime);
      const StrategyOrderList = await this.ctx.model.Strategyorder.findAll({
        where: {
          JobId: BacktestId,
          FillTime: {
            [this.app.Sequelize.Op.gte]: StartTime,
            [this.app.Sequelize.Op.lte]: EndTime,
          },
        },
        raw: true,
      });
      // 每日盈亏
      const amount = StrategyOrderList[0].Nav;
      const dayProfitLoss = this.dayProfitLoss(StrategyOrderList, amount);
      const graph = this.dayGraph(dayProfitLoss);
      const profitlossAnalysis = this.profitlossAnalysis(dayProfitLoss);
      Report.dayProfitLoss = dayProfitLoss;
      Report.graph = graph;
      Report.profitlossAnalysis = profitlossAnalysis;
      return {
        Head: {
          Code: '200', Message: '获取成功！', CallTime: moment().tz('UTC').format('YYYYMMDDHHmmss'),
        },
        Result: Report,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public profitlossAnalysis(dayProfitLoss) {
    const profitlossAnalysis = {
      CumProfit: 0,
      CumLoss: 0,
      CumPnl: 0,
      PnlDay: 0,
      LossDay: 0,
      FlatDay: 0,
      AveragePnl: 0,
      AverageLoss: 0,
      WinRatio: 0,
      ProfitLossRatio: 0,
    };
    dayProfitLoss.forEach(day => {
      if (day.dayProfitLoss > 0) {
        profitlossAnalysis.PnlDay++;
        profitlossAnalysis.CumProfit += day.dayProfitLoss;
      } else if (day.dayProfitLoss < 0) {
        profitlossAnalysis.LossDay++;
        profitlossAnalysis.CumLoss += day.dayProfitLoss;
      } else if (day.dayProfitLoss === 0) {
        profitlossAnalysis.FlatDay++;
      }
    });
    profitlossAnalysis.CumLoss = Math.abs(profitlossAnalysis.CumLoss);
    profitlossAnalysis.CumPnl = profitlossAnalysis.CumProfit - profitlossAnalysis.CumLoss;
    const day = dayProfitLoss.length;
    profitlossAnalysis.AveragePnl = profitlossAnalysis.CumProfit / day;
    profitlossAnalysis.AverageLoss = profitlossAnalysis.CumLoss / day;
    profitlossAnalysis.WinRatio = profitlossAnalysis.PnlDay / day;
    profitlossAnalysis.ProfitLossRatio = profitlossAnalysis.AveragePnl / profitlossAnalysis.AverageLoss;
    return profitlossAnalysis;
  }

  public dayGraph(dayProfitLoss) {
    const graph: any = {
      dayProfitLoss: [],
      cumProfitLoss: [],
      cumProfitLossRatio: [],
    };
    dayProfitLoss.forEach(day => {
      const timestamp: number = parseInt(moment.tz(day.tradeDate, 'UTC').format('x'));
      graph.dayProfitLoss.push([
        timestamp,
        day.dayProfitLoss,
      ]);
      graph.cumProfitLoss.push([
        timestamp,
        day.cumProfitLoss,
      ]);
      graph.cumProfitLossRatio.push([
        timestamp,
        day.cumProfitLossRatio,
      ]);
    });
    return graph;
  }

  public dayProfitLoss(transaction, amount) {
    const dayGroupData: any = this.dayGroup(transaction);
    const position: any = [];
    dayGroupData.forEach((day: any) => {
      const tradeDate: any = day[0].MatchDate;
      const len = day.length;
      let dayProfitLoss = day.reduce((prev, cur) => {
        prev = prev.CloseProfit ? prev.CloseProfit : prev;
        if (prev === null) {
          prev = 0;
        }
        if (cur.CloseProfit === null) {
          cur.CloseProfit = 0;
        }
        return prev * 1 + cur.CloseProfit * 1;
      }, 0);
      let cumProfitLoss = day[len - 1].Nav - amount;
      let cumProfitLossRatio = cumProfitLoss / amount;
      // const nav = day[len - 1].Nav;
      // 保留四位小数
      dayProfitLoss = parseFloat(dayProfitLoss.toFixed(4));
      cumProfitLoss = parseFloat(cumProfitLoss.toFixed(4));
      cumProfitLossRatio = parseFloat(cumProfitLossRatio.toFixed(4));
      position.push({
        tradeDate,
        dayProfitLoss,
        cumProfitLoss,
        cumProfitLossRatio,
        // nav
      });
    });
    return position;
  }

  // 聚合每天的交易数据
  public dayGroup(transaction) {
    const data = transaction.map(item => {
      item.MatchDate = moment.tz(item.FillTime, 'UTC').format('YYYY-MM-DD');
      item.MatchTime = moment.tz(item.FillTime, 'UTC').format('HH:mm:ss');
      return item;
    });

    const sorted = this.groupBy(data, (item: any) => {
      return [ item.MatchDate ];
    });

    return sorted;
  }

  // 聚合方法
  public groupBy(array, f) {
    const groups = {};
    array.forEach((o: any) => {
      const group = JSON.stringify(f(o));
      groups[group] = groups[group] || [];
      groups[group].push(o);
    });
    return Object.keys(groups).map(function(group) {
      return groups[group];
    });
  }
}
