import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Inject, inject } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "./token-service";

export const TokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    const tokenSvc = inject(TokenService)
    const token = tokenSvc.getToken()
    const tokenReq = req.clone({
        headers: req.headers.append('Authorization', `Bearer ${token}`)
    })
    return next(tokenReq)
}

// class TokenReqInterceptor implements HttpInterceptor{
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         const tokenSvc = inject(TokenService)
//         const token = tokenSvc.getToken()
//         const tokenReq = req.clone({
//             headers: req.headers.append('Authorization', `Bearer ${token}`)
//         })
//         return next.handle(tokenReq)
//     }

// }