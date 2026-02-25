import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostList } from './components/post-list/post-list';
import { PostDetail } from './components/post-detail/post-detail';
import { providePostService } from '../../config/constants';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
// import { POST_SERVICE, POST_SERVICE_TYPE, providePostService } from '../../config/constants';

@NgModule({
  declarations: [
    PostList,
    PostDetail
  ],
  imports: [
    CommonModule, //HttpClientModule
  ],
  exports: [PostList, PostDetail],
  //providers: [PostService]
  providers: [
    //provideHttpClient(),
    providePostService()
    // {
    //   provide: PostService,
    //   useClass: PostService
    // },
    // {
    //   provide: POST_SERVICE,
    //   useClass: POST_SERVICE_TYPE
    //   //useExisting: PostService
    //   // useFactory: () => {
    //   //   return new PostService()
    //   // }
    //   //useValue:new PostService()
    // }
  ]
})
export class PostsModule { }
