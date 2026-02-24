import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-calculator-ng-model',
    templateUrl: './calculator-ng-model.html',
    imports: [FormsModule],
    standalone: true
})
export class CalculatorNgModel {
    constructor() {
        console.log('CC created...');
    }

    first = 0
    second = 0
    result = 0

    calculate() {
        this.result = this.first + this.second
    }
}
