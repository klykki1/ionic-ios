(self["webpackChunkmigrationto5"] = self["webpackChunkmigrationto5"] || []).push([["src_app_pages_product-details_product-details_module_ts"],{

/***/ 12237:
/*!*************************************************************************!*\
  !*** ./src/app/pages/product-details/product-details-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsPageRoutingModule": () => (/* binding */ ProductDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-details.page */ 94808);




const routes = [
    {
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsPage
    }
];
let ProductDetailsPageRoutingModule = class ProductDetailsPageRoutingModule {
};
ProductDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductDetailsPageRoutingModule);



/***/ }),

/***/ 81067:
/*!*****************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsPageModule": () => (/* binding */ ProductDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _product_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-details-routing.module */ 12237);
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-details.page */ 94808);
/* harmony import */ var ionic_rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-rating */ 80001);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);










let ProductDetailsPageModule = class ProductDetailsPageModule {
};
ProductDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _product_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsPageRoutingModule,
            ionic_rating__WEBPACK_IMPORTED_MODULE_8__.IonicRatingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild(),
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
        ],
        declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_1__.ProductDetailsPage]
    })
], ProductDetailsPageModule);



/***/ }),

/***/ 94808:
/*!***************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsPage": () => (/* binding */ ProductDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_product_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-details.page.html */ 2913);
/* harmony import */ var _product_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-details.page.scss */ 17428);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 60758);
/* harmony import */ var _services_ui_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ui/ui */ 85081);
/* harmony import */ var _services_app_config_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app-config/app-config */ 55619);
/* harmony import */ var _rating_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rating/rating.page */ 77977);
/* harmony import */ var _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/email-composer/ngx */ 17265);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 35221);
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-ionic-image-viewer */ 51210);
/* harmony import */ var _components_slideup_slideup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/slideup/slideup.component */ 25050);
/* harmony import */ var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/product/product.service */ 45798);
/* harmony import */ var src_app_services_product_favorites_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/product/favorites.service */ 17322);

















