(self["webpackChunkmigrationto5"] = self["webpackChunkmigrationto5"] || []).push([["src_app_pages_products_products_module_ts"],{

/***/ 19653:
/*!***********************************************************!*\
  !*** ./src/app/pages/products/products-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageRoutingModule": () => (/* binding */ ProductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.page */ 58898);




const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_0__.ProductsPage
    }
];
let ProductsPageRoutingModule = class ProductsPageRoutingModule {
};
ProductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductsPageRoutingModule);



/***/ }),

/***/ 95712:
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageModule": () => (/* binding */ ProductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-routing.module */ 19653);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.page */ 58898);
/* harmony import */ var _pipes_time_ago_pipe_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/time-ago-pipe/index */ 83187);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ 45642);










let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsPageRoutingModule,
            _pipes_time_ago_pipe_index__WEBPACK_IMPORTED_MODULE_2__.TimeAgoPipeModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild(),
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_1__.ProductsPage]
    })
], ProductsPageModule);



/***/ }),

/***/ 58898:
/*!*************************************************!*\
  !*** ./src/app/pages/products/products.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPage": () => (/* binding */ ProductsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_products_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./products.page.html */ 46788);
/* harmony import */ var _products_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.page.scss */ 24444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);
/* harmony import */ var _filters_modal_filters_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filters-modal/filters-modal.page */ 75995);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-ionic-image-viewer */ 51210);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_ui_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ui/ui */ 85081);
/* harmony import */ var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product/product.service */ 45798);
/* harmony import */ var src_app_services_product_favorites_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/product/favorites.service */ 17322);














