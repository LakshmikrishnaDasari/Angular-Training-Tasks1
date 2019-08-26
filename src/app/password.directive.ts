import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordDirective,
    multi: true
  }]
})
export class PasswordDirective implements Validator {
  constructor() { }
  validate(control: AbstractControl) {

    if (control && (control.value !== null || control.value !== undefined)) {
      const newvalue = control.value;
      const passcontrol = control.root.get('Password');
      if (passcontrol) {
        const passval = passcontrol.value;
        if (passval !== newvalue) {
          return {
            isError: true
          };
        }
      }
      return null;
    }

  }
}

 




