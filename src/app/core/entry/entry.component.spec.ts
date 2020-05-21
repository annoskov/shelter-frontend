import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EntryComponent} from './entry.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('EntryComponent', () => {
    let component: EntryComponent;
    let fixture: ComponentFixture<EntryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EntryComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
});
