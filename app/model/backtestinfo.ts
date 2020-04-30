import { Application } from 'egg';
module.exports = (app: Application) => {
  const DataTypes = app.Sequelize;
  const attributes = {
    BacktestId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      comment: 'backtest id',
      field: 'BacktestId',
    },
    BacktestParam: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '回测参数',
      field: 'BacktestParam',
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
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
  const Backtestinfo = app.model.define('backtestinfo', attributes);
  return Backtestinfo;
};
