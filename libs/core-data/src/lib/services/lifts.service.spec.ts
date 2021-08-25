import { TestBed } from '@angular/core/testing';

import { LiftsService } from './lifts.service';

describe('LiftsService', () => {
  let service: LiftsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiftsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
