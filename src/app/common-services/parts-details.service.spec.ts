import { TestBed } from '@angular/core/testing';

import { PartsDetailsService } from './parts-details.service';

describe('PartsDetailsService', () => {
  let service: PartsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
