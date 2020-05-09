import { Application } from 'egg';
import { TextDataTypeOptions } from 'sequelize/lib/data-types';
const Long: TextDataTypeOptions = 'long';

module.exports = (app: Application) => {
  const DataTypes = app.Sequelize;
  const attributes = {
    BacktestId: {
      type: DataTypes.STRING(255),
      primaryKey: true,
      autoIncrement: false,
      comment: '回测id',
      field: 'BacktestId',
    },
    BacktestResult: {
      type: DataTypes.TEXT(Long),
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: '回测结果',
      field: 'BacktestResult',
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      field: 'CreatedAt',
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      field: 'UpdatedAt',
    },
  };
  const Backtestresult = app.model.define('backtestresult', attributes);
  return Backtestresult;
};
