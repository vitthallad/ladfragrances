(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-gandham-gandham-module"],{

/***/ "../node_modules/raw-loader/dist/cjs.js!../src/app/views/gandham/gandham.component.html":
/*!**********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!../src/app/views/gandham/gandham.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>gandham works!</p>\n");

/***/ }),

/***/ "../src/app/views/gandham/gandham-routing.module.ts":
/*!**********************************************************!*\
  !*** ../src/app/views/gandham/gandham-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: GandhamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GandhamRoutingModule", function() { return GandhamRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gandham_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gandham.component */ "../src/app/views/gandham/gandham.component.ts");




var routes = [
    {
        path: '',
        component: _gandham_component__WEBPACK_IMPORTED_MODULE_3__["GandhamComponent"],
        data: {
            title: 'Gandham'
        }
    }
];
var GandhamRoutingModule = /** @class */ (function () {
    function GandhamRoutingModule() {
    }
    GandhamRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GandhamRoutingModule);
    return GandhamRoutingModule;
}());



/***/ }),

/***/ "../src/app/views/gandham/gandham.component.css":
/*!******************************************************!*\
  !*** ../src/app/views/gandham/gandham.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdmlld3MvZ2FuZGhhbS9nYW5kaGFtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "../src/app/views/gandham/gandham.component.ts":
/*!*****************************************************!*\
  !*** ../src/app/views/gandham/gandham.component.ts ***!
  \*****************************************************/
/*! exports provided: GandhamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GandhamComponent", function() { return GandhamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var GandhamComponent = /** @class */ (function () {
    function GandhamComponent() {
    }
    GandhamComponent.prototype.ngOnInit = function () {
    };
    GandhamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gandham',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gandham.component.html */ "../node_modules/raw-loader/dist/cjs.js!../src/app/views/gandham/gandham.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gandham.component.css */ "../src/app/views/gandham/gandham.component.css")).default]
        })
    ], GandhamComponent);
    return GandhamComponent;
}());



/***/ }),

/***/ "../src/app/views/gandham/gandham.module.ts":
/*!**************************************************!*\
  !*** ../src/app/views/gandham/gandham.module.ts ***!
  \**************************************************/
/*! exports provided: GandhamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GandhamModule", function() { return GandhamModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "../node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "../node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "../node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "../node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _gandham_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gandham.component */ "../src/app/views/gandham/gandham.component.ts");
/* harmony import */ var _gandham_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gandham-routing.module */ "../src/app/views/gandham/gandham-routing.module.ts");










var GandhamModule = /** @class */ (function () {
    function GandhamModule() {
    }
    GandhamModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_gandham_component__WEBPACK_IMPORTED_MODULE_8__["GandhamComponent"]],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
                _gandham_routing_module__WEBPACK_IMPORTED_MODULE_9__["GandhamRoutingModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__["ButtonsModule"].forRoot()
            ]
        })
    ], GandhamModule);
    return GandhamModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-gandham-gandham-module.js.map