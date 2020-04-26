
import { Application } from 'egg';
module.exports = (app: Application) => {
  const { STRING, TEXT } = app.Sequelize;
  const Backtestinfo = app.model.define('backtestinfo', {
    BacktestId: {
      type: STRING,
      primaryKey: true,
    },
    BacktestParam: {
      type: TEXT,
    },
  });
  return Backtestinfo;
};
