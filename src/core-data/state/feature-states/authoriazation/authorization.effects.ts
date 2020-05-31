import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {AuthorizationActionTypes, LoginAction, LoginFailureAction, LoginSuccessAction} from './authorization.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {
    AuthenticationService,
    LoginFailureResponse,
    LoginSuccessResponse
} from '../../../../app/core/authentication/authentication.service';
import {Utils} from '../../../../app/shared/utils';

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
                catchError((loginFailureResponse: LoginFailureResponse) => of(new LoginFailureAction(loginFailureResponse))),
            )
        ),
    ));

    loginSuccess$: Observable<LoginSuccessAction> = createEffect(() => this.actions$.pipe(
        ofType<LoginSuccessAction>(AuthorizationActionTypes.LoginSuccess),
        tap((loginSuccessAction: LoginSuccessAction) => {
            const storage: Storage = Utils.getStorage();
            storage.setItem('access_token', loginSuccessAction.payload.accessToken);
        })
    ), { dispatch: false });

    loginFailure$: Observable<LoginFailureAction> = createEffect(() => this.actions$.pipe(
        ofType<LoginFailureAction>(AuthorizationActionTypes.LoginFailure),
    ), { dispatch: false });

}
