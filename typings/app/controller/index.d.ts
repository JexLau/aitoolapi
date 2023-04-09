// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportC1 from '../../../app/controller/c1';
import ExportC2 from '../../../app/controller/c2';
import ExportTools from '../../../app/controller/tools';

declare module 'egg' {
  interface IController {
    c1: ExportC1;
    c2: ExportC2;
    tools: ExportTools;
  }
}
