import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inspection } from '../model/inspection.model';


@Injectable()
export class InspectionReportService {
    
    // Online Api endpoint
    private readonly BASE_URL: string = "http://siama-api.brentedwardsonline.com/api/report/";

    constructor(private http: Http) { }

    public GetAllReports(): Observable<any> {
        return this.http.get(this.BASE_URL).map((res: Response) => res.json());
    }

    public GetInspectionReportByInspectionNo(inspectionNo: string): Observable<any> {
        return this.http.get(this.BASE_URL + inspectionNo).map((res: Response) => res.json());
    }

    public SaveInspection(report: Inspection): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .put(this.BASE_URL, JSON.stringify(report), { headers: headers })
            .map(res => res.json());
    }
}
