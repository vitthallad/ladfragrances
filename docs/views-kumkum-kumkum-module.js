(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-kumkum-kumkum-module"],{

/***/ "../node_modules/raw-loader/dist/cjs.js!../src/app/views/kumkum/kumkum.component.html":
/*!********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!../src/app/views/kumkum/kumkum.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>kumkum works!</p>\n");

/***/ }),

/***/ "../src/app/views/kumkum/kumkum-routing.module.ts":
/*!********************************************************!*\
  !*** ../src/app/views/kumkum/kumkum-routing.module.ts ***!
  \********************************************************/
/*! exports provided: KumkumRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KumkumRoutingModule", function() { return KumkumRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _kumkum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kumkum.component */ "../src/app/views/kumkum/kumkum.component.ts");




var routes = [
    {
        path: '',
        component: _kumkum_component__WEBPACK_IMPORTED_MODULE_3__["KumkumComponent"],
        data: {
            title: 'Kumkum'
        }
    }
];
var KumkumRoutingModule = /** @class */ (function () {
    function KumkumRoutingModule() {
    }
    KumkumRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], KumkumRoutingModule);
    return KumkumRoutingModule;
}());



/***/ }),

/***/ "../src/app/views/kumkum/kumkum.component.css":
/*!****************************************************!*\
  !*** ../src/app/views/kumkum/kumkum.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdmlld3Mva3Vta3VtL2t1bWt1bS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "../src/app/views/kumkum/kumkum.component.ts":
/*!***************************************************!*\
  !*** ../src/app/views/kumkum/kumkum.component.ts ***!
  \***************************************************/
/*! exports provided: KumkumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KumkumComponent", function() { return KumkumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var KumkumComponent = /** @class */ (function () {
    function KumkumComponent() {
    }
    KumkumComponent.prototype.ngOnInit = function () {
    };
    KumkumComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kumkum',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./kumkum.component.html */ "../node_modules/raw-loader/dist/cjs.js!../src/app/views/kumkum/kumkum.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./kumkum.component.css */ "../src/app/views/kumkum/kumkum.component.css")).default]
        })
    ], KumkumComponent);
    return KumkumComponent;
}());



/***/ }),

/***/ "../src/app/views/kumkum/kumkum.module.ts":
/*!************************************************!*\
  !*** ../src/app/views/kumkum/kumkum.module.ts ***!
  \************************************************/
/*! exports provided: KumkumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KumkumModule", function() { return KumkumModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "../node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "../node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "../node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "../node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _kumkum_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./kumkum.component */ "../src/app/views/kumkum/kumkum.component.ts");
/* harmony import */ var _kumkum_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kumkum-routing.module */ "../src/app/views/kumkum/kumkum-routing.module.ts");










var KumkumModule = /** @class */ (function () {
    function KumkumModule() {
    }
    KumkumModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_kumkum_component__WEBPACK_IMPORTED_MODULE_8__["KumkumComponent"]],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
                _kumkum_routing_module__WEBPACK_IMPORTED_MODULE_9__["KumkumRoutingModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__["ButtonsModule"].forRoot()
            ]
        })
    ], KumkumModule);
    return KumkumModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-kumkum-kumkum-module.js.map