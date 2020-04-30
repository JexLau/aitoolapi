import { Application } from 'egg';
module.exports = (app: Application) => {
  const DataTypes = app.Sequelize;
  const attributes = {
    Id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      comment: 'strategyId',
      field: 'Id',
    },
    UserId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: '用户Id',
      field: 'UserId',
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: '策略名称',
      field: 'Name',
    },
    BacktestNum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0',
      primaryKey: false,
      autoIncrement: false,
      comment: '回测次数',
      field: 'BacktestNum',
    },
    Remark: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '备注',
      field: 'Remark',
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '创建时间',
      field: 'CreatedAt',
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: '更新时间',
      field: 'UpdatedAt',
    },
  };
  const Strategy = app.model.define('strategy', attributes);
  return Strategy;
};
