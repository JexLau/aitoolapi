
module.exports = app => {
  const { STRING, DATE, DECIMAL, INTEGER } = app.Sequelize;
  const StrategyOrder = app.model.define('strategyorder', {
    Id: {
      type: INTEGER,
      primaryKey: true,
    },
    Symbol: {
      type: STRING,
    },
    Direction: {
      type: STRING,
    },
    Offset: {
      type: STRING,
    },
    OrderType: {
      type: INTEGER,
    },
    LimitPrice: {
      type: DECIMAL,
    },
    FillPrice: {
      type: DECIMAL,
    },
    VolumeMultiple: {
      type: STRING,
    },
    Quantity: {
      type: INTEGER,
    },
    StrategyId: {
      type: STRING,
    },
    OrderTime: {
      type: DATE,
    },
    JobId: {
      type: STRING,
    },
    OrderFee: {
      type: STRING,
    },
    Status: {
      type: STRING,
    },
    FillTime: {
      type: DATE,
    },
    OrderResult: {
      type: STRING,
    },
    OrderId: {
      type: STRING,
    },
    OperateTime: {
      type: DATE,
    },
    CloseProfit: {
      type: DECIMAL,
    },
    Nav: {
      type: DECIMAL,
    },
    CloseProfitRatio: {
      type: DECIMAL,
    },
  });
  return StrategyOrder;
};
