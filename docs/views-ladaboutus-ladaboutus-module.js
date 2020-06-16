(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-ladaboutus-ladaboutus-module"],{

/***/ "../node_modules/raw-loader/dist/cjs.js!../src/app/views/ladaboutus/ladaboutus.component.html":
/*!****************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!../src/app/views/ladaboutus/ladaboutus.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <carousel [interval]=\"myInterval\" [noWrap]=\"noWrapSlides\" [(activeSlide)]=\"activeSlideIndex\">\n                      <slide *ngFor=\"let slide of slidesL; let index=index\">\n                        <img [src]=\"slide.image\" alt=\"image slide\" style=\"display: block;padding-left:250px;\">\n                      </slide>\n                    </carousel>\n                    <br/>\n                  </div>\n                </div>\n              </div>\n          </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-12\">\n          <div class=\"card text-white bg-info\">\n            <div class=\"card-header\">\n              About Us\n            </div>\n            <div class=\"card-body\">\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n            </div>\n          </div>\n        </div>\n    \n      </div>\n \n    \n</div>\n");

/***/ }),

/***/ "../src/app/views/ladaboutus/ladaboutus-routing.module.ts":
/*!****************************************************************!*\
  !*** ../src/app/views/ladaboutus/ladaboutus-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: LadaboutusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LadaboutusRoutingModule", function() { return LadaboutusRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ladaboutus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ladaboutus.component */ "../src/app/views/ladaboutus/ladaboutus.component.ts");




var routes = [
    {
        path: '',
        component: _ladaboutus_component__WEBPACK_IMPORTED_MODULE_3__["LadaboutusComponent"],
        data: {
            title: 'Ladaboutus'
        }
    }
];
var LadaboutusRoutingModule = /** @class */ (function () {
    function LadaboutusRoutingModule() {
    }
    LadaboutusRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LadaboutusRoutingModule);
    return LadaboutusRoutingModule;
}());



/***/ }),

/***/ "../src/app/views/ladaboutus/ladaboutus.component.scss":
/*!*************************************************************!*\
  !*** ../src/app/views/ladaboutus/ladaboutus.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdmlld3MvbGFkYWJvdXR1cy9sYWRhYm91dHVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "../src/app/views/ladaboutus/ladaboutus.component.ts":
/*!***********************************************************!*\
  !*** ../src/app/views/ladaboutus/ladaboutus.component.ts ***!
  \***********************************************************/
/*! exports provided: LadaboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LadaboutusComponent", function() { return LadaboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "../node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");




var LadaboutusComponent = /** @class */ (function () {
    function LadaboutusComponent(location) {
        this.myInterval = 2000;
        this.all_b_c = "/assets/img/Agarbatti_Small/all_b_c.jpg";
        this.all_b = "/assets/img/Agarbatti_Small/all_b.jpg";
        this.haripriya_b_c = "/assets/img/Agarbatti_Small/haripriya_b_c.jpg";
        this.deccan_b_c = "/assets/img/Agarbatti_Small/deccan_b_c.jpg";
        this.rajashri_b_c = "/assets/img/Agarbatti_Small/rajashree_b_c.jpg";
        this.deccan_s_c = "/assets/img/Agarbatti_Small/deccan_s_c.jpg";
        this.rajashree_s_c = "/assets/img/Agarbatti_Small/rajashree_s_c.jpg";
        this.slidesL = [];
        this.slidesR = [];
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
    }
    LadaboutusComponent.prototype.ngOnInit = function () {
        this.slidesL.push({
            image: "https://vitthallad.github.io/ladagarbatti" + this.all_b_c
        });
        this.slidesL.push({
            image: "https://vitthallad.github.io/ladagarbatti" + this.all_b
        });
        this.slidesL.push({
            image: "https://vitthallad.github.io/ladagarbatti" + this.haripriya_b_c
        });
        this.slidesL.push({
            image: "https://vitthallad.github.io/ladagarbatti" + this.deccan_b_c
        });
        this.slidesL.push({
            image: "https://vitthallad.github.io/ladagarbatti" + this.rajashri_b_c
        });
        this.slidesL.push({
            image: "https://vitthallad.github.io/ladagarbatti" + this.deccan_s_c
        });
        this.slidesL.push({
            image: "https://vitthallad.github.io/ladagarbatti" + this.rajashree_s_c
        });
    };
    LadaboutusComponent.prototype.ngOnDestroy = function () {
        this.myInterval = 0;
        this.noWrapSlides = true;
        this.myInterval = false;
    };
    LadaboutusComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    LadaboutusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ladaboutus',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ladaboutus.component.html */ "../node_modules/raw-loader/dist/cjs.js!../src/app/views/ladaboutus/ladaboutus.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ladaboutus.component.scss */ "../src/app/views/ladaboutus/ladaboutus.component.scss")).default]
        })
    ], LadaboutusComponent);
    return LadaboutusComponent;
}());



/***/ }),

/***/ "../src/app/views/ladaboutus/ladaboutus.module.ts":
/*!********************************************************!*\
  !*** ../src/app/views/ladaboutus/ladaboutus.module.ts ***!
  \********************************************************/
/*! exports provided: LadaboutusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LadaboutusModule", function() { return LadaboutusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "../node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "../node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "../node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "../node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ladaboutus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ladaboutus.component */ "../src/app/views/ladaboutus/ladaboutus.component.ts");
/* harmony import */ var _ladaboutus_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ladaboutus-routing.module */ "../src/app/views/ladaboutus/ladaboutus-routing.module.ts");










var LadaboutusModule = /** @class */ (function () {
    function LadaboutusModule() {
    }
    LadaboutusModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
                _ladaboutus_routing_module__WEBPACK_IMPORTED_MODULE_9__["LadaboutusRoutingModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__["ButtonsModule"].forRoot()
            ],
            declarations: [_ladaboutus_component__WEBPACK_IMPORTED_MODULE_8__["LadaboutusComponent"]]
        })
    ], LadaboutusModule);
    return LadaboutusModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-ladaboutus-ladaboutus-module.js.map