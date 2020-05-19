import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterContainerComponent } from './register-container.component';
import {ChangeDetectionStrategy} from '@angular/core';

describe('RegisterContainerComponent', () => {
  let component: RegisterContainerComponent;
  let fixture: ComponentFixture<RegisterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [RegisterContainerComponent]})
        .overrideComponent(RegisterContainerComponent, {
          set: {changeDetection: ChangeDetectionStrategy.Default},
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
