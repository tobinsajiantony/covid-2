import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tomillionpipe'
})
export class ToMillionPipe implements PipeTransform {

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