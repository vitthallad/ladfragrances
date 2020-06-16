(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-gallary-gallary-module"],{

/***/ "../node_modules/raw-loader/dist/cjs.js!../src/app/views/gallary/gallary.component.html":
/*!**********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!../src/app/views/gallary/gallary.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>gallary works!</p>\n");

/***/ }),

/***/ "../src/app/views/gallary/gallary-routing.module.ts":
/*!**********************************************************!*\
  !*** ../src/app/views/gallary/gallary-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: GallaryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallaryRoutingModule", function() { return GallaryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallary.component */ "../src/app/views/gallary/gallary.component.ts");




var routes = [
    {
        path: '',
        component: _gallary_component__WEBPACK_IMPORTED_MODULE_3__["GallaryComponent"],
        data: {
            title: 'Gallary'
        }
    }
];
var GallaryRoutingModule = /** @class */ (function () {
    function GallaryRoutingModule() {
    }
    GallaryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GallaryRoutingModule);
    return GallaryRoutingModule;
}());



/***/ }),

/***/ "../src/app/views/gallary/gallary.component.css":
/*!******************************************************!*\
  !*** ../src/app/views/gallary/gallary.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdmlld3MvZ2FsbGFyeS9nYWxsYXJ5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "../src/app/views/gallary/gallary.component.ts":
/*!*****************************************************!*\
  !*** ../src/app/views/gallary/gallary.component.ts ***!
  \*****************************************************/
/*! exports provided: GallaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallaryComponent", function() { return GallaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var GallaryComponent = /** @class */ (function () {
    function GallaryComponent() {
    }
    GallaryComponent.prototype.ngOnInit = function () {
    };
    GallaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallary',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gallary.component.html */ "../node_modules/raw-loader/dist/cjs.js!../src/app/views/gallary/gallary.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gallary.component.css */ "../src/app/views/gallary/gallary.component.css")).default]
        })
    ], GallaryComponent);
    return GallaryComponent;
}());



/***/ }),

/***/ "../src/app/views/gallary/gallary.module.ts":
/*!**************************************************!*\
  !*** ../src/app/views/gallary/gallary.module.ts ***!
  \**************************************************/
/*! exports provided: GallaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallaryModule", function() { return GallaryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "../node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "../node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "../node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "../node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _gallary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallary.component */ "../src/app/views/gallary/gallary.component.ts");
/* harmony import */ var _gallary_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallary-routing.module */ "../src/app/views/gallary/gallary-routing.module.ts");










var GallaryModule = /** @class */ (function () {
    function GallaryModule() {
    }
    GallaryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
                _gallary_routing_module__WEBPACK_IMPORTED_MODULE_9__["GallaryRoutingModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__["ButtonsModule"].forRoot()
            ],
            declarations: [_gallary_component__WEBPACK_IMPORTED_MODULE_8__["GallaryComponent"]]
        })
    ], GallaryModule);
    return GallaryModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-gallary-gallary-module.js.map