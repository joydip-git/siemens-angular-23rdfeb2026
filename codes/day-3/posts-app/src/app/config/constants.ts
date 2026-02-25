import { Provider } from "@angular/core"
import { PostService } from "../modules/posts/services/post-service"

export const POST_SERVICE = 'POST_SERVICE'
export const POST_SERVICE_TYPE = PostService

//Type t = type(PostService)

export function providePostService(): Provider {
    return { provide: POST_SERVICE, useClass: POST_SERVICE_TYPE }
}