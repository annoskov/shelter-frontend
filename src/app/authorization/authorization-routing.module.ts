import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Route} from '../core/services/route.service';
import {RegisterContainerComponent} from './register-container/register-container.component';
import {LoginContainerComponent} from './login-container/login-container.component';
import {LandingComponent} from '../entry/landing/landing.component';

const routes: Routes = [
    Route.withEntryShell([
        {
            path: 'login',
            component: LandingComponent,
            data: {title: 'Shelter - Shelter Register'}
        },
        // {
        //   path: 'register',
        //   component: RegisterContainerComponent,
        //   data: {title: 'Shelter - Shelter Register'}
        // },
        // {
        //   path: 'login',
        //   component: LoginContainerComponent,
        //   data: {title: 'Shelter - Shelter Login'}
        // }
    ])
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthorizationRoutingModule {
}
