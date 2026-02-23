import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
  standalone: true
})
export class Calculator {
  first = 0
  second = 0
  result = 0
}
