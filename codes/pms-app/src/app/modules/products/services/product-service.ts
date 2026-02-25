import { productRecords } from "../../../../data/product-records";

export class ProductService {
    getProducts() {
        return [...productRecords]
    }
}