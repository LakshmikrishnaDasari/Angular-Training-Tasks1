import { AbstractControl } from '@angular/forms';

export function zipcodevalidator(control: AbstractControl) {

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
export function passwordvalidator(control: AbstractControl) {

    if (control && (control.value !== null || control.value !== undefined)) {
        const newvalue = control.value;
        const passcontrol = control.root.get('password');
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