import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkGroupsComponent } from './link-groups.component';

describe('LinkGroupsComponent', () => {
  let component: LinkGroupsComponent;
  let fixture: ComponentFixture<LinkGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
