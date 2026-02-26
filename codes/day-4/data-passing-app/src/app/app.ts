import { Component, signal } from '@angular/core';
import { ChildComponent } from "./child/child";

@Component({
  selector: 'app-root',
  imports: [ChildComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected counter = 0;
  increaseCounter() {
    this.counter++
  }
  receiveData(num: number) {
    this.counter = num
  }
}
