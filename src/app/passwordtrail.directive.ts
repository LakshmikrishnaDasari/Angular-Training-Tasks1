import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPasswordtrail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordtrailDirective,
    multi: true
  }]
})
export class PasswordtrailDirective implements Validator {
  @Input('appPasswordtrail') appPasswordtrail: string[] = [];
  validate(control: AbstractControl): ValidationErrors {
    console.log(this.appPasswordtrail[0]);
    console.log(this.appPasswordtrail[1]);
    const pwdCntrl = control.get(this.appPasswordtrail[0]);
    const cpwdCntrl = control.get(this.appPasswordtrail[1]);
    console.log(pwdCntrl);
    console.log(cpwdCntrl);
    if (!pwdCntrl || !cpwdCntrl) { return null };
    if (cpwdCntrl.errors && !cpwdCntrl.errors.mustMatch) {
      return null;
    }
    if (pwdCntrl.value !== cpwdCntrl.value) {
      cpwdCntrl.setErrors({ mustMacth: true });
    } else {
      return null;
    }
  }
  constructor() { }

}
