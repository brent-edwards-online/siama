import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionReportComponent } from './inspection-report.component';

import { FormsModule } from '@angular/forms';

describe('InspectionReportComponent', () => {
  let component: InspectionReportComponent;
  let fixture: ComponentFixture<InspectionReportComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [ InspectionReportComponent ]
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
});
