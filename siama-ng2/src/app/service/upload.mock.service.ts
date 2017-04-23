import { Observable } from 'rxjs/Rx';
import { UploadService } from './upload.service'; 

export class MockUploadService extends UploadService {

    constructor() {
        super(null);
    }

    upload(inspectionNo: string, fileToUpload: any): Observable<any> {
        let response = { result: "Success" };
        return Observable.of(response);
    }

}

export class MockFailedUploadService extends UploadService {

    constructor() {
        super(null);
    }

    upload(inspectionNo: string, fileToUpload: any): Observable<any> {
        let response = { noresult: "Failed" };
        return Observable.of(response);
    }

}

