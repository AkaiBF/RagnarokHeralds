import { TestBed } from '@angular/core/testing';

import { WarframesService } from './warframes.service';

describe('WarframesService', () => {
  let service: WarframesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarframesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
