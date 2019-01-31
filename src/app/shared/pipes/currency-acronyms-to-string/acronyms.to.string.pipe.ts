import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyText } from './currency-text';

@Pipe({
  name: 'acronymsToString'
})
export class AcronymsToStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let fullString: any = CurrencyText[value];
    return fullString;
  }

}
