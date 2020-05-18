import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EntryComponent} from './entry.component';
import {MaterialModule} from '../shared/material.module';
import {LandingComponent} from './landing/landing.component';
import {EntryRoutingModule} from './entry-routing.module';
import {AuthorizationModule} from '../authorization/authorization.module';


@NgModule({
    declarations: [EntryComponent, LandingComponent],
    imports: [
        CommonModule,
        MaterialModule,
        EntryRoutingModule,
        AuthorizationModule,
    ]
})
export class EntryModule {
}
