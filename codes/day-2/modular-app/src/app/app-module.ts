import { NgModule } from "@angular/core";
import { CartModule } from "./modules/cart/cart-module";
import { App } from "./app";
import { BrowserModule } from "@angular/platform-browser";

//BrowserModule: Exports required infrastructure for all Angular apps. Included by default in all Angular apps created with the CLI new command

@NgModule({
  declarations: [App],
  imports: [CartModule, BrowserModule],
  exports: [],
  providers: [],
  //The set of components that are bootstrapped when this module is bootstrapped.
  bootstrap: [App]
})
export class AppModule {
  constructor() {
    console.log('app module object created');
  }
}