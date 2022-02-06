import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { UserService } from './../services/user/user.service';
import { PostsService } from './../services/posts/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postsList:any;
  errorMsg:any;
  constructor(private PostsService:PostsService,private router:Router,private activatedRoute:ActivatedRoute) { }
 
  
  ngOnInit(): void {
    this.PostsService.getPosts().subscribe(
      data=>{
        this.postsList=data;
      },
      errorData=>{
        this.errorMsg=errorData;
      }
     )
  }
  goToPost(post:any){
    this.router.navigate(["/postsDetail",post.id])
  }
 
}

