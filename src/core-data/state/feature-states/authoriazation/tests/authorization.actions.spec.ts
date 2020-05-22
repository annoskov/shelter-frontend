import {AuthorizationActionTypes, ChangeMode} from '../authorization.actions';
import {AuthorizationHeaderModes} from '../../../../../app/authorization/authorization-container/authorization-header/authorization-header.types';

describe('ChangeMode Action', () => {
    it('should create an action', () => {
        const action = new ChangeMode(AuthorizationHeaderModes.Login);
        expect(action).toEqual({
            type: AuthorizationActionTypes.ChangeMode,
            payload: AuthorizationHeaderModes.Login,
        });
    });
});
