import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { ContactUsComponent } from './contact-us.component';
import { ContactUsRoutingModule } from './contactUs-routing.module';
import { MouseEvent } from '@agm/core';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    CarouselModule,
    ContactUsRoutingModule,
    ButtonsModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB2vQWK6m_DDcovpdwgb2pqAwxNMsqbLY8',
      libraries: ["places", "geometry"]
    })
  ],
  declarations: [ ContactUsComponent ]

})


export class ContactUsModule implements OnInit { 

  latitude: number;
  longitude: number;
  zoom:number;
  location: Location

  ngOnInit() {
  // this.setCurrentLocation();
  this.location = {
    latitude: -28.68352,
    longitude: -147.20785
  }
}
  
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = 17.67744;
        this.longitude = 75.336118;
        this.zoom = 15;
      });
    }
  }
  // latitude = -28.68352;
  // longitude = -147.20785;
  
}
interface Location {
  latitude: number;
  longitude: number
}