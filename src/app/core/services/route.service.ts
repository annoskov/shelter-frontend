import { Route as ngRoute, Routes } from '@angular/router';
import { ShellComponent } from '../shell/shell.component';
import { EntryComponent } from '../entry/entry.component';
import { AuthenticationGuard } from '../authentication/authentication.guard';

export class Route {

  static withShell(routes: Routes): ngRoute {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true }
    };
  }

  static withEntryShell(routes: Routes): ngRoute {
    return {
        path: '',
        component: EntryComponent,
        children: routes,
        data: { reuse: false }
    };
  }

}
