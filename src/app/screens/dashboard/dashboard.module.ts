import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CarProductsComponent } from '../car-products/car-products.component';
import { CategoryComponent } from '../category/category.component';
import { HomeComponent } from '../home/home.component';
import { LoadComponent } from '../load/load.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    CategoryComponent,
    CarProductsComponent,
    LoadComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
