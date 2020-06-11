import {Component, OnDestroy, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Location } from '@angular/common';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
declare var require: any;

@Component({
  selector: 'app-rajashree',
  templateUrl: './rajashree.component.html',
  styleUrls: ['./rajashree.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ]
})
export class RajashreeComponent implements OnInit, OnDestroy  {

  
  myInterval: number | false = 2000;
  rajashree_b_oo = "/assets/img/Agarbatti/rajashree_b_c.jpg";
  rajashree_b_cc = "/assets/img/Agarbatti/rajashree_b_o.jpg";
  rajashree_s_o = "/assets/img/Agarbatti/rajashree_s_c.jpg";
  rajashree_s_c = "/assets/img/Agarbatti/rajashree_s_o.jpg";
  slidesL: any[] = [];
  slidesR: any[] = [];

  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;
  dangerousUrl: string;

  constructor(location : Location) {
  }

  ngOnInit() {
   
    this.slidesL.push({
      image: "https://vitthallad.github.io/ladagarbatti" + this.rajashree_b_oo
    });
    this.slidesL.push({
      image:  "https://vitthallad.github.io/ladagarbatti" + this.rajashree_b_cc
    });
    this.slidesR.push({
      image:  "https://vitthallad.github.io/ladagarbatti" + this.rajashree_s_c
    });
    this.slidesR.push({
      image:  "https://vitthallad.github.io/ladagarbatti" + this.rajashree_s_o
    });
}
  ngOnDestroy(): void {
    this.myInterval = 0;
    this.noWrapSlides = true;
    this.myInterval = false;
  }
}
