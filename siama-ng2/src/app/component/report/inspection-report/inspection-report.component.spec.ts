import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { INspectionReportComponent } from './inspection-report.component';

describe('INspectionReportComponent', () => {
  let component: INspectionReportComponent;
  let fixture: ComponentFixture<INspectionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ INspectionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(INspectionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
