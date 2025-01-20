import { Injectable } from "@angular/core";
import { Ipost } from "../models/posts";








@Injectable({
    providedIn : 'root'
})
export class PostsService{
    postsArr : Array<Ipost> = [
        {
            "userId": 1,
            "id" : 1,
            "title" : "teacher",
            "body" : "lorem ipsum"
        },
        {
            "userId" : 2,
            "id" : 2,
            "title" : "doctor",
            "body" : "cuhwdujc djhcisdhco"
        },
        {
            "userId" : 1,
            "id" : 4,
            "title" : "police",
            "body" : "ndcdkmc jncdkmc"
        },
        {
            "userId" : 2,
            "id" : 3,
            "title" : "soldier",
            "body" : "nckdjcn nc kdjsnc "
        }
    ]

    constructor(){}
    //ToDo data and its functions 

    //fetch all posts
        fetchAllPosts():  Array<Ipost> {
                return this.postsArr
        }


    //create new post
        addPost(post: Ipost){
            //API call to add post object in DB
            this.postsArr.push(post)
        }

    //remove post
        removePost(id: number){
            //it will make a APL call to remove post object
            let removeIndex = this.postsArr.findIndex(post => post.id === id);
            this.postsArr.splice(removeIndex, 1)
        }

        removeLastPost(){
            this.postsArr.pop()
        }
}


