import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oprations'
})
export class OprationsPipe implements PipeTransform {

  transform(value: any, args: any): any {

    let result: any;

    if (args == 'cube') {
      result = value * value * value;
    }

    if (args == 'square') {
      result = value * value;
    }

    return result;
  }

}
