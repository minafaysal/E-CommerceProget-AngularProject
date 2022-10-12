import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCartComponent } from './admin-carts/components/cart/cart.component';
import { AdminAllProductsComponent } from './admin-products/components/all-products/all-products.component';
import { AdminProductsDetailsComponent } from './admin-products/components/products-details/products-details.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {path:"" , component:AdminComponent},
  // {path:"details/:id" , component:AdminProductsDetailsComponent},
  // {path:'cart' , component:AdminCartComponent},
  {path:"products" , component:AdminAllProductsComponent},
  {path:"details/:id" , component:AdminProductsDetailsComponent},
  {path:"cart" , component:AdminCartComponent},
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
