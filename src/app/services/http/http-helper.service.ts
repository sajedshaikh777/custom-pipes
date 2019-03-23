import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ErrorUtilsService } from './error-utils.service';
import { DoubleSubmitService } from './double-submit.service';
import { ModelConfig } from '../../utils/utils.config-loader';

@Injectable()
export class HttpHelperService {

    public siteConfig: any;
    public doubleSubmitToken: string = "X-HDR-DoubleSubmit-Token";
    public jscDataToken: string = "X-HDR-jscData";
    public syncToken: string = "X-HDR-Synchronizer-Token";
    public syncTokenCookieName: string = "SYNC_TOKEN";
    public contentToken: string = "Content-Type";
    public cacheTokenHeader: string = "isCacheable";
    public operationNamePattern: any = null;
    public serviceSchemaContainer: any = {};
    public schemaValidation: boolean = false;
    public acceptToken: string = "Accept";

    // Headers
    public guID: string = "X-Hsbc-Guid";
    public guIDNew: string = "X-Hsbc-Customer-Id";
    public channelID: string = "X-HSBC-Channel-Id";
    public countryCode: string = "X-HSBC-Chnl-CountryCode";
    public chnlGroupMwmber: string = "X-HSBC-Chnl-Group-Member";
    public locale: string = "X-HSBC-Locale";
    public sessionCorrelationID: string = "X-HSBC-Session-Correlation-Id";
    public requestCorrelationID: string = "X-HSBC-Request-Correlation-Id";
    public ipID: string = "X-HSBC-IP-Id";
    public srcDeviceID: string = "X-HSBC-Src-Device-Id";
    public srcUserAgen: string = "X-HSBC-Src-UserAgent";
    public saml: string = "X-HSBC-Saml";
    public userID: string = "X-HSBC-User-Id";
    public camLevel: string = "X-HSBC-Cam-Level";
    public tokenType: string = "Token_Type";
    public authorization: string = "Authorization";
    
    public headers: HttpHeaders;
    private _doubleSubmitService: DoubleSubmitService;
    public _configLoaderService: ConfigLoaderService;

    constructor() {
        this._doubleSubmitService = new DoubleSubmitService();
        this._configLoaderService = new ConfigLoaderService();
        this.siteConfig = this._configLoaderService.getSiteConfig();
    }

    addHeaders(endPoint: any): HttpHeaders {

        if (endPoint.headers !== null && endPoint.headers !== undefined) {
            this.headers = endPoint.headers;
        } else {
            this.headers = new HttpHeaders();
        }
        
        this.checkAndUpdateHeaders(this.contentToken, 'application/json');
        this.checkAndUpdateHeaders(this.channelID, this.siteConfig['channelId']);
        this.checkAndUpdateHeaders(this.countryCode, this.siteConfig['countryCode']);
        this.checkAndUpdateHeaders(this.chnlGroupMwmber, this.siteConfig['groupMemberId']);
        this.checkAndUpdateHeaders(this.locale, this.siteConfig['locale']);
        this.checkAndUpdateHeaders(this.tokenType, this.siteConfig['SESSION_TOKEN']);
        this.checkAndUpdateHeaders(this.cacheTokenHeader, endPoint.cache.toString());
        
        if (endPoint.hasOwnProperty('opName')) {
            let doubleSubmit = this._doubleSubmitService.checkToken(endPoint.opName);
            if (doubleSubmit != "") {
                this.checkAndUpdateHeaders(this.doubleSubmitToken, doubleSubmit);
            }
        }

        return this.headers;

    }

    checkAndUpdateHeaders(property: any, value: string): void {
        if (this.headers.has(property)) {
            return;
        } else {
            this.headers = this.headers.set(property, value)
        }
    }

    getCookies(cname: any): string {
        let name = cname + "=";
        let ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    checkDoubleSubmit(response: any): void {
        let responseHeaders = response.headers;
        let doubleSubmit = responseHeaders.get(this.doubleSubmitToken);

        if (doubleSubmit !== null) {
            let nameArray = response.url.split('/');
            let opName = nameArray[nameArray.length -1];

            this._doubleSubmitService.updateToken(opName, doubleSubmit);
            this._doubleSubmitService.checkToken(opName);
        }
    }

}