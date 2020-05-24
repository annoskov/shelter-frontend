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
import {LoginWindowModule} from './login-window/login-window.module';
import {StateModule} from '../core-data/state/state.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        CoreModule,
        StateModule,
        SharedModule,
        DashboardModule,
        AuthorizationModule,
        LoginWindowModule,
        NoopAnimationsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
