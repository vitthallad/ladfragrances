import {Component, OnDestroy, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Location } from '@angular/common';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
declare var require: any;

@Component({
  selector: 'app-deccan',
  templateUrl: './deccan.component.html',
  styleUrls: ['./deccan.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: false } },
  ]
})
export class DeccanComponent implements OnInit , OnDestroy {

  
  myInterval: number | false = 2000;
 // deccan_b_o = require("/assets/img/Agarbatti/deccan_b_o.jpg");
 // deccan_b_c = require("/assets/img/Agarbatti/deccan_b_c.jpg");
  deccan_b_oo = "/assets/img/Agarbatti/deccan_b_o.jpg";
  deccan_b_cc = "/assets/img/Agarbatti/deccan_b_c.jpg";
  deccan_s_o = "/assets/img/Agarbatti/deccan_s_o.jpg";
  deccan_s_c = "/assets/img/Agarbatti/deccan_s_c.jpg";
  slidesL: any[] = [];
  slidesR: any[] = [];
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;
  dangerousUrl: string;
  trustedUrl: SafeUrl;
  dangerousVideoUrl: string;
  videoUrl: SafeResourceUrl;
  

  constructor(location : Location, private sanitizer: DomSanitizer) {

  }
  ngOnInit() {
    //console.log(location.origin); 
  //  this.dangerousUrl = 'javascript:alert("Hi there")';
    var baseURL = location.origin; 
    //this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(baseURL);
    console.log('1');
    this.slidesL.push({
      image: "https://vitthallad.github.io/ladfragrances" + this.deccan_b_cc
    });
    this.slidesL.push({
      image:  "https://vitthallad.github.io/ladfragrances" + this.deccan_b_oo
    });
    this.slidesR.push({
      image:  "https://vitthallad.github.io/ladfragrances" + this.deccan_s_c
    });
    this.slidesR.push({
      image:  "https://vitthallad.github.io/ladfragrances" + this.deccan_s_o
    });
}
  ngOnDestroy(): void {
    this.myInterval = 0;
    this.noWrapSlides = true;
    this.myInterval = false;
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  addSlide(): void {
    setTimeout( () => {
      this.slidesL.push({
        //image: `https://picsum.photos/seed/${seed}/900/500`
        image: 'http://localhost:4200/assets/img/Agarbatti/deccan_b_o.jpg'
      });
    }, 500);

    this.slidesL.push({
      //image: `https://picsum.photos/seed/${seed}/900/500`
      image: 'http://localhost:4200/assets/img/Agarbatti/deccan_b_c.jpg'
    });
  }

  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slidesL.splice(toRemove, 1);
  }

}
