import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginWindowComponent} from './login-window.component';
import {NO_ERRORS_SCHEMA} from '@angular/compiler';

describe('EntryComponent', () => {
    let component: LoginWindowComponent;
    let fixture: ComponentFixture<LoginWindowComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginWindowComponent],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginWindowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call OnDestroy lifecycle hook', () => {
        spyOn(component, 'ngOnDestroy');
        component.ngOnDestroy();
        expect(component.ngOnDestroy).toHaveBeenCalled();
    });
});
