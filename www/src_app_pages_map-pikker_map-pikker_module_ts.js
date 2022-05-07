(self["webpackChunkmigrationto5"] = self["webpackChunkmigrationto5"] || []).push([["src_app_pages_map-pikker_map-pikker_module_ts"],{

/***/ 81883:
/*!***************************************************************!*\
  !*** ./src/app/pages/map-pikker/map-pikker-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPikkerPageRoutingModule": () => (/* binding */ MapPikkerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _map_pikker_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-pikker.page */ 63768);




const routes = [
    {
        path: '',
        component: _map_pikker_page__WEBPACK_IMPORTED_MODULE_0__.MapPikkerPage
    }
];
let MapPikkerPageRoutingModule = class MapPikkerPageRoutingModule {
};
MapPikkerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapPikkerPageRoutingModule);



/***/ }),

/***/ 25445:
/*!*******************************************************!*\
  !*** ./src/app/pages/map-pikker/map-pikker.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPikkerPageModule": () => (/* binding */ MapPikkerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _map_pikker_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-pikker-routing.module */ 81883);
/* harmony import */ var _map_pikker_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-pikker.page */ 63768);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ 15971);








let MapPikkerPageModule = class MapPikkerPageModule {
};
MapPikkerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _map_pikker_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPikkerPageRoutingModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_7__.AgmCoreModule
        ],
        declarations: [_map_pikker_page__WEBPACK_IMPORTED_MODULE_1__.MapPikkerPage]
    })
], MapPikkerPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_map-pikker_map-pikker_module_ts.js.map