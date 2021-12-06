import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(value: string): string[] {
    // if(!value)
    //   return [];
    //   console.log(value.split(/[,]/));
    return value.split(/[,]/);

    // let dataToArray = value.split(',').map(item => item.trim());
    // return dataToArray.join("\n");
  }

}
