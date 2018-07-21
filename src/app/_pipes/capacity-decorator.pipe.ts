import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capacity'})
export class CapacityPipe implements PipeTransform {
  transform(value: number): string {
      if(value>0)
      return value.toString() + ' نفر';
      else
      return 'ظرفیت این دوره تمام شده‌است.';
  }
}