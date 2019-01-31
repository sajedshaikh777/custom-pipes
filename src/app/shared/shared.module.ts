import { NgModule } from '@angular/core';
import { ReverseStringPipe, AmountFormatPipe, AgePipe, OprationsPipe, CurrencyToTextPipe, AcronymsToStringPipe, CardNumberMaskingPipe, WordCountPipe, CharactorCountPipe, FileSizePipe } from './pipes';

@NgModule({
    declarations: [ReverseStringPipe, AmountFormatPipe, AgePipe, OprationsPipe, CurrencyToTextPipe, AcronymsToStringPipe, CardNumberMaskingPipe, WordCountPipe, CharactorCountPipe, FileSizePipe],
    exports: [ReverseStringPipe, AmountFormatPipe, AgePipe, OprationsPipe, CurrencyToTextPipe, AcronymsToStringPipe, CardNumberMaskingPipe, WordCountPipe, CharactorCountPipe, FileSizePipe],
    providers: []
})

export class SharedModule {

}