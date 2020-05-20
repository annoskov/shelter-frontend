import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterContainerComponent} from './register-container.component';
import {ChangeDetectionStrategy, DebugElement} from '@angular/core';
import {NO_ERRORS_SCHEMA} from '@angular/compiler';
import {AuthenticationService} from '../../../core/authentication/authentication.service';
import {By} from '@angular/platform-browser';

describe('RegisterContainerComponent', () => {
    let component: RegisterContainerComponent;
    let fixture: ComponentFixture<RegisterContainerComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations: [RegisterContainerComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    {
                        provide: AuthenticationService,
                        useValue: {
                            login() {
                            },
                            register() {
                            },
                        }
                    }
                ]
            })
            .overrideComponent(RegisterContainerComponent, {
                set: {changeDetection: ChangeDetectionStrategy.Default},
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterContainerComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should receive event from child component', () => {
        const childRegisterFormComponent: DebugElement = de.query(By.css('app-register-form'));
        spyOn(component, 'onRegisterEvent');
        childRegisterFormComponent.triggerEventHandler('registerDataEvent', {
            firstName: '',
            lastName: '',
            emil: '',
            password: '',
        });
        expect(component.onRegisterEvent).toHaveBeenCalled();
    });

    it('should receive correct register data from child component', () => {
        // @ts-ignore
        spyOn(component.authenticationService, 'register').and.callThrough();
        component.onRegisterEvent({
            firstName: '',
            lastName: '',
            emil: '',
            password: '',
        });
        // @ts-ignore
        expect(component.authenticationService.register).toHaveBeenCalled();
    });

});
