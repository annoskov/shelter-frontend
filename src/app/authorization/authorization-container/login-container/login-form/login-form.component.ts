import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {LoginFormPresenterService} from './login-form-presenter.service';
import {ILoginData} from './types/login-form.interfaces';
import {AuthorizationHeaderModes} from '../../authorization-header/authorization-header.types';
import {LoginFailureResponse} from '../../../../core/authentication/authentication.service';

@Component({
    selector: 'slt-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

    @Input() authenticationError: LoginFailureResponse;

    @Output() loginDataEvent: EventEmitter<ILoginData> = new EventEmitter<ILoginData>();
    @Output() switchToRegisterFormEvent: EventEmitter<AuthorizationHeaderModes> = new EventEmitter<AuthorizationHeaderModes>();

    loginForm: FormGroup;

    constructor(private loginFormPresenterService: LoginFormPresenterService) {
    }

    ngOnInit(): void {
        this.loginForm = this.loginFormPresenterService.getLoginForm();
    }

    switchToRegisterForm() {
        this.switchToRegisterFormEvent.emit(AuthorizationHeaderModes.Register);
    }

    onLoginFormSubmit() {
        this.loginDataEvent.emit(this.loginForm.value);
    }

}
