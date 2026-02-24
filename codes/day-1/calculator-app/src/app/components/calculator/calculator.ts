import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
  standalone: false
})
export class Calculator {
  constructor() {
    console.log('CC created...');
  }
  first = 0
  second = 0
  result = 0

  updateFirst(value: number) {
    this.first = value
  }
  updateSecond(value: number) {
    this.second = value
  }
  calculate() {
    this.result = this.first + this.second
  }
}
