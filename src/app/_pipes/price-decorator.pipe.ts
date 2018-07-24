import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'price'})
export class PricePipe implements PipeTransform {
  transform(value: number): string {
    value=value/1000;
    return value.toString() + ' هزار تومان';
  }
}