import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedAdminModule } from './admin-shared/shared.module';
import { CartsAdminModule } from './admin-carts/carts.module';
import { ProductsAdminModule } from './admin-products/products.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
     AdminRoutingModule,
    SharedAdminModule,CartsAdminModule,ProductsAdminModule,BrowserModule,CommonModule
  ]
})
export class AdminModule { }
