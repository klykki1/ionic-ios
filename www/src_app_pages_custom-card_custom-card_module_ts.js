(self["webpackChunkmigrationto5"] = self["webpackChunkmigrationto5"] || []).push([["src_app_pages_custom-card_custom-card_module_ts"],{

/***/ 99397:
/*!*****************************************************************!*\
  !*** ./src/app/pages/custom-card/custom-card-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomCardPageRoutingModule": () => (/* binding */ CustomCardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _custom_card_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-card.page */ 61245);




const routes = [
    {
        path: '',
        component: _custom_card_page__WEBPACK_IMPORTED_MODULE_0__.CustomCardPage
    }
];
let CustomCardPageRoutingModule = class CustomCardPageRoutingModule {
};
CustomCardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomCardPageRoutingModule);



/***/ }),

/***/ 66994:
/*!*********************************************************!*\
  !*** ./src/app/pages/custom-card/custom-card.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomCardPageModule": () => (/* binding */ CustomCardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _custom_card_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-card-routing.module */ 99397);
/* harmony import */ var _custom_card_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-card.page */ 61245);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 84236);








let CustomCardPageModule = class CustomCardPageModule {
};
CustomCardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _custom_card_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomCardPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild(),
        ],
        declarations: [_custom_card_page__WEBPACK_IMPORTED_MODULE_1__.CustomCardPage]
    })
], CustomCardPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_custom-card_custom-card_module_ts.js.map