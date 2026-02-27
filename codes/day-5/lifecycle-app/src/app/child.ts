import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    standalone: true,
    imports: [],
    selector: 'app-child',
    templateUrl: './child.html'
})

export class ChildComponent implements OnChanges, OnInit, OnDestroy {
    @Input() count = 0
    @Input() pid = 0
    //private sub: Subscription | undefined;
    private sub?: Subscription;
    post = signal<any>(undefined)
    http = inject(HttpClient)

    data = 0
    constructor() {
        console.log('ctor');
        //this.data = this.count * 2
    }
    ngOnDestroy(): void {
        console.log('destroying...');
        this.sub?.unsubscribe()
    }
    ngOnInit(): void {
        console.log('init');
        console.log('pid in int: ' + this.pid);
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log('changes');
        this.data = this.count * 2
        console.log('pid in changes: ' + this.pid);
        if (this.pid > 0) {
            this.sub = this.http
                .get(`https://jsonplaceholder.typicode.com/posts/${this.pid}`)
                .subscribe({
                    next: (data) => {
                        console.log(data);
                        this.post.set(data)
                    },
                    error: (err) => { console.log(err); }
                })
        }
        //https://jsonplaceholder.typicode.com/posts/1
    }
}