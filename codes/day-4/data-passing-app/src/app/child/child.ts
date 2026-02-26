import { Component, computed, EventEmitter, input, Input, InputSignal, output, Output, OutputEmitterRef } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.html'
})

export class ChildComponent {
    // @Input() countervalue = 0;
    // @Output() countervalueChanged = new EventEmitter<number>()

    countervalue: InputSignal<number> = input<number>(0)
    countervalueChanged: OutputEmitterRef<number> = output<number>()

    constructor() { }

    increase() {
        // this.countervalue++
        // this.countervalueChanged.emit(this.countervalue)
        let data = this.countervalue()
        this.countervalueChanged.emit(data + 1)
    }
}