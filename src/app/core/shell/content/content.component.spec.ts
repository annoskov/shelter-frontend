import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContentComponent} from './content.component';
import {NO_ERRORS_SCHEMA} from '@angular/compiler';

describe('ContentComponent', () => {
    let component: ContentComponent;
    let fixture: ComponentFixture<ContentComponent>;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations: [ContentComponent],
                schemas: [NO_ERRORS_SCHEMA],
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
