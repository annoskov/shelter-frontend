import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContentContainerComponent} from './content-container.component';
import {NO_ERRORS_SCHEMA} from '@angular/compiler';

describe('ContentComponent', () => {
    let component: ContentContainerComponent;
    let fixture: ComponentFixture<ContentContainerComponent>;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations: [ContentContainerComponent],
                schemas: [NO_ERRORS_SCHEMA],
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContentContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
