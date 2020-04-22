import { Controller } from 'egg';
import moment = require('moment-timezone');

export default class StrategyController extends Controller {
  public async StrategyList() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.strategy.StrategyListByUserId(ctx.params.UserId);
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

  public async UpdateStrategy() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.strategy.UpdateStrategyById(ctx.params.Id, ctx.request.body);
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

  public async UpdateBacktestNum() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.strategy.UpdateBacktestNum(ctx.params.Id);
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

  public async DelStrategy() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.strategy.DelStrategyById(ctx.params.Id);
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

  public async AddStrategy() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.strategy.AddStrategyByUserId(ctx.params.UserId, ctx.request.body);
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
