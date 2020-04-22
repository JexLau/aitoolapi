
module.exports = app => {
  const { STRING, DATE, DECIMAL } = app.Sequelize;
  const Backtest = app.model.define('backtest', {
    Id: {
      type: STRING,
      primaryKey: true,
    },
    StrategyId: {
      type: STRING,
    },
    Amount: {
      type: DECIMAL,
    },
    Status: {
      type: STRING,
    },
    BacktestTime: {
      type: DATE,
    },
    StartTime: {
      type: DATE,
    },
    EndTime: {
      type: DATE,
    },
    CumPnlRatio: {
      type: DECIMAL,
    },
    MaxDrawdown: {
      type: DECIMAL,
    },
    SharpRatio: {
      type: DECIMAL,
    },
    Remark: {
      type: STRING,
    },
  });
  return Backtest;
};
