import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '../core/services/route.service';
import {RegisterContainerComponent} from "./register-container/register-container.component";

const routes: Routes = [
  Route.withEntryShell([
    {
      path: 'register',
      component: RegisterContainerComponent,
      data: {title: 'Shelter - Shelter Register'}
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule {
}
