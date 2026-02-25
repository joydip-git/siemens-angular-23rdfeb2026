import { Component } from '@angular/core';
import { ProductsModule } from './modules/products/products-module';

@Component({
  selector: 'app-root',
  imports: [ProductsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  
}
