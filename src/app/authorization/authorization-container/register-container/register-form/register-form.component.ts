import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {RegisterFormPresenterService} from './register-form-presenter.service';
import {IRegisterData} from './types/register-form.interfaces';
import {AuthorizationHeaderModes} from '../../authorization-header/authorization-header.types';
import {RegisterFailureResponse} from '../../../../core/authentication/authentication.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'slt-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent implements OnInit {

    @Input() registerError: RegisterFailureResponse;

    @Output() registerFormSubmitEvent: EventEmitter<IRegisterData> = new EventEmitter<IRegisterData>();
    @Output() switchToLoginFormEvent: EventEmitter<AuthorizationHeaderModes> = new EventEmitter<AuthorizationHeaderModes>();

    registerForm: FormGroup;
    invalidFormErrorObject$: Observable<string[]> = this.registerFormPresenterService.invalidFormErrorObject$.asObservable();

    constructor(private registerFormPresenterService: RegisterFormPresenterService) {
    }

    ngOnInit(): void {
        this.registerForm = this.registerFormPresenterService.getRegisterForm();
    }

    switchToLoginForm() {
        this.switchToLoginFormEvent.emit(AuthorizationHeaderModes.Login);
    }

    onRegisterFormSubmit() {
        this.registerFormPresenterService.resetErrorObject();
        if (this.registerForm.valid) {
            this.registerFormSubmitEvent.emit(this.registerForm.value);
        } else {
            this.registerFormPresenterService.validateRegisterForm(this.registerForm);
        }
    }

}
