import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export const passwordStrength: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string

    if (value.length < 6 || value.length > 10)
        return {
            passwordStrength: 'length should be between 6 and 10'
        }
    else
        return null
}