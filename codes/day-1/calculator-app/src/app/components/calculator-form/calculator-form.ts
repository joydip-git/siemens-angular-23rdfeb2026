import { Component } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'app-calculator-form',
    templateUrl: './calculator-form.html',
    imports: [FormsModule],
    standalone: true
})
export class CalculatorForm {
    constructor() {
        console.log('CC created...');
    }

    // first = 0
    // second = 0
    result = 0

    // calculate(frm: HTMLFormElement) {
    calculate(frm: NgForm) {
        const frmGroup: FormGroup = frm.form
        console.log(frmGroup.value)
        //this.result = this.first + this.second
        this.result = (frmGroup.controls['firstNum'].value) + (frmGroup.controls['secondNum'].value)
    }
}
