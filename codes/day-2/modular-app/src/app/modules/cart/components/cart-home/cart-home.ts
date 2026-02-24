import { Component } from "@angular/core";

@Component({
    selector: 'app-cart-home',
    templateUrl: './cart-home.html',
    standalone: false
})
export class CartHome {
    constructor() {
        console.log('cart component object created');
    }
}