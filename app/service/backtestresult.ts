import { Service } from 'egg';
import moment = require('moment-timezone');

/**
 * Test Service
 */
export default class BacktestResult extends Service {
  public async StrategyOrderList(BacktestId: string) {
    const StrategyOrderList = await this.ctx.model.Strategyorder.findAll({
      where: {
        JobId: BacktestId,
      },
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

}
