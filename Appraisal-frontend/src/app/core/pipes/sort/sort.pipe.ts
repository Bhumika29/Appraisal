import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (args[0] === '') {
      return value;
    }

    if (args[1]) {
      value.sort((a, b) => a[args[0]] === null ? -1 : b[args[0]] === null ? 1 : a[args[0]].toString().localeCompare(b[args[0]]));
    } else {
      value.sort((a, b) => a[args[0]] === null ? 1 : b[args[0]] === null ? -1 : b[args[0]].toString().localeCompare(a[args[0]]));
    }
    console.log('value', value);
    return value;
  }

}
