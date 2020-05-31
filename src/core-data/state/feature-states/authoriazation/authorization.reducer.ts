import {AuthorizationHeaderModes} from '../../../../app/authorization/authorization-container/authorization-header/authorization-header.types';
import {AuthorizationActions, AuthorizationActionTypes} from './authorization.actions';
import {LoginFailureResponse, UserData} from '../../../../app/core/authentication/authentication.service';


export interface AuthorizationState {
    selectedMode: AuthorizationHeaderModes;
    isAuthenticated: boolean;
    userData: UserData;
    authenticationError: LoginFailureResponse;
}

export const initialAuthorizationState: AuthorizationState = {
    selectedMode: AuthorizationHeaderModes.Login,
    isAuthenticated: false,
    userData: null,
    authenticationError: null,
};

export const authorizationReducer = (
    state: AuthorizationState = initialAuthorizationState,
    action: AuthorizationActions): AuthorizationState => {
    switch (action.type) {
        case AuthorizationActionTypes.ChangeMode: {
            return {
                ...state,
                selectedMode: action.payload,
            };
        }
        case AuthorizationActionTypes.LoginSuccess: {
            return {
                ...state,
                isAuthenticated: true,
                userData: {
                    accessToken: action.payload.accessToken
                },
                authenticationError: null,
            };
        }
        case AuthorizationActionTypes.LoginFailure: {
            return {
                ...state,
                isAuthenticated: false,
                userData: null,
                authenticationError: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
