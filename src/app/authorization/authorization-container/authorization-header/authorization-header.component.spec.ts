import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationHeaderComponent } from './authorization-header.component';

describe('AuthorizationHeaderComponent', () => {
  let component: AuthorizationHeaderComponent;
  let fixture: ComponentFixture<AuthorizationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
