import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ILoginData} from './login-form/types/login-form.interfaces';
import {Store} from '@ngrx/store';
import {AuthorizationState} from '../../../../core-data/state/feature-states/authoriazation/authorization.reducer';
import {ChangeModeAction, LoginAction} from '../../../../core-data/state/feature-states/authoriazation/authorization.actions';
import {AuthorizationHeaderModes} from '../authorization-header/authorization-header.types';

@Component({
    selector: 'slt-login-container',
    templateUrl: './login-container.component.html',
    styleUrls: ['./login-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent implements OnInit {

    constructor(private store: Store<AuthorizationState>) {
    }

    ngOnInit() {
    }

    onLoginEvent(loginData: ILoginData) {
        this.store.dispatch(new LoginAction(loginData));
    }

    switchToRegisterForm(mode: AuthorizationHeaderModes) {
        this.store.dispatch(new ChangeModeAction(mode));
    }

}
