import { DashboardComponent } from "./dashboard/dashboard.component";

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: DashboardComponent, pathMatch: "full" },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy'})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}*/
export const app_routing = RouterModule.forRoot(routes);
