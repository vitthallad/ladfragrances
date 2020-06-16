(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-all-products-all-products-module"],{

/***/ "../node_modules/raw-loader/dist/cjs.js!../src/app/views/all-products/all-products.component.html":
/*!********************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!../src/app/views/all-products/all-products.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              Haripriya\n              <small>(Masala Agarbatti)</small>\n            </div>\n            <div class=\"card-body\">\n              <carousel [interval]=\"false\">\n                <slide>\n                  <img src=\"https://vitthallad.github.io/ladagarbatti/assets/img/Agarbatti/deccan_b_c.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n                </slide>\n                <slide>\n                  <img src=\"https://vitthallad.github.io/ladagarbatti/assets/img/Agarbatti/deccan_b_o.jpg\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n                </slide>\n              </carousel>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n                DECCAN QUEEN #1510 \n              <small>(Masala Agarbatti)</small>\n            </div>\n            <div class=\"card-body\">\n              <carousel [interval]=\"false\">\n                <slide>\n                  <img src=\"https://vitthallad.github.io/ladagarbatti/assets/img/Agarbatti/deccan_s_o.jpg\" alt=\"Third slide\" \n                  style=\"display: block; width: 100%;\">\n                  <!-- <div class=\"carousel-caption d-none d-md-block\">\n                    <h3>Third slide label</h3>\n                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n                  </div> -->\n                </slide>\n    \n                <slide>\n                  <img src=\"https://vitthallad.github.io/ladagarbatti/assets/img/Agarbatti/deccan_s_c.jpg\" alt=\"Fourth slide\" style=\"display: block; width: 100%;\">\n                  <!-- <div class=\"carousel-caption d-none d-md-block\">\n                    <h3>Third slide label</h3>\n                    <p style=\"font-color:black\">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n                  </div> -->\n                </slide>\n              </carousel>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              Rajashree A1\n              <small>(Masala Agarbatti)</small>\n            </div>\n            <div class=\"card-body\">\n              <carousel [interval]=\"false\">\n                <slide>\n                  <img src=\"https://vitthallad.github.io/ladagarbatti/assets/img/Agarbatti/deccan_b_c.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n                </slide>\n                <slide>\n                  <img src=\"https://vitthallad.github.io/ladagarbatti/assets/img/Agarbatti/deccan_b_o.jpg\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n                </slide>\n              </carousel>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n                India Queen\n              <small>(Masala Agarbatti)</small>\n            </div>\n            <div class=\"card-body\">\n              <carousel [interval]=\"false\">\n                <slide>\n                    <p>Coming Soon...</p>\n                  <!-- <img src=\"../../../../assets/img/Agarbatti/deccan_s_o.jpg\" alt=\"Third slide\" \n                  style=\"display: block; width: 100%;\"> -->\n                  <!-- <div class=\"carousel-caption d-none d-md-block\">\n                    <h3>Third slide label</h3>\n                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n                  </div> -->\n                </slide>\n    \n              </carousel>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n         Ashtagandha\n          <small>(Utti)</small>\n        </div>\n        <div class=\"card-body\">\n          <carousel [interval]=\"false\">\n          <p>Coming Soon...</p>\n          </carousel>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n           Abhir (Bukka)\n          <small>(Chandani)</small>\n        </div>\n        <div class=\"card-body\">\n          <carousel [interval]=\"false\">\n            <p>Coming Soon...</p>\n          </carousel>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n\n\n\n  </div>\n");

/***/ }),

/***/ "../src/app/views/all-products/all-products-routing.module.ts":
/*!********************************************************************!*\
  !*** ../src/app/views/all-products/all-products-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: AllProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProductsRoutingModule", function() { return AllProductsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _all_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-products.component */ "../src/app/views/all-products/all-products.component.ts");




var routes = [
    {
        path: '',
        component: _all_products_component__WEBPACK_IMPORTED_MODULE_3__["AllProductsComponent"],
        data: {
            title: 'AllProducts'
        }
    }
];
var AllProductsRoutingModule = /** @class */ (function () {
    function AllProductsRoutingModule() {
    }
    AllProductsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AllProductsRoutingModule);
    return AllProductsRoutingModule;
}());



/***/ }),

/***/ "../src/app/views/all-products/all-products.component.css":
/*!****************************************************************!*\
  !*** ../src/app/views/all-products/all-products.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdmlld3MvYWxsLXByb2R1Y3RzL2FsbC1wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "../src/app/views/all-products/all-products.component.ts":
/*!***************************************************************!*\
  !*** ../src/app/views/all-products/all-products.component.ts ***!
  \***************************************************************/
/*! exports provided: AllProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProductsComponent", function() { return AllProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AllProductsComponent = /** @class */ (function () {
    function AllProductsComponent() {
    }
    AllProductsComponent.prototype.ngOnInit = function () {
    };
    AllProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-products',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./all-products.component.html */ "../node_modules/raw-loader/dist/cjs.js!../src/app/views/all-products/all-products.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./all-products.component.css */ "../src/app/views/all-products/all-products.component.css")).default]
        })
    ], AllProductsComponent);
    return AllProductsComponent;
}());



/***/ }),

/***/ "../src/app/views/all-products/all-products.module.ts":
/*!************************************************************!*\
  !*** ../src/app/views/all-products/all-products.module.ts ***!
  \************************************************************/
/*! exports provided: AllProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProductsModule", function() { return AllProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "../node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "../node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "../node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "../node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _all_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./all-products.component */ "../src/app/views/all-products/all-products.component.ts");
/* harmony import */ var _all_products_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./all-products-routing.module */ "../src/app/views/all-products/all-products-routing.module.ts");










var AllProductsModule = /** @class */ (function () {
    function AllProductsModule() {
    }
    AllProductsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
                _all_products_routing_module__WEBPACK_IMPORTED_MODULE_9__["AllProductsRoutingModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__["ButtonsModule"].forRoot()
            ],
            declarations: [_all_products_component__WEBPACK_IMPORTED_MODULE_8__["AllProductsComponent"]]
        })
    ], AllProductsModule);
    return AllProductsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-all-products-all-products-module.js.map