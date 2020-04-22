
module.exports = app => {
  const { STRING, TEXT } = app.Sequelize;
  const Backtestresult = app.model.define('backtestresult', {
    BacktestId: {
      type: STRING,
      primaryKey: true,
    },
    BacktestResult: {
      type: TEXT,
    },
  });
  return Backtestresult;
};
