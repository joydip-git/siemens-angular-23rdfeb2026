import { Component, signal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  productId = signal(0)

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const id = Number(snapshot.params['id'])
    console.log(id);
    this.productId.set(id)
  }

  goto() {
    this
      .router
      .navigate(
        ['/products/edit'],
        {
          queryParams: {
            id: this.productId()
          }
        }
      )
  }
}
