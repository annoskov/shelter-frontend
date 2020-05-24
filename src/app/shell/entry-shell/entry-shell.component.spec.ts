import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EntryShellComponent} from './entry-shell.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('EntryComponent', () => {
    let component: EntryShellComponent;
    let fixture: ComponentFixture<EntryShellComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EntryShellComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EntryShellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
