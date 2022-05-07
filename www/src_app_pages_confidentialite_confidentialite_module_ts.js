(self["webpackChunkmigrationto5"] = self["webpackChunkmigrationto5"] || []).push([["src_app_pages_confidentialite_confidentialite_module_ts"],{

/***/ 16418:
/*!*************************************************************************!*\
  !*** ./src/app/pages/confidentialite/confidentialite-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfidentialitePageRoutingModule": () => (/* binding */ ConfidentialitePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _confidentialite_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confidentialite.page */ 17639);




const routes = [
    {
        path: '',
        component: _confidentialite_page__WEBPACK_IMPORTED_MODULE_0__.ConfidentialitePage
    }
];
let ConfidentialitePageRoutingModule = class ConfidentialitePageRoutingModule {
};
ConfidentialitePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfidentialitePageRoutingModule);



/***/ }),

/***/ 1603:
/*!*****************************************************************!*\
  !*** ./src/app/pages/confidentialite/confidentialite.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfidentialitePageModule": () => (/* binding */ ConfidentialitePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _confidentialite_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confidentialite-routing.module */ 16418);
/* harmony import */ var _confidentialite_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confidentialite.page */ 17639);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 84236);








let ConfidentialitePageModule = class ConfidentialitePageModule {
};
ConfidentialitePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _confidentialite_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfidentialitePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild(),
        ],
        declarations: [_confidentialite_page__WEBPACK_IMPORTED_MODULE_1__.ConfidentialitePage]
    })
], ConfidentialitePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_confidentialite_confidentialite_module_ts.js.map