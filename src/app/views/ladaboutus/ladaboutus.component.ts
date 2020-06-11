import {Component, OnDestroy, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Location } from '@angular/common';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
declare var require: any;

@Component({
  selector: 'app-ladaboutus',
  templateUrl: './ladaboutus.component.html',
  styleUrls: ['./ladaboutus.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ]
})
export class LadaboutusComponent implements OnInit, OnDestroy  {

  myInterval: number | false = 2000;
  
  all_b_c = "/assets/img/Agarbatti_Small/all_b_c.jpg";
  all_b = "/assets/img/Agarbatti_Small/all_b.jpg";
  haripriya_b_c = "/assets/img/Agarbatti_Small/haripriya_b_c.jpg";
  deccan_b_c = "/assets/img/Agarbatti_Small/deccan_b_c.jpg";
  rajashri_b_c = "/assets/img/Agarbatti_Small/rajashree_b_c.jpg";
  deccan_s_c = "/assets/img/Agarbatti_Small/deccan_s_c.jpg";
  rajashree_s_c = "/assets/img/Agarbatti_Small/rajashree_s_c.jpg";
  
  
  slidesL: any[] = [];
  slidesR: any[] = [];

  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;
  dangerousUrl: string;

  constructor(location : Location) {
  }

  ngOnInit() {
   
    this.slidesL.push({
      image: "http://localhost:4200" + this.all_b_c
    });
    this.slidesL.push({
      image:  "http://localhost:4200" + this.all_b
    });
    this.slidesL.push({
      image:  "http://localhost:4200" + this.haripriya_b_c
    });
    this.slidesL.push({
      image:  "http://localhost:4200" + this.deccan_b_c
    });
    this.slidesL.push({
      image: "http://localhost:4200" + this.rajashri_b_c
    });
    this.slidesL.push({
      image:  "http://localhost:4200" + this.deccan_s_c
    });
    this.slidesL.push({
      image:  "http://localhost:4200" + this.rajashree_s_c
    });
  
}
  ngOnDestroy(): void {
    this.myInterval = 0;
    this.noWrapSlides = true;
    this.myInterval = false;
  }

}
