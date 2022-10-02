import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChronometerComponent } from "./chronometer/chronometer.component";
import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages.routing.module";
import { RouterModule } from "@angular/router";
import { DashboardModule } from "./dashboard/dashboard.module";

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    DashboardModule
  ],
  declarations: [
    PagesComponent
  ],
  providers: []
})
export class PagesModule {}
