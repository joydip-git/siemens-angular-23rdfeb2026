import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './components/product-list/product-list';
import { ProductDetail } from './components/product-detail/product-detail';
import { AddProduct } from './components/add-product/add-product';
import { EditProduct } from './components/edit-product/edit-product';
import { FilterProduct } from './components/filter-product/filter-product';
import { ProductContainer } from './components/product-container/product-container';
import { ProductFilterPipe } from './pipes/product-filter-pipe';
import { RouterLink } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductList,
    ProductDetail,
    AddProduct,
    EditProduct,
    FilterProduct,
    ProductContainer,
    ProductFilterPipe
  ],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  exports: [],
  providers: []
})
export class ProductsModule { }
