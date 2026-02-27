import { Observable } from "rxjs";
//import { productRecords } from "../../../../data/product-records";
import { ApiResponse } from "../models/api-response";
import { Product } from "../models/product";
import { IProductServiceContract } from "./product-service-contract";
import { HttpClient } from "@angular/common/http";
import { PRODUCT_API_URL } from "../../../config/constants";
import { inject, Injectable } from "@angular/core";

@Injectable()
export class ProductService implements IProductServiceContract {

    //inject() method can be called during field initialization (As the following) or in the constructor
    private http = inject(HttpClient)

    // constructor(private http: HttpClient) {
    //  or
    // this.http = inject(HttpClient)
    // }

    getProducts(): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
    }
    
    // getProducts() {
    //     return [...productRecords]
    // }
}