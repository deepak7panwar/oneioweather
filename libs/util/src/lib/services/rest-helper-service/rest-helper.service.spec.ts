import { TestBed } from '@angular/core/testing';

import { RestHelperService } from './rest-helper.service';

describe('RestHelperService', () => {
  let service: RestHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
