import * as fromAuthorization from '../authorization.reducer';
import {ChangeModeAction} from '../authorization.actions';
import {AuthorizationHeaderModes} from '../../../../../app/authorization/authorization-container/authorization-header/authorization-header.types';

describe('AuthorizationReducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const { initialAuthorizationState } = fromAuthorization;
            const action = {};
            const state = fromAuthorization.authorizationReducer(undefined, action as any);
            expect(state).toBe(initialAuthorizationState);
        });
    });

    describe('changeMode action', () => {
        it('should return state with new mode from action payload', () => {
            const { initialAuthorizationState } = fromAuthorization;
            const seatedMode: AuthorizationHeaderModes = AuthorizationHeaderModes.Login;
            const action = new ChangeModeAction(seatedMode);
            const state = fromAuthorization.authorizationReducer(undefined, action);
            expect(state).toStrictEqual(Object.assign({}, initialAuthorizationState, {selectedMode: seatedMode}));
        });
    });
});
