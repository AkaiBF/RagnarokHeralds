import { TestBed } from '@angular/core/testing';

import { SecondariesService } from './secondaries.service';

describe('SecondariesService', () => {
  let service: SecondariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
