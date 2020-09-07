import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!args) {
      return value;
    }
    console.log("Value", value);
    return value.filter((val) => {
      const conditions = args[0].toLowerCase().split(' ');
      console.log(conditions);
      let returnValue = true;

      for (const condition of conditions) {
        if (returnValue) {
          console.log(val.template_name.toString().toLowerCase().includes(condition));
          returnValue = ((val.template_name !== null ) && (val.template_name.toLowerCase().includes(condition))) ||
           ((val.allowed_profile !== null) && (val.allowed_profile.toLowerCase().includes(condition))) ||
            ((val.allowed_experience !== null) && (val.allowed_experience.toLowerCase().includes(condition))) ||
            ((val.allowed_exhibit !== null) && (val.allowed_exhibit.toLowerCase().includes(condition)));
        } else {
          returnValue = false;
          break;
        }
      }
      return returnValue;
    });
  }

}
