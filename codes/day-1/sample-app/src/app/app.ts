import { Component, signal } from '@angular/core';
import { Other } from './other/other';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css',
  imports: [Other]
})
export class App {
  protected readonly title = signal('sample-app');
}
