import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { WebComponent } from './web.component';
import { WebRoutingModule } from './web/web-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    WebComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WebRoutingModule,
    RouterModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class WebModule { }
