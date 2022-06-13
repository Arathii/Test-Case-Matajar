import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { TutorialData } from '../shared/tutorial.model';


@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],


})
export class AddTutorialComponent implements OnInit {
  formValue!: FormGroup
  tutorialModelObj :TutorialData = new TutorialData;
  allTutorialData: any;

  constructor(private formBuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      description: [''],
      email: ['',Validators.required],
      
      mobile: ['',Validators.required],
      
    })
    //this.getAllData()
  }
  
 addTuto(){
  this.tutorialModelObj.name = this.formValue.value.name;
  this.tutorialModelObj.description = this.formValue.value.description;
  this.tutorialModelObj.email = this.formValue.value.email;
  
  this.tutorialModelObj.mobile = this.formValue.value.mobile;
  this.tutorialModelObj.status = this.formValue.value.status;
  debugger
  this.api.postTutorial(this.tutorialModelObj).subscribe(res=>{
    console.log(res);
    alert("tutorial submitted succesfully")
    this.formValue.reset()
  },
  ()=>{
    alert("something went wrong")
  }
  )
 } 
//  getAllData() {
//   this.api.getTutorial().subscribe(res => {
//     this.allTutorialData = res;
//   })
// }



}



