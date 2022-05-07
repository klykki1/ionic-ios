(self["webpackChunkmigrationto5"] = self["webpackChunkmigrationto5"] || []).push([["src_app_pages_favorites_favorites_module_ts"],{

/***/ 84145:
/*!*************************************************************!*\
  !*** ./src/app/pages/favorites/favorites-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPageRoutingModule": () => (/* binding */ FavoritesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites.page */ 19310);




const routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_0__.FavoritesPage
    }
];
let FavoritesPageRoutingModule = class FavoritesPageRoutingModule {
};
FavoritesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavoritesPageRoutingModule);



/***/ }),

/***/ 99883:
/*!*****************************************************!*\
  !*** ./src/app/pages/favorites/favorites.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPageModule": () => (/* binding */ FavoritesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites-routing.module */ 84145);
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.page */ 19310);
/* harmony import */ var _pipes_time_ago_pipe_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/time-ago-pipe/index */ 83187);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ 45642);










let FavoritesPageModule = class FavoritesPageModule {
};
FavoritesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritesPageRoutingModule,
            _pipes_time_ago_pipe_index__WEBPACK_IMPORTED_MODULE_2__.TimeAgoPipeModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild(),
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
        ],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_1__.FavoritesPage]
    })
], FavoritesPageModule);



/***/ }),

/***/ 19310:
/*!***************************************************!*\
  !*** ./src/app/pages/favorites/favorites.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPage": () => (/* binding */ FavoritesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./favorites.page.html */ 19819);
/* harmony import */ var _favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.page.scss */ 61106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ionic-image-viewer */ 51210);
/* harmony import */ var src_app_services_product_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product/favorites.service */ 17322);









let FavoritesPage = class FavoritesPage {
    constructor(router, navParams, modalCtrl, services) {
        this.router = router;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.services = services;
        this.products = [];
        this.filtred = [];
    }
    ngOnInit() {
        this.getfavories();
    }
    getfavories() {
        this.filtred = [];
        this.services.getfavories().subscribe((res) => {
            this.filtred = res;
        });
    }
    openViewer(img) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_4__.ViewerModalComponent,
                componentProps: {
                    src: img
                },
                cssClass: 'ion-img-viewer',
                keyboardClose: true,
                showBackdrop: true
            });
            return yield modal.present();
        });
    }
    gotoDetails(product) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigateByUrl('/product-details/' + (product === null || product === void 0 ? void 0 : product.id));
        });
    }
    filterItems(ev) {
        const val = ev.target.value;
        this.filtred = this.products;
        if (val && val.trim() !== '') {
            console.log('This is The value ', val, '/', val.trim());
            this.filtred = this.filtred.filter((item) => {
                return item.title.toLowerCase().includes(val.toLowerCase());
            });
            // console.log('After-Filter-Search : ', this.products);
        }
    }
    change(date) {
        return new Date(date);
    }
    delete(prodcut) {
        this.services.deleteFavory(prodcut.id).subscribe(res => {
            this.getfavories();
        }, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => {
            console.log(err);
            throw (err);
        }));
    }
};
FavoritesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_services_product_favorites_service__WEBPACK_IMPORTED_MODULE_2__.FavoritesService }
];
FavoritesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-favorites',
        template: _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FavoritesPage);



/***/ }),

