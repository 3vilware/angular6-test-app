//Creacion de Pipe personalizado:
  // ng generate pipe shared/pipes/lower-case --module app
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerCase'
})
export class LowerCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value as string).toLocaleLowerCase();
  }

}
