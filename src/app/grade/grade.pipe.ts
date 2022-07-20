import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

  transform(value: number): string {
    if (value <= 1) {
      return value + " (weak)";
    }
    else if (value == 2) {
      return value + " (medium)";
    }
    else if (value == 3) {
      return value + " (strong)";
    }
    else if (value == 4) {
      return value + " (good)";
    }
    else {
      return value + " (excelent)";
    }
  }

}
