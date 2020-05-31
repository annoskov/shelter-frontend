import {Action} from '@ngrx/store';
import {AuthorizationHeaderModes} from '../../../../app/authorization/authorization-container/authorization-header/authorization-header.types';
import {ILoginData} from '../../../../app/authorization/authorization-container/login-container/login-form/types/login-form.interfaces';
import {IRegisterData} from '../../../../app/authorization/authorization-container/register-container/register-form/types/register-form.interfaces';
import {LoginFailureResponse, LoginSuccessResponse} from '../../../../app/core/authentication/authentication.service';

export enum AuthorizationActionTypes {
    ChangeMode = '[Authorization] changed',
    ModeChanged = '[Authorization] mode changed',
    Login = '[Authorization] login',
    LoginSuccess = '[Authorization] login success',
    LoginFailure = '[Authorization] login failure',
    Register = '[Authorization] register',
}

export class ChangeModeAction implements Action {
    readonly type = AuthorizationActionTypes.ChangeMode;

    constructor(public payload: AuthorizationHeaderModes) {
    }
}

export class LoginAction implements Action {
    readonly type = AuthorizationActionTypes.Login;

    constructor(public payload: ILoginData) {
    }
}

export class LoginSuccessAction implements Action {
    readonly type = AuthorizationActionTypes.LoginSuccess;

    constructor(public payload: LoginSuccessResponse) {
    }
}

export class LoginFailureAction implements Action {
    readonly type = AuthorizationActionTypes.LoginFailure;

    constructor(public payload: LoginFailureResponse) {
    }
}

export class RegisterAction implements Action {
    readonly type = AuthorizationActionTypes.Register;

    constructor(public payload: IRegisterData) {
    }
}

export type AuthorizationActions =
    ChangeModeAction
    | LoginAction
    | LoginSuccessAction
    | LoginFailureAction
    | RegisterAction;
