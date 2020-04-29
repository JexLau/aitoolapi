// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBacktest = require('../../../app/model/backtest');
import ExportBacktestinfo = require('../../../app/model/backtestinfo');
import ExportBacktestresult = require('../../../app/model/backtestresult');
import ExportDatadetails = require('../../../app/model/datadetails');
import ExportDatapacket = require('../../../app/model/datapacket');
import ExportDownload = require('../../../app/model/download');
import ExportLogs = require('../../../app/model/logs');
import ExportPosition = require('../../../app/model/position');
import ExportStrategy = require('../../../app/model/strategy');
import ExportStrategyorder = require('../../../app/model/strategyorder');
import ExportSyncdetails = require('../../../app/model/syncdetails');

declare module 'egg' {
  interface IModel {
    Backtest: ReturnType<typeof ExportBacktest>;
    Backtestinfo: ReturnType<typeof ExportBacktestinfo>;
    Backtestresult: ReturnType<typeof ExportBacktestresult>;
    Datadetails: ReturnType<typeof ExportDatadetails>;
    Datapacket: ReturnType<typeof ExportDatapacket>;
    Download: ReturnType<typeof ExportDownload>;
    Logs: ReturnType<typeof ExportLogs>;
    Position: ReturnType<typeof ExportPosition>;
    Strategy: ReturnType<typeof ExportStrategy>;
    Strategyorder: ReturnType<typeof ExportStrategyorder>;
    Syncdetails: ReturnType<typeof ExportSyncdetails>;
  }
}
