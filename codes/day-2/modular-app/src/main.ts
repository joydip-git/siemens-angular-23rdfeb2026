import { PlatformRef } from "@angular/core";
import { platformBrowser } from "@angular/platform-browser";
import { AppModule } from "./app/app-module";

//The Angular platform is the entry point for Angular on a web page. Each page has exactly one platform. Services (such as reflection) which are common to every Angular application running on the page are bound in its scope. A page's platform is initialized implicitly when a platform is created using a platform factory such as PlatformBrowser, or explicitly by calling the createPlatform() function.
const platform: PlatformRef = platformBrowser()

platform.bootstrapModule(AppModule)