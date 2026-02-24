import { Component } from '@angular/core';
import { CalculatorModule } from './components/calculator/calculator-module';
import { CalculatorForm } from "./components/calculator-form/calculator-form";
// import { Calculator } from "./components/calculator/calculator";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  //imports: [Calculator],
  imports: [CalculatorModule, CalculatorForm]
})
export class App {

}
