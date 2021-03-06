import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromAuthorization from './authorization.reducer';
import {AuthorizationState} from './authorization.reducer';

export const selectAuthorizationState = createFeatureSelector<fromAuthorization.AuthorizationState>('authorization');

export const selectAuthorizationMode = createSelector(
    selectAuthorizationState,
    (state: AuthorizationState) => state.selectedMode,
);

export const selectAuthenticationErrorState = createSelector(
    selectAuthorizationState,
    (state: AuthorizationState) => state.authenticationError,
);

export const selectRegisterErrorState = createSelector(
    selectAuthorizationState,
    (state: AuthorizationState) => state.registerError,
);
