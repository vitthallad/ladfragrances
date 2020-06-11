// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DeccanComponent } from './deccan/deccan.component';
import { HaripriyaComponent } from './haripriya/haripriya.component';
import { RajashreeComponent } from './rajashree/rajashree.component';
import { IndiaQueenComponent } from './india-queen/india-queen.component';
// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CarouselModule
  ],
  declarations: [
 
    DeccanComponent,
    HaripriyaComponent,
    RajashreeComponent,
    IndiaQueenComponent
  ]
})
export class ThemeModule { }
