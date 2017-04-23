import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Config } from './config';

@Injectable()
export class UploadService {
    private readonly ENDPOINT_URL: string = Config.BASE_URL + "uploadfile/";

    constructor(private http: Http) { }

    upload(inspectionNo: string, fileToUpload: any) {
        let input = new FormData();
        input.append("file", fileToUpload);

        return this.http.post(this.ENDPOINT_URL + inspectionNo, input);
    }

}
