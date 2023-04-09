import { Service, Context } from 'egg';
// import moment = require('moment-timezone');

export default class Tool extends Service {
  public async GetList(query: Context['query']) {
    try {
      let { page = 1, size = 10 } = query;
      const { name, order = 'updatedAt', cg2Name = '' } = query;
      page = Number(page);
      size = Number(size);
      const option: { [key: string]: any } = {};
      if (name) option.name = name;
      if (cg2Name) option.cg2Name = cg2Name;

      // Set the sorting order based on the query parameter
      let orderBy;
      switch (order) {
        case 'viewCountM':
          orderBy = [ 'viewCountM', 'DESC' ];
          break;
        case 'updatedAt':
        default:
          orderBy = [ 'updatedAt', 'DESC' ];
          break;
      }
      const { rows, count } = await this.ctx.model.Tools.findAndCountAll({
        where: option,
        offset: (page - 1) * size,
        limit: size,
        order: [ orderBy ],
      });
      return { data: rows, total: count, page };
    } catch (error) {
      throw new Error('error');
    }
  }

  public async GetDetail(param: Context['param']) {
    try {
      const name = param.name;
      const data = await this.ctx.model.Tools.findOne({
        where: { name },
      });
      return data;
    } catch (error) {
      throw new Error('error');
    }
  }
}
