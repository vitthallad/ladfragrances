import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';


import { ContactUsComponent } from './contact-us.component';
import { ContactUsRoutingModule } from './contactUs-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    CarouselModule,
    ContactUsRoutingModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ContactUsComponent ]
})


export class ContactUsModule { }
