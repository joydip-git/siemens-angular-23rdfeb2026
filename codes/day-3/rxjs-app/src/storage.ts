import { BehaviorSubject } from "rxjs";

export class Storage {
    private static storage: Storage | null = null;
    private store = new BehaviorSubject<number>(0)
    storeObservable = this.store.asObservable()

    private constructor() { }

    static create() {
        if (this.storage === null)
            this.storage = new Storage()

        return this.storage
    }
    publish(value: number) {
        this.store.next(value)
    }
}