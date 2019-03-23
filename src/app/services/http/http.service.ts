declare var process: any;
import { Injectable } from '@angular/core';
import { Http, Request, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { EndPointService } from './endpoint.service';
import { ErrorUtilsService } from './error-utils.service';


@Injectable()

export class HttpService {

    constructor(private _http: Http,
        private endPointService: EndPointService,
        private _errorUtilsService: ErrorUtilsService) {

    }

    executeRequest(endPointName: string, data: any): Observable<any> {
        const endPoint = this.endPointService.getEndPoint(endPointName);
        let options: RequestOptions;
        const envConfig: any = process.env.envConfig;

        if (envConfig.envName === 'LOCAL' || endPoint.url.indexOf('stub') !== -1) {
            endPoint.method = 'GET';
        }

        if (envConfig.envName !== 'LOCAL' || endPoint.appendToURL === true) {
            options = new RequestOptions({
                method: endPoint.method,
                url: endPoint.url + data
            });
            endPoint.method = 'GET';
        } else {
            options = new RequestOptions({
                method: endPoint.method,
                url: endPoint.url
            });
        }

        // return;
       return this.request(options);
    }

    executeRequestWithAppend(endPointName: string, append: string, data: any): Observable<any> {
        const endPoint = this.endPointService.getEndPoint(endPointName);
        let options: RequestOptions;
        const envConfig: any = process.env.envConfig;

        if (envConfig.envName === 'LOCAL' || endPoint.url.indexOf('stub') !== -1) {
            endPoint.method = 'GET';
        }

        if (envConfig.envName !== 'LOCAL' || endPoint.appendToURL === true) {
            options = new RequestOptions({
                method: endPoint.method,
                url: endPoint.url + append
            });
        } else {
            options = new RequestOptions({
                method: endPoint.method,
                url: endPoint.url
            });
        }
        return this.request(options);
    }

    request(args: RequestOptions): Observable<any> {
        this.handleRequest(args);
        return this._http.request(new Request(args))
            .map((res: Response) => this.handleResponse(res))
            .catch((error: any) => this.handleError(error));
    }

    private handleResponse(response: Response): any {
        const responseUrl = response.url;
        let responseData: any;
        try {
            responseData = response.json();
        } catch (e) {
            responseData = {};
        }
        return responseData;
    }

    private handleError(error: any) {
        const rejectionStatus = error.status;
        try {
            error = JSON.parse(error._body);
        } catch (e) {
            error = {};
        }

        if (this.isEmptyObject(error)) {
            const errorInfo = this._errorUtilsService.prepareDefaultErrorInfo(rejectionStatus);
            error.errorInfo = errorInfo;
        }
        return Observable.throw(error);

    }

    private isEmptyObject(object: any): boolean {
        let name;
        // tslint:disable-next-line:forin
        for (name in object) {
            return false;
        }
        return true;
    }

    private handleRequest(request: RequestOptions): any {
        return request;
    }


}
