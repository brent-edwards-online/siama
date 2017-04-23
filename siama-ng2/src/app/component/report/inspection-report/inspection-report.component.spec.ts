import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InspectionReportComponent } from './inspection-report.component';
import { FormsModule } from '@angular/forms';
import { InspectionReportService } from '../../../service/inspection-report.service';
import { MockInspectionReportService } from '../../../service/inspection-report.mock.service';
import { AppComponent } from '../../../app.component';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

describe('InspectionReportComponent', () => {
  let component: InspectionReportComponent;
  let fixture: ComponentFixture<InspectionReportComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [AppComponent, InspectionReportComponent],
        providers: [{ provide: InspectionReportService, useClass: MockInspectionReportService },
            { provide: ActivatedRoute, useValue: { 'params': Observable.from([{ 'inspectionNo': "11111A" }]) } }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get have an inspection number from the route', () => {
      expect(component.inspectionNo).toBe("11111A");
  });


  it('should get a single inspection report', () => {
      expect(component.inspection.inspectionNo).toBe("11111A");
      expect(component.inspection.deckType).toBe("Concrete");
      expect(component.inspection.structureNo).toBe("654321");
      expect(component.inspection.isHighwayBridge).toBe(true);
      expect(component.inspection.isMaintenanceRequired).toBe(true);
  });
});
