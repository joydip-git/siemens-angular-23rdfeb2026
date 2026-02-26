import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './components/product-list/product-list';
import { ProductDetail } from './components/product-detail/product-detail';
import { AddProduct } from './components/add-product/add-product';
import { EditProduct } from './components/edit-product/edit-product';
//import { ProductService } from './services/product-service';
import { provideProductServiceProvider } from '../../config/constants';

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
  exports: [ProductList],
  providers: [
    //ProductService
    provideProductServiceProvider()
  ]
})
export class ProductsModule { }
