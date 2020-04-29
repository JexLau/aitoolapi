import { Service } from 'egg';
import moment = require('moment-timezone');

export default class Database extends Service {
  public async initDBTable() {
    try {
      await this.ctx.model.sync();
      return {
        Head: {
          Code: '200', Message: '获取列表成功！', CallTime: moment().tz('UTC').format('YYYYMMDDHHmmss'),
        },
        Result: {
          isSuccess: true,
        },
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
