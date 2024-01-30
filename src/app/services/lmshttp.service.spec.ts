import { TestBed } from '@angular/core/testing';

import { LmshttpService } from './lmshttp.service';

describe('LmshttpService', () => {
  let service: LmshttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmshttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
