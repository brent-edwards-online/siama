import { Component, OnInit } from '@angular/core';
import { Inspection } from '../../../model/inspection.model';
import { InspectionReportService } from '../../../service/inspection-report.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

declare var $: any; // For JQuery

@Component({
    selector: 'app-inspection-report',
    templateUrl: './inspection-report.component.html',
    styleUrls: ['./inspection-report.component.css'],
    providers: [InspectionReportService]
})
export class InspectionReportComponent implements OnInit {
    private inspection: Inspection = new Inspection("","","","","",false,false);
    private inspectionNo: string;
    private isEditing: boolean = false;
    private errorMessage: string;
    private successMessage: string;
    private decktypes: string[] = ["Concrete", "Earth", "Sealed", "Steel", "Wood"];

    constructor(private inspectionReportService: InspectionReportService, private route: ActivatedRoute) {
 
    }

    ngOnInit() {
        this.inspectionNo = this.route.snapshot.params['inspectionNo'];

        this.inspectionReportService.GetInspectionReportByInspectionNo(this.inspectionNo)
            .subscribe(
            (response) => {
                if (response.result) {
                    this.inspection = response.result;
                }
                else {
                    this.errorMessage = "Could not find report - " + this.inspectionNo;
                }
            },
            (error) => {
                this.errorMessage = "Could not load - " + this.inspectionNo;
            });

    }

    public setEditMode(isEditing: boolean): void {
        this.isEditing = isEditing;
    }

    public onSubmit() {
        this.errorMessage = '';
        this.successMessage = '';

        this.inspectionReportService.SaveInspection(this.inspection)
            .subscribe(
            (response) => {
                if (response.result) {
                    this.isEditing = false;
                    this.successMessage = "Report saved";
                }
                else {
                    this.errorMessage = "Could not save - " + this.inspectionNo;
                }
            },
            (error) => {
                this.errorMessage = "Could not save - " + this.inspectionNo;
            });
    }

    public datePicker() {
        if (this.isEditing) {
            $(function () {
                $('#datepick').datetimepicker();
            });
        }
    }
}
