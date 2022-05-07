(self["webpackChunkmigrationto5"] = self["webpackChunkmigrationto5"] || []).push([["src_app_pages_filters-modal_filters-modal_module_ts"],{

/***/ 98355:
/*!*********************************************************************!*\
  !*** ./src/app/pages/filters-modal/filters-modal-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersModalPageRoutingModule": () => (/* binding */ FiltersModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _filters_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters-modal.page */ 75995);




const routes = [
    {
        path: '',
        component: _filters_modal_page__WEBPACK_IMPORTED_MODULE_0__.FiltersModalPage
    }
];
let FiltersModalPageRoutingModule = class FiltersModalPageRoutingModule {
};
FiltersModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FiltersModalPageRoutingModule);



/***/ }),

/***/ 13932:
/*!*************************************************************!*\
  !*** ./src/app/pages/filters-modal/filters-modal.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersModalPageModule": () => (/* binding */ FiltersModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _filters_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters-modal-routing.module */ 98355);
/* harmony import */ var _filters_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters-modal.page */ 75995);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 84236);








let FiltersModalPageModule = class FiltersModalPageModule {
};
FiltersModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _filters_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.FiltersModalPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild(),
        ],
        declarations: [_filters_modal_page__WEBPACK_IMPORTED_MODULE_1__.FiltersModalPage]
    })
], FiltersModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_filters-modal_filters-modal_module_ts.js.map