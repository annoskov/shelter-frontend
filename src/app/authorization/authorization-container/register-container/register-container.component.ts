import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {AuthenticationService} from '../../../core/authentication/authentication.service';
import {IRegisterData} from './register-form/types/register-form.interfaces';
import {AuthorizationHeaderModes} from '../authorization-header/authorization-header.types';
import {Store} from '@ngrx/store';
import {AuthorizationState} from '../../../../core-data/state/feature-states/authoriazation/authorization.reducer';
import {ChangeModeAction} from '../../../../core-data/state/feature-states/authoriazation/authorization.actions';

@Component({
    selector: 'slt-register-container',
    templateUrl: './register-container.component.html',
    styleUrls: ['./register-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterContainerComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService,
                private store: Store<AuthorizationState>) {
    }

    ngOnInit(): void {
    }

    onRegisterEvent(registerData: IRegisterData) {
        this.authenticationService.register(registerData);
    }

    switchToLoginForm(mode: AuthorizationHeaderModes) {
        this.store.dispatch(new ChangeModeAction(mode));
    }

}
