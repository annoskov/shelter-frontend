import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRightMenuComponent } from './dashboard-right-menu.component';

describe('DashboardRightMenuComponent', () => {
  let component: DashboardRightMenuComponent;
  let fixture: ComponentFixture<DashboardRightMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRightMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
