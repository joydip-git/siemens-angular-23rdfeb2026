import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideProductServiceProvider } from './config/constants';
import { AuthService } from './modules/auth/services/auth-service';
import { TokenService } from './modules/shared/services/token-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideProductServiceProvider(),
    provideRouter(routes),
    AuthService,
    TokenService
  ]
};
