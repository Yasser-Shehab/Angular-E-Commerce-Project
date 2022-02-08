import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../validators/confirmpasswordValidator';
import { ForbiddenNameValidator } from '../validators/userNameValidator';

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.scss']
})
export class ReactiveRegisterComponent implements OnInit {
  products:any = ['Appels','Bananas','Mango']
  constructor(private fb:FormBuilder) { }

  registrationForm = this.fb.group({
    userName:['',[Validators.required,Validators.minLength(3),ForbiddenNameValidator(/admin|adminstrator./)]],
    userEmail:['',[Validators.email,Validators.required]],
    userPassword:['',[Validators.minLength(8),Validators.required,Validators.minLength(8)]],
    confirmPassword:[''],
    productPrice:[''],
    comments:this.fb.array([]),
    selectSocial:[''],
    subscribe:[false]

  },{validator:[ConfirmPasswordValidator]})
  get userName()
  {
    return this.registrationForm.get('userName');
  }
  get userEmail()
  {
    return this.registrationForm.get('userEmail');
  }
  get userPassword()
  {
    return this.registrationForm.get('userPassword');
  }
  get productPrice()
  {
    return this.registrationForm.get('productPrice');
  }

  get Usercomments()
  {
    return this.registrationForm.get("comments") as FormArray;
  }
  addUserComment()
  {
    this.Usercomments.push(this.fb.control(""))
  }

  setPriceValidation()
  {
    this.registrationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
      if(checkedValue)
      {
        this.productPrice?.setValidators(Validators.required)
      }
      else
      {
        this.productPrice?.clearValidators();
      }
      this.productPrice?.updateValueAndValidity();
      
    })
  }


  ngOnInit(): void {
  }

}
