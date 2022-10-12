import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent  } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AdminSpinnerComponent   } from './components/spinner/spinner.component';
import { AdminSelectComponent  } from './components/select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminSpinnerComponent,
    AdminSelectComponent
  ],
  imports: [
    CommonModule,
    BrowserModule ,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports : [
    AdminHeaderComponent,
    BrowserModule ,
    ReactiveFormsModule,
    AdminSpinnerComponent,
    RouterModule,
    FormsModule,
    AdminSelectComponent
  ]
})
export class SharedAdminModule { }
