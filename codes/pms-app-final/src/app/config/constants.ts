import { Provider } from "@angular/core"
import { ProductService } from "../modules/products/services/product-service"

export const PRODUCT_SERVICE_TOKEN = 'PRODUCT_SERVICE_TOKEN'
export const PRODUCT_SERVICE_TYPE = ProductService

export const PRODUCT_API_URL = 'http://localhost:3003/products'
export const AUTH_API_URL = 'http://127.0.0.1:3003/auth'

export const provideProductServiceProvider = (): Provider => {
    return {
        provide: PRODUCT_SERVICE_TOKEN,
        useClass: PRODUCT_SERVICE_TYPE
    }
}