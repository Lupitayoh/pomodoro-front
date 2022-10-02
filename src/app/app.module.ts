import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChronometerComponent } from './chronometer/chronometer.component';

import { app_routing } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';


//import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ChronometerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,
    app_routing
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
