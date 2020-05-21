import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EntryComponent} from './entry.component';
import {NO_ERRORS_SCHEMA} from '@angular/compiler';

describe('EntryComponent', () => {
    let component: EntryComponent;
    let fixture: ComponentFixture<EntryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EntryComponent],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EntryComponent);
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
