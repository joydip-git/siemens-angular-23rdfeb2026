import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-calculator-reactive-form',
    templateUrl: './calculator-reactive-form.html',
    imports: [ReactiveFormsModule],
    standalone: true
})
export class CalculatorReactiveForm {
    // first = new FormControl(0)
    // second = new FormControl(0)

    calcForm = new FormGroup({
        first: new FormControl(0),
        second: new FormControl(0)
    })
    result = 0
    submit() {
        //this.result = Number(this.first.value) + Number(this.second.value)
        // this.result = Number(this.calcForm.get('first')?.value) + Number(this.calcForm.get('second')?.value)
        // this.calcForm.value => {first:12, seocnd:13}
        this.result = Number(this.calcForm.value.first) + Number(this.calcForm.value.second)
    }
}
