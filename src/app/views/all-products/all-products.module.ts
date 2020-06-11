import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';


import { AllProductsComponent } from './all-products.component';
import { AllProductsRoutingModule } from './all-products-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    CarouselModule,
    AllProductsRoutingModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ AllProductsComponent ]
})
export class AllProductsModule { }
