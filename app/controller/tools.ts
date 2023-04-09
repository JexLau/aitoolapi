import { Controller } from 'egg';
export default class ToolController extends Controller {
  public async toolList() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.tool.GetList(ctx.query);
      ctx.body = serviceRep;
    } catch (error) {
      // console.log(error.stack);
      ctx.body = {
        Head: { Code: '500', Message: '发生错误！', CallTime: '1' },
        Result: {
          ErrorMsg: 'err',
        },
      };
    }
  }

  public async toolDetail() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.tool.GetDetail(ctx.params);
      ctx.body = serviceRep;
    } catch (error) {
      // console.log(error.stack);
      ctx.body = {
        Head: { Code: '500', Message: '发生错误！', CallTime: '1' },
        Result: {
          ErrorMsg: 'err',
        },
      };
    }
  }
}
