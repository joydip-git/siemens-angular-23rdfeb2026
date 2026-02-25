import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { providePostService } from './config/constants';
// import { PostService } from './modules/posts/services/post-service';
// import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    //provideHttpClient(),    
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    //PostService
    //providePostService()
  ]
};
