import { Component, signal } from '@angular/core';
import { PostsModule } from "./modules/posts/posts-module";
// import { PostService } from './modules/posts/services/post-service';

@Component({
  selector: 'app-root',
  imports: [PostsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // private ps: PostService;
  // constructor(ps: PostService) {
  //   this.ps = ps
  // }
}
