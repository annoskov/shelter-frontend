import { TestBed } from '@angular/core/testing';

import { SidenavStateService } from './sidenav-state.service';
import {ElementScrollPercentageService} from '../../../services/element-scroll-percentage.service';
import {NgZone} from '@angular/core';

describe('SidenavStateService', () => {
  let service: SidenavStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new SidenavStateService(
        new NgZone({}),
        new ElementScrollPercentageService(),
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
