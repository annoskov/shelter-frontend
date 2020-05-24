import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Route} from '../core/services/route.service';
import {LoginWindowComponent} from './login-window.component';

const routes: Routes = [
    Route.withEntryShell([
        {
            path: 'entry',
            component: LoginWindowComponent,
            data: {title: 'Shelter'}
        },
    ])
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginWindowRoutingModule {
}
