import { TestBed } from '@angular/core/testing';

import { AuthService } from './teacher-crudauth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
