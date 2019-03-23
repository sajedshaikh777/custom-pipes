import { Injectable } from '@angular/core';
import { CaptureData } from './capture.data';

@Injectable()

export class CaptureDataObservableService {

    private static captureData: any = null;

    static getCaptureData() {
        if (this.captureData == null) {
            this.captureData = new CaptureData();
        }
        return this.captureData;
    }

    constructor() {

    }
}
