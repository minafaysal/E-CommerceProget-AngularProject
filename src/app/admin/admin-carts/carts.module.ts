import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCartComponent } from './components/cart/cart.component';
import { SharedAdminModule } from '../admin-shared/shared.module';



@NgModule({
  declarations: [
    AdminCartComponent
  ],
  imports: [
    CommonModule,
    SharedAdminModule
  ]
})
export class CartsAdminModule { }
