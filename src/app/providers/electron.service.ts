import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import * as electron from 'electron';
import * as childProcess from 'child_process';

@Injectable()
export class ElectronService {
  electron?: typeof electron;
  ipcRenderer?: typeof electron.ipcRenderer;
  childProcess?: typeof childProcess;

  constructor() {
    // Conditional imports
    if( this.isElectron() ) {
      this.electron = window.require( 'electron' );
      this.ipcRenderer = this.electron.ipcRenderer;
      this.childProcess = window.require( 'child_process' );
    }
  }

  isElectron = () => {
    return window && window.process && window.process.type;
  }

}
