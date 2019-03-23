import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()

export class ErrorContentObservableService {

    private errorContent$: BehaviorSubject<any>;

    constructor() {
        this.errorContent$ = <BehaviorSubject<any>>new BehaviorSubject({});
    }

    getErrorContent(): Observable<any> {
        return this.errorContent$.asObservable();
    }

    setErrorContent(errorContent: Object): void {
        this.errorContent$.next(errorContent);
    }

}
