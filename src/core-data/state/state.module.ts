import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppEffects} from './effects/app.effects';
import {metaReducers, reducers} from './reducers';
import {environment} from '../../environments/environment';
import {StoreRouterConnectingModule} from '@ngrx/router-store';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot([AppEffects]),
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
            }
        }),
        StoreRouterConnectingModule.forRoot(),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
})
export class StateModule {
}
