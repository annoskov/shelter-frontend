import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemePickerToggleComponent } from './theme-picker-toggle.component';

describe('ThemePickerToggleComponent', () => {
  let component: ThemePickerToggleComponent;
  let fixture: ComponentFixture<ThemePickerToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemePickerToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemePickerToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
