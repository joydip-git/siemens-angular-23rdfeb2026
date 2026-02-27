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

    getProducts(): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
    }
}