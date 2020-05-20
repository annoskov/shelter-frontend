import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginFormComponent} from './login-form.component';
import {LoginFormPresenterService} from './login-form-presenter.service';
import {NO_ERRORS_SCHEMA} from '@angular/compiler';
import {ChangeDetectionStrategy} from '@angular/core';

describe('LoginFormComponent', () => {
    let component: LoginFormComponent;
    let fixture: ComponentFixture<LoginFormComponent>;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations: [
                    LoginFormComponent,
                ],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    {
                        provide: LoginFormPresenterService, useValue: {
                            getLoginForm() {
                            }
                        }
                    },
                ]
            })
            .overrideComponent(LoginFormComponent, {
                set: {changeDetection: ChangeDetectionStrategy.Default},
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit login form data', () => {
        spyOn(component.loginDataEvent, 'emit');
        component.loginForm = {} as any;
        component.onLoginFormSubmit();
        expect(component.loginDataEvent.emit).toHaveBeenCalled();
    });

});
