import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {LoginFormPresenterService} from './login-form-presenter.service';
import {ILoginData} from './types/login-form.interfaces';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

    @Output() loginDataEvent: EventEmitter<ILoginData> = new EventEmitter<ILoginData>();

    loginForm: FormGroup;

    constructor(private loginFormPresenterService: LoginFormPresenterService) {
    }

    ngOnInit(): void {
        this.loginForm = this.loginFormPresenterService.getLoginForm();
    }

    onLoginFormSubmit() {
        this.loginDataEvent.emit(this.loginForm.value);
    }

}
