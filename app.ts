import { Application, IBoot } from 'egg';

export default class FooBoot implements IBoot {
  private readonly app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  configWillLoad() {
    try {
      console.log('env:', this.app.config.env);
      // const MysqlConfig = process.env.MySQL_Session;
      // if (MysqlConfig) {
      //   // const nameNum = MysqlConfig.indexOf(':');
      //   // const user = MysqlConfig.substr(0, nameNum);
      //   // const other = MysqlConfig.substr(nameNum + 1);
      //   // const ipNum = other.lastIndexOf('@');
      //   // const password = other.substr(0, ipNum);
      //   // const ip = other.substr(ipNum + 1);
      //   // const allIp = ip.split(':');
      //   // console.log('sequelize config change:', MysqlConfig, user, password, allIp[0], allIp[1]);
      //   // this.app.config.sequelize.host = allIp[0];
      //   // this.app.config.sequelize.port = allIp[1];
      //   // this.app.config.sequelize.username = user;
      //   // this.app.config.sequelize.password = password;
      // }
    } catch (err) {
      console.log('app err', err);
    }
    // console.log('********************sequelize config end:********************', this.app.config.sequelize);
  }

  configDidLoad() {
    // Config, plugin files have loaded.
  }

  async didLoad() {
    // All files have loaded, start plugin here.
  }

  async willReady() {
    // All plugins have started, can do some thing before app ready.
  }

  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
  }

  async serverDidReady() {
    // Server is listening.
  }

  async beforeClose() {
    // Do some thing before app close.
  }
}
