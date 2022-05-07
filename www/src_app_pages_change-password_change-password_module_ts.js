(self["webpackChunkmigrationto5"] = self["webpackChunkmigrationto5"] || []).push([["src_app_pages_change-password_change-password_module_ts"],{

/***/ 47381:
/*!*************************************************************************!*\
  !*** ./src/app/pages/change-password/change-password-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPageRoutingModule": () => (/* binding */ ChangePasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.page */ 23286);




const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPage
    }
];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {
};
ChangePasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangePasswordPageRoutingModule);



/***/ }),

/***/ 68292:
/*!*****************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPageModule": () => (/* binding */ ChangePasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password-routing.module */ 47381);
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.page */ 23286);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 84236);








let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordPage]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ 23286:
/*!***************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPage": () => (/* binding */ ChangePasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./change-password.page.html */ 9435);
/* harmony import */ var _change_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.page.scss */ 88323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_ui_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ui/ui */ 85081);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);









let ChangePasswordPage = class ChangePasswordPage {
    constructor(router, formBuilder, ui, services, navParams) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.ui = ui;
        this.services = services;
        this.navParams = navParams;
        this.submitReg = false;
        this.showPassword = false;
        this.user = {};
        this.token = this.navParams.get('token');
        console.log(' TOKEN TOKEN', this.token);
        this.addReginForm = formBuilder.group({
            password: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)])
            ],
            vpassword: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)])
            ]
        }, { validator: this.checkIfMatchingPasswords('password', 'vpassword') });
    }
    checkIfMatchingPasswords(passwordKey, passwordConfirmationKey) {
        return (group) => {
            const passwordInput = group.controls[passwordKey];
            const passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    }
    ngOnInit() {
    }
    cahngepasswordView() {
        this.showPassword = !this.showPassword;
    }
    changePassword() {
        this.submitReg = true;
        if (this.addReginForm.valid) {
            this.services.changepassword(this.token, this.user.password).then(() => {
                console.log('passwordChanged');
                this.router.navigateByUrl('/login');
                this.ui.toast('Mot de Passe Changer', null, null, 3000, 'top');
            }).catch((err) => {
                this.services.fireError(err);
            });
        }
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_ui_ui__WEBPACK_IMPORTED_MODULE_2__.UiService },
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_3__.ApiServices },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams }
];
ChangePasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-change-password',
        template: _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_change_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChangePasswordPage);



/***/ }),

/***/ 88323:
/*!*****************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".input-has-focus .item-inner {\n  border-bottom: none !important;\n  background: #f0b23e0e;\n  box-shadow: none !important;\n}\n\n.item {\n  padding-left: 10px;\n  padding-right: 10px;\n  position: relative;\n}\n\n.row {\n  margin: 10px 2px;\n  box-shadow: 1px 1px 9px -5px rgba(0, 0, 0, 0.9);\n}\n\n.item-md ion-icon[item-end] {\n  z-index: 999 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSw4QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLDJCQUEwQjtBQUM5Qjs7QUFFRTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVFO0VBQ0UsZ0JBQWdCO0VBQ2hCLCtDQUErQztBQUNuRDs7QUFFRTtFQUNFLHVCQUFzQjtBQUMxQiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuaW5wdXQtaGFzLWZvY3VzIC5pdGVtLWlubmVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBiMjNlMGU7XHJcbiAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pdGVte1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5yb3d7XHJcbiAgICBtYXJnaW46IDEwcHggMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA5cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1tZCBpb24taWNvbltpdGVtLWVuZF17XHJcbiAgICB6LWluZGV4OiA5OTkhaW1wb3J0YW50O1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ 9435:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar  color=\"logo\">\r\n    <ion-menu-toggle>\r\n<ion-button side=\"start\">\r\n      <ion-icon name=\"menu\"></ion-icon>\r\n    </ion-button>\r\n</ion-menu-toggle>\r\n    <ion-title>\r\n      {{'change_password.change_password'|translate}}\r\n    </ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n  <form  [formGroup]='addReginForm'>\r\n    <ion-row>\r\n      <ion-col >\r\n        <ion-input formControlName=\"password\"   [type]=\"!showPassword ? 'password' : 'text'\" placeholder=\"{{'change_password.password'|translate}}\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div *ngIf=\"(!addReginForm.controls.password?.valid && (addReginForm.controls.password?.dirty || submitReg))\" class=\"erreurMsg\">&nbsp;\r\n      <span *ngIf=\"addReginForm.hasError('minlength',['password'])\">{{'errors.min-length.8'|translate}}</span>\r\n      <span *ngIf=\"addReginForm.hasError('required',['password'])\">{{'errors.required'|translate}}</span>\r\n      &nbsp;\r\n    </div>\r\n    <ion-row>\r\n      <ion-col >\r\n        <ion-input formControlName=\"vpassword\" [type]=\"!showPassword ? 'password' : 'text'\" placeholder=\"{{'change_password.password'|translate}}\"></ion-input>\r\n        <ion-icon *ngIf=\"!showPassword\" (click)=\"cahngepasswordView()\" color=\"primary\" item-end name=\"eye\">\r\n        </ion-icon>\r\n        <ion-icon *ngIf=\"showPassword\" (click)=\"cahngepasswordView()\" color=\"primary\" item-end name=\"eye-off\">\r\n        </ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div *ngIf=\"(!addReginForm.controls.vpassword?.valid && (addReginForm.controls.vpassword?.dirty || submitReg))\" class=\"erreurMsg\">&nbsp;\r\n      <span *ngIf=\"addReginForm.hasError('required',['vpassword'])\">{{'errors.required'|translate}}</span>\r\n      <span *ngIf=\"addReginForm.hasError('notEquivalent',['vpassword'])\">{{'errors.notConform'|translate}}</span>\r\n      &nbsp;\r\n    </div>\r\n\r\n\r\n    <ion-button (click)=\"changePassword()\" expand=\"full\" slot=\"start\">\r\n      <ion-icon name=\"md-checkmark\"></ion-icon>\r\n      {{'change_password.change'|translate}}\r\n    </ion-button>\r\n  </form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_change-password_change-password_module_ts.js.map