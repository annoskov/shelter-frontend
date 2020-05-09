import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '../core/services/route.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  Route.withEntryShell([
    {
      path: 'login',
      component: LoginComponent,
      data: {title: 'Login'}
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule {
}
