import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';


import { GallaryComponent } from './gallary.component';
import { GallaryRoutingModule } from './gallary-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    CarouselModule,
    GallaryRoutingModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ GallaryComponent ]
})
export class GallaryModule { }
