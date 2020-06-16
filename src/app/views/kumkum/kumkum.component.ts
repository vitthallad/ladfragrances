import {Component, OnDestroy, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-kumkum',
  templateUrl: './kumkum.component.html',
  styleUrls: ['./kumkum.component.css']
})
export class KumkumComponent implements OnInit {
 
  myInterval: number | false = 2000;
   kukkum = "/assets/img/Kumkum/Kumkum.jpg";
   deccan_b_cc = "/assets/img/Agarbatti/deccan_b_c.jpg";
   slidesL: any[] = [];
   activeSlideIndex: number = 0;
   noWrapSlides: boolean = false;
   dangerousUrl: string;
  
  constructor() {

  }

  ngOnInit(): void {
    this.slidesL.push({
      image: "http://localhost:4200" + this.kukkum
    });
    this.slidesL.push({
      image:  "http://localhost:4200" + this.deccan_b_cc
    });
  }
  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slidesL.splice(toRemove, 1);
  }
}
