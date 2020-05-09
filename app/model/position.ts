import { Application } from 'egg';
module.exports = (app: Application) => {
  const DataTypes = app.Sequelize;
  const attributes = {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'Id',
    },
    PositionId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: '仓位id',
      field: 'PositionId',
    },
    BacktestId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: '回测id',
      field: 'BacktestId',
    },
    Symbol: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '品种名',
      field: 'Symbol',
    },
    Direction: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '方向',
      field: 'Direction',
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: '仓位创建时间',
      field: 'CreatedAt',
    },
  };
  const PositionModel = app.model.define('position', attributes);
  return PositionModel;
};
