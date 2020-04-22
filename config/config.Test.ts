import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.env = 'Test';

  config.keys = appInfo.name + '_1587439273340_8817';

  config.middleware = [];

  config.cluster = {
    listen: {
      path: '',
      port: 7012,
      hostname: '0.0.0.0',
    },
  };

  // 开启跨域
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

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
