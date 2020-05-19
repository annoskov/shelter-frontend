import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginFormComponent} from './login-form.component';
import {MaterialModule} from '../../../../shared/material.module';
import {RegisterContainerComponent} from '../../register-container/register-container.component';
import {ChangeDetectionStrategy} from '@angular/core';
import {MockComponent} from '../../../../../tests/jest-global-mocks';

describe('LoginFormComponent', () => {
    let component: LoginFormComponent;
    let fixture: ComponentFixture<LoginFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MaterialModule],
            declarations: [
                LoginFormComponent,
                MockComponent('mat-form-field'),
                MockComponent('mat-label'),
            ]
        })
            .overrideComponent(RegisterContainerComponent, {
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
});
