import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterFormComponent} from './register-form.component';
import {RegisterFormPresenterService} from './register-form-presenter.service';
import {NO_ERRORS_SCHEMA} from '@angular/compiler';
import {ChangeDetectionStrategy, DebugElement} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthorizationHeaderModes} from '../../authorization-header/authorization-header.types';

describe('RegisterFormComponent', () => {
    let component: RegisterFormComponent;
    let fixture: ComponentFixture<RegisterFormComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations: [RegisterFormComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    RegisterFormPresenterService,
                    FormBuilder,
                ]
            })
            .overrideComponent(RegisterFormComponent, {
                set: {changeDetection: ChangeDetectionStrategy.Default},
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterFormComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        de = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should render correct form control elements', () => {
        const firstNameControl = de.nativeElement.querySelectorAll('input[formControlName="firstName"]');
        const lastNameControl = de.nativeElement.querySelectorAll('input[formControlName="lastName"]');
        const emailControl = de.nativeElement.querySelectorAll('input[formControlName="email"]');
        const passwordControl = de.nativeElement.querySelectorAll('input[formControlName="password"]');
        expect(firstNameControl).toBeTruthy();
        expect(lastNameControl).toBeTruthy();
        expect(emailControl).toBeTruthy();
        expect(passwordControl).toBeTruthy();
    });

    it('should test form validity', () => {
        const form: FormGroup = component.registerForm;
        expect(form.valid).toBeFalsy();

        form.controls.firstName.setValue('Jack');
        form.controls.lastName.setValue('Pack');
        form.controls.email.setValue('test@mail.com');
        form.controls.password.setValue('1212121212121');

        expect(form.valid).toBeTruthy();
    });

    it('should test email field validity', () => {
        const form: FormGroup = component.registerForm;
        form.controls.firstName.setValue('Jack');
        form.controls.lastName.setValue('Pack');
        form.controls.password.setValue('1212121212121');
        form.controls.email.setValue('te2df32fgfg');
        expect(form.valid).toBeFalsy();
        form.controls.email.setValue('test@mail.com');
        expect(form.valid).toBeTruthy();
    });

    it('password field should use password type attribute', () => {
        const passwordControl = de.nativeElement.querySelector('input[formControlName="password"]');
        expect(passwordControl.type).toEqual('password');
    });

    it('should emit register form data', () => {
        spyOn(component.registerDataEvent, 'emit');
        component.registerForm = {} as any;
        component.onRegisterFormSubmit();
        expect(component.registerDataEvent.emit).toHaveBeenCalled();
    });

    it('should emit switchToRegisterFormEvent', () => {
        spyOn(component.switchToLoginFormEvent, 'emit');
        component.switchToLoginForm();
        expect(component.switchToLoginFormEvent.emit).toHaveBeenCalledWith(AuthorizationHeaderModes.Login);
    });

});
