import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostList } from './components/post-list/post-list';
import { PostService } from './services/post-service';
import { PostDetail } from './components/post-detail/post-detail';
import { POST_SERVICE, POST_SERVICE_TYPE } from '../../config/constants';



@NgModule({
  declarations: [
    PostList,
    PostDetail
  ],
  imports: [
    CommonModule
  ],
  exports: [PostList, PostDetail],
  //providers: [PostService]
  providers: [
    // {
    //   provide: PostService,
    //   useClass: PostService
    // },
    {
      provide: POST_SERVICE,
      useClass: POST_SERVICE_TYPE
      //useExisting: PostService
      // useFactory: () => {
      //   return new PostService()
      // }
      //useValue:new PostService()
    }
  ]
})
export class PostsModule { }
