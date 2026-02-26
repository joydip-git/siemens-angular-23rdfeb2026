import { Component } from '@angular/core';
//import { ProductsModule } from './modules/products/products-module';
import { RouterOutlet } from '@angular/router';
import { ProductsModule } from './modules/products/products-module';
import { DashBoard } from "./modules/shared/components/dash-board/dash-board";

@Component({
  selector: 'app-root',
  // imports: [ProductsModule],
  imports: [ProductsModule, RouterOutlet, DashBoard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}
