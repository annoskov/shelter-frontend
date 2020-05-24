import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRightMenuFooterComponent } from './dashboard-right-menu-footer.component';

describe('DashboardRightMenuFooterComponent', () => {
  let component: DashboardRightMenuFooterComponent;
  let fixture: ComponentFixture<DashboardRightMenuFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRightMenuFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRightMenuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
