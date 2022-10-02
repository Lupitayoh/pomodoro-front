import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {
        path: 'home',
        component: DashboardComponent,
      },
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ],
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
