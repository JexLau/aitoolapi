import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.env = 'A';

  // 数据库
  config.sequelize = {
    dialect: 'mysql',
    database: 'samdata_terminal',
    host: '47.74.145.146',
    port: 13306,
    username: 'root',
    password: 'Samdata@#$',
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
    timezone: '+00:00',
    logging: false,
  };

  return config;
};
