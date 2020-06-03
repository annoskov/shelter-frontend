import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {
    AuthorizationActionTypes,
    ChangeModeAction,
    LoginAction,
    LoginFailureAction,
    LoginSuccessAction,
    RegisterAction,
    RegisterFailureAction,
    RegisterSuccessAction
} from './authorization.actions';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {
    AuthenticationService,
    LoginSuccessResponse,
    RegisterSuccessResponse
} from '../../../../app/core/authentication/authentication.service';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthorizationHeaderModes} from '../../../../app/authorization/authorization-container/authorization-header/authorization-header.types';
import {ILoginData} from '../../../../app/authorization/authorization-container/login-container/login-form/types/login-form.interfaces';

@Injectable({
    providedIn: 'root',
})
export class AuthorizationEffects {

    constructor(private actions$: Actions,
                private authenticationService: AuthenticationService) {
    }

    login$: Observable<LoginSuccessAction | LoginFailureAction> = createEffect(() => this.actions$.pipe(
        ofType<LoginAction>(AuthorizationActionTypes.Login),
        switchMap((action: LoginAction) => this.authenticationService.login(action.payload)
            .pipe(
                map((loginDataResult: LoginSuccessResponse) => new LoginSuccessAction(loginDataResult)),
                catchError((httpError: HttpErrorResponse) => of(new LoginFailureAction({
                    errorObject: httpError,
                    errorMessage: httpError.error.errorMessage,
                    statusCode: httpError.error.statusCode,
                }))),
            )
        ),
    ));

    loginSuccess$: Observable<LoginSuccessAction> = createEffect(() => this.actions$.pipe(
        ofType<LoginSuccessAction>(AuthorizationActionTypes.LoginSuccess),
        tap(this.authenticationService.saveTokenToStorage),
        tap(() => this.authenticationService.navigateToDashboard()),
    ), {dispatch: false});

    loginFailure$: Observable<LoginFailureAction> = createEffect(() => this.actions$.pipe(
        ofType<LoginFailureAction>(AuthorizationActionTypes.LoginFailure),
    ), {dispatch: false});

    register$: Observable<RegisterSuccessAction | RegisterFailureAction> = createEffect(() => this.actions$.pipe(
        ofType<RegisterAction>(AuthorizationActionTypes.Register),
        switchMap((action: RegisterAction) => this.authenticationService.register(action.payload)
            .pipe(
                map((registerDataResult: RegisterSuccessResponse) => new RegisterSuccessAction(registerDataResult)),
                catchError((httpError: HttpErrorResponse) => of(new RegisterFailureAction({
                    errorObject: httpError,
                    errorMessage: httpError.error.errorMessage,
                    statusCode: httpError.error.statusCode,
                })))
            ))
    ));

    registerSuccess$: Observable<ChangeModeAction> = createEffect(() => this.actions$.pipe(
        ofType<RegisterSuccessAction>(AuthorizationActionTypes.RegisterSuccess),
        // TODO Waiting for backend
        // mergeMap((registerResponse: RegisterSuccessResponse) => {
        //    return new LoginAction()
        // })
        map(() => new ChangeModeAction(AuthorizationHeaderModes.Login)),
    ));

    registerFailure$: Observable<RegisterFailureAction> = createEffect(() => this.actions$.pipe(
        ofType<RegisterFailureAction>(AuthorizationActionTypes.RegisterFailure),
    ), {dispatch: false});

}
