import { Application } from 'egg';

module.exports = (app: Application) => {
  const DataTypes = app.Sequelize;
  const attributes = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cg2Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tags: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    viewCountM: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  };
  const Tool = app.model.define('Tools', attributes);
  return Tool;
};
