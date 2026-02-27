import { Routes } from '@angular/router';
import { ProductContainer } from './modules/products/components/product-container/product-container';
import { ProductDetail } from './modules/products/components/product-detail/product-detail';
import { EditProduct } from './modules/products/components/edit-product/edit-product';
import { AddProduct } from './modules/products/components/add-product/add-product';
import { Home } from './modules/shared/components/home/home';
import { PageNotFound } from './modules/shared/components/page-not-found/page-not-found';
import { Login } from './modules/auth/components/login/login';
import { Registration } from './modules/auth/components/registration/registration';

export const routes: Routes = [
    {
        path: 'products',
        children: [
            {
                path: '', component: ProductContainer
            },
            {
                path: 'view/:id', component: ProductDetail
            },
            {
                // path: 'edit/:id', component: EditProduct
                path: 'edit', component: EditProduct
            },
            {
                path: 'add', component: AddProduct
            }
        ]
    },
    {
        path: 'login', component: Login
    },
    {
        path: 'register', component: Registration
    }
    ,
    {
        path: 'home', component: Home
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: '**', component: PageNotFound
    }
];
