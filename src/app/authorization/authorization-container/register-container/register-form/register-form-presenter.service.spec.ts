import { TestBed } from '@angular/core/testing';

import { RegisterFormPresenterService } from './register-form-presenter.service';

describe('RegisterFormPresenterService', () => {
  let service: RegisterFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
