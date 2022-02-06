import { PostsService } from './../../services/posts/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  postId:any;
  postData: any;
  constructor(private PostsService:PostsService,private activatedRoute:ActivatedRoute, private postService:PostsService,private router:Router) {
    
   
   }
  ngOnInit(): void {
    this.PostsService.getPosts().subscribe(
      data=>{
        this.postData=data;
      },
      errorData=>{
        this.postData=errorData;
      }
     )
  }

}
