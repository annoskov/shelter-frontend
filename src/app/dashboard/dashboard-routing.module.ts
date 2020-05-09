import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '../core/services/route.service';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  Route.withShell([
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: {title: 'Dashboard'},
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
