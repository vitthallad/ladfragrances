import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';

import { KumkumComponent } from './kumkum.component';
import { KumkumRoutingModule } from './kumkum-routing.module';


@NgModule({
  declarations: [KumkumComponent],
  imports: [
    FormsModule,
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    CarouselModule,
    KumkumRoutingModule,
    ButtonsModule.forRoot()
  ]
})
export class KumkumModule { }
