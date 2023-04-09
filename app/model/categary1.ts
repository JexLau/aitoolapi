import { Application } from 'egg';

module.exports = (app: Application) => {
  const DataTypes = app.Sequelize;
  const attributes = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
  const Categary1 = app.model.define('Categary1s', attributes);
  return Categary1;
};
