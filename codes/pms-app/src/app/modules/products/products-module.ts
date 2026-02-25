import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './components/product-list/product-list';
import { ProductDetail } from './components/product-detail/product-detail';
import { AddProduct } from './components/add-product/add-product';
import { EditProduct } from './components/edit-product/edit-product';

@NgModule({
  declarations: [
    ProductList,
    ProductDetail,
    AddProduct,
    EditProduct
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductList]
})
export class ProductsModule { }