let ProductsPage = class ProductsPage {
    constructor(router, navParams, httpClient, activatedRoute, services, favorieService, productService, ui, platform, modalCtrl) {
        this.router = router;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.activatedRoute = activatedRoute;
        this.services = services;
        this.favorieService = favorieService;
        this.productService = productService;
        this.ui = ui;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.onFireMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.showSpinner = false;
        this.showRow = true;
        this.slideProductsOpts = {
            pagination: false,
            initialSlide: 0,
            speed: 400,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        this.products = [];
        this.filter = {
            price: false,
            distance: false,
            date: false,
            lat: 0,
            lng: 0
        };
        this.doinfinity = false;
        this.page = 1;
        this.selected = null;
        this.filtred = [];
    }
    ;
    ngOnInit() {
        this.page = 1;
        this.activatedRoute.params.subscribe(res => {
            if (res.category != null) {
                this.getproducts(res.category);
            }
            else {
                this.getproducts();
            }
        });
    }
    ionViewWillEnter() {
        this.page = 1;
    }
    fireMethod(method, params) {
        this.onFireMethod.emit({ method, params });
    }
    getFiltred(event) {
        console.log(event);
        this.filtred = [];
        if (event) {
            this.filtred = event;
        }
    }
    getDistanceFromLatLonInKm(product) {
        if (this.services.current_position) {
            const location = { lat: product.address.lat, lng: product.address.long };
            const currentPosition = { lat: this.services.current_position.lat, lng: this.services.current_position.lng };
            const R = 6371; // Radius of the earth in km
            const dLat = this.deg2rad(location.lat - currentPosition.lat); // this.deg2rad below
            const dLon = this.deg2rad(location.lng - currentPosition.lng);
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(this.deg2rad(currentPosition.lat)) * Math.cos(this.deg2rad(location.lat)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const d = R * c; // Distance in km
            return d.toFixed(2);
        }
        else {
            return 0;
        }
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    gotoDetails(product) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // const modal = await this.modalCtrl.create({
            //   component: ProductDetailsPage,
            //   componentProps: {
            //     product
            //   },
            // });
            //
            // return await modal.present();
            this.router.navigateByUrl('/product-details/' + (product === null || product === void 0 ? void 0 : product.id));
        });
    }
    filterItems(ev) {
        const val = ev.target.value;
        this.filtred = this.products;
        if (val && val.trim() !== '') {
            this.filtred = this.filtred.filter((item) => item.title.toLowerCase().includes(val.toLowerCase()));
        }
    }
    getdatfromdateBase(val) {
        this.searchterm = val;
        if (val) {
            this.showSpinner = true;
            this.products = [];
            this.filtred = [];
            this.productService.getsearchAds(val, this.category).subscribe((res) => {
                this.showSpinner = false;
                setTimeout(() => {
                    this.products = res;
                    this.filtred = res;
                }, 0);
            });
        }
        else {
            this.page = 0;
            this.showSpinner = false;
            this.getproducts();
        }
    }
    playAudio(currentProduct, index) {
        if (currentProduct.voice.length > 0) {
            const audio = new Audio(currentProduct.voice[0]);
            if (this.platform.is('ios')) {
                audio.preload = 'metadata';
                audio.onloadedmetadata = () => {
                    this.audioPlay(audio, index);
                };
            }
            else {
                audio.onloadeddata = () => {
                    this.audioPlay(audio, index);
                };
            }
        }
    }
    audioPlay(audio, index) {
        this.selected = index;
        audio.play();
        setTimeout(() => {
            audio.pause();
            this.selected = null;
        }, Math.trunc((audio.duration) * 1000) + 100);
    }
    favoris(product) {
        this.favorieService.addfavories(product.id).subscribe((res) => {
            console.log('Back From Favvoris ', res);
        }, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)((err) => {
            // this.services.fireError(err);
            throw err;
        }));
    }
    getproducts(category) {
        if (category) {
            // this.ui.loading();
            this.productService.getProductsByCategory(category, this.page, false, this.filter).subscribe((res) => {
                this.products = res;
                console.log(this.products);
                // this.ui.unLoading();
                this.filtred = this.products;
                this.services.getCurrentLocation(true).then((pos) => {
                    this.services.current_position.lat = pos.coords.latitude;
                    this.services.current_position.lng = pos.coords.longitude;
                }).catch(err => {
                    console.log(err);
                    this.services.fireError(err);
                });
            }, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
                console.log(err);
                throw err;
                // this.services.fireError(err);
            }));
        }
        else {
            // this.ui.loading();
            this.productService.getAllProducts(this.page, false, this.filter).subscribe((res) => {
                // this.ui.unLoading();
                this.products = res;
                this.filtred = this.products;
                this.services.getCurrentLocation(true).then((pos) => {
                    this.services.current_position.lat = pos.coords.latitude;
                    this.services.current_position.lng = pos.coords.longitude;
                }).catch(err => {
                    console.log(err);
                    // this.services.fireError(err);
                });
            });
        }
    }
    openViewer(img) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_10__.ViewerModalComponent,
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
    doInfinite(infiniteScroll) {
        if (!this.searchterm) {
            this.doinfinity = infiniteScroll;
            this.page++;
            if (this.category) {
                this.productService.getProductsByCategory(this.category, this.page, true, this.filter).subscribe((res) => {
                    res.forEach(element => {
                        this.filtred.push(element);
                    });
                    setTimeout(() => {
                        this.products = this.filtred;
                    }, 100);
                    this.services.getCurrentLocation(true).then((pos) => {
                        this.services.current_position.lat = pos.coords.latitude;
                        this.services.current_position.lng = pos.coords.longitude;
                    }).catch(err => {
                        console.log(err);
                        // this.services.fireError(err);
                    });
                    if (res.length === 0) {
                        this.doinfinity.target.disabled = true;
                    }
                    this.doinfinity.target.complete();
                }, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
                    console.log(err);
                    // this.services.fireError(err);
                    this.doinfinity.target.complete();
                    throw err;
                }));
            }
            else {
                this.productService.getAllProducts(this.page, true, this.filter).subscribe((res) => {
                    res.forEach(element => {
                        this.filtred.push(element);
                    });
                    setTimeout(() => {
                        this.products = this.filtred;
                    }, 10);
                    this.services.getCurrentLocation(true).then((pos) => {
                        this.services.current_position.lat = pos.coords.latitude;
                        this.services.current_position.lng = pos.coords.longitude;
                        //            console.log('This is The Current Location Information : ', pos);
                    }).catch(err => {
                        console.log(err);
                        // this.services.fireError(err);
                    });
                    if (res.length === 0) {
                        this.doinfinity.target.disabled = true;
                    }
                    this.doinfinity.target.complete();
                }, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => {
                    this.doinfinity.target.complete();
                    throw error;
                    // this.services.fireError(err);
                }));
            }
        }
    }
    openfilter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.services.current_position) {
                this.filter.lat = this.services.current_position.lat;
                this.filter.lng = this.services.current_position.lng;
            }
            const modal = yield this.modalCtrl.create({
                component: _filters_modal_filters_modal_page__WEBPACK_IMPORTED_MODULE_3__.FiltersModalPage,
                componentProps: { filter: this.filter },
                cssClass: 'filter-modal'
            });
            yield modal.present();
            yield modal.onDidDismiss().then(filter => {
                if (filter) {
                    // console.log('This is the filter => ', filter);
                    this.products = [];
                    this.filtred = [];
                    this.page = 1;
                    setTimeout(() => {
                        if (this.doinfinity) {
                            this.doinfinity.target.complete();
                        }
                        this.getproducts();
                    }, 10);
                }
            });
        });
    }
    close() {
        this.modalCtrl.dismiss();
        // this.router.navigateByUrl('/home');
    }
    doRefresh(event) {
        //this.doinfinity.target.disabled = false;
        this.products = [];
        this.page = 1;
        setTimeout(() => {
            if (typeof this.doinfinity.target !== 'undefined') {
                if (this.doinfinity.target.disabled == true) {
                    this.getproducts();
                    event.target.complete();
                    return this.doinfinity.target.disabled = false;
                }
                else {
                    this.getproducts();
                    event.target.complete();
                }
            }
            else {
                this.getproducts();
                event.target.complete();
            }
        }, 1500);
    }
    ngOnChanges(changes) {
        this.getFiltred(event);
    }
};
ProductsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavParams },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__.ApiServices },
    { type: src_app_services_product_favorites_service__WEBPACK_IMPORTED_MODULE_6__.FavoritesService },
    { type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService },
    { type: _services_ui_ui__WEBPACK_IMPORTED_MODULE_4__.UiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController }
];
ProductsPage.propDecorators = {
    onFireMethod: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }],
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonInfiniteScroll,] }]
};
ProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-products',
        template: _raw_loader_products_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_products_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductsPage);



