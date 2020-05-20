import {TestBed} from '@angular/core/testing';

import {LoginFormPresenterService} from './login-form-presenter.service';
import {FormBuilder, FormGroup} from '@angular/forms';

describe('LoginFormPresenterService', () => {
    let service: LoginFormPresenterService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = new LoginFormPresenterService(new FormBuilder());
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return form group', () => {
        expect(service.getLoginForm()).toBeInstanceOf(FormGroup);
    });

    it('should return form group with defined controls', () => {
        expect(service.getLoginForm().controls).toHaveProperty('email');
        expect(service.getLoginForm().controls).toHaveProperty('password');
        expect(service.getLoginForm().controls).toHaveProperty('remember');
    });

});
