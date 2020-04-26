import { Service } from 'egg';
import moment = require('moment-timezone');

export default class Datadetails extends Service {
  public async DatadetailsList(BacktestId: string) {
    const DatadetailsList = await this.ctx.model.Datadetails.findAll({
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
        DatadetailsList,
      },
    };
  }
}
