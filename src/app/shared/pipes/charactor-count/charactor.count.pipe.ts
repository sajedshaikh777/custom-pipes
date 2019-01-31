import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charactorCount'
})
export class CharactorCountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.length;
  }

}
