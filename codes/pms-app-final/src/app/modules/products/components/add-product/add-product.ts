import { Component, Inject, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { IProductServiceContract } from '../../services/product-service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct implements OnDestroy {
  private formBuilder = inject(FormBuilder)
  private router = inject(Router)
  private sub?: Subscription;
  productForm: FormGroup;

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private ps: IProductServiceContract) {
    this.productForm = this.formBuilder.group({
      productId: [0],
      productName: [''],
      productCode: [''],
      description: [''],
      releaseDate: [''],
      price: [0],
      starRating: [0],
      imageUrl: ['']
    })
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  submit() {
    if (window.confirm('submit data?')) {
      const product = this.productForm.value as Product
      this.sub = this.ps.addProduct(product).subscribe({
        error: (err) => { },
        next: (response) => {
          if (response.data !== null) {
            window.alert('product submitted successfully')
            this.router.navigate(['/products'])
          } else {
            window.alert('submission failed: ' + response.message)
          }
        }
      })
    }

  }
}
