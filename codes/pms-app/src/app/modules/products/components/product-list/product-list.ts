import { Component, signal } from '@angular/core';
import { productRecords } from '../../../../../data/product-records';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = signal(productRecords)
}
