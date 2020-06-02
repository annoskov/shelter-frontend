import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {AuthorizationActionTypes, LoginAction, LoginFailureAction, LoginSuccessAction} from './authorization.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {
    AuthenticationService,
    LoginSuccessResponse
} from '../../../../app/core/authentication/authentication.service';
import {HttpErrorResponse} from '@angular/common/http';

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

}
