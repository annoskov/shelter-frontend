import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthorizationHeaderComponent} from './authorization-header.component';
import {DebugElement, ElementRef} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('AuthorizationHeaderComponent', () => {
    let component: AuthorizationHeaderComponent;
    let fixture: ComponentFixture<AuthorizationHeaderComponent>;
    let debugElement: DebugElement;
    let button: ElementRef;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AuthorizationHeaderComponent]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthorizationHeaderComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        button = debugElement.query(By.css('toggle-mode-btn'));
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('toggleMode', () => {
        it('should emit when the toggle button is clicked', () => {
            spyOn(component.toggleModeEvent, 'emit');
            component.toggleMode();
            expect(component.toggleModeEvent.emit).toHaveBeenCalled();
        });
    });
});
