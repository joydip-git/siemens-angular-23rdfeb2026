import { Observable } from "rxjs";
import { ApiResponse } from "../models/api-response";
import { Product } from "../models/product";
import { IProductServiceContract } from "./product-service-contract";
import { HttpClient } from "@angular/common/http";
import { PRODUCT_API_URL } from "../../../config/constants";
import { inject, Injectable } from "@angular/core";

@Injectable()
export class ProductService implements IProductServiceContract {
    private http = inject(HttpClient)

    getProductById(id: number): Observable<ApiResponse<Product>> {
        return this.http.get<ApiResponse<Product>>(`${PRODUCT_API_URL}/${id}`)
    }

    addProduct(p: Product): Observable<ApiResponse<Product[]>> {
        return this.http.post<ApiResponse<Product[]>>(PRODUCT_API_URL, p)
    }

    updateProduct(id: number, p: Product): Observable<ApiResponse<Product[]>> {
        return this.http.put<ApiResponse<Product[]>>(`${PRODUCT_API_URL}/${id}`, p)
    }

    deleteProduct(id: number): Observable<ApiResponse<Product[]>> {
        return this.http.delete<ApiResponse<Product[]>>(`${PRODUCT_API_URL}/${id}`)
    }
    
    getProducts(): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
    }
}