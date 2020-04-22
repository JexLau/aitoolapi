import { Service } from 'egg';
import moment = require('moment-timezone');

/**
 * Test Service
 */
export default class Backtest extends Service {

  /**
   * Find backtest all of StrategyId
   * @param StrategyId - StrategyId
   */
  public async BacktestList(StrategyId: string) {
    try {
      const BacktestList = await this.ctx.model.Backtest.findAll({
        where: {
          StrategyId,
        },
        order: [[ 'CreatedAt', 'DESC' ]],
        raw: true,
      });
      return {
        Head: {
          Code: '200', Message: '获取列表成功！', CallTime: moment().tz('UTC').format('YYYYMMDDHHmmss'),
        },
        Result: {
          BacktestList,
        },
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async UpdateBacktest(Id: string, data) {
    try {
      const UpdateRes = await this.ctx.model.Backtest.update({
        Remark: data.Remark,
      }, {
        where: {
          Id,
        },
        raw: true,
      });
      if (UpdateRes.length === 0) {
        return {
          Head: { Code: '403', Message: '没有找到这条记录！', CallTime: moment().format('YYYYMMDDHHmmss') },
          Result: {
            IsUpdate: false,
          },
        };
      }
      return {
        Head: { Code: '200', Message: '修改成功！', CallTime: moment().format('YYYYMMDDHHmmss') },
        Result: {
          IsUpdate: true,
        },
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async DelBacktest(Id: string) {
    try {
      const DelRes = await this.ctx.model.Backtest.destroy({
        where: {
          Id,
        },
        raw: true,
      });
      if (DelRes.length === 0) {
        return {
          Head: { Code: '403', Message: '没有找到这条记录！', CallTime: moment().format('YYYYMMDDHHmmss') },
          Result: {
            IsDelete: false,
          },
        };
      }
      return {
        Head: {
          Code: '200', Message: '删除成功！', CallTime: moment().tz('UTC').format('YYYYMMDDHHmmss'),
        },
        Result: {
          IsDelete: true,
        },
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async BacktestNewest(StrategyId: string) {
    try {
      const Backtest = await this.ctx.model.Backtest.findOne({
        where: {
          StrategyId,
        },
        order: [[ 'CreatedAt', 'DESC' ]],
        limit: 1,
        raw: true,
      });
      return {
        Head: {
          Code: '200', Message: '获取列表成功！', CallTime: moment().tz('UTC').format('YYYYMMDDHHmmss'),
        },
        Result: {
          Backtest,
        },
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async BacktestStatus(Id: string) {
    try {
      const Backtest = await this.ctx.model.Backtest.findOne({
        where: {
          Id,
        },
        raw: true,
      });
      return {
        Head: {
          Code: '200', Message: '获取列表成功！', CallTime: moment().tz('UTC').format('YYYYMMDDHHmmss'),
        },
        Result: Backtest,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
