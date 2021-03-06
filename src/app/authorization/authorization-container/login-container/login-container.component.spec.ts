import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginContainerComponent} from './login-container.component';
import {NO_ERRORS_SCHEMA} from '@angular/compiler';
import {ChangeDetectionStrategy, DebugElement} from '@angular/core';
import {AuthenticationService} from '../../../core/authentication/authentication.service';
import {By} from '@angular/platform-browser';
import {ILoginData} from './login-form/types/login-form.interfaces';
import {IRegisterData} from '../register-container/register-form/types/register-form.interfaces';
import {AuthorizationHeaderModes} from '../authorization-header/authorization-header.types';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {ChangeModeAction} from '../../../../core-data/state/feature-states/authoriazation/authorization.actions';

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
    let store: MockStore;
    const initialState = {
        authorization: {
            selectedMode: AuthorizationHeaderModes.Login
        }
    };

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations: [LoginContainerComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    {
                        provide: AuthenticationService,
                        useClass: AuthenticationServiceMock,
                    },
                    provideMockStore({initialState}),
                ]
            })
            .overrideComponent(LoginContainerComponent, {
                set: {changeDetection: ChangeDetectionStrategy.Default},
            })
            .compileComponents();

        store = TestBed.inject(MockStore);
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
        const childLoginFormComponent: DebugElement = de.query(By.css('slt-login-form'));
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

    it('should dispatch ChangeMode action', () => {
        const expectedAction = new ChangeModeAction(AuthorizationHeaderModes.Register);
        spyOn(store, 'dispatch');
        component.switchToRegisterForm(AuthorizationHeaderModes.Register);
        expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });

});
