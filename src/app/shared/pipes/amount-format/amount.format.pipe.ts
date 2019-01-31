import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { DecimalValues } from './decimal-format';
import { ConfigLoaderService } from '../../services'

@Pipe({
  name: 'amountFormat'
})

@Injectable()
export class AmountFormatPipe implements PipeTransform {

  constructor(public _configLoaderService: ConfigLoaderService) {

  }

  transform(value: any, currency: any): Object {

    let siteConfig = this._configLoaderService.getSiteConfig();
    let locale: any = siteConfig.locale;
    let localeUK = "en-UK";

    locale = locale.replace('_', '-');

    if (value !== null && (currency && currency !== "")) {

      locale = locale || 'en-UK';
      if (locale.toLowerCase() === 'en-in') {
        locale = 'en-UK';
      }
      try {
        value = value.toLocaleString(locale, {minimumFractionDigits: DecimalValues[currency], maximumFractionDigits: DecimalValues[currency]});
      } catch(e) {
        value = value.toLocaleString(localeUK, {minimumFractionDigits: DecimalValues[currency], maximumFractionDigits: DecimalValues[currency]});
      }
      return value + "";
    } else {
      return null;
    }

  };

}
