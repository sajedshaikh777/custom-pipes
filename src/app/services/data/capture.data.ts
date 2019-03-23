export class CaptureData {
    public selectedFromAccount: any;
    public selectedFromAccountDetails: any;
    public billersList: any;
    public payments: Payment[] = [];
    public serverDate: any;
    public defaultSelectedDate: any;
    public minDate: any;
    public maxDate: any;
    public confirmResponse: any;
    public confirmWarningResponse: any;
    public confirmErrorResponse: any;
}

export class Payment {
    public selectedToAccount: any;
    public selectedToAccountDetails: any;
    public payeeIndex: string;
    public amount: string;
    public memo: any;
    public selectedReason: any;
    public selectedDate: any;
    public displaySelectedDate: any;
    public displaySelectedReason: any;
    public isNow: boolean;
    public isCredit: boolean;
    public amountCurrency: any;
    public isMemoBlank: boolean;
    public referenceNumber: any;
    public revisedDate: any;
    public separator: any;
    public selectedFrequency: any;
    public noOfTransfer: any;
    public isRecurring: boolean;
    public displaySelectedFrequency: any;
    public isNri: any;
    public showReasonCheckbox: boolean;
    public isDateChanged: boolean;
    public noOfTransferErrors: any;
    public isFrequencyBlank: boolean;
    public noOfTransferLeftBlank: boolean;
    public showCurrentDateError: any;

    constructor() {
        this.amount = '';
        this.amountCurrency = '';
        this.isRecurring = false;
        this.isDateChanged = false;
        this.memo = '';
        this.selectedFrequency = '';
        this.noOfTransfer = '';
        this.displaySelectedFrequency = '';
        this.noOfTransferErrors = {};
        this.isFrequencyBlank = false;
        this.noOfTransferLeftBlank = false;
        this.showCurrentDateError = false;
    }
}
