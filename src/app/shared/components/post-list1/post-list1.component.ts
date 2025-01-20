import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/todo.service';
import { Ipost } from '../../models/posts';

@Component({
  selector: 'app-post-list1',
  templateUrl: './post-list1.component.html',
  styleUrls: ['./post-list1.component.scss']
})
export class PostList1Component implements OnInit {

  //  private _postsService : PostsService = new PostsService();
    postsArr !: Array<Ipost>
  
   constructor(
    private _postsService : PostsService
   ) { }
 
   ngOnInit(): void {
    this.postsArr = this._postsService.fetchAllPosts()
   }

   onLastRemove(){
    this._postsService.removeLastPost()
   }

}
