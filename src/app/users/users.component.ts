import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private UserService:UserService) { }
  userList:any;
  errorMsg:any;
  ngOnInit(): void {
   this.UserService.getUsers().subscribe(
     data=>
     {
       this.userList=data;
     },
     errorData=>
     {
       this.errorMsg=errorData;
     }
   )
  }

}
