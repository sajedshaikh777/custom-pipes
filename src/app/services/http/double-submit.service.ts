import { Injectable } from '@angular/core';

@Injectable()

export class DoubleSubmitService {

    doubleSubmitToken: any = {}

    constructor() {}

    setToken(token: any): void {
        this.doubleSubmitToken = token;
    }

    updateToken(key: string, value: string): void {
        if (!(key == null) && !(value == null)) {
            this.doubleSubmitToken[key] = value;
        }
    }

    checkToken(key: string): string {
        if (this.doubleSubmitToken.hasOwnProperty(key)) {
            return this.doubleSubmitToken[key];
        } else {
            return "";
        }
    }

}