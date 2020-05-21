import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import {environment} from '../../../environments/environment';

import * as fromAuthorization from '../feature-states/authoriazation/authorization.reducer';

export interface State {
    authorization: fromAuthorization.AuthorizationState;
}

export const reducers: ActionReducerMap<State> = {
    authorization: fromAuthorization.authorizationReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
