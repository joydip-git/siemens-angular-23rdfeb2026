import { Component, Inject, signal } from '@angular/core';
import { IDataService, PostService } from '../../services/post-service';
import { Post } from '../../models/post';
import { POST_SERVICE } from '../../../../config/constants';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
  // providers: [
  //   PostService
  //   // {
  //   //   provide: PostService,
  //   //   useClass: PostService
  //   // }
  // ]
})
export class PostList {
  private ps: PostService;
  posts = signal<Post[]>([])

  //use this ctor when token name is same as that of the class name
  //constructor(ps: PostService) {

  //use this ctor when token name is same as that of the class name
  constructor(@Inject(POST_SERVICE) ps: IDataService) {
    //this.ps = new PostService()
    this.ps = ps;
    this.posts.set(this.ps.getPosts())
  }
}
