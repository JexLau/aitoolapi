// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCategary1 from '../../../app/model/categary1';
import ExportCategary2 from '../../../app/model/categary2';
import ExportTools from '../../../app/model/tools';

declare module 'egg' {
  interface IModel {
    Categary1: ReturnType<typeof ExportCategary1>;
    Categary2: ReturnType<typeof ExportCategary2>;
    Tools: ReturnType<typeof ExportTools>;
  }
}
