import { Component, OnInit } from '@angular/core';
import { Inspection } from '../../../model/inspection.model';
import { InspectionReportService } from '../../../service/inspection-report.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-inspection-report',
    templateUrl: './inspection-report.component.html',
    styleUrls: ['./inspection-report.component.css'],
    providers: [InspectionReportService]
})
export class InspectionReportComponent implements OnInit {
    private inspection: Inspection = new Inspection();
    private inspectionNo: string;
    private isEditing: boolean = false;
    private errorMessage: string;
    private successMessage: string;

    constructor(private inspectionReportService: InspectionReportService, private route: ActivatedRoute) {
 
    }

    ngOnInit() {
        this.inspectionNo = this.route.snapshot.params['inspectionNo'];

        this.inspectionReportService.GetInspectionReportByInspectionNo(this.inspectionNo)
            .subscribe(
            (response) => {
                console.log(response);
                if (response.result) {
                    this.inspection = response.result;
                }
                else {
                    this.errorMessage = "Could not find report - " + this.inspectionNo;
                }
            },
            (error) => {
                console.log(error);
                this.errorMessage = "Could not load - " + this.inspectionNo;
            });

    }

    public setEditMode(isEditing: boolean): void {
        this.isEditing = isEditing;
    }

    onSubmit(form: NgForm) {
        this.errorMessage = '';
        this.successMessage = '';

        let inspection: Inspection = form.value;
        this.inspectionReportService.SaveInspection(inspection)
            .subscribe(
            (response) => {
                console.log(response);
                if (response.result) {
                    this.isEditing = false;   
                    this.successMessage = "Report saved";
                }
                else {
                    this.errorMessage = "Could not save - " + this.inspectionNo;
                }
            },
            (error) => {
                console.log(error);
                this.errorMessage = "Could not save - " + this.inspectionNo;
            });
    }
}
