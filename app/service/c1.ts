import { Service } from 'egg';
// import moment = require('moment-timezone');

export default class C1 extends Service {
  public async GetAll() {
    try {
      const data = await this.ctx.model.Categary1.findAll({
        order: [[ 'createdAt', 'DESC' ]],
        raw: true,
      });
      return data;
    } catch (error) {
      throw new Error('error');
    }
  }
}
