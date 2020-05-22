import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {LoginFormComponent} from './login-form.component';
import {LoginFormPresenterService} from './login-form-presenter.service';
import {NO_ERRORS_SCHEMA} from '@angular/compiler';
import {ChangeDetectionStrategy, DebugElement} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../../shared/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthorizationHeaderModes} from '../../authorization-header/authorization-header.types';

describe('LoginFormComponent', () => {
    let component: LoginFormComponent;
    let fixture: ComponentFixture<LoginFormComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations: [
                    LoginFormComponent,
                ],
                imports: [
                    ReactiveFormsModule,
                    FormsModule,
                    MaterialModule,
                    BrowserAnimationsModule,
                ],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    LoginFormPresenterService,
                    FormBuilder,
                ]
            })
            .overrideComponent(LoginFormComponent, {
                set: {changeDetection: ChangeDetectionStrategy.Default},
            })
            .compileComponents();
    }));

    beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
        fixture = TestBed.createComponent(LoginFormComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        de = fixture.debugElement;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render correct form control elements', () => {
        const emailControl = de.nativeElement.querySelectorAll('input[formControlName="email"]');
        const passwordControl = de.nativeElement.querySelectorAll('input[formControlName="password"]');
        const rememberControl = de.nativeElement.querySelectorAll('input[formControlName="remember"]');
        expect(emailControl).toBeTruthy();
        expect(passwordControl).toBeTruthy();
        expect(rememberControl).toBeTruthy();
    });

    it('should test form validity', () => {
        const form: FormGroup = component.loginForm;
        expect(form.valid).toBeFalsy();

        form.controls.email.setValue('test@mail.com');
        form.controls.password.setValue('1212121212121');

        expect(form.valid).toBeTruthy();
    });

    it('should test email field validity', () => {
        const form: FormGroup = component.loginForm;
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

    it('should emit login form data', () => {
        spyOn(component.loginDataEvent, 'emit');
        component.loginForm = {} as any;
        component.onLoginFormSubmit();
        expect(component.loginDataEvent.emit).toHaveBeenCalled();
    });

    it('should emit switchToRegisterFormEvent', () => {
        spyOn(component.switchToRegisterFormEvent, 'emit');
        component.switchToRegisterForm();
        expect(component.switchToRegisterFormEvent.emit).toHaveBeenCalledWith(AuthorizationHeaderModes.Register);
    });

});
