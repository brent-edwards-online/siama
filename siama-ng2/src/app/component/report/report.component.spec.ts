import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReportComponent } from './report.component';
import { InspectionReportService } from '../../service/inspection-report.service';
import { MockInspectionReportService } from '../../service/inspection-report.mock.service';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [ReportComponent],
        providers: [{ provide: InspectionReportService, useClass: MockInspectionReportService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get a list of all inspection reports', () => {
      expect(component.reports.length).toBe(3);
  });
});