let ProductDetailsPage = class ProductDetailsPage {
    constructor(router, services, productService, favorieService, navParams, active, callNumber, emailComposer, ui, appConfig, platform, socialSharing, modalCtrl, changeDetectorRef) {
        this.router = router;
        this.services = services;
        this.productService = productService;
        this.favorieService = favorieService;
        this.navParams = navParams;
        this.active = active;
        this.callNumber = callNumber;
        this.emailComposer = emailComposer;
        this.ui = ui;
        this.appConfig = appConfig;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.modalCtrl = modalCtrl;
        this.changeDetectorRef = changeDetectorRef;
        this.currentProduct = {};
        this.showConfirm = false;
        this.showWays = false;
        this.gettingLocation = false;
        this.slideOpts = {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            initialSlide: 0,
            // width:300,
            // slidesPerView: 1,
            slidesPerColumn: 1,
            // loop: true,
            autoPlay: true,
            centeredSlides: true,
            // spaceBetween: 20,
            //  centeredSlides: true,
            slidesPerView: 1,
            speed: 1000
        };
        this.loading = false;
        this.segmentModel = 'image';
        this.backdropVisible = false;
    }
    ngOnInit() {
        this.active.params.subscribe(res => {
            if (res.idProduct) {
                this.product = res.idProduct;
                this.getProductById(this.product);
            }
        });
        // this.getProductById(this.product?.id);
        if (this.services.isLoggedIn && this.services.current_user) {
            // this.checkFavory();
        }
        this.gettingLocation = true;
    }
    getProductById(product) {
        // this.loading = false;
        // this.ui.loading();
        this.productService.getProductbyId(product).subscribe(res => {
            var _a;
            this.currentProduct = res;
            // if (this.mapElement !== undefined) {
            //
            //   this.getCurrentPosition();
            // }
            this.services.addvisitors((_a = this.currentProduct) === null || _a === void 0 ? void 0 : _a.id).subscribe((resp) => {
                // console.log(resp);
                this.currentProduct.visitor = resp.visitors;
            });
        });
    }
    openViewer(img) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_13__.ViewerModalComponent,
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
    slideChanged(currentIndex) {
        this.mainSlide.slideTo((currentIndex + 1));
    }
    close() {
        this.modalCtrl.dismiss();
        // this.router.navigateByUrl('/home');
    }
    goto(link, product) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.services.isLoggedIn) {
                if (product.person.id !== this.services.current_user.id) {
                    const conversation = {
                        receiver: product.person,
                        product
                    };
                    this.router.navigateByUrl('/chat', { state: { conversation } });
                }
                else {
                    this.router.navigateByUrl('/discussion/' + (product === null || product === void 0 ? void 0 : product.id));
                }
            }
            else {
                this.ui.confirmation('s\'identifier ! ', 'Identfiez Vous pour Consulter la Conversation').then(() => {
                    this.modalCtrl.dismiss();
                    this.router.navigateByUrl('login');
                });
            }
        });
    }
    // getCurrentPosition() {
    //   this.services.getCurrentLocation(true).then((res: any) => {
    //     console.log(res);
    //     console.log('mapElement', this.mapElement);
    //     this.gettingLocation = false;
    //     this.services.current_position.lat = res.coords.latitude;
    //     this.services.current_position.lng = res.coords.longitude;
    //     if (this.mapElement !== undefined) {
    //       this.loadMap();
    //     }
    //     this.startNavigating();
    //   }).catch(err => {
    //     this.gettingLocation = false;
    //     console.log('Position Error ', err);
    //   });
    //
    // }
    call() {
        if (!this.currentProduct.phone) {
            return false;
        }
        this.callNumber.callNumber(this.currentProduct.phone, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    convertedtoObject(start) {
        return Array(start).fill(1);
    }
    // MAPS Methodes
    // loadMap() {
    //
    //   const latLng = new google.maps.LatLng(parseFloat(this.currentProduct.address.lat),
    //     parseFloat(this.currentProduct.address.long));
    //
    //   const mapOptions = {
    //     center: latLng,
    //     zoom: 18,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //   };
    //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //
    // }
    // startNavigating() {
    //
    //   const directionsService = new google.maps.DirectionsService();
    //   const directionsDisplay = new google.maps.DirectionsRenderer();
    //
    //   directionsDisplay.setMap(this.map);
    //   directionsDisplay.setPanel(this.directionsPanel.nativeElement);
    //   directionsService.route({
    //     origin: {
    //       lat: parseFloat(this.services.current_position.lat),
    //       lng: parseFloat(this.services.current_position.lng)
    //     },
    //     destination: {
    //       lat: parseFloat(this.currentProduct.address.lat),
    //       lng: parseFloat(this.currentProduct.address.long)
    //     },
    //     travelMode: google.maps.TravelMode.DRIVING
    //   }, (res, status) => {
    //     // console.log(res);
    //     if (status === google.maps.DirectionsStatus.OK) {
    //       directionsDisplay.setDirections(res);
    //     } else {
    //       console.warn(status);
    //     }
    //
    //   });
    //
    // }
    sendEmail() {
        if (this.services.isLoggedIn) {
            this.emailComposer.isAvailable().then((available) => {
                if (!available) {
                    this.ui.toast('Email non Disponible');
                }
            });
            const email = {
                to: this.currentProduct.person.email,
                subject: 'On a trouvé ',
                body: '<h6 style="padding:5px;border-radius:5px;border:1px solid #67c1c2;">' + this.currentProduct.title + '</h6>',
                isHtml: true
            };
            // Send a text message using default options
            this.emailComposer.open(email);
        }
        else {
            this.ui.confirmation('s\'identifier ! ', 'Identfiez Vous pour Consulter la Conversation').then(() => {
                this.router.navigateByUrl('/login');
            });
        }
    }
    shareApp() {
        // const branch = window["branch"];
        if (this.platform.is('cordova')) {
            this.ui.loading();
            let picture = null;
            if (this.currentProduct.arrayImages.length) {
                picture = this.currentProduct.arrayImages[0];
            }
            let properties = {
                canonicalIdentifier: new Date().getTime().toString(),
                canonicalUrl: `${this.appConfig.API}/product/${this.currentProduct.id}`,
                title: this.currentProduct.title,
                contentDescription: this.currentProduct.description,
                contentImageUrl: picture,
                deeplink_path: 'product-details',
                contentMetadata: {
                    pooductId: this.currentProduct.id,
                }
            };
            if (this.platform.is('android')) {
                const extrasProperties = {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    og_title: this.currentProduct.title,
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    og_description: this.currentProduct.description,
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    og_image_url: picture,
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    uri_redirect_mode: 1,
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    twitter_title: this.currentProduct.title,
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    twitter_description: this.currentProduct.description,
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    twitter_image_url: picture
                };
                properties = Object.assign(Object.assign({}, properties), extrasProperties);
            }
            // create a branchUniversalObj variable to reference with other Branch methods
            let branchUniversalObj = null;
            Branch.createBranchUniversalObject(properties).then((res) => {
                branchUniversalObj = res;
                // optional fields
                const analytics = {};
                branchUniversalObj.generateShortUrl(analytics, properties).then((res) => {
                    // branchUniversalObj.showShareSheet(analytics, properties, 'this is branch message')
                    this.ui.unLoading();
                    this.ui.shareType().then((shareType) => {
                        this.ui.loading();
                        if (shareType === 'fb') {
                            this.socialSharing.shareViaFacebook(this.currentProduct.description, null, res.url).then((resp) => {
                                this.ui.unLoading();
                            }).catch(err => {
                                this.ui.unLoading();
                                console.log(err);
                            });
                        }
                        else if (shareType === 'twitter') {
                            this.socialSharing.shareViaTwitter(this.currentProduct.description, null, res.url).then((resp) => {
                                this.ui.unLoading();
                            }).catch(err => {
                                this.ui.unLoading();
                                console.log(err);
                            });
                        }
                        else {
                            this.socialSharing.share(this.currentProduct.description, this.currentProduct.title, picture, res.url)
                                .then((resp) => {
                                this.ui.unLoading();
                            }).catch(err => {
                                this.ui.unLoading();
                                console.log(err);
                            });
                        } // endif shareType
                    }); // shareType Promise
                }).catch((err) => {
                    this.ui.unLoading();
                    console.log('Error: ' + JSON.stringify(err));
                });
            }).catch((err) => {
                this.ui.unLoading();
                console.log('Error: ' + JSON.stringify(err));
            });
        }
        // this.ui.loading();
        // this.socialSharing
        //   .share(
        //     this.currentProduct.title,
        //     this.currentProduct.decription,
        //     this.currentProduct.arrayImages[0],
        //     this.currentProduct.arrayImages[0]
        //   )
        //   .then(() => {
        //     this.ui.unLoading();
        //   })
        //   .catch(() => {
        //     this.ui.unLoading();
        //   });
    }
    scrollToBottom(duration) {
        this.showWays = !this.showWays;
        if (this.showWays) {
            setTimeout(() => {
                if (this.content) {
                    this.content.scrollToBottom(duration);
                }
            }, 200);
        }
    }
    addFavories() {
        if (this.services.isLoggedIn) {
            this.favorieService.addfavories(this.currentProduct.id).subscribe((res) => {
                this.currentProduct.isfavory = res.favory.isfavory;
                if (res.favory.isfavory) {
                    this.ui.toast('Cette annonce est dans votre liste de favoris');
                }
                else {
                    this.ui.toast('Cette annonce n’est plus dans votre liste de favoris');
                }
            }, (err) => {
                this.services.fireError(err);
                throw err;
            });
        }
        else {
            this.ui.confirmation('Identifier ! ', 'Vous devez vous identifier').then(() => {
                this.router.navigateByUrl('/login');
            });
        }
    }
    dialCall() {
        if (this.services.isLoggedIn) {
            if (this.currentProduct.phone) {
                console.log(this.currentProduct.phone.toString().substr(1, this.currentProduct.phone.length));
                const called = this.currentProduct.phone.toString().substr(1, this.currentProduct.phone.length);
                this.callNumber.callNumber('0033' + called, true)
                    .then(res => console.log('Launched dialer!', res))
                    .catch(err => console.log('Error launching dialer', err));
            }
        }
        else {
            this.ui.confirmation('Identifier ! ', 'Vous devez vous identifier').then(() => {
                this.router.navigateByUrl('/login');
            });
        }
    }
    openRateModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            console.log('ok', this.currentProduct);
            const mapModal = yield this.modalCtrl.create({
                component: _rating_rating_page__WEBPACK_IMPORTED_MODULE_6__.RatingPage,
                componentProps: {
                    providerRate: this.currentProduct.rate
                },
                cssClass: 'Rating-modal'
            });
            yield mapModal.present();
            yield mapModal.onDidDismiss().then(params => {
                if (params) {
                    this.services.addrates(this.currentProduct.id, params.data).subscribe((res) => {
                        this.currentProduct.rate = res.rate.rates;
                    }, err => {
                        console.log(err);
                    });
                }
                else {
                    console.log('No Data');
                }
            });
        });
    }
    // ??????
    thisIstheProduct() {
        // console.log('this is The product');
        // this.services.deletesuivi(this.currentProduct.id).then((res: any) => {
        //   console.log(res);
        //   // this.ui.toast('On a Trouvé : '+this.currentProduct.title+' !!! ' ,null,null,null,'top');
        //   this.showConfirm = false;
        // }).catch((err: any) => {
        //   console.log(err);
        // });
    }
    checkFavory() {
        this.favorieService.checkFavory(this.currentProduct.id).subscribe((res) => {
            this.currentProduct.isfavory = res.isfavory;
        }, err => {
            console.log(err);
            this.services.fireError(err);
        });
    }
    next() {
        this.slides.slideNext();
    }
    prev() {
        this.slides.slidePrev();
    }
    segmentChanged($event) {
        this.segmentModel = $event.target.value;
    }
    toggleBackdrop(isVisible) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_slideup_slideup_component__WEBPACK_IMPORTED_MODULE_9__.SlideupComponent,
                componentProps: {
                    product: this.product
                }
            });
            yield modal.present();
            // this.backdropVisible = isVisible;
            // this.changeDetectorRef.detectChanges();
        });
    }
};
ProductDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__.ApiServices },
    { type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_10__.ProductService },
    { type: src_app_services_product_favorites_service__WEBPACK_IMPORTED_MODULE_11__.FavoritesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NavParams },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__.CallNumber },
    { type: _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__.EmailComposer },
    { type: _services_ui_ui__WEBPACK_IMPORTED_MODULE_4__.UiService },
    { type: _services_app_config_app_config__WEBPACK_IMPORTED_MODULE_5__.AppConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform },
    { type: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__.SocialSharing },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef }
];
ProductDetailsPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonSlides,] }],
    mainSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ['mainSlide',] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonContent,] }],
    directionsPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ['directionsPanel',] }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Input }]
};
ProductDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-product-details',
        template: _raw_loader_product_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductDetailsPage);



