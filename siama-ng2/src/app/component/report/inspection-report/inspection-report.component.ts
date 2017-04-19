import { Component, OnInit } from '@angular/core';
import { Inspection } from '../../../model/inspection.model';

@Component({
  selector: 'app-inspection-report',
  templateUrl: './inspection-report.component.html',
  styleUrls: ['./inspection-report.component.css']
})
export class InspectionReportComponent implements OnInit {
    private inspection: Inspection = new Inspection();
    public isEditing: boolean = false;

    constructor() {
        this.inspection.inspectionNo = '12345C';
        this.inspection.inspectionDate = '20/02/2015';
        this.inspection.structureNo = '123456';
        this.inspection.deckType = 'Concrete';
        this.inspection.isMantenanceRequired = true;
        this.inspection.isHighwayBridge = true;
    }

  ngOnInit() {
  }

  public setEditMode(isEditing: boolean): void {
      this.isEditing = isEditing;
  }
  

}
