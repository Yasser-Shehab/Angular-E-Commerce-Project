import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let arr:Array<string> = [];
    for(let item in args)
    {
      if(item == value)
      {
        arr.push(item)
      }
    }
    return arr;
  }

}
