import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLeftMenuFooterComponent } from './dashboard-left-menu-footer.component';

describe('DashboardLeftMenuFooterComponent', () => {
  let component: DashboardLeftMenuFooterComponent;
  let fixture: ComponentFixture<DashboardLeftMenuFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLeftMenuFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLeftMenuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
