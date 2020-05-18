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
import {StoreModule} from '@ngrx/store';
import {EntryModule} from './entry/entry.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        CoreModule,
        SharedModule,
        DashboardModule,
        AuthorizationModule,
        EntryModule,
        AppRoutingModule,
        NoopAnimationsModule,
        StoreModule.forRoot({}, {})
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
