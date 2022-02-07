import { RegisterService } from './register.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../Shared Classes & Types/user';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  socialMedia:any = ['Facebook','Twitter','Google']
  confirmPass:string;
  pass:string;
  constructor(private register:RegisterService) {
    this.confirmPass = '';
    this.pass = '';
   }
  userModel:User = new User("","","","Facebook")
  ngOnInit(): void {
  }
  getConfirm(event:any){
    this.confirmPass = event.target.value;
    console.log(this.confirmPass)
  }
  getPass(event:any){
    this.pass = event.target.value;
    console.log(this.pass)
  }

  onSubmit(){
    console.log(this.userModel);
    this.register.register(this.userModel).subscribe(res=>
    {
      console.log("success",res);
    },
    error=>
    {
      console.log("error",error);
    
    })
  }

}




