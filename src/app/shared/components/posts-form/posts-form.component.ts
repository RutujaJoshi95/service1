import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../../services/todo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.scss']
})
export class PostsFormComponent implements OnInit {
@ViewChild('postForm') postForm! : NgForm;
// private _postsService : PostsService = new PostsService()

  constructor(
    private _postsService : PostsService
  ) { }

  ngOnInit(): void {
  }
  onPostAdd(){
    let postObj = {...this.postForm.value, id : 123};
    console.log(postObj);
    this._postsService.addPost(postObj);
  }

}
