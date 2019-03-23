import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()

export class FromAccountObservableService {

    private fromAccount$: BehaviorSubject<any>;

    constructor() {
        this.fromAccount$ = <BehaviorSubject<any>>new BehaviorSubject({});
    }

    getfromAccount(): Observable<any> {
        return this.fromAccount$.asObservable();
    }

    setfromAccount(fromAccount: Object): void {
        this.fromAccount$.next(fromAccount);
    }

}
