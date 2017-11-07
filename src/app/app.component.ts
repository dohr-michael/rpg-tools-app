import { Component, ViewChild } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { MatSidenav } from '@angular/material';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {
  @ViewChild( 'side' )
  private side: MatSidenav;

  constructor( public electronService: ElectronService ) {

    if( electronService.isElectron() ) {
      console.log( 'Mode electron' );
      // Check if electron is correctly injected (see externals in webpack.config.js)
      console.log( 'c', electronService.ipcRenderer );
      // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
      console.log( 'c', electronService.childProcess );
    } else {
      console.log( 'Mode web' );
    }
  }

  toggleMenu = () => {
    if( this.side.opened ) {
      this.side.close();
    } else {
      this.side.open();
    }
  }

}
