import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-product-container',
  standalone: false,
  templateUrl: './product-container.html',
  styleUrl: './product-container.css',
})
export class ProductContainer {
  productNameText = signal('')
  updateProductNameText(newText: string) {
    this.productNameText.set(newText)
  }
}
