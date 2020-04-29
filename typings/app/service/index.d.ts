// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportBacktest from '../../../app/service/backtest';
import ExportBacktestresult from '../../../app/service/backtestresult';
import ExportDatabase from '../../../app/service/database';
import ExportDatadetails from '../../../app/service/datadetails';
import ExportStrategy from '../../../app/service/strategy';

declare module 'egg' {
  interface IService {
    backtest: AutoInstanceType<typeof ExportBacktest>;
    backtestresult: AutoInstanceType<typeof ExportBacktestresult>;
    database: AutoInstanceType<typeof ExportDatabase>;
    datadetails: AutoInstanceType<typeof ExportDatadetails>;
    strategy: AutoInstanceType<typeof ExportStrategy>;
  }
}
