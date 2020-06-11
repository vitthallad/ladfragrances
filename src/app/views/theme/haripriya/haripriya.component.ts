import {Component, OnDestroy, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Location } from '@angular/common';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
declare var require: any;

@Component({
  selector: 'app-haripriya',
  templateUrl: './haripriya.component.html',
  styleUrls: ['./haripriya.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ]
})
export class HaripriyaComponent implements OnInit, OnDestroy  {

  myInterval: number | false = 2000;
  haripriya_b_oo = "/assets/img/Agarbatti/haripriya_b_c.jpg";
  haripriya_b_cc = "/assets/img/Agarbatti/haripriya_b_o.jpg";
  haripriya_s_o = "/assets/img/Agarbatti/haripriya_s_c.jpg";
  haripriya_s_c = "/assets/img/Agarbatti/haripriya_s_o.jpg";
  slidesL: any[] = [];
  slidesR: any[] = [];

  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;
  dangerousUrl: string;

  constructor(location : Location) {
  }

  ngOnInit() {
   
    this.slidesL.push({
      image: "https://vitthallad.github.io/ladagarbatti" + this.haripriya_b_cc
    });
    this.slidesL.push({
      image:  "https://vitthallad.github.io/ladagarbatti" + this.haripriya_b_oo
    });
    this.slidesR.push({
      image:  "https://vitthallad.github.io/ladagarbatti" + this.haripriya_s_c
    });
    this.slidesR.push({
      image:  "https://vitthallad.github.io/ladagarbatti" + this.haripriya_s_o
    });
}
  ngOnDestroy(): void {
    this.myInterval = 0;
    this.noWrapSlides = true;
    this.myInterval = false;
  }

}
