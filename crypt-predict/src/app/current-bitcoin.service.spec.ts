import { TestBed, inject } from '@angular/core/testing';

import { CurrentBitcoinService } from './current-bitcoin.service';

describe('CurrentBitcoinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentBitcoinService]
    });
  });

  it('should be created', inject([CurrentBitcoinService], (service: CurrentBitcoinService) => {
    expect(service).toBeTruthy();
  }));
});
