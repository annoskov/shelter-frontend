import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthorizationContainerComponent} from './authorization-container.component';
import {NO_ERRORS_SCHEMA} from '@angular/compiler';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {AuthorizationHeaderModes} from './authorization-header/authorization-header.types';
import {TestScheduler} from 'rxjs/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {select} from '@ngrx/store';
import {selectAuthorizationMode} from '../../../core-data/state/feature-states/authoriazation/authorization.selectors';
import {ChangeModeAction} from '../../../core-data/state/feature-states/authoriazation/authorization.actions';

describe('AuthorizationContainerComponent', () => {
    let component: AuthorizationContainerComponent;
    let fixture: ComponentFixture<AuthorizationContainerComponent>;
    let de: DebugElement;
    let scheduler: TestScheduler;
    const initialState = {
        authorization: {
            selectedMode: AuthorizationHeaderModes.Login
        }
    };
    let store: MockStore;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations: [AuthorizationContainerComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    provideMockStore({initialState}),
                ]
            })
            .compileComponents();

        store = TestBed.inject(MockStore);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthorizationContainerComponent);
        de = fixture.debugElement;
        component = fixture.componentInstance;
        component.mode$ = store.pipe(select(selectAuthorizationMode));
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

    it('authorization header should call "changeMode" method', () => {
        const authorizationHeaderComponent: DebugElement = de.query(By.css('slt-authorization-header'));
        spyOn(component, 'changeMode');
        authorizationHeaderComponent.triggerEventHandler('toggleModeEvent', null);
        expect(component.changeMode).toHaveBeenCalled();
    });

    it('should dispatch ChangeMode action', () => {
        const expectedAction = new ChangeModeAction(AuthorizationHeaderModes.Login);
        spyOn(store, 'dispatch');
        component.changeMode(AuthorizationHeaderModes.Register);
        expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });

});
