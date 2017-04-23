import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inspection } from '../model/inspection.model';
import { Config } from './config';


@Injectable()
export class InspectionReportService {
    
    // Online Api endpoint
    private readonly ENDPOINT_URL: string = Config.PROD_BASE_URL + "report/";

    constructor(private http: Http) { }

    public GetAllReports(): Observable<any> {
        return this.http.get(this.ENDPOINT_URL).map((res: Response) => res.json());
    }

    public GetInspectionReportByInspectionNo(inspectionNo: string): Observable<any> {
        return this.http.get(this.ENDPOINT_URL + inspectionNo).map((res: Response) => res.json());
    }

    public SaveInspection(report: Inspection): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .put(this.ENDPOINT_URL, JSON.stringify(report), { headers: headers })
            .map(res => res.json());
    }
}
