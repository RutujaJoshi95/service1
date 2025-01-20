import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/todo.service';
import { Ipost } from '../../models/posts';

@Component({
  selector: 'app-post-list2',
  templateUrl: './post-list2.component.html',
  styleUrls: ['./post-list2.component.scss']
})
export class PostList2Component implements OnInit {

  //  private _postsService : PostsService = new PostsService();
  postsArr !: Array<Ipost>
   constructor(
    private _postsService : PostsService
   ) { }
 
   ngOnInit(): void {
    this.postsArr = this._postsService.fetchAllPosts()
   }

}
