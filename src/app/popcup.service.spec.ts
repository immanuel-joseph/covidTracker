import { TestBed } from '@angular/core/testing';

import { PopcupService } from './popcup.service';

describe('PopcupService', () => {
  let service: PopcupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopcupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
