
module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;
  const Logs = app.model.define('logs', {
    Id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    BacktestId: {
      type: STRING,
    },
    Log: {
      type: TEXT,
    },
    Level: {
      type: STRING,
    },
  });
  return Logs;
};