/***/ 61106:
/*!*****************************************************!*\
  !*** ./src/app/pages/favorites/favorites.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-avatar ion-img, ion-avatar img {\n  border-radius: 0;\n  overflow: hidden;\n  height: 100%;\n  object-fit: cover;\n  width: 100%;\n}\n\n.info-row h2 {\n  margin: 0;\n}\n\n.info-row p {\n  margin: 2px 0;\n}\n\n.pulseanim {\n  background-color: coral;\n  animation: pulse 5s infinite !important;\n}\n\n@keyframes pulse {\n  20% {\n    box-shadow: 3px 6px 12px blue;\n  }\n}\n\nion-avatar {\n  position: relative;\n  overflow: hidden;\n  border-radius: 0;\n  width: 87px;\n  height: 87px;\n}\n\nion-item ion-label {\n  margin-right: 15px !important;\n}\n\nion-note {\n  color: var(--ion-color-logo);\n  font-weight: bolder;\n}\n\nion-col {\n  align-content: center;\n  text-align: center;\n  align-items: center;\n  align-self: center;\n}\n\nion-avatar::after {\n  content: \"\";\n  width: 100%;\n  height: 30%;\n  transform: rotate(41deg);\n  height: 100%;\n  position: absolute;\n  bottom: -52%;\n  right: -74%;\n  z-index: 0;\n  box-shadow: 5px 12px 20px 0px #000000d9;\n  background: var(--ion-color-logo);\n}\n\n.fav-icon {\n  position: absolute;\n  z-index: 99999;\n  color: white;\n  bottom: 9%;\n  font-size: 16px;\n  right: 4%;\n}\n\n.item-md [item-left], .item-md [item-right], .item-md [item-start], .item-md [item-end] {\n  margin: 9px 2px 9px 0 !important;\n}\n\n.info-row {\n  z-index: 9999 !important;\n  width: 65%;\n  text-overflow: ellipsis;\n  margin-left: 2%;\n}\n\n.info-row ion-col {\n  align-content: center;\n  text-align: center;\n  align-items: center;\n  align-self: center;\n}\n\n.info-row ion-col {\n  white-space: nowrap;\n}\n\n.info-row ion-col ion-icon {\n  letter-spacing: 5px;\n}\n\n.btnDelete {\n  height: 96%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBRWhCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztBQUFiOztBQUlBO0VBQ0UsU0FBUztBQURYOztBQUlBO0VBQ0UsYUFBYTtBQURmOztBQUdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVDQUFzQztBQUF4Qzs7QUFHQTtFQUNJO0lBQUssNkJBQTZCO0VBQ3BDO0FBQ0Y7O0FBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUdkOztBQU1BO0VBRUUsNkJBQTZCO0FBSi9COztBQWFBO0VBQ0UsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQVZyQjs7QUFhQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQVZwQjs7QUFjQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUVYLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLHVDQUF1QztFQUN2QyxpQ0FBaUM7QUFYbkM7O0FBY0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtFQUVmLFNBQVM7QUFaWDs7QUFlQTtFQUNFLGdDQUFnQztBQVpsQzs7QUFlQTtFQUVFLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFiakI7O0FBZ0JBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBYnBCOztBQWdCQTtFQUNFLG1CQUFtQjtBQWJyQjs7QUFnQkE7RUFDRSxtQkFBbUI7QUFickI7O0FBaUJBO0VBQ0UsV0FBVztBQWRiIiwiZmlsZSI6ImZhdm9yaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFyIGlvbi1pbWcsIGlvbi1hdmF0YXIgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLy93aWR0aDogODdweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmluZm8tcm93IGgyIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5pbmZvLXJvdyBwIHtcclxuICBtYXJnaW46IDJweCAwO1xyXG59XHJcbi5wdWxzZWFuaW17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XHJcbiAgYW5pbWF0aW9uOnB1bHNlIDVzIGluZmluaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgMjAlIHtib3gtc2hhZG93OiAzcHggNnB4IDEycHggYmx1ZTt9XHJcbn1cclxuaW9uLWF2YXRhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICB3aWR0aDogODdweDtcclxuICBoZWlnaHQ6IDg3cHg7XHJcbn1cclxuXHJcbi8vQGluY2x1ZGUgcnRsKCl7XHJcbi8vICAuc2VhcmNoYmFyLWlucHV0e1xyXG4vLyAgICBkaXJlY3Rpb246IHJ0bCFpbXBvcnRhbnQ7XHJcbi8vICB9XHJcbi8vfVxyXG5cclxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICAvL0BpbmNsdWRlIHJ0bCgpe1xyXG4gIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gIC8vfVxyXG5cclxuICAvL0BpbmNsdWRlIGx0cigpe1xyXG4gIC8vICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xyXG4gIC8vfVxyXG59XHJcblxyXG5cclxuaW9uLW5vdGUge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbG9nbyk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbmlvbi1hdmF0YXI6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQxZGVnKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTUyJTtcclxuICByaWdodDogLTc0JTtcclxuICB6LWluZGV4OiAwO1xyXG4gIGJveC1zaGFkb3c6IDVweCAxMnB4IDIwcHggMHB4ICMwMDAwMDBkOTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbG9nbyk7XHJcbn1cclxuXHJcbi5mYXYtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3R0b206IDklO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgcmlnaHQ6IDQlO1xyXG59XHJcblxyXG4uaXRlbS1tZCBbaXRlbS1sZWZ0XSwgLml0ZW0tbWQgW2l0ZW0tcmlnaHRdLCAuaXRlbS1tZCBbaXRlbS1zdGFydF0sIC5pdGVtLW1kIFtpdGVtLWVuZF0ge1xyXG4gIG1hcmdpbjogOXB4IDJweCA5cHggMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5mby1yb3cge1xyXG4gIC8vcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcblxyXG4uaW5mby1yb3cgaW9uLWNvbCB7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmluZm8tcm93IGlvbi1jb2wge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5pbmZvLXJvdyBpb24tY29sIGlvbi1pY29uIHtcclxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG59XHJcblxyXG5cclxuLmJ0bkRlbGV0ZSB7XHJcbiAgaGVpZ2h0OiA5NiU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 19819:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"logo\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button>\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{'favoris.Mes_favoris'|translate}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"rem\">\r\n  <ion-searchbar [placeholder]=\"('favoris.Mes_favoris'|translate)\"\r\n                 (ionInput)=\"filterItems($event)\"></ion-searchbar>\r\n  <div *ngIf=\"filtred.length == 0\" class=\"no-content\">\r\n    <h4>{{'not_found.favoris'|translate}}</h4>\r\n  </div>\r\n  <ion-list class=\"chat-sliding-demo\">\r\n    <ion-item-sliding  class='animated fadeIn'\r\n                      *ngFor=\"let product of filtred;let i=index;\" #item>\r\n                   \r\n      <ion-item>\r\n        <ion-avatar class='animated fadeIn' slot=\"start\">\r\n          <ion-img [src]=\"product.src\" (click)=\"openViewer(product.src)\"></ion-img>\r\n          <ion-icon class=\"fav-icon\" name=\"star\"></ion-icon>\r\n        </ion-avatar>\r\n        <!--        <ion-row>-->\r\n        <ion-row class=\"info-row\" (click)=\"gotoDetails(product)\">\r\n          <h2>{{product.title}}</h2>\r\n          <p>{{product.description}}</p>\r\n          <!--        </ion-row>-->\r\n          <ion-col size=\"3\">\r\n            <ion-note *ngIf=\"product.price\">\r\n              {{product.price}}\r\n              <span class=\"euro\">{{'favoris.price_symbol'|translate}}</span>\r\n            </ion-note>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-note>\r\n              <ion-icon ios=\"star\" md=\"star\">{{product.rate}}</ion-icon>\r\n            </ion-note>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <ion-note>\r\n              <ion-icon ios=\"star\" md=\"people\">{{product.visitor}}</ion-icon>\r\n            </ion-note>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-note slot=\"end\">\r\n          {{ product.updated_at | timeAgo:'ar'}}\r\n        </ion-note>\r\n      </ion-item>\r\n  \r\n      <ion-item-options>\r\n        <ion-button class=\"btnDelete\" color=\"danger\" (click)=\"delete(product)\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n          {{'favoris.delete'|translate}}\r\n        </ion-button>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<!-- <app-footer></app-footer> -->\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_favorites_favorites_module_ts.js.map