import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-filter-product',
  standalone: false,
  templateUrl: './filter-product.html',
  styleUrl: './filter-product.css',
})
export class FilterProduct {
  productName = signal('')
  productNameChanged = output<string>()

  triggerProductNameChanged(newName: string) {
    this.productName.set(newName)
    this.productNameChanged.emit(this.productName())
  }
}
