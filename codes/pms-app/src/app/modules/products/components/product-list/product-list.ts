import { Component, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = signal<Product[]>([])

  private ps: ProductService;
  constructor(ps: ProductService) {
    this.ps = ps
    this.products.set(this.ps.getProducts())
  }
}
