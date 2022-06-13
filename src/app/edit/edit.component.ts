import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { TutorialData } from '../shared/tutorial.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm = new FormGroup({
    First_Name: new FormControl(''),
    Last_Name: new FormControl(''),
    Email_address: new FormControl(''),
    
    Password: new FormControl(''),
    
  });
  
  signupForm!: FormGroup
  //signupmodelObj :SignupData = new SignupData;
  allsignupData: any;
  SignupData: any;
  //data: any;
  signupmodelObj: any;
  
  
  

  constructor(private formBuilder:FormBuilder,private api:ApiService, public router: Router) {
    let navigation = router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {

      this.SignupData= navigation.extras.state['dataTut'];
      console.log(this.SignupData)
      this.editForm.patchValue({
        //formControlName: this.data.name,
        //formControlName: this.data.description,
        //formControlName: this.data.email,
        //formControlName: this.data.mobile,
      id: new FormControl(this.SignupData.id),
      First_Name: new FormControl(this.SignupData.First_Name),
      Last_Name: new FormControl(this.SignupData.Last_Name),
      Email_address: new FormControl(this.SignupData.Email_address),
      
      Password: new FormControl(this.SignupData.Password),
      
 
      });

    }}
    
  ngOnInit(): void {
    //console.log(this.data.name);
    this.editForm = this.formBuilder.group({
      //id: new FormControl(this.data.id),
      First_Name: new FormControl(this.SignupData.First_Name),
      Last_Name: new FormControl(this.SignupData.Last_Name),
      Email_address: new FormControl(this.SignupData.Email_address,Validators.required),
     
      Password: new FormControl(this.SignupData.Password,Validators.required),
      
    })
 
  }
  
 
  updatesignup(){
  this.signupmodelObj.id = this.SignupData.id;
  this.signupmodelObj.First_Name =this.editForm.value.First_Name;
  this.signupmodelObj.Last_Name = this.editForm.value.Last_Name;
  this.signupmodelObj.Email_address = this.editForm.value.Email_address;
  
  this.signupmodelObj.Password =this.editForm.value.Password;
 
  debugger
  this.api.updatesignup(this.signupmodelObj,this.SignupData.id).subscribe(res=>{
    console.log(res);
    alert("data updated succesfully");
    this.editForm.reset();
    this.getAllData();
  },
  ()=>{
    alert("something went wrong")
  }
  )
 }
 getAllData() {
  this.api.getsignup().subscribe(res => {
    this.allsignupData = res;
  })
} 
 
 

}
