import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AdminModule } from './admin/admin.module';
import { AboutUsModule } from './about-us/about-us.module';
 import { DeliveryModule } from './delivery/delivery.module';
import { ContactUsModule } from './contact-us/contact-us.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartsModule,
    SharedModule,
    RouterModule,
    CommonModule,
    RouterModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterLinkActive,
    AuthModule,
    AuthRoutingModule, 
    AdminModule,
    AboutUsModule,
    ContactUsModule,
    DeliveryModule,BrowserModule,  
    RouterLink,
  
    AppRoutingModule,
   
  ],
  providers: [

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
