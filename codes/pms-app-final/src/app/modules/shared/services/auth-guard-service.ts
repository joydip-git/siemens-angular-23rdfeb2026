import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { TokenService } from "./token-service";

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => {
    const tokenSvc = inject(TokenService)
    const router = inject(Router)

    const token = tokenSvc.getToken()
    if (token !== null) {
        return true
    } else {       
        const url = state.url.replace('/', '')
        router.navigate(['/login'], {
            queryParams: {
                returnUrl: url
            }
        })
        return false;
    }
}

// class AuthGuardService implements CanActivate{
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
//         throw new Error("Method not implemented.");
//     }

// }