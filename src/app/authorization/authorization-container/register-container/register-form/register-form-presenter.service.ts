import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReplaySubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RegisterFormPresenterService {

    invalidFormErrorObject$: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

    private registerFormModel = {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.required],
    };

    constructor(private fb: FormBuilder) {
    }

    getRegisterForm() {
        return this.fb.group(this.registerFormModel, {updateOn: 'submit'});
    }

    validateRegisterForm(form: FormGroup) {
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
