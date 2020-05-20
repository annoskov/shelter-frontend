import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterFormComponent} from './register-form.component';
import {RegisterFormPresenterService} from './register-form-presenter.service';
import {NO_ERRORS_SCHEMA} from '@angular/compiler';
import {ChangeDetectionStrategy} from '@angular/core';

describe('RegisterFormComponent', () => {
    let component: RegisterFormComponent;
    let fixture: ComponentFixture<RegisterFormComponent>;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations: [RegisterFormComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    {
                        provide: RegisterFormPresenterService,
                        useValue: {
                            getRegisterForm() {
                            }
                        }
                    }
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
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit login form data', () => {
        spyOn(component.registerDataEvent, 'emit');
        component.registerForm = {} as any;
        component.onRegisterFormSubmit();
        expect(component.registerDataEvent.emit).toHaveBeenCalled();
    });

});
