import { AbstractControl } from '@angular/forms';

export function salaryvalidator(control:AbstractControl){

if((control.value %10 ) !=0)
{
return { salary : true};
}

}