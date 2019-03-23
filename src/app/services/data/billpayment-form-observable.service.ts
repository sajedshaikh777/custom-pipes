import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable()

export class BillPaymentFormObservsbleService {

    private static bpForm: FormGroup = null;

    static getForm(_formBuilder: FormBuilder) {
        if (this.bpForm == null) {
            this.bpForm = _formBuilder.group({
                payments: _formBuilder.array([]),
            });
        }
        return this.bpForm;
    }
}
