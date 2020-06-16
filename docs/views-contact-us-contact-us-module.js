(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-contact-us-contact-us-module"],{

/***/ "../node_modules/raw-loader/dist/cjs.js!../src/app/views/contact-us/contact-us.component.html":
/*!****************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!../src/app/views/contact-us/contact-us.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n\n    <div class=\"row\">\n        <div class=\"col-sm-6 col-md-6\">\n          <div class=\"card text-white bg-danger\">\n            <div class=\"card-header\">\n             Address\n            </div>\n            <div class=\"card-body\">\n              2188, Ashok Chandrakant Lad,  <br>\n              Mahadwar Road, Near Darshan Mandap, <br>\n              Pandharpur - 413304  <br>\n              District - Solapur <br>\n              State - Maharashtra\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-6\">\n            <div class=\"card text-white bg-danger\">\n              <div class=\"card-header\">\n               Contact Numbers\n              </div>\n              <div class=\"card-body\">\n                Landline : (02186) (227679) <br>\n                WhatsApp : +91-9975924245    <br>\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         : +91-9673848316\n              </div>\n            </div>\n          </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-12\">\n          \n          \n            <agm-map \n            [latitude]=\"17.677726\" \n            [longitude]=\"75.336118\">\n              <agm-marker \n              [latitude]=\"17.677726\" \n              [longitude]=\"75.336118\">\n            </agm-marker>\n            </agm-map>\n        </div>\n        \n      </div>\n  </div>\n");

/***/ }),

/***/ "../src/app/views/contact-us/contact-us.component.css":
/*!************************************************************!*\
  !*** ../src/app/views/contact-us/contact-us.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\r\n    height: 300px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3cy9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoiYXBwL3ZpZXdzL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "../src/app/views/contact-us/contact-us.component.ts":
/*!***********************************************************!*\
  !*** ../src/app/views/contact-us/contact-us.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact-us.component.html */ "../node_modules/raw-loader/dist/cjs.js!../src/app/views/contact-us/contact-us.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact-us.component.css */ "../src/app/views/contact-us/contact-us.component.css")).default]
        })
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "../src/app/views/contact-us/contact-us.module.ts":
/*!********************************************************!*\
  !*** ../src/app/views/contact-us/contact-us.module.ts ***!
  \********************************************************/
/*! exports provided: ContactUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "../node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "../node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "../node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "../node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "../node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-us.component */ "../src/app/views/contact-us/contact-us.component.ts");
/* harmony import */ var _contactUs_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contactUs-routing.module */ "../src/app/views/contact-us/contactUs-routing.module.ts");











var ContactUsModule = /** @class */ (function () {
    function ContactUsModule() {
    }
    ContactUsModule.prototype.ngOnInit = function () {
        // this.setCurrentLocation();
        this.location = {
            latitude: -28.68352,
            longitude: -147.20785
        };
    };
    ContactUsModule.prototype.setCurrentLocation = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = 17.67744;
                _this.longitude = 75.336118;
                _this.zoom = 15;
            });
        }
    };
    ContactUsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
                _contactUs_routing_module__WEBPACK_IMPORTED_MODULE_10__["ContactUsRoutingModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__["ButtonsModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB2vQWK6m_DDcovpdwgb2pqAwxNMsqbLY8',
                    libraries: ["places", "geometry"]
                })
            ],
            declarations: [_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"]]
        })
    ], ContactUsModule);
    return ContactUsModule;
}());



/***/ }),

/***/ "../src/app/views/contact-us/contactUs-routing.module.ts":
/*!***************************************************************!*\
  !*** ../src/app/views/contact-us/contactUs-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsRoutingModule", function() { return ContactUsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.component */ "../src/app/views/contact-us/contact-us.component.ts");




var routes = [
    {
        path: '',
        component: _contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"],
        data: {
            title: 'ContactUs'
        }
    }
];
var ContactUsRoutingModule = /** @class */ (function () {
    function ContactUsRoutingModule() {
    }
    ContactUsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ContactUsRoutingModule);
    return ContactUsRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-contact-us-contact-us-module.js.map