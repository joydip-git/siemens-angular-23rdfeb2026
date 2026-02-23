import { Component, inject } from "@angular/core";
import { CounterService } from "../services/counter.service";

@Component({
    template: `<p>{{message}}<br/> CountData:{{countData()}}</p>`,
    selector: 'app-other',
    standalone: true
})
export class Other {
    message = 'this is another...'
    constructor() {
        console.log('Other...');
    }
    private counterService = inject(CounterService)
    countData = this.counterService.counterValue
}