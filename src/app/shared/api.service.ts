import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { TutorialData } from './tutorial.model';
import { SignupData } from './tutorial.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  editTuto(tutorialModelObj: TutorialData) {
    throw new Error('Method not implemented.');
  }
  deleteTuto(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private _http:HttpClient) { }
  //now post,get,put,delete
  postsignup(data:any){
    return  this._http.post<any>("http://localhost:3000/signup",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  //create tutorial using post
  postTutorial(data:any){
    return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  //get method
  getTutorial(){
    return this._http.get<any>("http://localhost:3000/posts"+"/" )
  }
  getsignup(){
    return this._http.get<any>("http://localhost:3000/signup"+"/" )
  }
  
  //update

  updateTutorial(data:any,id:number){
    console.log(id)
    return this._http.put("http://localhost:3000/posts" +  "/" +  id,data,{headers : new HttpHeaders({ 'Content-Type': 'application/json' })})
    
  }
  updatesignup(signupdata:any,id:number){
    console.log(id)
    return this._http.put("http://localhost:3000/signup" +  "/" +  id,signupdata,{headers : new HttpHeaders({ 'Content-Type': 'application/json' })})
    
  }
  
  deleteTutorial(id:number){
    return this._http.delete("http://localhost:3000/signup" + "/" + id)
  
  }
  
  
  
}
