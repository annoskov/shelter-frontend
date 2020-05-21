import {Action} from '@ngrx/store';
import {AuthorizationHeaderModes} from '../../../../app/authorization/authorization-container/authorization-header/authorization-header.types';

export enum AuthorizationActionTypes {
    ChangeMode = '[Authorization] changed',
    ModeChanged = '[Authorization] mode changed',
}

export class ChangeMode implements Action {
    readonly type = AuthorizationActionTypes.ChangeMode;

    constructor(public payload: AuthorizationHeaderModes) {
    }
}

export type AuthorizationActions = ChangeMode;
