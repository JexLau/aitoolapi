import { Service, Context } from 'egg';
// import moment = require('moment-timezone');

export default class C2 extends Service {
  public async GetList(query: Context['query']) {
    try {
      let { page = 1, size = 10 } = query;
      const { cgName } = query;
      page = Number(page);
      size = Number(size);
      const option = cgName ? { cgName } : {};
      const { rows, count } = await this.ctx.model.Categary2.findAndCountAll({
        where: option,
        offset: (page - 1) * size,
        limit: size,
        // order: [[ 'createdAt', 'DESC' ]],
        raw: true,
      });
      return { data: rows, total: count, page };
    } catch (error) {
      throw new Error('error');
    }
  }
}
