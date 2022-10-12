import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
 import { AuthGuard } from './authGard/auth.guard';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
 

const routes: Routes = [
  {path:"products" , component:AllProductsComponent},
  {path:"details/:id" , component:ProductsDetailsComponent},
  {path:'cart' , component:CartComponent},
  // {
  //   path:'auth', 
  //   loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  //  }, 
    {path:'auth/log',component:LogInComponent},
 {path:'auth/register',component:RegisterFormComponent},
  {
   path:'about', 
   loadChildren:()=>import('./about-us/about-us.module').then(m=>m.AboutUsModule), 
   canActivate:[AuthGuard]
  },  
  {
    path:'contact', 
    loadChildren:()=>import('./contact-us/contact-us.module').then(m=>m.ContactUsModule),
    canActivate:[AuthGuard]
   },
   {
    path:'delivery', 
    loadChildren:()=>import('./delivery/delivery.module').then(m=>m.DeliveryModule),
    canActivate:[AuthGuard]
   },

  //  {path:'auth/log' , component:LogInComponent},
  // {path:'auth/register' , component:RegisterFormComponent},
  
  //   path:'dashboard', 
  //  loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),
  {path:'dashboard',component:AdminComponent,
   // canActivate:[AuthGuard]
  },
  //{path:"dashboard" , component:AdminComponent},
  {path:"**" , redirectTo:"products" , pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
