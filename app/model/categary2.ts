import { Application } from 'egg';

module.exports = (app: Application) => {
  const DataTypes = app.Sequelize;
  const attributes = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cgId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cgName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  };
  const Categary2 = app.model.define('Categary2s', attributes);
  return Categary2;
};
