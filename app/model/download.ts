import { Application } from 'egg';
module.exports = (app: Application) => {
  const DataTypes = app.Sequelize;
  const attributes = {
    Id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      field: 'Id',
    },
    TaskId: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      field: 'TaskId',
    },
    FileName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      field: 'FileName',
    },
    FileExtensionName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      field: 'FileExtensionName',
    },
    FileFullName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      field: 'FileFullName',
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      field: 'Status',
    },
    Range: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      field: 'Range',
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
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
    Progress: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      field: 'Progress',
    },
    TotalSize: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      field: 'TotalSize',
    },
  };
  const options = {
    tableName: 'download',
    comment: '',
    indexes: [],
  };
  const Download = app.model.define('download', attributes, options);
  return Download;
};
