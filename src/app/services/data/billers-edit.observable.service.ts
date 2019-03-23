import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class BillersEditObservsbleService {

    private billersEdit$: BehaviorSubject<any>;

    constructor() {
        this.billersEdit$ = <BehaviorSubject<any>> new BehaviorSubject({});
    }

    getBillersEdit(): Observable<any> {
        return this.billersEdit$.asObservable();
    }

    setBillersEdit(billersEdit$: boolean): void {
        this.billersEdit$.next(this.billersEdit$);
    }
}
