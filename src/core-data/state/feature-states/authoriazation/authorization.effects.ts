import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {AuthorizationActionTypes, LoginAction} from './authorization.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AuthenticationService} from '../../../../app/core/authentication/authentication.service';

@Injectable({
    providedIn: 'root',
})
export class AuthorizationEffects {

    constructor(private actions$: Actions,
                private authenticationService: AuthenticationService) {
    }

    login$: Observable<any> = createEffect(() => this.actions$.pipe(
        ofType<LoginAction>(AuthorizationActionTypes.Login),
        switchMap((action: LoginAction) => this.authenticationService.login(action.payload)
            .pipe(
                map((loginDataResult: any) => ({type: AuthorizationActionTypes.LoginSuccess, payload: loginDataResult})),
                catchError(() => of({type: AuthorizationActionTypes.LoginFailure})),
            )
        ),
    ));

}
