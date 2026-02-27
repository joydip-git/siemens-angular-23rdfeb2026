import { Observable } from "rxjs";
import { ApiResponse } from "../models/api-response";
import { Product } from "../models/product";

export interface IProductServiceContract {
    getProducts(): Observable<ApiResponse<Product[]>>;
}