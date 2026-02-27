import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/constants';
import { IProductServiceContract } from '../../services/product-service-contract';
import { Product } from '../../models/product';

@Component({
  selector: 'app-edit-product',
  standalone: false,
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct implements OnInit {
  private formBuilder = inject(FormBuilder)
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private sub?: Subscription;

  editForm?: FormGroup;
  product?: Product;
  errorInfo = ''
  isRequestOver = false

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private ps: IProductServiceContract) {
  }

  ngOnInit(): void {
    const snapshot = this.route.snapshot
    if (snapshot.queryParams['id']) {
      const id = (+snapshot.queryParams['id'])
      console.log(id);
      this.sub = this.ps.getProductById(id)
        .subscribe({
          next: (response) => {
            if (response.data !== null) {
              this.product = response.data
              this.errorInfo = ''
              this.isRequestOver = true
            } else {
              this.product = undefined
              this.errorInfo = response.message
              this.isRequestOver = true
            }
          },
          error: (err) => {
            this.product = undefined
            this.errorInfo = err.message
            this.isRequestOver = true
          },
          complete: () => {
            this.editForm = this.formBuilder.group({
              productId: [this.product?.productId],
              productName: [this.product?.productName],
              productCode: [this.product?.productCode],
              description: [this.product?.description],
              releaseDate: [this.product?.releaseDate],
              price: [this.product?.price],
              starRating: [this.product?.starRating],
              imageUrl: [this.product?.imageUrl]
            })
          }
        })
    }
  }
}
