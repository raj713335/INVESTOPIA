import { TestBed } from '@angular/core/testing';

import { RegisterDoneService } from './register-done.service';

describe('RegisterDoneService', () => {
  let service: RegisterDoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterDoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
