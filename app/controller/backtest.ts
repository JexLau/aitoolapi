import { Controller } from 'egg';
import moment = require('moment-timezone');

export default class BacktestController extends Controller {
  public async BacktestList() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.backtest.BacktestList(ctx.params.StrategyId);
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

  public async UpdateBacktest() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.backtest.UpdateBacktest(ctx.params.Id, ctx.request.body);
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

  public async DelBacktest() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.backtest.DelBacktest(ctx.params.Id);
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

  public async BacktestNewest() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.backtest.BacktestNewest(ctx.params.StrategyId);
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

  public async BacktestStatus() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.backtest.BacktestStatus(ctx.params.Id);
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
