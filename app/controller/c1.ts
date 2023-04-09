import { Controller } from 'egg';
export default class C1Controller extends Controller {
  public async c1All() {
    const { ctx } = this;
    try {
      const serviceRep = await ctx.service.c1.GetAll();
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
