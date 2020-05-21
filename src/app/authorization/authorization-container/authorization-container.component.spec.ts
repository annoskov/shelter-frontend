import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthorizationContainerComponent} from './authorization-container.component';
import {NO_ERRORS_SCHEMA} from '@angular/compiler';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {AuthorizationHeaderModes} from './authorization-header/authorization-header.types';
import {TestScheduler} from 'rxjs/testing';

describe('AuthorizationContainerComponent', () => {
    let component: AuthorizationContainerComponent;
    let fixture: ComponentFixture<AuthorizationContainerComponent>;
    let de: DebugElement;
    let scheduler: TestScheduler;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AuthorizationContainerComponent],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthorizationContainerComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
    });

    beforeEach(() => {
        scheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('authorization header should call toggle method', () => {
        const authorizationHeaderComponent: DebugElement = de.query(By.css('app-authorization-header'));
        spyOn(component, 'toggleMode');
        authorizationHeaderComponent.triggerEventHandler('toggleModeEvent', null);
        expect(component.toggleMode).toHaveBeenCalled();
    });

    it('should toggle authorization header mode', () => {
        const marble = '(a)';
        const mode$ = component.mode$;
        scheduler.run(({expectObservable}) => {
            const initialExpectedMode = {a: AuthorizationHeaderModes.Login};
            expectObservable(mode$).toBe(marble, initialExpectedMode);
        });
        component.toggleMode();
        scheduler.run(({expectObservable}) => {
            const newExpectedMode = {a: AuthorizationHeaderModes.Register};
            expectObservable(mode$).toBe(marble, newExpectedMode);
        });
    });
});
