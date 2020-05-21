import {AuthorizationHeaderModes} from '../../../../app/authorization/authorization-container/authorization-header/authorization-header.types';
import {AuthorizationActions, AuthorizationActionTypes} from './authorization.actions';


export interface AuthorizationState {
    selectedMode: AuthorizationHeaderModes;
}

export const initialAuthorizationState: AuthorizationState = {
    selectedMode: AuthorizationHeaderModes.Login,
};

export const authorizationReducer = (
    state: AuthorizationState = initialAuthorizationState,
    action: AuthorizationActions): AuthorizationState => {
    switch (action.type) {
        case AuthorizationActionTypes.ChangeMode: {
            return Object.assign({}, state, {selectedMode: action.payload});
        }
        default: {
            return state;
        }
    }
};
