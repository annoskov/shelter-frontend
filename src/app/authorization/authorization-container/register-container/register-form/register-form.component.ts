import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {RegisterFormPresenterService} from './register-form-presenter.service';
import {IRegisterData} from './types/register-form.interfaces';
import {AuthorizationHeaderModes} from '../../authorization-header/authorization-header.types';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent implements OnInit {

    @Output() registerDataEvent: EventEmitter<IRegisterData> = new EventEmitter<IRegisterData>();
    @Output() switchToLoginFormEvent: EventEmitter<AuthorizationHeaderModes> = new EventEmitter<AuthorizationHeaderModes>();

    registerForm: FormGroup;

    constructor(private registerFormPresenterService: RegisterFormPresenterService) {
    }

    ngOnInit(): void {
        this.registerForm = this.registerFormPresenterService.getRegisterForm();
    }

    switchToLoginForm() {
        this.switchToLoginFormEvent.emit(AuthorizationHeaderModes.Login);
    }

    onRegisterFormSubmit() {
        this.registerDataEvent.emit(this.registerForm.value);
    }

}
