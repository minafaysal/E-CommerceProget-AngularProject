import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LogInComponent,RegisterFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
       BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLinkActive,AuthRoutingModule
    
    
 ,
   
    RouterLink,
    HttpClientModule
  ],
  exports:[
    LogInComponent,AuthRoutingModule
  ]
})
export class AuthModule { }
