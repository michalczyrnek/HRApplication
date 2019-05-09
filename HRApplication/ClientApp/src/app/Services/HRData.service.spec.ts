/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HRDataService } from './HRData.service';

describe('Service: HRData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HRDataService]
    });
  });

  it('should ...', inject([HRDataService], (service: HRDataService) => {
    expect(service).toBeTruthy();
  }));
});
