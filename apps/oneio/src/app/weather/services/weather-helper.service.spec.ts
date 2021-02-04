import { TestBed } from '@angular/core/testing';

import { WeatherHelperService } from './index';

describe('WeatherHelperService', () => {
  let service: WeatherHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
