// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBacktest from '../../../app/model/backtest';
import ExportBacktestinfo from '../../../app/model/backtestinfo';
import ExportBacktestresult from '../../../app/model/backtestresult';
import ExportDatadetails from '../../../app/model/datadetails';
import ExportDatapacket from '../../../app/model/datapacket';
import ExportDownload from '../../../app/model/download';
import ExportLogs from '../../../app/model/logs';
import ExportPosition from '../../../app/model/position';
import ExportStrategy from '../../../app/model/strategy';
import ExportStrategyorder from '../../../app/model/strategyorder';
import ExportSyncdetails from '../../../app/model/syncdetails';

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
