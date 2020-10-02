import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millions'
})
export class MillionsPipe implements PipeTransform {

  transform(input: any, args?: any): any {
    var suffix = 'M'

    if (Number.isNaN(input)) {
      return null;
    }

    if (input < 1000000) {
      return input;
    }

    return (input / 1000000).toFixed(2) + suffix;


  }

}
