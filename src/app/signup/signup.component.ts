import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { SignupData } from '../shared/tutorial.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  [x: string]: any;
  signupForm!: FormGroup
  signupmodelObj :SignupData = new SignupData;
  allsignupData: any;
  SignupData: any;
  
  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      First_Name:new FormControl('',[Validators.required]),
      Last_Name:new FormControl(null,Validators.required),
      Email_address:new FormControl(null,Validators.required),
      Password:new FormControl(null,Validators.required)
    })
  }
//Make method to create user

signUp(){
  this.signupmodelObj.First_Name = this.signupForm.value.First_Name;
  this.signupmodelObj.Last_Name = this.signupForm.value.Last_Name;
  this.signupmodelObj.Email_address = this.signupForm.value.Email_address;
  
  this.signupmodelObj.Password = this.signupForm.value.Password;
  
  debugger
  this.api.postsignup(this.signupmodelObj).subscribe((res: any)=>{
    console.log(res);
    alert("data submitted succesfully")
    this.signupForm.reset()
  
  
 //this._http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe(res=>{
 //  alert("sign up successful");
   //this.signupForm.reset();
   this.router.navigate(['login'])
 },()=>{
   alert("something went wrong")
 })
}
}

