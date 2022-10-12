import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LogInComponent } from './log-in/log-in.component';
//import { RegisterFormComponent } from './register-form/register-form.component';
 
 

const routes: Routes = [
  //{path:'login',component:LogInComponent},
 // {path:'register',component:RegisterFormComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
