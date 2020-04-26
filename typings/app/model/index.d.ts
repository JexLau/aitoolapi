// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBacktest from '../../../app/model/backtest';
import ExportBacktestinfo from '../../../app/model/backtestinfo';
import ExportBacktestresult from '../../../app/model/backtestresult';
import ExportDatadetails from '../../../app/model/datadetails';
import ExportLogs from '../../../app/model/logs';
import ExportStrategy from '../../../app/model/strategy';
import ExportStrategyorder from '../../../app/model/strategyorder';

declare module 'egg' {
  interface IModel {
    Backtest: ReturnType<typeof ExportBacktest>;
    Backtestinfo: ReturnType<typeof ExportBacktestinfo>;
    Backtestresult: ReturnType<typeof ExportBacktestresult>;
    Datadetails: ReturnType<typeof ExportDatadetails>;
    Logs: ReturnType<typeof ExportLogs>;
    Strategy: ReturnType<typeof ExportStrategy>;
    Strategyorder: ReturnType<typeof ExportStrategyorder>;
  }
}
