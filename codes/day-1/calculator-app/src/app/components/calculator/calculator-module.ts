import { NgModule } from "@angular/core";
import { Calculator } from "./calculator";
import { CalculatorSignal } from "../calculator-signal/calculator-signal";

@NgModule({
    declarations: [Calculator, CalculatorSignal],
    exports: [Calculator, CalculatorSignal]
})
export class CalculatorModule {
    constructor() {
        console.log('CM created...');
    }
}