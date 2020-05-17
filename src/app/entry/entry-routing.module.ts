import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '../core/services/route.service';
import {EntryComponent} from "./entry.component";

const routes: Routes = [
  Route.withEntryShell([
    {
      path: 'entry',
      component: EntryComponent,
      data: {title: 'Shelter'}
    },
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryRoutingModule {
}
