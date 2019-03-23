import { Injectable } from '@angular/core';

@Injectable()
export class ErrorUtilsService {
    constructor() { }

    public xhrDefaults = {
        handleAs: "json",
        proxy: {},
        userProxy: true,
        showActivity: true,
        timeout: 30,
        preventCache: false,
        retryAttempts: 3,
        retryDelay: 2,
        _retryCount: 0
    };

    public responseCode = {
        SUCCESS: 0,
        WARNNING: 4,
        ERROR: 8,
        FATAL: 16
    };

    public reasonType = {
        INFO: 0,
        WARNNING: 4,
        ERROR: 8
    };

    public reasonTypeNames = {
        "0": "info",
        "4": "warning",
        "8": "error"
    };

    prepareDefaultErrorInfo(rejectionStatus: any): any {
        const errorInfo: any = [];
        const errorObject: any = {};

        errorObject.code = rejectionStatus;
        errorObject.correlationId = null;
        errorInfo.push(errorObject);

        return errorInfo;
    }

}
