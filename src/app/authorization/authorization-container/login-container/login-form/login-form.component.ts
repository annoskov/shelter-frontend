import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {LoginFormPresenterService} from './login-form-presenter.service';
import {ILoginData} from './types/login-form.interfaces';
import {AuthorizationHeaderModes} from '../../authorization-header/authorization-header.types';
import {LoginFailureResponse} from '../../../../core/authentication/authentication.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'slt-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

    @Input() authenticationError: LoginFailureResponse;

    @Output() loginFormSubmitEvent: EventEmitter<ILoginData> = new EventEmitter<ILoginData>();
    @Output() switchToRegisterFormEvent: EventEmitter<AuthorizationHeaderModes> = new EventEmitter<AuthorizationHeaderModes>();

    loginForm: FormGroup;
    invalidFormErrorObject$: Observable<string[]> = this.loginFormPresenterService.invalidFormErrorObject$.asObservable();

    constructor(private loginFormPresenterService: LoginFormPresenterService) {
    }

    ngOnInit(): void {
        this.loginForm = this.loginFormPresenterService.getLoginForm();
    }

    switchToRegisterForm() {
        this.switchToRegisterFormEvent.emit(AuthorizationHeaderModes.Register);
    }

    onLoginFormSubmit() {
        this.loginFormPresenterService.resetErrorObject();
        if (this.loginForm.valid) {
            this.loginFormSubmitEvent.emit(this.loginForm.value);
        } else {
            this.loginFormPresenterService.validateLoginForm(this.loginForm);
        }
    }

}
