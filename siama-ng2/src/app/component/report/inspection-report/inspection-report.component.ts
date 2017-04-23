import { Component, OnInit, ViewChild } from '@angular/core';
import { Inspection } from '../../../model/inspection.model';
import { ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { InspectionReportService } from '../../../service/inspection-report.service';
import { UploadService } from '../../../service/upload.service';
import * as moment from 'moment';
import { UiSwitchModule } from 'angular2-ui-switch/src/index';
import { HeaderComponent } from '../../shared/header/header.component';
import { Config } from '../../../service/config';

@Component({
    selector: 'app-inspection-report',
    templateUrl: './inspection-report.component.html',
    styleUrls: ['./inspection-report.component.css']
})
export class InspectionReportComponent implements OnInit {
    @ViewChild("uploadFile") fileInput;

    public inspection: Inspection;
    public inspectionNo: string;
    public isEditing: boolean;
    public errorMessage: string;
    public successMessage: string;
    public decktypes: string[] = ["Concrete", "Earth", "Sealed", "Steel", "Wood"];
    public displayDatePicker: boolean;
    public umageURL: string;

    constructor(private inspectionReportService: InspectionReportService, private route: ActivatedRoute, private uploadService: UploadService) {
        this.displayDatePicker = false;
        this.inspection = new Inspection();
    }

    ngOnInit() {
        this.inspectionNo = this.route.snapshot.params['inspectionNo'];
 
        this.inspectionReportService.GetInspectionReportByInspectionNo(this.inspectionNo)
            .subscribe(
            (response) => {
                if (response.result) {
                    let r: Inspection = response.result;
                    this.inspection.deckType = r.deckType;
                    this.inspection.inspectionNo = r.inspectionNo;
                    this.inspection.inspectionDate = new Date(response.result.inspectionDate);
                    this.inspection.isHighwayBridge = r.isHighwayBridge;
                    this.inspection.isMaintenanceRequired = r.isMaintenanceRequired;
                    this.inspection.structureNo = r.structureNo;
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

    onSubmit() {
        this.errorMessage = '';
        this.successMessage = '';
        this.displayDatePicker = false;

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

    setShowDatePicker(showDatePicker: boolean) {
        this.displayDatePicker = showDatePicker;
    }

    toggleDatePicker($event) {
        $event.stopPropagation();
        if (this.isEditing) {
            this.displayDatePicker = !this.displayDatePicker;              
        }
        else {
            this.displayDatePicker = false;
        }
        
    }

    fileSelected($event) {
        let fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            let fileToUpload = fi.files[0];
            this.uploadService
                .upload(this.inspectionNo, fileToUpload)
                .subscribe(
                (response) => {
                    if (response.status) {
                        if (Config.USE_AWS_S3 == true) {
                            this.umageURL = "https://s3-ap-southeast-2.amazonaws.com/siama-images/" + this.inspectionNo + "/" + fileToUpload.name;
                        }
                        this.successMessage = "File uploaded successfully";
                    }
                    else {
                        this.errorMessage = "Could not upload file";
                    }
                },
                (error) => {
                    this.errorMessage = "Could not upload file";
                });
        }
    }
}
