(self["webpackChunkmigrationto5"] = self["webpackChunkmigrationto5"] || []).push([["src_app_pages_sub-categories_sub-categories_module_ts"],{

/***/ 77577:
/*!***********************************************************************!*\
  !*** ./src/app/pages/sub-categories/sub-categories-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubCategoriesPageRoutingModule": () => (/* binding */ SubCategoriesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sub_categories_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-categories.page */ 61939);




const routes = [
    {
        path: '',
        component: _sub_categories_page__WEBPACK_IMPORTED_MODULE_0__.SubCategoriesPage
    }
];
let SubCategoriesPageRoutingModule = class SubCategoriesPageRoutingModule {
};
SubCategoriesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SubCategoriesPageRoutingModule);



/***/ }),

/***/ 80319:
/*!***************************************************************!*\
  !*** ./src/app/pages/sub-categories/sub-categories.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubCategoriesPageModule": () => (/* binding */ SubCategoriesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sub_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-categories-routing.module */ 77577);
/* harmony import */ var _sub_categories_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-categories.page */ 61939);







let SubCategoriesPageModule = class SubCategoriesPageModule {
};
SubCategoriesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sub_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubCategoriesPageRoutingModule
        ],
        declarations: [_sub_categories_page__WEBPACK_IMPORTED_MODULE_1__.SubCategoriesPage]
    })
], SubCategoriesPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_sub-categories_sub-categories_module_ts.js.map