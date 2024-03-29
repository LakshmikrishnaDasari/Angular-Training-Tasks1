import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appCpassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CpasswordDirective,
    multi: true
    }]
})
export class CpasswordDirective implements Validator {

  @Input() appConfirmEqualValidator: string;
  validate(control : AbstractControl):{ [key: string]: any} | null {
  const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
  if(controlToCompare && controlToCompare.value !== control.value){
  return { 'notEqual': true};
  }
  return null;
  }

}

