import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { declarations } from './components';
import { providers } from './providers';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

@NgModule( {
  declarations: [
    AppComponent,
    ...declarations,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ...providers
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {}
