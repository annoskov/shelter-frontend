import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginContainerComponent} from './login-container/login-container.component';
import {AuthorizationRoutingModule} from './authorization-routing.module';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterContainerComponent} from './register-container/register-container.component';

@NgModule({
    declarations: [LoginContainerComponent, RegisterContainerComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CoreModule,
        SharedModule,
        AuthorizationRoutingModule,
    ]
})
export class AuthorizationModule {
}
