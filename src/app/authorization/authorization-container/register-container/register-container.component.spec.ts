import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterContainerComponent} from './register-container.component';
import {ChangeDetectionStrategy} from '@angular/core';
import {NO_ERRORS_SCHEMA} from '@angular/compiler';
import {AuthenticationService} from '../../../core/authentication/authentication.service';

describe('RegisterContainerComponent', () => {
    let component: RegisterContainerComponent;
    let fixture: ComponentFixture<RegisterContainerComponent>;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations: [RegisterContainerComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    {
                        provide: AuthenticationService,
                        useValue: {
                            login() {},
                            register() {},
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
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
