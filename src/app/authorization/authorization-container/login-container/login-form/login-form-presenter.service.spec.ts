import { TestBed } from '@angular/core/testing';

import { LoginFormPresenterService } from './login-form-presenter.service';

describe('LoginFormPresenterService', () => {
  let service: LoginFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
