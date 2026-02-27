import { Component, signal } from '@angular/core';
import { ChildComponent } from "./child";

@Component({
  selector: 'app-root',
  imports: [ChildComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  counter = signal(10)
  selectedPostId = signal(0)
  show = signal(false)
}