/***/ }),

/***/ 17428:
/*!*****************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("audio {\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.subslides {\n  height: 19rem !important;\n  margin-bottom: 10px;\n  position: relative;\n  top: -60px;\n}\n\n.subslides img {\n  height: 100px;\n  width: 120px;\n  object-fit: cover;\n}\n\n.hiden-ways {\n  opacity: 0;\n}\n\n.main {\n  background-color: #f5f5f5;\n}\n\n.mainslide img {\n  object-fit: cover;\n  width: 100%;\n  height: 70vh;\n}\n\n.no_file_img {\n  object-fit: cover;\n  width: 100%;\n  height: 70vh;\n}\n\n.product-title {\n  font-family: 'Roboto', sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #343434;\n}\n\n.cat-title {\n  font-size: 11px !important;\n  color: #414141 !important;\n}\n\n.product-description {\n  color: #888;\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  text-overflow: unset;\n  overflow: visible;\n  white-space: pre-line;\n}\n\n.has-left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.contact-font {\n  font-size: 24px;\n}\n\n.category-class {\n  color: var(--ion-color-therd);\n  position: relative;\n  transform: translateX(27%);\n  border: 1.5px solid var(--ion-color-primary);\n  border-radius: 50%;\n  align-items: center;\n  display: inherit;\n  padding-top: 5px;\n  height: 20vw;\n  width: 20vw;\n  text-align: center;\n}\n\n.category-class h3 {\n  padding: 0;\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  font-size: 3.8vw;\n}\n\n.category-class .icon {\n  font-size: 9.5vw;\n  margin-bottom: 3px;\n}\n\n.category-title {\n  padding: 7px;\n  border-radius: 20px;\n  z-index: 999;\n  text-align: center;\n  width: 66%;\n  font-size: 15px;\n  background-color: var(--ion-color-logo);\n  color: white !important;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.custom-price {\n  font-size: 15px;\n  margin: 0;\n}\n\n[col-2] {\n  padding: 0 !important;\n}\n\n.add-favory {\n  white-space: nowrap;\n  width: 85%;\n  height: 30px;\n  border-radius: 1px;\n  position: relative;\n  align-items: flex-start;\n  text-align: center;\n  justify-content: center;\n  z-index: 9;\n  margin: 0 auto 40px;\n  color: white;\n}\n\n.add-favory ion-icon {\n  font-size: 30px;\n}\n\n.has-left-bar {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n}\n\n.rating_item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n}\n\n.has-left-bar-icon {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n}\n\n.has-left-bar:first-child {\n  border-left: unset;\n}\n\n#map {\n  width: 100%;\n  height: 80%;\n}\n\nion-card {\n  max-height: 200px;\n  overflow: scroll;\n  position: absolute;\n  z-index: 1;\n}\n\n.toupperCases {\n  text-transform: uppercase !important;\n}\n\n.item-md {\n  border-radius: 7px !important;\n  background-color: rgba(255, 255, 255, 0.836) !important;\n}\n\n.item-md.item-block .item-inner {\n  padding-right: 0 !important;\n  margin-right: 10px !important;\n  border-bottom: 1px solid rgba(64, 111, 111, 0.445) !important;\n}\n\nion-title {\n  margin-left: -22px !important;\n  /* font-family: 'Poppins'; */\n  color: white !important;\n  letter-spacing: -0.2px;\n  padding: 4px 10px !important;\n  font-size: 18px;\n  font-weight: bolder;\n  text-align: center !important;\n}\n\nion-slide .imageContainer,\nion-slide .audioContainer {\n  padding: 10px 2px;\n  display: grid;\n  grid-template-columns: 50px 300px 50px;\n}\n\n.faedIn {\n  border-radius: 50px;\n  border: 5px solid var(--ion-color-logo);\n}\n\nion-slides .swiper-pagination {\n  top: 20px;\n  bottom: inherit;\n}\n\n.arrowButton {\n  background: unset;\n  --background: unset;\n  color: var(--ion-color-logo);\n  outline: unset;\n  --box-shadow: unset;\n  margin: auto 0;\n  font-size: 38px;\n  width: 50px;\n  --padding-start: unset;\n  --padding-end: unset;\n}\n\n.rowLocalisation {\n  position: absolute;\n  right: -25px;\n  left: 0%;\n  bottom: 9%;\n}\n\n.rowLogo {\n  color: var(--ion-color-logo);\n}\n\n.segment_button ion-label {\n  background: var(--ion-color-medium-shade);\n  border-radius: 50px;\n  --height: 10px;\n  min-width: 10px;\n  height: 10px;\n  min-height: 10px;\n  width: 100px;\n}\n\n.segment_button.active ion-label {\n  background: var(--ion-color-logo);\n  border-radius: 50px;\n  --height: 10px;\n  min-width: 10px;\n  height: 10px;\n  min-height: 10px;\n}\n\n.rowVocal {\n  height: 400px;\n  background: var(--ion-color-logo);\n  border-radius: 50px;\n}\n\n.rowVocal ion-icon {\n  font-size: 200px;\n  color: white;\n}\n\n.rowVocal audio {\n  width: 250px;\n}\n\n.colVocal {\n  display: grid;\n  justify-self: center;\n}\n\n.activeKilometrage {\n  background-color: white !important;\n  color: var(--ion-color-logo) !important;\n  display: none;\n}\n\nion-segment {\n  margin-top: 40px;\n}\n\n.segment-one ion-label {\n  margin: 0 0 0 auto;\n}\n\n.segment-two ion-label {\n  margin: 0 auto 0 0;\n}\n\n.segment-one.active ion-label {\n  margin: 0 0 0 auto;\n}\n\n.segment-two.active ion-label {\n  margin: 0 auto 0 0;\n}\n\nion-segment-button {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  height: 10px;\n  min-height: 10px;\n}\n\n.backdrop {\n  width: 100%;\n  height: 100%;\n  background: #00000094;\n  z-index: 10;\n  position: absolute;\n}\n\n.fade {\n  transition: .5s linear all;\n  opacity: 0;\n  z-index: 1;\n}\n\n.fade-in {\n  transition: .5s linear all;\n  opacity: 1;\n}\n\n.rating_item ion-icon {\n  color: #ffa500;\n}\n\n.list_item ion-item {\n  border-radius: 15px;\n  margin: 0 15px 15px;\n  border: 3px solid var(--ion-color-logo);\n}\n\n.list-md {\n  margin-bottom: 25% !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULDJCQUEyQjtBQUM3Qjs7QUF1QkE7RUFFRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0FBckJaOztBQXdCQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0FBckJuQjs7QUF5QkE7RUFDRSxVQUFVO0FBdEJaOztBQXlCQTtFQUNFLHlCQUF5QjtBQXRCM0I7O0FBK0JBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBNUJkOztBQStCQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQTVCZDs7QUErQkE7RUFDRSxpQ0FBaUM7RUFDakMsVUFBVTtFQUNWLFNBQVM7RUFDVCxjQUFjO0FBNUJoQjs7QUErQkE7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0FBNUIzQjs7QUFnQ0E7RUFDRSxXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQTdCdkI7O0FBcUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFsQ3JCOztBQXFDQTtFQUNFLGVBQWU7QUFsQ2pCOztBQXFDQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDRDQUE0QztFQUM1QyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFsQ3BCOztBQXNDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsaUNBQWlDO0VBQ2pDLGdCQUFnQjtBQW5DbEI7O0FBc0NBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQW5DcEI7O0FBdUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFt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QXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7QUExRXBCOztBQTZFQTtFQUNFLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsVUFBVTtBQTFFWjs7QUE2RUE7RUFFRSwwQkFBMEI7RUFDMUIsVUFBVTtBQTNFWjs7QUE2RUE7RUFDRSxjQUFjO0FBMUVoQjs7QUE0RUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVDQUF1QztBQXpFekM7O0FBNkVBO0VBQ0UsNkJBQTZCO0FBMUUvQiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXVkaW8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG4vL3ZpZGVvOjotaW50ZXJuYWwtbWVkaWEtY29udHJvbHMtZG93bmxvYWQtYnV0dG9uIHtcclxuLy8gIGRpc3BsYXk6IG5vbmU7XHJcbi8vfVxyXG4vL1xyXG4vL3ZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLWVuY2xvc3VyZSB7XHJcbi8vICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vL31cclxuLy9cclxuLy92aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy1wYW5lbCB7XHJcbi8vICB3aWR0aDogY2FsYygxMDAlICsgMzBweCk7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxuLy99XHJcbi8vXHJcbi8vYXVkaW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtbXV0ZS1idXR0b24ge1xyXG4vLyAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4vL31cclxuLy9cclxuLy9hdWRpbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy12b2x1bWUtc2xpZGVyIHtcclxuLy8gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuLy99XHJcblxyXG5cclxuLnN1YnNsaWRlcyB7XHJcblxyXG4gIGhlaWdodDogMTlyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC02MHB4O1xyXG59XHJcblxyXG4uc3Vic2xpZGVzIGltZyB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcblxyXG4uaGlkZW4td2F5cyB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5tYWluc2xpZGUge1xyXG4gIC8vaGVpZ2h0OiAyMnJlbSAhaW1wb3J0YW50O1xyXG4gIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAvL2JveC1zaGFkb3c6IDAgMCAycHggMCByZ2IoMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5tYWluc2xpZGUgaW1nIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwdmg7XHJcblxyXG59XHJcbi5ub19maWxlX2ltZ3tcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwdmg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXRpdGxlIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICMzNDM0MzQ7XHJcbn1cclxuXHJcbi5jYXQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNDE0MTQxICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6ICM4ODg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LW92ZXJmbG93OiB1bnNldDtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICAvLyBtYXJnaW4tdG9wOi0xMDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uaGFzLWxlZnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9udCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcnktY2xhc3Mge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlcmQpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjclKTtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgaGVpZ2h0OiAyMHZ3O1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBiYWNrZ3JvdW5kOiByZ2JhKDYzLCAxMDAsIDEzMywgMC4wMik7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1jbGFzcyBoMyB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMy44dnc7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1jbGFzcyAuaWNvbiB7XHJcbiAgZm9udC1zaXplOiA5LjV2dztcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcblxyXG4uY2F0ZWdvcnktdGl0bGUge1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDY2JTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxvZ28pO1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICAvL2JhY2tncm91bmQ6IG1hcC1nZXQoY29sb3JzLCBwcmltYXJ5KTtcclxufVxyXG5cclxuLmN1c3RvbS1wcmljZSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuW2NvbC0yXSB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWRkLWZhdm9yeSB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogODUlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5O1xyXG4gIG1hcmdpbjogMCBhdXRvIDQwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogIzQwNmY2ZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWRkLWZhdm9yeSBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uaGFzLXJpZ2h0LWJhciB7XHJcbiAgLy8gYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg0OSk7XHJcbn1cclxuXHJcbi5oYXMtbGVmdC1iYXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvL2JvcmRlci1sZWZ0OiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg0OSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1cHgsIC0yMDBweCk7XHJcbiAgei1pbmRleDogOTtcclxufVxyXG4ucmF0aW5nX2l0ZW17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk7XHJcbn1cclxuLmhhcy1sZWZ0LWJhci1pY29uIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLy9ib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NDkpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvL3RyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTIwMHB4KTtcclxuICB6LWluZGV4OiA5O1xyXG59XHJcblxyXG4uaGFzLWxlZnQtYmFyOmZpcnN0LWNoaWxkIHtcclxuXHJcbiAgYm9yZGVyLWxlZnQ6IHVuc2V0O1xyXG5cclxufVxyXG5cclxuXHJcbiNtYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODAlO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnRvdXBwZXJDYXNlcyB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbS1tZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgzNikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDY0LCAxMTEsIDExMSwgMC40NDUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMnB4ICFpbXBvcnRhbnQ7XHJcbiAgLyogZm9udC1mYW1pbHk6ICdQb3BwaW5zJzsgKi9cclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xyXG4gIHBhZGRpbmc6IDRweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1zbGlkZSAuaW1hZ2VDb250YWluZXIsXHJcbmlvbi1zbGlkZSAuYXVkaW9Db250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggMnB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDMwMHB4IDUwcHg7XHJcblxyXG4gIC8vd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mYWVkSW4ge1xyXG4gIC8vIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbG9nbyk7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMgLnN3aXBlci1wYWdpbmF0aW9uIHtcclxuICB0b3A6IDIwcHg7XHJcbiAgYm90dG9tOiBpbmhlcml0O1xyXG59XHJcblxyXG4uYXJyb3dCdXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xyXG4gIC0tYmFja2dyb3VuZDogdW5zZXQ7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sb2dvKTtcclxuICBvdXRsaW5lOiB1bnNldDtcclxuICAtLWJveC1zaGFkb3c6IHVuc2V0O1xyXG4gIG1hcmdpbjogYXV0byAwO1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxuICB3aWR0aDogNTBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IHVuc2V0O1xyXG4gIC0tcGFkZGluZy1lbmQ6IHVuc2V0O1xyXG59XHJcblxyXG4ucm93TG9jYWxpc2F0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC0yNXB4O1xyXG4gIGxlZnQ6IDAlO1xyXG4gIGJvdHRvbTogOSU7XHJcbn1cclxuXHJcbi5yb3dMb2dvIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxvZ28pO1xyXG59XHJcblxyXG4vL2lvbi1zZWdtZW50IHtcclxuLy8gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gIHotaW5kZXg6IDk5OTtcclxuLy99XHJcblxyXG4uc2VnbWVudF9idXR0b24gaW9uLWxhYmVsIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIC0taGVpZ2h0OiAxMHB4O1xyXG4gIG1pbi13aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgbWluLWhlaWdodDogMTBweDtcclxuICAvL21hcmdpbjogNDZweCAyMHB4IDAgMjBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5zZWdtZW50X2J1dHRvbi5hY3RpdmUgaW9uLWxhYmVsIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbG9nbyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAtLWhlaWdodDogMTBweDtcclxuICBtaW4td2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwcHg7XHJcbiAgLy9tYXJnaW46IDQ2cHggMjBweCAwIDIwcHg7XHJcbn1cclxuXHJcbi5hdWRpb0NvbnRhaW5lciB7XHJcblxyXG59XHJcblxyXG4ucm93Vm9jYWwge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxvZ28pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbi5yb3dWb2NhbCBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wcmljZUNvbCAuYWN0aXZlIHtcclxuXHJcbn1cclxuXHJcbi5yb3dWb2NhbCBhdWRpbyB7XHJcbiAgLy9tYXJnaW4tdG9wOiA5MnB4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLmNvbFZvY2FsIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aXZlS2lsb21ldHJhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sb2dvKSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50IHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uc2VnbWVudC1vbmUgaW9uLWxhYmVsIHtcclxuICBtYXJnaW46IDAgMCAwIGF1dG87XHJcbn1cclxuXHJcbi5zZWdtZW50LXR3byBpb24tbGFiZWwge1xyXG4gIG1hcmdpbjogMCBhdXRvIDAgMDtcclxufVxyXG5cclxuLnNlZ21lbnQtb25lLmFjdGl2ZSBpb24tbGFiZWwge1xyXG4gIG1hcmdpbjogMCAwIDAgYXV0bztcclxufVxyXG5cclxuLnNlZ21lbnQtdHdvLmFjdGl2ZSBpb24tbGFiZWwge1xyXG4gIG1hcmdpbjogMCBhdXRvIDAgMDtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBtaW4taGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY29sLWljb24ge1xyXG4gIC8vIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5iYWNrZHJvcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA5NDtcclxuICB6LWluZGV4OiAxMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5mYWRlIHtcclxuICB0cmFuc2l0aW9uOiAuNXMgbGluZWFyIGFsbDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5mYWRlLWluIHtcclxuXHJcbiAgdHJhbnNpdGlvbjogLjVzIGxpbmVhciBhbGw7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4ucmF0aW5nX2l0ZW0gaW9uLWljb257XHJcbiAgY29sb3I6ICNmZmE1MDA7XHJcbn1cclxuLmxpc3RfaXRlbSBpb24taXRlbXtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG1hcmdpbjogMCAxNXB4IDE1cHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxvZ28pO1xyXG5cclxufVxyXG5cclxuLmxpc3QtbWR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjUlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 2913:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-details/product-details.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"logo\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-transform:capitalize; \">\r\n      {{currentProduct?.title}}\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"shareApp()\">\r\n        <ion-icon name=\"share\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-spinner *ngIf=\"loading\"></ion-spinner>\r\n  <!-- <ion-fab (click)=\"thisIs heProduct()\" class=\"animated\" [class.bounceIn]=\"showConfirm\"  [class.bounceOut]=\"!showConfirm\" right top>\r\n        <button ion-fab color=\"primary\"><ion-icon name=\"checkmark\"></ion-icon></button>\r\n    </ion-fab> -->\r\n  <!--  <app-categories-slider class=\"ion-margin-bottom\"></app-categories-slider>-->\r\n  <ion-row *ngIf=\"showConfirm\" [class.bounceIn]=\"showConfirm\" [class.bounceOut]=\"!showConfirm\"\r\n           class=\"animated add-favory\">\r\n    <ion-col class=\"has-right-bar\">\r\n      <span class=\"toupperCases\">\r\n        {{'details.isit'|translate}}\r\n      </span>\r\n    </ion-col>\r\n    <ion-icon size=\"2\" (click)=\"this.showConfirm=false\" [class.favory-red]=\"currentProduct?.isfavory\"\r\n              class=\"has-left-bar \" name=\"checkmark\">\r\n      <!-- <ion-icon col-2  (click)=\"thisIstheProduct()\" [class.favory-red]=\"currentProduct?.isfavory\" class=\"has-left-bar \" name=\"close\"></ion-icon> -->\r\n    </ion-icon>\r\n  </ion-row>\r\n  <ion-segment (ionChange)=\"segmentChanged($event)\" *ngIf=\"currentProduct?.voice && currentProduct?.voice.length > 0\"\r\n               class=\"segment_principal\" [class.active]=\"segmentModel=='image'\">\r\n    <ion-segment-button class=\"segment_button segment-one active\" [class.active]=\"segmentModel=='image'\" value=\"image\">\r\n      <ion-label></ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button class=\"segment_button segment-two\" [class.active]=\"segmentModel=='audio'\" value=\"audio\">\r\n      <ion-label></ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n<ion-list>\r\n  <ion-slides *ngIf=\"currentProduct?.id\" #slides [options]=\"slideOpts\" #mainSlide id=\"mainSlide\"\r\n              class=\"mainslide ion-margin-top\">\r\n    <ion-slide *ngFor=\"let image of currentProduct?.arrayImages\">\r\n      <div *ngIf=\"segmentModel=='image'\" class=\"imageContainer\">\r\n        <ion-button class=\"arrowButton\" [disabled]=\"currentProduct?.arrayImages.length<=1\" (click)=\"slides.slidePrev()\">\r\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-button>\r\n        <div style=\"position: relative;\">\r\n\r\n          <img class=\"animated faedIn\" src=\"{{image}}\" (click)=\"openViewer(image)\"/>\r\n          <ion-row class=\"rowLocalisation\">\r\n\r\n            <ion-col size=\"5\" offset=\"6\" class=\"custom-price has-left-bar kilometrageCol\"\r\n                     [class.active]=\"segmentModel=='audio'\"\r\n                     *ngFor=\"let property of currentProduct?.properties;let i=index;\">\r\n              <h3 class=\"category-title\" *ngIf=\"property.property==='Kilométrage (km)'\"\r\n                  [class.activeKilometrage]=\"segmentModel=='audio'\">\r\n                <ion-icon name=\"location\"></ion-icon>\r\n                <span>{{property?.value}} Km</span>\r\n              </h3>\r\n            </ion-col>\r\n            <ion-col size=\"5\" offset=\"6\" class=\"custom-price has-left-bar priceCol\">\r\n              <h3 class=\"category-title\" [class.activeKilometrage]=\"segmentModel=='audio'\">\r\n                {{currentProduct?.price}} {{'favoris.price_symbol'|translate}}\r\n              </h3>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <ion-button class=\"arrowButton\" [disabled]=\"currentProduct?.arrayImages.length<=1\" (click)=\"slides.slideNext()\">\r\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n      <div *ngIf=\"segmentModel=='audio'\" class=\"audioContainer\">\r\n        <ion-button class=\"arrowButton\" [disabled]=\"currentProduct?.arrayImages.length<=1\" (click)=\"slides.slidePrev()\">\r\n          \r\n        </ion-button>\r\n        <!--      <img class=\"animated faedIn\" src=\"{{image}}\" (click)=\"openViewer(image)\"/>-->\r\n        <ion-row class=\"rowVocal\">\r\n          <ion-col class=\"col-icon\" size=\"12 \">\r\n            <ion-icon name=\"play-circle-outline\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col class=\"colVocal\" size=\"12\">\r\n            <audio *ngIf=\"currentProduct?.voice && currentProduct?.voice.length > 0\" controls controlsList=\"nodownload\">\r\n              <source [src]=\"currentProduct?.voice[0]\">\r\n              ...\r\n            </audio>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-button class=\"arrowButton\" [disabled]=\"currentProduct?.arrayImages.length<=1\" (click)=\"slides.slideNext()\">\r\n          \r\n        </ion-button>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide *ngIf=\"currentProduct?.arrayImages?.length==0\">\r\n      <img src=\"../assets/imgs/nofile.png\" class=\"no_file_img\" (click)=\"openViewer('../assets/imgs/nofile.png')\"/>\r\n    </ion-slide>\r\n    <!--    <ng-template *ngFor=\"let property of currentProduct?.properties;let i=index;\">-->\r\n\r\n    <!--      <h3 class=\"category-title\" *ngIf=\"property.property==='Kilométrage (km)'\">-->\r\n    <!--        <ion-icon name=\"location\"></ion-icon>-->\r\n    <!--        <span>{{property?.value}} Km</span>-->\r\n    <!--      </h3>-->\r\n    <!--    </ng-template>-->\r\n\r\n  </ion-slides>\r\n  <ion-row class=\"animated fadeInDown add-favory rowLogo \" color=\"primary\">\r\n    <ion-col size=\"2\" class=\"custom-price has-left-bar-icon\">\r\n      <ion-icon name=\"location-sharp\" title=\"ok\" (click)=\"toggleBackdrop($event)\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"2\" class=\" has-left-bar-icon\">\r\n      <ion-icon (click)=\"dialCall()\" name=\"call\"></ion-icon>\r\n\r\n    </ion-col>\r\n    <ion-col class=\"has-left-bar-icon \" size=\"2\">\r\n\r\n      <ion-icon (click)=\"goto('ChatPage',currentProduct)\" name=\"chatbubbles\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col class=\"has-left-bar-icon \" size=\"2\">\r\n      <ion-icon [class.favory-red]=\"currentProduct.isfavory===true\" class=\" \"\r\n                (click)=\"addFavories()\" name=\"heart\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col class=\"has-left-bar-icon \" size=\"2\" *ngIf=\"services.current_user\">\r\n      <ion-icon (click)=\"openRateModal()\" name=\"star\"></ion-icon>\r\n    </ion-col>\r\n  </ion-row>\r\n  <div class=\"backdrop\" [ngClass]=\"backdropVisible?'fade-in':'fade'\" tappable></div>\r\n\r\n  <!--  Start Main Page-->\r\n  <!--  <div class=\"main ion-padding\">-->\r\n  <ion-list class=\"list_item\">\r\n\r\n    <ion-item>\r\n      <ion-label>{{'details.Category'|translate}} </ion-label>\r\n      <ion-label class=\"product-description\">\r\n        {{currentProduct?.subcategory?.category?.title}} &nbsp;/&nbsp;{{currentProduct?.subcategory?.title}}\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>{{'details.Description'|translate}} </ion-label>\r\n      <ion-label class=\"product-description\">\r\n        {{currentProduct?.description}}\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\" rating_item\" (click)=\"openRateModal()\">\r\n      <ion-label>{{'details.rated'|translate}} </ion-label>\r\n      <ion-label>\r\n        <ion-icon *ngFor=\"let rate of convertedtoObject(currentProduct.rate)\" name='star'></ion-icon>\r\n      </ion-label>\r\n      <span class=\"toupperCases\" *ngIf=\"currentProduct.rate==0\">\r\n        {{'details.evaluation'|translate}}\r\n      </span>\r\n    </ion-item>\r\n    <ion-item *ngFor=\"let property of currentProduct?.properties;let i=index;\">\r\n      <ion-label>{{property.property}}</ion-label>\r\n      <ion-label>{{property.value}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <!--  <h3 class=\"category-title\">-->\r\n  <!--    <span>{{'details.current_location'|translate}}</span>-->\r\n  <!--  </h3>-->\r\n  <!--  </div>-->\r\n  <!--    <ion-card [class.hiden-ways]=\"!showWays\">-->\r\n  <!--      <ion-card-content>-->\r\n  <!--        <div #directionsPanel></div>-->\r\n  <!--      </ion-card-content>-->\r\n  <!--    </ion-card>-->\r\n  <!--    <div #map id=\"map\">-->\r\n  <!--            <ion-spinner></ion-spinner>-->\r\n  <!--    </div>-->\r\n  <!--    <div class=\"over-map\"></div>-->\r\n  </ion-list>\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product-details_product-details_module_ts.js.map