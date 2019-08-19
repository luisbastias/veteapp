import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cupones'
})
export class CuponesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
