import { Component } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'app-calculator-template-form',
    templateUrl: './calculator-template-form.html',
    imports: [FormsModule],
    standalone: true
})
export class CalculatorForm {
    constructor() {
        console.log('CC created...');
    }

    result = 0

    // calculate(frm: HTMLFormElement) {
    calculate(frm: NgForm, frmHtml: HTMLFormElement) {
        console.log(frmHtml);
        const frmGroup: FormGroup = frm.form
        console.log(frmGroup.value)
        this.result = (frmGroup.controls['firstNum'].value) + (frmGroup.controls['secondNum'].value)
    }
}
