import { TestBed } from '@angular/core/testing';

import { ArtscrudService } from './artscrud.service';

describe('ArtscrudService', () => {
  let service: ArtscrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtscrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
