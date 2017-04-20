import { TestBed, inject } from '@angular/core/testing';

import { InspectionReportService } from './inspection-report.service';

describe('InspectionReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InspectionReportService]
    });
  });

  it('should ...', inject([InspectionReportService], (service: InspectionReportService) => {
    expect(service).toBeTruthy();
  }));
});
