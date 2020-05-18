import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorizationRoutingModule} from './authorization-routing.module';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthorizationContainerComponent} from './authorization-container/authorization-container.component';
import {AuthorizationHeaderComponent} from './authorization-container/authorization-header/authorization-header.component';
import {LoginContainerComponent} from './authorization-container/login-container/login-container.component';
import {RegisterContainerComponent} from './authorization-container/register-container/register-container.component';
import {MaterialModule} from '../shared/material.module';
import {LoginFormComponent} from './authorization-container/login-container/login-form/login-form.component';
import {RegisterFormComponent} from './authorization-container/register-container/register-form/register-form.component';

@NgModule({
    declarations: [
        LoginContainerComponent,
        RegisterContainerComponent,
        AuthorizationContainerComponent,
        AuthorizationHeaderComponent,
        AuthorizationHeaderComponent,
        LoginFormComponent,
        RegisterFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CoreModule,
        SharedModule,
        AuthorizationRoutingModule,
        MaterialModule,
    ],
    exports: [AuthorizationContainerComponent],
})
export class AuthorizationModule {
}
