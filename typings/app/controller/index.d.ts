// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBacktest from '../../../app/controller/backtest';
import ExportBacktestresult from '../../../app/controller/backtestresult';
import ExportDatabase from '../../../app/controller/database';
import ExportDatadetails from '../../../app/controller/datadetails';
import ExportStrategy from '../../../app/controller/strategy';

declare module 'egg' {
  interface IController {
    backtest: ExportBacktest;
    backtestresult: ExportBacktestresult;
    database: ExportDatabase;
    datadetails: ExportDatadetails;
    strategy: ExportStrategy;
  }
}
