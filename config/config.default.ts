import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

const MySQL_Session = process.env.MySQL_Session;
let MySQLConfig = {
  host: '',
  port: 3306,
  username: '',
  password: '',
};
if (MySQL_Session) {
  const usernameIndex = MySQL_Session.indexOf(':');
  const user = MySQL_Session.substr(0, usernameIndex);
  const other = MySQL_Session.substr(usernameIndex + 1);
  const ipIndex = other.lastIndexOf('@');
  const password = other.substr(0, ipIndex);
  const ip = other.substr(ipIndex + 1);
  const allIp = ip.split(':');
  MySQLConfig = {
    host: allIp[0],
    port: parseInt(allIp[1]),
    username: user,
    password,
  };
}

const PostgreSQL_Session = process.env.PostgreSQL_Session;
let PostgreSQLConfig = {
  host: '',
  port: 5432,
  username: '',
  password: '',
};
if (PostgreSQL_Session) {
  const usernameIndex = PostgreSQL_Session.indexOf(':');
  const username = PostgreSQL_Session.substr(0, usernameIndex);
  const other = PostgreSQL_Session.substr(usernameIndex + 1);
  const ipIndex = other.lastIndexOf('@');
  const password = other.substr(0, ipIndex);
  const ip = other.substr(ipIndex + 1);
  const allIp = ip.split(':');
  PostgreSQLConfig = {
    username,
    password,
    host: allIp[0],
    port: parseInt(allIp[1]),
  };
}

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
        database: 'samdata_test',
        host: MySQLConfig.host || '192.168.134.241',
        port: MySQLConfig.port || 3306,
        username: MySQLConfig.username || 'bitcoin',
        password: MySQLConfig.password || 'bitcoin@#$123',
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
      {
        delegate: 'pgmodel', // load all models to app.pgmodel and ctx.pgmodel
        baseDir: 'pgmodel', // load models from `app/pgmodel/*.js`
        dialect: 'postgres',
        database: 'samdata_data',
        host: PostgreSQLConfig.host || '192.168.135.24',
        port: PostgreSQLConfig.port || 5432,
        username: PostgreSQLConfig.username || 'postgres',
        password: PostgreSQLConfig.password || 'Supwin999@#$',
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
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
