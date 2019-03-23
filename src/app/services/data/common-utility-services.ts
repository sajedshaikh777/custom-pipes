import { Injectable } from '@angular/core';
import { CaptureData } from './capture.data';

@Injectable()
export class CommonUtilityService {

    public isLoading = false;
    public alert: any;
    public serverDate: Date;
    public minDate: Date;
    public maxDate: Date;
    public otpValue: any;

    constructor() {}

    readonly amtConfig: any = {
        maxLength: 0,
        minValue: 0.01,
        maxDigitsBeforePrecision: 11,
        maxDigitsAfterPrecision: 2,
        minDigitsAfterPrecision: 0,
        precision: '.',
        separator: ',',
        allowedSeparatorCount: 3
    };

    readonly paymentConfig: any = {
        maxValue: 999,
        minValue: 2,
        maxLength: 3
    };

    public transactionDetails: CaptureData = new CaptureData();
}
