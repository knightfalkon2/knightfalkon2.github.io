import { TestBed, inject } from '@angular/core/testing';

import { CurrentStocksService } from './current-stocks.service';

describe('CurrentStocksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentStocksService]
    });
  });

  it('should be created', inject([CurrentStocksService], (service: CurrentStocksService) => {
    expect(service).toBeTruthy();
  }));
});
