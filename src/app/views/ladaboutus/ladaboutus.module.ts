import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';



import { LadaboutusComponent } from './ladaboutus.component';
import { LadaboutusRoutingModule } from './ladaboutus-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    CarouselModule,
    LadaboutusRoutingModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ LadaboutusComponent ]
})
export class LadaboutusModule { }
