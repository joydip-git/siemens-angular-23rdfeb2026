import { NgModule } from "@angular/core";
import { CartHome } from "./components/cart-home/cart-home";
import { CartService } from "./services/cart-service";

@NgModule({
    //register components, pipes and directives
    declarations: [CartHome],
    //other modules
    imports: [],
    //services
    providers: [CartService],
    //to export the registered components, pipes and directives and modules (not services)
    exports: [CartHome]
})
export class CartModule {
    constructor() {
        console.log('cart module object created');
    }
}