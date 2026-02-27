import { Component, Inject, input, OnDestroy, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/constants';
import { IProductServiceContract } from '../../services/product-service-contract';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit, OnDestroy {
  private sub?: Subscription;

  filterText = input<string>('')

  products = signal<Product[]>([])
  errorInfo = signal<string>('')
  isRequestOver = signal<boolean>(false)

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private ps: IProductServiceContract) {

  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  
  ngOnInit(): void {
    this.fetchProducts()
  }

  private fetchProducts() {
    this.sub = this.ps
      .getProducts()
      .subscribe({
        next: (response) => {
          if (response.data !== null) {
            this.products.set(response.data)
            this.errorInfo.set('')
            this.isRequestOver.set(true)
          } else {
            this.products.set([])
            this.errorInfo.set(response.message)
            this.isRequestOver.set(true)
          }
        },
        error: (err) => {
          this.products.set([])
          this.errorInfo.set(err.message)
          this.isRequestOver.set(true)
        }
      })
  }
}
