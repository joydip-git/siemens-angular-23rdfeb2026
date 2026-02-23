import { Component } from '@angular/core';
import { Calculator } from './components/calculator/calculator';

@Component({
  selector: 'app-root',
  imports: [Calculator],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}
