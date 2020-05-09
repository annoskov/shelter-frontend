import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '../core/services/route.service';
import { LinksComponent } from './links.component';

const routes: Routes = [
  Route.withShell([
    {
      path: 'links',
      component: LinksComponent,
      data: {title: 'Links'},
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinksRoutingModule { }
