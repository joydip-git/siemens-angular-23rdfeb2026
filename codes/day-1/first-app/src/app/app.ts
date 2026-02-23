import { Component, Signal, signal } from "@angular/core";
import { Other } from "./other/other";
import { CounterService } from "./services/counter.service";

@Component({
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  selector: 'app-root',
  imports: [Other]
})
export class App {
  private counterService: CounterService;
  count: Signal<number>;
  constructor(cs: CounterService) {
    this.counterService = cs
    this.count = this.counterService.counterValue
    console.log('App...');
  }
  countHandler = () => {
    console.log('called');
    this.counterService.increase()
  }
  width = 300
  title = 'Welcome to Angular'
  titleSignal = signal('welcome to signals...')
  titleHandler(value: string) {
    this.title = value
  }
  signalHandler() {
    this.titleSignal.set('welcome to writable signal')
  }
}