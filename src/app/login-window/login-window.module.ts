import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginWindowComponent} from './login-window.component';
import {MaterialModule} from '../shared/material.module';
import {LandingComponent} from './landing/landing.component';
import {LoginWindowRoutingModule} from './login-window-routing.module';
import {AuthorizationModule} from '../authorization/authorization.module';


@NgModule({
    declarations: [LoginWindowComponent, LandingComponent],
    imports: [
        CommonModule,
        MaterialModule,
        LoginWindowRoutingModule,
        AuthorizationModule,
    ]
})
export class LoginWindowModule {
}
