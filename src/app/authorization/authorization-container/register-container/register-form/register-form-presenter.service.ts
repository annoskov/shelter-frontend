import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class RegisterFormPresenterService {

    private registerFormModel = {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.required],
    };

    constructor(private fb: FormBuilder) {
    }

    getRegisterForm() {
        return this.fb.group(this.registerFormModel);
    }
}
