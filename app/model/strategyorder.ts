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
      comment: '订单方向（Buy, Sell）',
      field: 'Direction',
    },
    Offset: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '交易类型（Open开仓、Close平仓）',
      field: 'Offset',
    },
    OrderType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '订单类型（0：市价单，1：限价单）',
      field: 'OrderType',
    },
    LimitPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '限制成交价',
      field: 'LimitPrice',
    },
    FillPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '成交价',
      field: 'FillPrice',
    },
    VolumeMultiple: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '合约乘数',
      field: 'VolumeMultiple',
    },
    Quantity: {
      type: DataTypes.DECIMAL(18, 4),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '交易手数',
      field: 'Quantity',
    },
    StrategyId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '策略id',
      field: 'StrategyId',
    },
    OrderTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '下单时间',
      field: 'OrderTime',
    },
    JobId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '策略研究工具对应每次回测生成的任务Id（即回测id）',
      field: 'JobId',
    },
    OrderFee: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '订单手续费',
      field: 'OrderFee',
    },
    Status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '订单状态（fill：成交，invalid：无效）',
      field: 'Status',
    },
    FillTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '成交时间',
      field: 'FillTime',
    },
    OrderResult: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '订单处理结果描述',
      field: 'OrderResult',
    },
    OrderId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '订单id',
      field: 'OrderId',
    },
    OperateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '实际操作时间',
      field: 'OperateTime',
    },
    Nav: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '累计总资产',
      field: 'Nav',
    },
    Cach: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '可用资金',
      field: 'Cach',
    },
    CloseProfit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '平仓收益',
      field: 'CloseProfit',
    },
    CloseProfitRatio: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '平仓收益率',
      field: 'CloseProfitRatio',
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
    PositionId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '仓位id',
      field: 'PositionId',
    },
  };
  const Strategyorder = app.model.define('strategyorder', attributes);
  return Strategyorder;
};
