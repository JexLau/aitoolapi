import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';


export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

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
    datasources: [
      {
        delegate: 'model', // load all models to app.model and ctx.model
        baseDir: 'model', // load models from `app/model/*.js`
        dialect: 'mysql',
        // database: 'samdata_terminal',
        database: 'aitools',
        host: '1.116.241.42',
        port: 3306,
        username: 'root',
        password: 'root',
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
        define: {
          timestamps: false,
          freezeTableName: true,
          underscored: false,
        },
        timezone: '+00:00',
        logging: false,
      },
    ],
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  return {
    ...config,
    ...bizConfig,
  };
};
