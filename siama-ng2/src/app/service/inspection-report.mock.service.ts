import { Observable } from 'rxjs/Rx';
import { Inspection } from '../model/inspection.model';
import { InspectionReportService } from './inspection-report.service';

export class MockInspectionReportService extends InspectionReportService {

    private _data: Array<Inspection> = new Array<Inspection>();

    constructor() {
        super(null);
        let i0: Inspection = { assetNo: "", deckType: "Concrete", inspectionDate: new Date(2014, 1, 25, 14, 0, 0), inspectionNo: "11111A", isHighwayBridge: true, isMaintenanceRequired: true, structureNo: "654321" };
        let i1: Inspection = { assetNo: "", deckType: "Sealed", inspectionDate: new Date(2014, 6, 21, 0, 0, 0), inspectionNo: "11111B", isHighwayBridge: false, isMaintenanceRequired: true, structureNo: "157935" };
        let i2: Inspection = { assetNo: "", deckType: "Earth", inspectionDate: new Date(2017, 4, 13, 14, 0, 0), inspectionNo: "12345C", isHighwayBridge: true, isMaintenanceRequired: false, structureNo: "123456" };

        this._data.push(i0);
        this._data.push(i1);
        this._data.push(i2);
    }

    public GetAllReports(): Observable<any> {
        let response = { result: this._data };
        return Observable.of(response);
    }

    public GetInspectionReportByInspectionNo(inspectionNo: string): Observable<any> {
        let response = { result: this._data[0] };
        return Observable.of(response);
    }

    public SaveInspection(report: Inspection): Observable<any> {
        let response = { result: "Success" };
        return Observable.of(response);
    }
}