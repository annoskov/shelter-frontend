import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginContainerComponent} from './login-container.component';
import {NO_ERRORS_SCHEMA} from '@angular/compiler';
import {ChangeDetectionStrategy, DebugElement} from '@angular/core';
import {AuthenticationService} from '../../../core/authentication/authentication.service';
import {By} from '@angular/platform-browser';
import {ILoginData} from './login-form/types/login-form.interfaces';
import {IRegisterData} from '../register-container/register-form/types/register-form.interfaces';

class AuthenticationServiceMock {
    login(loginData: ILoginData) {
    }

    register(registerData: IRegisterData) {
    }

}

describe('LoginComponent', () => {
    let component: LoginContainerComponent;
    let fixture: ComponentFixture<LoginContainerComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations: [LoginContainerComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    {
                        provide: AuthenticationService,
                        useClass: AuthenticationServiceMock,
                    }
                ]
            })
            .overrideComponent(LoginContainerComponent, {
                set: {changeDetection: ChangeDetectionStrategy.Default},
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginContainerComponent);
        component = fixture.debugElement.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should receive event from child component', () => {
        const childLoginFormComponent: DebugElement = de.query(By.css('app-login-form'));
        spyOn(component, 'onLoginEvent');
        childLoginFormComponent.triggerEventHandler('loginDataEvent', {
            email: '',
            password: '',
            remember: false,
        });
        expect(component.onLoginEvent).toHaveBeenCalled();
    });

    it('should receive correct login data from child component', () => {
        // @ts-ignore
        spyOn(component.authenticationService, 'login').and.callThrough();
        component.onLoginEvent({
            email: '',
            password: '',
            remember: false,
        });
        // @ts-ignore
        expect(component.authenticationService.login).toHaveBeenCalled();
    });

});
