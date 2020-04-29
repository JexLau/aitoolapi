import { Controller } from 'egg';
import moment = require('moment-timezone');

export default class DatabaseController extends Controller {
  public async initDBTable() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.database.initDBTable();
      ctx.body = serviceRep;
    } catch (error) {
      console.log(error.stack);
      ctx.body = {
        Head: { Code: '500', Message: '发生错误！', CallTime: moment().tz('UTC').format('YYYYMMDDHHmmss') },
        Result: {
          ErrorMsg: error.message,
        },
      };
    }
  }
}
