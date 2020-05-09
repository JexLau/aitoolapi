import { Controller } from 'egg';
import moment = require('moment-timezone');

export default class BacktestResultController extends Controller {
  public async StrategyOrderList() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.backtestresult.StrategyOrderList(ctx.params.BacktestId, ctx.query);
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

  public async PositionOrders() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.backtestresult.PositionOrders(ctx.params.BacktestId);
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

  public async LogsList() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.backtestresult.LogsList(ctx.params.BacktestId, ctx.query);
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

  public async Backtestinfo() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.backtestresult.Backtestinfo(ctx.params.BacktestId);
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

  public async Standard() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.backtestresult.Standard(ctx.query);
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

  public async Profitloss() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.backtestresult.Profitloss(ctx.params.BacktestId, ctx.query);
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
