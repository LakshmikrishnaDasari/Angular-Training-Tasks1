import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[appZipcode]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ZipcodeDirective,
    multi: true
}]
})
export class ZipcodeDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl){
    // const element =control.value
  

  if (control && (control.value !== null || control.value !== undefined)) {
    const regex = new RegExp('^[0-9]{6}$');

    if (!regex.test(control.value)) {
        return {
            isError: true
        };
    }
}
return null;
}

}
