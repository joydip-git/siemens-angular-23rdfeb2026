import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './components/product-list/product-list';
import { ProductDetail } from './components/product-detail/product-detail';
import { AddProduct } from './components/add-product/add-product';
import { EditProduct } from './components/edit-product/edit-product';
//import { ProductService } from './services/product-service';
import { provideProductServiceProvider } from '../../config/constants';
import { FilterProduct } from './components/filter-product/filter-product';
import { ProductContainer } from './components/product-container/product-container';
import { ProductFilterPipe } from './pipes/product-filter-pipe';

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
    CommonModule
  ],
  exports: [ProductContainer],
  providers: [
    //ProductService
    provideProductServiceProvider()
  ]
})
export class ProductsModule { }
