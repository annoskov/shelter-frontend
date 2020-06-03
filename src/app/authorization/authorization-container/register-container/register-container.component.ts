import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {IRegisterData} from './register-form/types/register-form.interfaces';
import {AuthorizationHeaderModes} from '../authorization-header/authorization-header.types';
import {select, Store} from '@ngrx/store';
import {AuthorizationState} from '../../../../core-data/state/feature-states/authoriazation/authorization.reducer';
import {
    ChangeModeAction,
    RegisterAction
} from '../../../../core-data/state/feature-states/authoriazation/authorization.actions';
import {Observable} from 'rxjs';
import {RegisterFailureResponse} from '../../../core/authentication/authentication.service';
import {
    selectRegisterErrorState
} from '../../../../core-data/state/feature-states/authoriazation/authorization.selectors';

@Component({
    selector: 'slt-register-container',
    templateUrl: './register-container.component.html',
    styleUrls: ['./register-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterContainerComponent implements OnInit {

    registerError$: Observable<RegisterFailureResponse> = this.store.pipe(select(selectRegisterErrorState));

    constructor(private store: Store<AuthorizationState>) {
    }

    ngOnInit(): void {
    }

    onRegisterEvent(registerData: IRegisterData) {
        this.store.dispatch(new RegisterAction(registerData));
    }

    switchToLoginForm(mode: AuthorizationHeaderModes) {
        this.store.dispatch(new ChangeModeAction(mode));
    }

}
