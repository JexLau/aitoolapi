// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBacktest from '../../../app/controller/backtest';
import ExportBacktestresult from '../../../app/controller/backtestresult';
import ExportStrategy from '../../../app/controller/strategy';

declare module 'egg' {
  interface IController {
    backtest: ExportBacktest;
    backtestresult: ExportBacktestresult;
    strategy: ExportStrategy;
  }
}
