import { Component, OnInit } from '@angular/core';
import { Inspection } from '../../model/inspection.model';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { InspectionReportService } from '../../service/inspection-report.service';
import * as moment from 'moment';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
    reports: Array<Inspection> = new Array<Inspection>();
    errorMessage: string;

    constructor(private inspectionReportService: InspectionReportService) {

    }

    ngOnInit() {
        this.inspectionReportService.GetAllReports()
            .subscribe(
            (response) => {
                if (response.result) {
                    for (var r of response.result)
                    {
                        let i = new Inspection();
                        i.deckType = r.deckType;
                        i.inspectionNo = r.inspectionNo;
                        i.inspectionDate = new Date(r.inspectionDate);
                        i.isHighwayBridge = r.isHighwayBridge;
                        i.isMaintenanceRequired = r.isMaintenanceRequired;
                        i.structureNo = r.structureNo;
                        this.reports.push(i);
                    }
                }
                else {
                    this.errorMessage = "Could not load reports";
                }
            },
            (error) => {
                this.errorMessage = "Could not load reports";
            });

    }
}