import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumberMasking'
})
export class CardNumberMaskingPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let regx : any = /[.]/gi;
    let htmlSymbols: any = "&bull;";
    let newString: any;

    if (value) {
      newString = value.replace(regx, htmlSymbols);
    }

    return newString;
  }

}
