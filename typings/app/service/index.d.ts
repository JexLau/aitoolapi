// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportC1 from '../../../app/service/c1';
import ExportC2 from '../../../app/service/c2';
import ExportTool from '../../../app/service/tool';

declare module 'egg' {
  interface IService {
    c1: AutoInstanceType<typeof ExportC1>;
    c2: AutoInstanceType<typeof ExportC2>;
    tool: AutoInstanceType<typeof ExportTool>;
  }
}
