
import { Application } from 'egg';
module.exports = (app: Application) => {
  const { STRING, DATE } = app.Sequelize;
  const Datadetails = app.model.define('datadetails', {
    DataDetailsId: {
      type: STRING,
      primaryKey: true,
    },
    DataPacketId: {
      type: STRING,
    },
    Interval: {
      type: STRING,
    },
    TradeType: {
      type: STRING,
    },
    Exchange: {
      type: STRING,
    },
    Type: {
      type: STRING,
    },
    Symbol: {
      type: STRING,
    },
    DataType: {
      type: STRING,
    },
    Start: {
      type: DATE,
    },
    End: {
      type: DATE,
    },
  }, {
    timestamps: false,
    createdAt: '',
    updatedAt: '',
  });
  return Datadetails;
};
