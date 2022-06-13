import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { TutorialData } from '../shared/tutorial.model';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tutorial-dash',
  templateUrl: './tutorial-dash.component.html',
  styleUrls: ['./tutorial-dash.component.css']


})
export class TutorialDashComponent implements OnInit {


  formValue!: FormGroup
  tutorialModelObj: TutorialData = new TutorialData;
  allTutorialData: any;

  signupForm!: FormGroup
  //signupmodelObj :signupForm = new this.signupForm;
  allsignupData: any;
  
  
  constructor(private formBuilder: FormBuilder, private api: ApiService,public router: Router) { }

  ngOnInit(): void {
    
    this.signupForm = this.formBuilder.group({
      First_Name: [''],
      Last_Name: [''],
      Email_address: [''],
      
      Password: ['']
      //status:['']
    })
    this.getAllData()
    
  
  }
  

  getAllData() {
    this.api.getsignup().subscribe(res => {
      this.allsignupData = res;
      console.log(res);
    })
  }
  deleteTutorial(data: any) {
    this.api.deleteTutorial(data.id).subscribe(res => {
      alert("Tutorial deleted!!!");
      this.getAllData();
    })
  }
  editTutorial(data:any){
    this.router.navigate(["/edit"], {

      state: {dataTut : data },

    });
    
  }
  
  
  

  
}
