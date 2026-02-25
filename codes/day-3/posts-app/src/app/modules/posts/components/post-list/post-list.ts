import { Component, Inject, signal } from '@angular/core';
import { IDataService, PostService } from '../../services/post-service';
import { Post } from '../../models/post';
import { POST_SERVICE } from '../../../../config/constants';
import { Observable, Observer, Subscription } from 'rxjs';

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
  //private ps: PostService;
  posts = signal<Post[]>([])

  //use this ctor when token name is same as that of the class name
  //constructor(ps: PostService) {

  //use this ctor when token name is same as that of the class name
  constructor(@Inject(POST_SERVICE) private ps: IDataService) {
    //this.ps = new PostService()
    //this.ps = ps;
    //this.posts.set(this.ps.getPosts())
    const obs: Observable<Post[]> = this.ps.getPosts()
    const observer: Observer<Post[]> = {
      next: (data: Post[]) => {
        this.posts.set(data)
      },
      error: (err) => {
        console.log(err.message);
      },
      complete: () => {
        console.log('after next');
      }
    }
    obs.subscribe(observer)

    //const subs: Subscription = obs.subscribe(observer)
    // setTimeout(
    //   () => subs.unsubscribe(), 5000
    // )
  }
}
