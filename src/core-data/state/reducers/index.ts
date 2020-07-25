import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import {environment} from '../../../environments/environment';

import * as fromAuthorization from '../feature-states/authoriazation/authorization.reducer';
import * as fromUI from '../feature-states/ui/ui.reducer';

export interface State {
    authorization: fromAuthorization.AuthorizationState;
    ui: fromUI.UIState;
}

export const reducers: ActionReducerMap<State> = {
    authorization: fromAuthorization.authorizationReducer,
    ui: fromUI.uiReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
