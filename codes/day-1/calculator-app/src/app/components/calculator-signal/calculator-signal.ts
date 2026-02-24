import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
    selector: 'app-calculator-signal',
    templateUrl: './calculator-signal.html',
    standalone: false
})
export class CalculatorSignal {
    constructor() {
        console.log('CSC created...');
    }

    first: WritableSignal<number> = signal(0)
    second: WritableSignal<number> = signal(0)
    //result: WritableSignal<number> = signal(0)

    //computed() => Create a computed Signal which derives a reactive value from an expression.
    result: Signal<number> = computed<number>(() => this.first() + this.second())

    // calculate() {
    //     //this.result.set(this.first() + this.second())
    // }
}
