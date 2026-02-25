import { Component, Inject } from '@angular/core';
import { IDataService, PostService } from '../../services/post-service';
import { POST_SERVICE } from '../../../../config/constants';

@Component({
  selector: 'app-post-detail',
  standalone: false,
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
  //providers: [PostService]
})
export class PostDetail {
  private ps: PostService;
  constructor(@Inject(POST_SERVICE) ps: IDataService) {
    this.ps = ps
  }
}
