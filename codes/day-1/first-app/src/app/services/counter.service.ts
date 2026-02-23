import { signal } from "@angular/core";

export class CounterService {
    private counter = signal(0)
    counterValue = this.counter.asReadonly()

    increase() {
        this.counter.update(oldValue => oldValue + 1)
    }
}