import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  constructor() {
    console.log('app component object created');
  }
  protected readonly title = signal('modular-app');
}
