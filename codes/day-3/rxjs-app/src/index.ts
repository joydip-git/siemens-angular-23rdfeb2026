import { filter, map, Subscription } from "rxjs";
import { Storage } from "./storage";

//consumer
const storageForConsumer = Storage.create()
const consumerSub: Subscription = storageForConsumer
    .storeObservable
    .pipe(
        filter(
            (num) => num % 2 !== 0
        ),
        map(
            (num) => num * 5
        )
    )
    .subscribe({
        next: (data) => console.log('received: ' + data)
    })
setTimeout(
    () => consumerSub.unsubscribe(),
    10000
)

//provider

let data = 1
const providerStorage = Storage.create()
setInterval(
    () => {
        console.log('publishing: ' + data);
        providerStorage.publish(data)
        data++
    }, 1000
)