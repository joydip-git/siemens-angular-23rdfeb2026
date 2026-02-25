import { Component, signal } from '@angular/core';
import { productRecords } from '../../../../../data/product-records';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = signal<Product[]>([])
  constructor() {
    setTimeout(
      () => {
        this.products.set(productRecords)
      },
      3000
    )
  }
}
