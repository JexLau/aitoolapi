import { Application } from 'egg';
module.exports = (app: Application) => {
  const DataTypes = app.Sequelize;
  const attributes = {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: '日志id',
      field: 'Id',
    },
    BacktestId: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '回测id',
      field: 'BacktestId',
    },
    Log: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '日志内容',
      field: 'Log',
    },
    Level: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '0: error：输出连接数据库、无法平仓等错误信息;\n\r\n1: warn：输出总资产、可用资金信息;\r\n2: info：记录获取数据时间、下单成功等;\r\n3:\n debug：输出平仓信息;\r\n\n4: fatal：输出开仓信息。',
      field: 'Level',
    },
    CreatedAt: {
      type: 'TIMESTAMP',
      defaultValue: app.Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      field: 'CreatedAt',
    },
    UpdatedAt: {
      type: 'TIMESTAMP',
      defaultValue: app.Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      field: 'UpdatedAt',
    },
  };
  const Logs = app.model.define('logs', attributes);
  return Logs;
};
