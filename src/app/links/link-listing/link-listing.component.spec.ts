import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkListingComponent } from './link-listing.component';

describe('LinkListingComponent', () => {
  let component: LinkListingComponent;
  let fixture: ComponentFixture<LinkListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
