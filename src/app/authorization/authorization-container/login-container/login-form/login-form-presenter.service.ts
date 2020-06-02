import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReplaySubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginFormPresenterService {

    invalidFormErrorObject$: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

    private loginFormModel = {
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.required],
        remember: [false],
    };

    constructor(private fb: FormBuilder) {
    }

    getLoginForm() {
        return this.fb.group(this.loginFormModel, {updateOn: 'submit'});
    }

    validateLoginForm(form: FormGroup) {
        const errorArr: string[] = [];
        Object.keys(form.controls).forEach((controlName: string) => {
            if (form.controls[controlName].invalid && form.controls[controlName].touched) {
                errorArr.push(`Invalid ${controlName}`);
            }
        });
        this.invalidFormErrorObject$.next(errorArr);
    }

    resetErrorObject() {
        this.invalidFormErrorObject$.next(null);
    }

}
