import { Component } from '@angular/core';
import { CalculatorModule } from './components/calculator/calculator-module';
import { CalculatorForm } from "./components/calculator-template-form/calculator-template-form";
import { CalculatorNgModel } from './components/calculator-ng-model/calculator-ng-model';
import { CalculatorReactiveForm } from './components/calculator-reactive-form/calculator-reactive-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CalculatorModule, CalculatorNgModel, CalculatorForm, CalculatorReactiveForm]
})
export class App {

}
