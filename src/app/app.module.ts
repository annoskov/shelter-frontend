import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {AuthorizationModule} from './authorization/authorization.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {EntryModule} from './entry/entry.module';
import {StateModule} from '../core-data/state/state.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        CoreModule,
        StateModule,
        SharedModule,
        DashboardModule,
        AuthorizationModule,
        EntryModule,
        AppRoutingModule,
        NoopAnimationsModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
