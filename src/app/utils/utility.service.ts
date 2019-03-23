import { Injectable } from '@angular/core';
import { ControlDataService } from '../utils/control-data.service';

@Injectable()
export class UtilityService {

    public entityControlData: any = ControlDataService.getEntitySpecificControlData();

    constructor() { }

    // This method is used to mask account number
    maskAccountDisplay(accountNumber: any) {

        if (accountNumber) {
            const regx = this.entityControlData.Control_Data.maskingPattern;
            const newstr = accountNumber.replace(regx, this.entityControlData.Control_Data.htmlSymbol);
            return newstr;
        }

    }
}



