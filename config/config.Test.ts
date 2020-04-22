import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.env = 'Test';
  // 数据库
  config.sequelize = {
    dialect: 'mysql',
    database: 'samdata_terminal',
    host: '192.168.134.241',
    port: 3306,
    username: 'bitcoin',
    password: 'bitcoin@#$123',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    define: {
      timestamps: true,
      freezeTableName: true,
      underscored: false,
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt',
    },
    dialectOptions: {
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === 'DATETIME') {
          return field.string();
        }
        return next();
      },
    },
    logging: false,
  };

  return config;
};
