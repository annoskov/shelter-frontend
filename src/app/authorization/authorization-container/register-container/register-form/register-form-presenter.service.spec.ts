import {TestBed} from '@angular/core/testing';

import {RegisterFormPresenterService} from './register-form-presenter.service';
import {FormBuilder, FormGroup} from '@angular/forms';

describe('RegisterFormPresenterService', () => {
    let service: RegisterFormPresenterService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = new RegisterFormPresenterService(new FormBuilder());
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return form group', () => {
        expect(service.getRegisterForm()).toBeInstanceOf(FormGroup);
    });

    it('should return form group with defined controls', () => {
        expect(service.getRegisterForm().controls).toHaveProperty('firstName');
        expect(service.getRegisterForm().controls).toHaveProperty('lastName');
        expect(service.getRegisterForm().controls).toHaveProperty('email');
        expect(service.getRegisterForm().controls).toHaveProperty('password');
    });

});
