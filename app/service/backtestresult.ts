import { Service } from 'egg';
import moment = require('moment-timezone');

export default class BacktestResult extends Service {
  public async StrategyOrderList(BacktestId: string) {
    const StrategyOrderList = await this.ctx.model.Strategyorder.findAll({
      where: {
        JobId: BacktestId,
      },
      order: [ 'FillTime' ],
      raw: true,
    });
    return {
      Head: {
        Code: '200', Message: '获取列表成功！', CallTime: moment().tz('UTC').format('YYYYMMDDHHmmss'),
      },
      Result: {
        StrategyOrderList,
      },
    };
  }

  public async LogsList(BacktestId: string) {
    const LogsList = await this.ctx.model.Logs.findAll({
      where: {
        BacktestId,
      },
      raw: true,
    });
    return {
      Head: {
        Code: '200', Message: '获取列表成功！', CallTime: moment().tz('UTC').format('YYYYMMDDHHmmss'),
      },
      Result: {
        LogsList,
      },
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
      const DatadetailsList = await this.ctx.model.Datadetails.findAll({
        where: {
          Exchange: data.Exchange || '',
          Type: data.Type,
          Symbol: data.Symbol,
          DataType: data.DataType,
          TradeType: data.TradeType,
          Interval: data.Interval,
        },
        raw: true,
      });

      const DPIDArr = DatadetailsList.map(DataPacket => {
        return DataPacket.DataPacketId;
      });

      const res = await this.ctx.service.backtestresult.StrategyOrderList(data.BacktestId);
      const StrategyOrderList = res.Result.StrategyOrderList;
      let FirstFillPrice = 0;
      if (StrategyOrderList.length) {
        FirstFillPrice = StrategyOrderList[0].FillPrice;
      }
      const timeArr: any = [];
      const filltimeArr: any = [];
      const Result: any = {};
      const OrderResult: any = {};
      StrategyOrderList.forEach(item => {
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
      Datapacket.forEach(data => {
        let time = moment.tz(data.time, 'UTC').format('YYYY-MM-DD HH:mm:00');
        time = time.toString();
        Result[time] = data.close;
      });
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
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
