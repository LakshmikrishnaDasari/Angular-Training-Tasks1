import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addition',
  pure: false

})
export class MyPipe implements PipeTransform {

  transform(value: any,args: any): any {
    console.log("pure");
    return value + args;
  }

}
