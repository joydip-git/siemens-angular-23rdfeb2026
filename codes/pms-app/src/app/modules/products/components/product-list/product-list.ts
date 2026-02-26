import { Component, Inject, input, OnDestroy, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product';
//import { ProductService } from '../../services/product-service';
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
  filterText = input<string>('')

  products = signal<Product[]>([])
  errorInfo = signal<string>('')
  isRequestOver = signal<boolean>(false)

  // private ps: ProductService;
  // constructor(ps: ProductService) {
  //   this.ps = ps
  //   this.products.set(this.ps.getProducts())
  // }
  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private ps: IProductServiceContract) {
    //this.fetchProducts()
  }
  ngOnDestroy(): void {
    //release resources
  }
  //executed ONLY once during the lifecycle
  ngOnInit(): void {
    this.fetchProducts()
  }



  private fetchProducts() {
    this.ps
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
