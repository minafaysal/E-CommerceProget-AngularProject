import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAllProductsComponent } from './components/all-products/all-products.component';
import { AdminProductsDetailsComponent } from './components/products-details/products-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdminProductComponent } from './components/product/product.component';
import { SharedAdminModule } from '../admin-shared/shared.module';



@NgModule({
  declarations: [
    AdminAllProductsComponent,
    AdminProductsDetailsComponent,
    AdminProductComponent
  ],
  imports: [
    CommonModule,
    SharedAdminModule,BrowserModule
  ]
})
export class ProductsAdminModule { }
