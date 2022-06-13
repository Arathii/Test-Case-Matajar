import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import {EditComponent} from './edit/edit.component'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TutorialDashComponent } from './tutorial-dash/tutorial-dash.component';


const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'tutorialdash',component:TutorialDashComponent},
  {path:'addtutorial',component:AddTutorialComponent},
  {path:'edit',component:EditComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
