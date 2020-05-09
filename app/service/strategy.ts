import { Service } from 'egg';
import moment = require('moment-timezone');

/**
 * Strategy Service
 */
export default class Strategy extends Service {
  public async StrategyListByUserId(UserId: string) {
    try {
      const StrategyList = await this.ctx.model.Strategy.findAll({
        where: {
          UserId,
        },
        order: [[ 'CreatedAt', 'DESC' ]],
        raw: true,
      });
      return {
        Head: {
          Code: '200', Message: '获取列表成功！', CallTime: moment().tz('UTC').format('YYYYMMDDHHmmss'),
        },
        Result: {
          StrategyList,
        },
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async UpdateStrategyById(Id: string, data: any) {
    try {
      const UpdateRes = await this.ctx.model.Strategy.update({
        Remark: data.Remark,
      }, {
        where: {
          Id,
        },
        raw: true,
      });
      if (UpdateRes.length === 0) {
        return {
          Head: { Code: '403', Message: '没有找到这条记录！', CallTime: moment().format('YYYYMMDDHHmmss') },
          Result: {
            IsUpdate: false,
          },
        };
      }
      return {
        Head: { Code: '200', Message: '修改成功！', CallTime: moment().format('YYYYMMDDHHmmss') },
        Result: {
          IsUpdate: true,
        },
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async DelStrategyById(Id: string) {
    try {
      const DelRes = await this.ctx.model.Strategy.destroy({
        where: {
          Id,
        },
        raw: true,
      });
      if (DelRes.length === 0) {
        return {
          Head: { Code: '403', Message: '没有找到这条记录！', CallTime: moment().format('YYYYMMDDHHmmss') },
          Result: {
            IsDelete: false,
          },
        };
      }
      return {
        Head: {
          Code: '200', Message: '删除成功！', CallTime: moment().tz('UTC').format('YYYYMMDDHHmmss'),
        },
        Result: {
          IsDelete: true,
        },
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async AddStrategyByUserId(UserId: string, data: any) {
    try {
      this.ctx.model.Strategy.create({
        Id: data.Id,
        UserId,
        Name: data.Name,
        BacktestNum: 0,
      });
      return {
        Head: { Code: '200', Message: '保存成功！', Time: moment().format('YYYYMMDDHHmmss') },
        Result: {
          IsSave: true,
        },
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async UpdateBacktestNum(Id: string) {
    try {
      const Strategy = await this.ctx.model.Strategy.findOne({
        where: {
          Id,
        },
        raw: true,
      });
      const num = Strategy.BacktestNum;

      const UpdateRes = await this.ctx.model.Strategy.update({
        BacktestNum: num - 1,
      }, {
        where: {
          Id,
        },
        raw: true,
      });
      if (UpdateRes.length === 0) {
        return {
          Head: { Code: '403', Message: '没有找到这条记录！', CallTime: moment().format('YYYYMMDDHHmmss') },
          Result: {
            IsUpdate: false,
          },
        };
      }
      return {
        Head: { Code: '200', Message: '修改成功！', CallTime: moment().format('YYYYMMDDHHmmss') },
        Result: {
          IsUpdate: true,
        },
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
