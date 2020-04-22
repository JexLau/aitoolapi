
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const Strategy = app.model.define('strategy', {
    Id: {
      type: STRING,
      primaryKey: true,
    },
    UserId: {
      type: STRING,
    },
    Name: {
      type: STRING,
    },
    BacktestNum: {
      type: INTEGER,
    },
    Remark: {
      type: STRING,
    },
  });
  return Strategy;
};