/***/ }),

/***/ 24444:
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".logo {\n  overflow: hidden;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #fff;\n  background-color: var(--ion-color-logo);\n  height: 85% !important;\n}\n\nion-item ion-avatar ion-img, ion-item ion-avatar img {\n  border-radius: 4px !important;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.rem {\n  --offset-bottom: -3rem !important;\n  --offset-top: 0px;\n}\n\nion-note {\n  color: var(--ion-color-logo);\n  font-weight: bold;\n  font-size: 15px;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 0;\n  padding: 0;\n}\n\n.info-row {\n  z-index: 9999 !important;\n  width: 100%;\n}\n\n.info-row ion-col {\n  align-content: center;\n  text-align: center;\n  align-items: center;\n  align-self: center;\n}\n\n.isit {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  border: none !important;\n  height: 40px !important;\n  width: 40px !important;\n}\n\n.itemisit {\n  border-radius: 5px;\n}\n\n.micposition {\n  position: absolute;\n  left: 0;\n  margin: 0 !important;\n  padding: 5px;\n  border-radius: 5px;\n  color: var(--ion-color-logo) !important;\n  bottom: 19px;\n  margin-left: 26px;\n  z-index: 131 !important;\n}\n\n.label {\n  margin: -21px 8px 13px 0;\n}\n\n.item [item-end] {\n  margin: 0 8px 9px 0;\n}\n\n.fab {\n  background-color: rgba(240, 180, 62, 0.49);\n}\n\n#bars {\n  height: 30px;\n  position: absolute;\n  top: 50%;\n  width: 40px;\n}\n\n.bar {\n  background: white;\n  bottom: 1px;\n  height: 3px;\n  position: absolute;\n  width: 3px;\n  animation: sound 0ms -800ms linear infinite alternate;\n}\n\n@keyframes sound {\n  0% {\n    opacity: .35;\n    height: 3px;\n  }\n  100% {\n    opacity: 1;\n    height: 28px;\n  }\n}\n\n.bar:nth-child(1) {\n  left: 1px;\n  animation-duration: 474ms;\n}\n\n.bar:nth-child(2) {\n  left: 5px;\n  animation-duration: 433ms;\n}\n\n.bar:nth-child(3) {\n  left: 9px;\n  animation-duration: 407ms;\n}\n\n.bar:nth-child(4) {\n  left: 13px;\n  animation-duration: 458ms;\n}\n\n.bar:nth-child(5) {\n  left: 17px;\n  animation-duration: 400ms;\n}\n\n.bar:nth-child(6) {\n  left: 21px;\n  animation-duration: 427ms;\n}\n\n.bar:nth-child(7) {\n  left: 25px;\n  animation-duration: 441ms;\n}\n\n.bar:nth-child(8) {\n  left: 29px;\n  animation-duration: 419ms;\n}\n\n.bar:nth-child(9) {\n  left: 33px;\n  animation-duration: 487ms;\n}\n\n.bar:nth-child(10) {\n  left: 37px;\n  animation-duration: 442ms;\n}\n\n.effectposition {\n  height: 30px;\n  /* left: 16%; */\n  margin: -14px 0px 0px 21px;\n  position: absolute;\n  top: 50%;\n  width: 40px;\n  opacity: 1;\n}\n\n.loadwhensearch {\n  position: relative;\n  z-index: 999;\n  left: 50%;\n  transform: translateX(-50%);\n  margin: 10px 0;\n}\n\n.productTitle {\n  font-size: 1.1rem;\n  white-space: nowrap;\n  margin: 0;\n}\n\nion-avatar {\n  border-radius: 4px !important;\n  overflow: hidden;\n  width: 87px;\n  height: 87px;\n  object-fit: cover;\n  border: 2px solid var(--ion-color-logo) !important;\n}\n\nion-item-options {\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUVoQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsc0JBQXNCO0FBQXhCOztBQUdBO0VBQ0UsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUVaLGlCQUFpQjtBQURuQjs7QUFJQTtFQUNFLGlDQUFnQjtFQUNoQixpQkFBYTtBQURmOztBQUdBO0VBQ0UsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsVUFBVTtBQUFaOztBQUdBO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7QUFBYjs7QUFPQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUpwQjs7QUFRQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBTHhCOztBQVNBO0VBRUUsa0JBQWtCO0FBUHBCOztBQVVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFLUCxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFYekI7O0FBY0E7RUFDRSx3QkFBd0I7QUFYMUI7O0FBY0E7RUFDRSxtQkFBbUI7QUFYckI7O0FBY0E7RUFDRSwwQ0FBMEM7QUFYNUM7O0FBZUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBWmI7O0FBZUE7RUFDRSxpQkFBOEI7RUFDOUIsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFEQUFxRDtBQVp2RDs7QUFlQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFaYjtFQWNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7RUFaZDtBQUNGOztBQWVBO0VBQ0UsU0FBUztFQUNULHlCQUF5QjtBQVozQjs7QUFlQTtFQUNFLFNBQVM7RUFDVCx5QkFBeUI7QUFaM0I7O0FBZUE7RUFDRSxTQUFTO0VBQ1QseUJBQXlCO0FBWjNCOztBQWVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtBQVozQjs7QUFlQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFaM0I7O0FBZUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0FBWjNCOztBQWVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtBQVozQjs7QUFlQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFaM0I7O0FBZUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0FBWjNCOztBQWVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtBQVozQjs7QUFlQTtFQUNFLFlBQVk7RUFDWixlQUFBO0VBQ0EsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFVBQVU7QUFaWjs7QUFlQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULDJCQUEyQjtFQUMzQixjQUFjO0FBWmhCOztBQTRCQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsU0FBUztBQXpCWDs7QUE0QkE7RUFDRSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtEQUFrRDtBQXpCcEQ7O0FBNkJBO0VBR0UsbUJBQW1CO0FBNUJyQiIsImZpbGUiOiJwcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvL2ZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbG9nbyk7XHJcbiAgaGVpZ2h0OiA4NSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW0gaW9uLWF2YXRhciBpb24taW1nLCBpb24taXRlbSBpb24tYXZhdGFyIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLy9ib3JkZXI6MnB4IHNvbGlkIG1hcC1nZXQoY29sb3JzICwgdGhlcmQgKTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAvLyBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4ucmVte1xyXG4gIC0tb2Zmc2V0LWJvdHRvbTogLTNyZW0gIWltcG9ydGFudDtcclxuICAtLW9mZnNldC10b3A6IDBweDtcclxufVxyXG5pb24tbm90ZSB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sb2dvKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5pbmZvLXJvdyB7XHJcbiAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vQGluY2x1ZGUgcnRsKCl7XHJcbiAgLy8gIHJpZ2h0OiBjYWxjKDUwJSAtIC0xMTBweCkgIWltcG9ydGFudDtcclxuICAvLyAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkhaW1wb3J0YW50O1xyXG4gIC8vfVxyXG59XHJcblxyXG4uaW5mby1yb3cgaW9uLWNvbCB7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5pc2l0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgcmlnaHQ6IDJweDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLml0ZW1pc2l0IHtcclxuICAvL2JhY2tncm91bmQtY29sb3I6cmdiYShtYXAtZ2V0KGNvbG9ycywgdGhlcmQgKSwwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLm1pY3Bvc2l0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICAvL0BpbmNsdWRlIHJ0bCgpe1xyXG4gIC8vICBsZWZ0OmluaXRpYWw7XHJcbiAgLy8gIHJpZ2h0OiAyNXB4O1xyXG4gIC8vfVxyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sb2dvKSAhaW1wb3J0YW50O1xyXG4gIGJvdHRvbTogMTlweDtcclxuICBtYXJnaW4tbGVmdDogMjZweDtcclxuICB6LWluZGV4OiAxMzEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBtYXJnaW46IC0yMXB4IDhweCAxM3B4IDA7XHJcbn1cclxuXHJcbi5pdGVtIFtpdGVtLWVuZF0ge1xyXG4gIG1hcmdpbjogMCA4cHggOXB4IDA7XHJcbn1cclxuXHJcbi5mYWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxODAsIDYyLCAwLjQ5KTtcclxufVxyXG5cclxuXHJcbiNiYXJzIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG59XHJcblxyXG4uYmFyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgYm90dG9tOiAxcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgYW5pbWF0aW9uOiBzb3VuZCAwbXMgLTgwMG1zIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc291bmQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IC4zNTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFyOm50aC1jaGlsZCgxKSB7XHJcbiAgbGVmdDogMXB4O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDc0bXM7XHJcbn1cclxuXHJcbi5iYXI6bnRoLWNoaWxkKDIpIHtcclxuICBsZWZ0OiA1cHg7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MzNtcztcclxufVxyXG5cclxuLmJhcjpudGgtY2hpbGQoMykge1xyXG4gIGxlZnQ6IDlweDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDQwN21zO1xyXG59XHJcblxyXG4uYmFyOm50aC1jaGlsZCg0KSB7XHJcbiAgbGVmdDogMTNweDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDQ1OG1zO1xyXG59XHJcblxyXG4uYmFyOm50aC1jaGlsZCg1KSB7XHJcbiAgbGVmdDogMTdweDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDQwMG1zO1xyXG59XHJcblxyXG4uYmFyOm50aC1jaGlsZCg2KSB7XHJcbiAgbGVmdDogMjFweDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDQyN21zO1xyXG59XHJcblxyXG4uYmFyOm50aC1jaGlsZCg3KSB7XHJcbiAgbGVmdDogMjVweDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDQ0MW1zO1xyXG59XHJcblxyXG4uYmFyOm50aC1jaGlsZCg4KSB7XHJcbiAgbGVmdDogMjlweDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDQxOW1zO1xyXG59XHJcblxyXG4uYmFyOm50aC1jaGlsZCg5KSB7XHJcbiAgbGVmdDogMzNweDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDQ4N21zO1xyXG59XHJcblxyXG4uYmFyOm50aC1jaGlsZCgxMCkge1xyXG4gIGxlZnQ6IDM3cHg7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0NDJtcztcclxufVxyXG5cclxuLmVmZmVjdHBvc2l0aW9uIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgLyogbGVmdDogMTYlOyAqL1xyXG4gIG1hcmdpbjogLTE0cHggMHB4IDBweCAyMXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogNDBweDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubG9hZHdoZW5zZWFyY2gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLnNlYXJjaGJhciB7XHJcbiAgLy9AaW5jbHVkZSBydGwoKXtcclxuICAvLyAgZGlyZWN0aW9uOnJ0bCFpbXBvcnRhbnQ7XHJcbiAgLy8gIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVye1xyXG4gIC8vICAgIGRpcmVjdGlvbjpydGwhaW1wb3J0YW50O1xyXG4gIC8vICAgIC5zZWFyY2hiYXItaW5wdXR7XHJcbiAgLy8gICAgICBkaXJlY3Rpb246cnRsIWltcG9ydGFudDtcclxuICAvLyAgICB9XHJcbiAgLy8gIH1cclxuICAvL31cclxufVxyXG5cclxuXHJcbi5wcm9kdWN0VGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pb24tYXZhdGFyIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiA4N3B4O1xyXG4gIGhlaWdodDogODdweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbG9nbykgIWltcG9ydGFudDtcclxuICAvLyBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuaW9uLWl0ZW0tb3B0aW9ucyB7XHJcbiAgLy93aWR0aDogNDAlO1xyXG4gIC8vZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vL2lvbi1zbGlkZXMge1xyXG4vLyAgaGVpZ2h0OiAxNSU7XHJcbi8vfVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 46788:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [isFiltered]=\"true\" [isMenu]=\"true\" [isProfile]=\"true\"\r\n            (newItemEvent)=\"getdatfromdateBase($event)\" (filterEvent)=\"getFiltred($event)\"></app-header>\r\n<ion-content [ngClass]=\"services.isLoggedIn ? 'rem' : ''\">\r\n  <!-- <ion-button (click)=\"toggleInfiniteScroll()\" expand=\"block\">\r\n    Toggle\r\n  </ion-button> -->\r\n\r\n  <app-categories-slider></app-categories-slider>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"Pull to refresh\"\r\n                           refreshingSpinner=\"circles\" refreshingText=\"Loading...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <div *ngIf=\"filtred.length == 0\" class=\"no-content\">\r\n    <h4>{{'not_found.annonces'|translate}}</h4>\r\n  </div>\r\n  <ion-spinner name=\"dots\" class=\"loadwhensearch\" *ngIf=\"showSpinner\"></ion-spinner>\r\n  <ion-list class=\"chat-sliding-demo\">\r\n    <ion-item-sliding class='animated fadeIn' *ngFor=\"let product of filtred;let i=index;\" #item>\r\n      <ion-item>\r\n        <ion-avatar class=\"animated fadeIn avatarimg\" slot=\"start\">\r\n          <ion-fab slot=\"fixed\" *ngIf=\"(selected!=i)&& product.voice.length>0\" (click)=\"playAudio(product,i)\"\r\n                   class=\"micposition\" slot=\"start\">\r\n            <ion-fab-button logo size=\"small\">\r\n              <ion-icon name=\"play\">\r\n              </ion-icon>\r\n            </ion-fab-button>\r\n          </ion-fab>\r\n          <img [src]=\"product.src\" (click)=\"openViewer(product?.src)\">\r\n          <div *ngIf=\"selected==i\" class=\"effectposition\" id=\"bars\">\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n          </div>\r\n        </ion-avatar>\r\n        <ion-label (click)=\"gotoDetails(product)\">\r\n          <h2 class=\"productTitle \">{{product.title}}</h2>\r\n          <p>{{product.description}}</p>\r\n          <h3 style=\"position: absolute;right: 2%;top: 10%;\">\r\n            <ion-note>{{ product.updated_at | timeAgo:'ar'}}</ion-note>\r\n            \r\n          </h3>\r\n            \r\n          \r\n          <ion-grid [fixed]=\"true\">\r\n          <ion-row class=\"info-row\">\r\n            <ion-col>\r\n              <ion-note *ngIf=\"product.price\">\r\n                {{product.price}}\r\n                <span class=\"euro\">€</span>\r\n              </ion-note>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-note *ngIf=\"getDistanceFromLatLonInKm(product)\">\r\n                {{getDistanceFromLatLonInKm(product)}} {{'favoris.km'|translate}}\r\n              </ion-note>\r\n              <ion-spinner *ngIf=\"!getDistanceFromLatLonInKm(product)\">\r\n              </ion-spinner>\r\n            </ion-col>\r\n            <ion-col>\r\n              \r\n              <ion-note>\r\n                <ion-icon ios=\"star\" name=\"eye\"></ion-icon>\r\n                {{product.visitor}}\r\n              </ion-note>\r\n            </ion-col>\r\n          </ion-row>\r\n          </ion-grid>\r\n        </ion-label>\r\n      \r\n\r\n      </ion-item>\r\n      <ion-item-options *ngIf=\"services.isLoggedIn\" side=\"start\">\r\n        <ion-button class=\"logo\" expandable (click)=\"favoris(product)\">\r\n          <ion-icon name=\"star\" class=\"expand-hide\"></ion-icon>\r\n          <!--          <div class=\"expand-hide\">{{'favoris.favori'|translate}}</div>-->\r\n        </ion-button>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n  <ion-infinite-scroll *ngIf=!searchterm (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content\r\n    loadingSpinner=\"bubbles\"\r\n    loadingText=\"Loading ...\"\r\n    ></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n<!-- <app-footer></app-footer> -->\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_products_products_module_ts.js.map