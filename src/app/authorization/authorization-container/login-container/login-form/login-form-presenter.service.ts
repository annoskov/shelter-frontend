import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class LoginFormPresenterService {

    private loginFormModel = {
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.required],
        remember: [false],
    };

    constructor(private fb: FormBuilder) {
    }

    getLoginForm() {
        return this.fb.group(this.loginFormModel);
    }
}
