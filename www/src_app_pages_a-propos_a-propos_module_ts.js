(self["webpackChunkmigrationto5"] = self["webpackChunkmigrationto5"] || []).push([["src_app_pages_a-propos_a-propos_module_ts"],{

/***/ 77055:
/*!***********************************************************!*\
  !*** ./src/app/pages/a-propos/a-propos-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AProposPageRoutingModule": () => (/* binding */ AProposPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _a_propos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a-propos.page */ 71369);




const routes = [
    {
        path: '',
        component: _a_propos_page__WEBPACK_IMPORTED_MODULE_0__.AProposPage
    }
];
let AProposPageRoutingModule = class AProposPageRoutingModule {
};
AProposPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AProposPageRoutingModule);



/***/ }),

/***/ 57246:
/*!***************************************************!*\
  !*** ./src/app/pages/a-propos/a-propos.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AProposPageModule": () => (/* binding */ AProposPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _a_propos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a-propos-routing.module */ 77055);
/* harmony import */ var _a_propos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a-propos.page */ 71369);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 84236);








let AProposPageModule = class AProposPageModule {
};
AProposPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _a_propos_routing_module__WEBPACK_IMPORTED_MODULE_0__.AProposPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild(),
        ],
        declarations: [_a_propos_page__WEBPACK_IMPORTED_MODULE_1__.AProposPage]
    })
], AProposPageModule);



/***/ }),

/***/ 71369:
/*!*************************************************!*\
  !*** ./src/app/pages/a-propos/a-propos.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AProposPage": () => (/* binding */ AProposPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_a_propos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./a-propos.page.html */ 55719);
/* harmony import */ var _a_propos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a-propos.page.scss */ 23853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app-config/app-config */ 55619);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);







let AProposPage = class AProposPage {
    constructor(router, appconfig, navParams, modalController) {
        this.router = router;
        this.appconfig = appconfig;
        this.navParams = navParams;
        this.modalController = modalController;
    }
    ngOnInit() {
        console.log('ionViewDidLoad ApropoPage');
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
};
AProposPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
AProposPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-a-propos',
        template: _raw_loader_a_propos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_a_propos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AProposPage);



/***/ }),

/***/ 23853:
/*!***************************************************!*\
  !*** ./src/app/pages/a-propos/a-propos.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhLXByb3Bvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 55719:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/a-propos/a-propos.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar  color=\"logo\">\r\n    <ion-title *ngIf=\"this.appconfig.userSettings.language=='fr'\">\r\n      A propos de\r\n    </ion-title>\r\n    <ion-title *ngIf=\"this.appconfig.userSettings.language=='ar'\">\r\n      حول التطبيق\r\n    </ion-title>\r\n    <ion-title *ngIf=\"this.appconfig.userSettings.language=='en'\">\r\n      About\r\n    </ion-title>\r\n    <ion-buttons  slot=\"primary\">\r\n      <ion-button (click)=\"closeModal()\" >\r\n        <ion-icon class=\"close-modal\" name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding>\r\n  <div class=\"paragraph\" *ngIf=\"this.appconfig.userSettings.language=='fr'\">\r\n    Les informations collectées vous concernant font l’objet d’un traitement informatique par On a\r\n    Trouvé, et sont notamment nécessaires à la gestion de vos informations de connexion et de vos\r\n    offres en mode professionnel. Conformément à la réglementation en vigueur sur la protection des\r\n    données personnelles, vous disposez d’un droit d’accès, de rectification et d’opposition de vos\r\n    données. Vous pouvez exercer ces droits en envoyant votre demande via ce formulaire.\r\n  </div>\r\n\r\n  <div class=\"paragraph\" *ngIf=\"this.appconfig.userSettings.language=='ar'\">\r\n    المعلومات التي يتم جمعها من خلال التطبيق\r\n    هي ضرورية بشكل خاص لإدارة معلومات الاتصال الخاصة بك و\r\n    إدارة العروض الخاصة بك.<br>\r\n    وفقا للوائح المعمول بها بشأن حماية\r\n    البيانات الشخصية ، لديك الحق في الوصول والتصحيح والمعارضة الخاصة بك\r\n    البيانات. يمكنك ممارسة هذه الحقوق من خلال التواصل معنا.\r\n  </div>\r\n\r\n\r\n  <div class=\"paragraph\" *ngIf=\"this.appconfig.userSettings.language=='en'\">\r\n\r\n    The information collected about you is subject to computer processing by this Application, and are in particular necessary for the management of your connection information and your\r\n    offers in professional mode. In accordance with the regulations in force on the protection of\r\n    personal data, you have a right of access, rectification and opposition of your\r\n    data. You can exercise these rights by contacting us.\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_a-propos_a-propos_module_ts.js.map