import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Route} from '../core/services/route.service';
import {LandingComponent} from '../login-window/landing/landing.component';

const routes: Routes = [
    Route.withEntryShell([
        {
            path: 'login',
            component: LandingComponent,
            data: {title: 'Shelter - Shelter Register'}
        },
    ])
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthorizationRoutingModule {
}
