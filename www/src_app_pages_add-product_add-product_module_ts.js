(self["webpackChunkmigrationto5"] = self["webpackChunkmigrationto5"] || []).push([["src_app_pages_add-product_add-product_module_ts"],{

/***/ 55753:
/*!*****************************************************************!*\
  !*** ./src/app/pages/add-product/add-product-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductPageRoutingModule": () => (/* binding */ AddProductPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-product.page */ 11958);




const routes = [
    {
        path: '',
        component: _add_product_page__WEBPACK_IMPORTED_MODULE_0__.AddProductPage
    }
];
let AddProductPageRoutingModule = class AddProductPageRoutingModule {
};
AddProductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddProductPageRoutingModule);



/***/ }),

/***/ 5354:
/*!*********************************************************!*\
  !*** ./src/app/pages/add-product/add-product.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductPageModule": () => (/* binding */ AddProductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-product-routing.module */ 55753);
/* harmony import */ var _add_product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-product.page */ 11958);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);









let AddProductPageModule = class AddProductPageModule {
};
AddProductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _add_product_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddProductPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild(),
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
        ],
        declarations: [_add_product_page__WEBPACK_IMPORTED_MODULE_1__.AddProductPage]
    })
], AddProductPageModule);



/***/ }),

/***/ 11958:
/*!*******************************************************!*\
  !*** ./src/app/pages/add-product/add-product.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductPage": () => (/* binding */ AddProductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-product.page.html */ 87466);
/* harmony import */ var _add_product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-product.page.scss */ 96095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_ui_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ui/ui */ 85081);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);
/* harmony import */ var _map_pikker_map_pikker_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../map-pikker/map-pikker.page */ 63768);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/media/ngx */ 83621);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/product/product.service */ 45798);














let AddProductPage = class AddProductPage {
    constructor(router, formBuilder, navParams, ui, media, zone, services, modalCtrl, file, platform, productService) {
        var _a;
        this.router = router;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.ui = ui;
        this.media = media;
        this.zone = zone;
        this.services = services;
        this.modalCtrl = modalCtrl;
        this.file = file;
        this.platform = platform;
        this.productService = productService;
        this.addProduct = false;
        this.startRecord = false;
        this.addProducts = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({});
        this.selectedProperties = [];
        this.audiopath = null;
        this.showplay = false;
        this.product = {
            address: {
                address: null,
                lat: 45.087890625,
                long: 2.321167252957821
            }
        };
        this.arrayImages = [];
        this.subcategories = [];
        this.hasRecord = false;
        this.isplaying = false;
        this.isAudio = false;
        this.audioDuration = null;
        this.go = false;
        this.categorys = [];
        this.regions = [];
        this.selectedC = [];
        this.propertyModel = {};
        this.modif = false;
        this.modif = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.modify;
        if (this.modif == true) {
            this.initializeFrom();
            this.editProduct = this.router.getCurrentNavigation().extras.state.product_to_edit;
        }
        else
            this.initializeFrom();
    }
    ngOnInit() {
        // throw new Error('Method not implemented.');
        this.productService.getCategories().subscribe(res => {
            this.categorys = res;
            if (this.modif) {
                this.product = this.editProduct;
                this.arrayImages = this.product.arrayImages;
                this.zone.run(() => {
                    // this.updatedCat_ID=this.product.subcategory.category.id;
                    this.selectedC = this.product.subcategory.category;
                    let category = this.categorys.filter(x => x.id === this.product.subcategory.category.id);
                    this.subcategories = category.subcategories;
                    // console.log(this.updatedCat_ID);
                    if (this.selectedC.title !== 'EMPLOI')
                        this.addProducts.addControl('price', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]));
                    else
                        this.addProducts.removeControl('price');
                    this.selectedCategory = this.product.subcategory.id;
                    this.loadproperties();
                });
            }
        }, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => {
            this.ui.toast('Erreur : Chargement des Categories');
            throw error;
        }));
        this.productService.getRegions().subscribe(res => {
            this.regions = res;
        }, err => {
            this.ui.toast('Erreur : Chargement des regions');
        });
    }
    loadSubcategories($event) {
        if (this.selectedC.title !== 'EMPLOI') {
            this.addProducts.addControl('price', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required));
        }
        else {
            this.addProducts.removeControl('price');
        }
        this.subcategories = this.selectedC.subcategories;
    }
    loadproperties($event) {
        this.productService.getProperties(this.selectedCategory).then((res) => {
            console.log('Recieved Properties : ', res.properties);
            this.zone.run(() => {
                this.clearfoms().then(() => {
                    this.selectedProperties = res.properties;
                    this.refactureFroms(res.properties);
                });
            });
        }).catch((error) => {
            this.ui.fireError(error);
        });
    }
    clearfoms() {
        return new Promise((resolve, reject) => {
            this.selectedProperties.forEach(property => {
                this.addProducts.removeControl(property.key);
            });
            resolve(true);
        });
    }
    refactureFroms(properties) {
        return new Promise((resolve, reject) => {
            properties.forEach((property) => {
                console.log('props', properties, property);
                if (property.required) {
                    this.addProducts.addControl(property.key, new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required));
                }
                else {
                    this.addProducts.addControl(property.key, new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''));
                }
            });
            resolve(true);
        });
    }
    initializeFrom() {
        this.addProducts = this.formBuilder.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(10)])],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])],
            price: [''],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])],
            subcategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])],
            // 'region':[', Validators.compose([Validators.required])]
        });
    }
    ionViewDidEnter() {
    }
    // compareFn(e1: any, e2: any): boolean {
    //   return e1 && e2 ? e1.id === e2.id : e1 === e2;
    // }
    compareFn(e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    }
    compareWith(e1, e2) {
        return e1 && e2 ? e1.id == e2 : e1 == e2;
    }
    pictureType() {
        this.ui.imageType().then(base64Image => {
            this.arrayImages.push(base64Image);
        });
    }
    showMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.audio && this.fileName) {
                this.audio.stop();
            }
            const mapModal = yield this.modalCtrl.create({
                component: _map_pikker_map_pikker_page__WEBPACK_IMPORTED_MODULE_4__.MapPikkerPage,
                componentProps: {
                    product: this.product
                }
            });
            yield mapModal.present();
            yield mapModal.onDidDismiss().then((params) => {
                if (params) {
                    this.product.address = {
                        address: params.data.address.toString(),
                        long: params.data.long.toString(),
                        lat: params.data.lat.toString()
                    };
                }
            });
        });
    }
    pikkerDate(propertyId) {
        this.propertyModel[propertyId] = (new Date(this.myDate)).getTime();
        console.log(this.propertyModel[propertyId]);
    }
    deleteImage(img, index) {
        const currentIndex = index;
        if (img.id) {
            this.arrayImages.splice(currentIndex, 1);
        }
        else {
            this.arrayImages.splice(currentIndex, 1);
            this.slides.slidePrev(0);
        }
    }
    sendingData() {
        console.log('This the Properties Content ', this.propertyModel);
        this.addProduct = true;
        console.log(this.addProducts);
        console.log(this.addProducts.valid);
        console.log(this.arrayImages);
        // if (this.addProducts.valid && this.arrayImages.length > 0) {
        if (this.addProducts.valid && this.arrayImages.length > 0) {
            this.product.galleries = this.arrayImages;
            console.log(this.arrayImages);
            this.product.propertyAnswer = this.propertyModel;
            this.product.userid = this.services.current_user.id; // Must be Current User from auth
            this.product.subcategoryid = this.selectedCategory; //Must Be from Select from API Data
            this.product.categoryid = this.selectedC; //Must Be from Select from API Data
            this.product.regionid = this.selectedRegion; //Methode to get Region from Lat Long Required
            if (this.filePath) {
                console.log('this is the Product avec photo', this.product, this.filePath);
                this.productService.addFullProduct(this.product, this.filePath).subscribe(res => {
                    this.router.navigateByUrl('/annonce');
                });
            }
            else {
                console.log('this is the Product');
                this.productService.addFullProduct(this.product).subscribe(res => {
                    this.router.navigateByUrl('/annonce');
                });
            }
        }
    }
    startAudioRecorde() {
        if (this.platform.is('ios')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() +
                new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.m4a';
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() +
                new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.mp3';
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath);
            console.log(this.filePath);
            console.log("audio", this.audio);
        }
        setTimeout(() => {
            this.startRecord = true;
            this.audio.startRecord();
            console.log("start");
        }, 100);
    }
    showAndPlay() {
        this.stopAudio().then(() => {
            this.isAudio = true;
            this.hasRecord = true;
            this.showplayer();
        });
    }
    showplayer() {
        console.log('showPlay', this.filePath);
        this.showplay = true;
    }
    stopAudio() {
        return new Promise((resolve, reject) => {
            if (this.audio) {
                console.log("stop", this.audio);
                try {
                    this.audio.stopRecord();
                    this.startRecord = false;
                    resolve(true);
                }
                catch (e) {
                    this.startRecord = false;
                    reject(false);
                }
            }
            else {
                this.startRecord = false;
                reject(false);
            }
        });
    }
    playAudio() {
        console.log('playAudio');
        this.audio = this.media.create(this.filePath);
        console.log('playAudio', this.audio);
        console.log('showPlay', this.filePath);
        setTimeout(() => {
            this.audio.play();
            console.log('playAudio', this.audio);
            this.isplaying = true;
            setTimeout(() => {
                let duration = Math.floor(this.audio.getDuration());
                console.log("duration", duration);
                setTimeout(() => {
                    this.isplaying = false;
                }, (duration * 1000) + 200);
            }, 200);
        }, 100);
    }
    pauseAudio() {
        console.log('pauseAudio');
        this.isplaying = false;
        this.audio.stop();
    }
};
AddProductPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavParams },
    { type: _services_ui_ui__WEBPACK_IMPORTED_MODULE_2__.UiService },
    { type: _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_6__.Media },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone },
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_3__.ApiServices },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_7__.ProductService }
];
AddProductPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSlides,] }]
};
AddProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-add-product',
        template: _raw_loader_add_product_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_product_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddProductPage);



/***/ }),

/***/ 96095:
/*!*********************************************************!*\
  !*** ./src/app/pages/add-product/add-product.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\nion-toolbar {\n  text-align: center !important;\n}\nion-item {\n  --highlight-background: unset !important;\n}\nion-label {\n  color: var(--ion-color-logo) !important;\n  font-size: 16px !important;\n  margin-bottom: 5px !important;\n}\n.rem {\n  --offset-bottom: -3rem!important;\n  --offset-top: 0px;\n}\nion-content {\n  background-color: var(--ion-color-background);\n  border-radius: 15px !important;\n  padding: 5px;\n  box-shadow: 0 0 45px -15px black !important;\n}\nform {\n  background: transparent !important;\n}\n.button-full {\n  border-radius: 10px !important;\n  margin-top: 15px !important;\n  font-size: 15px !important;\n}\nion-icon {\n  padding: 0.2em;\n  color: #fff;\n}\nion-textarea, ion-select,\nion-input {\n  border: 2px solid var(--ion-color-logo);\n  padding: 3px !important;\n  padding-left: 5px !important;\n  border-radius: 50px;\n}\nion-select .select-icon .select-icon-inner {\n  color: var(--ion-color-logo);\n}\nion-item {\n  border: none !important;\n}\n.select-text {\n  padding: 0 5px;\n}\nion-slides {\n  height: auto;\n  margin-bottom: 20px;\n  margin-top: 10px;\n  direction: ltr;\n}\n.swiper-container {\n  border-radius: 5px;\n  box-shadow: 0 3px 12px rgba(223, 120, 239, 0.23), 0 3px 12px rgba(223, 120, 239, 0.16);\n}\n.swiper-slide {\n  height: 200px;\n}\n.slide-zoom  {\n  overflow: hidden;\n}\n.swiper-slide img {\n  position: absolute;\n  height: 100%;\n  width: 100% !important;\n  top: 0;\n  left: 0;\n  object-fit: cover;\n}\n.slideContent {\n  font-size: 100%;\n  min-height: 100%;\n  height: 200px;\n  position: relative;\n  width: 100%;\n  background: url('placeholder.png');\n  background-size: contain !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n  border-radius: 5px !important;\n}\n.customfab {\n  height: 85px;\n  width: 85px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 106px;\n  transform: translateY(50%);\n  left: calc(-5px + env(safe-area-inset-left)) !important;\n  right: calc(-5px + env(safe-area-inset-right)) !important;\n}\n.customfab .customfab {\n  right: initial !important;\n  left: -7px !important;\n}\n.customfab .fab-md.activated {\n  height: 70px;\n  width: 70px;\n}\n.customfab .fab-md.activated .icon {\n  font-size: 2.9rem;\n}\n.customfab .fab-md.activated {\n  height: 70px;\n  width: 70px;\n}\n.customfab .fab-md.activated .icon {\n  font-size: 2.9rem;\n}\n.customfabplay {\n  height: 85px;\n  width: 85px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: translateY(-50%);\n  top: 114px;\n  left: auto;\n  right: 10px;\n  right: calc(-5px + env(safe-area-inset-right)) !important;\n  left: calc(-5px + env(safe-area-inset-left)) !important;\n}\n.customfabLocalisation {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: translateY(-50%);\n  left: auto;\n  right: 20px;\n  top: 36px;\n}\n.customfabLocalisation ion-fab-button {\n  width: 25px;\n  height: 25px;\n}\n.fab {\n  background-color: var(--ion-color-logo) !important;\n}\n.fixed {\n  position: fixed;\n  bottom: 30px;\n  right: 0;\n}\n.progress {\n  width: 60px;\n  height: 60px;\n  line-height: 150px;\n  background: none;\n  margin: 0 auto;\n  box-shadow: none;\n  position: relative;\n}\n.progress:after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: none !important;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.progress > span {\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n}\n.progress .progress-left {\n  left: 0;\n}\n.progress .progress-bar {\n  width: 100%;\n  height: 100%;\n  background: none;\n  border-style: solid;\n  position: absolute;\n  top: 0;\n}\n.button {\n  background: var(--ion-color-logo) !important;\n}\n.progress .progress-left .progress-bar {\n  left: 100%;\n  border-top-right-radius: 80px;\n  border-bottom-right-radius: 80px;\n  border-left: 0;\n  transform-origin: center left;\n}\n.progress .progress-right {\n  right: 0;\n}\n.progress .progress-right .progress-bar {\n  left: -100%;\n  border-top-left-radius: 80px;\n  border-bottom-left-radius: 80px;\n  border-right: 0;\n  transform-origin: center right;\n  animation: loading-1 linear forwards;\n}\n.progress .progress-value {\n  width: 90%;\n  height: 90%;\n  border-radius: 50%;\n  background: #44484b;\n  font-size: 24px;\n  color: #fff;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 65px;\n  line-height: 135px;\n  text-align: center;\n  position: absolute;\n  top: 5%;\n  left: 5%;\n}\n.progress .progress-value .icon {\n  position: absolute;\n  right: 50%;\n  transform: translateX(50%);\n  font-size: 20px;\n}\n.progress .progress-value .timerin {\n  position: absolute;\n  top: 20%;\n  left: 29%;\n}\n.progress.blue .progress-bar {\n  border-color: var(--ion-color-primary);\n}\n.progress.blue .progress-left .progress-bar {\n  animation: loading-2 linear forwards;\n}\n.progress.yellow .progress-bar {\n  border-color: #fdba04;\n}\n.progress.yellow .progress-left .progress-bar {\n  animation: loading-3 1s linear forwards 1.8s;\n}\n@keyframes timer {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.2);\n  }\n}\n@keyframes loading-1 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n}\n@keyframes loading-2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n}\n@keyframes loading-3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n}\n@keyframes loading-4 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(36deg);\n  }\n}\n@keyframes loading-5 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n}\n@media only screen and (max-width: 990px) {\n  .progress {\n    margin-bottom: 20px;\n  }\n}\n.select-md .select-icon {\n  left: -12px !important;\n  top: 3px !important;\n}\n.button {\n  --background: var(--ion-color-logo) !important;\n  border-radius: 50px;\n  color: #fff;\n}\n.btnConfirm {\n  margin: 10px 20px;\n}\nion-searchbar {\n  --border-radius: 50px;\n  color: var(--ion-color-logo);\n  --icon-color: var(--ion-color-logo);\n  --box-shadow: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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QTRDQTtFQUNFO0lBRUUsdUJBQXVCO0VBekN6QjtFQTJDQTtJQUVFLHlCQUF5QjtFQXpDM0I7QUFDRjtBQTRDQTtFQUNFO0lBQ0UsbUJBQW1CO0VBekNyQjtBQUNGO0FBNkNBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQTFDckI7QUE2Q0E7RUFDRSw4Q0FBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBMUNiO0FBb0VBO0VBQ0UsaUJBQWlCO0FBakVuQjtBQW9FQTtFQUNFLHFCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsbUNBQWE7RUFDYixrQkFBYTtBQWpFZiIsImZpbGUiOiJhZGQtcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5pb24tdG9vbGJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbG9nbykgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xufVxuXG4ucmVtIHtcbiAgLS1vZmZzZXQtYm90dG9tOiAtM3JlbSFpbXBvcnRhbnQ7XG4gIC0tb2Zmc2V0LXRvcDogMHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA0NXB4IC0xNXB4IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbmZvcm0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWZ1bGwge1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pY29uIHtcbiAgcGFkZGluZzogMC4yZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pb24tdGV4dGFyZWEsIGlvbi1zZWxlY3QsXG5pb24taW5wdXQge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbG9nbyk7XG4gIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG5pb24tc2VsZWN0IC5zZWxlY3QtaWNvbiAuc2VsZWN0LWljb24taW5uZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxvZ28pO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0LXRleHQge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG5cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDNweCAxMnB4IHJnYmEoMjIzLCAxMjAsIDIzOSwgMC4yMyksIDAgM3B4IDEycHggcmdiYSgyMjMsIDEyMCwgMjM5LCAwLjE2KTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5zbGlkZS16b29twqAge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uc2xpZGVDb250ZW50IHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcGxhY2Vob2xkZXIucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tZmFiIHtcbiAgaGVpZ2h0OiA4NXB4O1xuICB3aWR0aDogODVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRvcDogMTA2cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICBsZWZ0OiBjYWxjKC01cHggKyBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpKSAhaW1wb3J0YW50O1xuICByaWdodDogY2FsYygtNXB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkpICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b21mYWIgLmN1c3RvbWZhYiB7XG4gIHJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IC03cHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbWZhYiAuZmFiLW1kLmFjdGl2YXRlZCB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG59XG5cbi5jdXN0b21mYWIgLmZhYi1tZC5hY3RpdmF0ZWQgLmljb24ge1xuICBmb250LXNpemU6IDIuOXJlbTtcbn1cblxuLmN1c3RvbWZhYiAuZmFiLW1kLmFjdGl2YXRlZCB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG59XG5cbi5jdXN0b21mYWIgLmZhYi1tZC5hY3RpdmF0ZWQgLmljb24ge1xuICBmb250LXNpemU6IDIuOXJlbTtcbn1cblxuLmN1c3RvbWZhYnBsYXkge1xuICBoZWlnaHQ6IDg1cHg7XG4gIHdpZHRoOiA4NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0b3A6IDExNHB4O1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMTBweDtcbiAgcmlnaHQ6IGNhbGMoLTVweCArIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpKSAhaW1wb3J0YW50O1xuICBsZWZ0OiBjYWxjKC01cHggKyBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpKSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tZmFiTG9jYWxpc2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMzZweDtcbn1cblxuLmN1c3RvbWZhYkxvY2FsaXNhdGlvbiBpb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5mYWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbG9nbykgIWltcG9ydGFudDtcbn1cblxuLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiAwO1xufVxuXG4ucHJvZ3Jlc3Mge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBsaW5lLWhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3gtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9ncmVzczphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4ucHJvZ3Jlc3MgPiBzcGFuIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLnByb2dyZXNzIC5wcm9ncmVzcy1sZWZ0IHtcbiAgbGVmdDogMDtcbn1cblxuLnByb2dyZXNzIC5wcm9ncmVzcy1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1sb2dvKSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZ3Jlc3MgLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhciB7XG4gIGxlZnQ6IDEwMCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4MHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogODBweDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQ7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBsZWZ0O1xufVxuXG4ucHJvZ3Jlc3MgLnByb2dyZXNzLXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG59XG5cbi5wcm9ncmVzcyAucHJvZ3Jlc3MtcmlnaHQgLnByb2dyZXNzLWJhciB7XG4gIGxlZnQ6IC0xMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4MHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4MHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XG4gIGFuaW1hdGlvbjogbG9hZGluZy0xIGxpbmVhciBmb3J3YXJkcztcbn1cblxuLnByb2dyZXNzIC5wcm9ncmVzcy12YWx1ZSB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICM0NDQ4NGI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiA2NXB4O1xuICBsaW5lLWhlaWdodDogMTM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUlO1xuICBsZWZ0OiA1JTtcbn1cblxuLnByb2dyZXNzIC5wcm9ncmVzcy12YWx1ZSAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnByb2dyZXNzIC5wcm9ncmVzcy12YWx1ZSAudGltZXJpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDI5JTtcbn1cblxuLnByb2dyZXNzLmJsdWUgLnByb2dyZXNzLWJhciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ucHJvZ3Jlc3MuYmx1ZSAucHJvZ3Jlc3MtbGVmdCAucHJvZ3Jlc3MtYmFyIHtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLTIgbGluZWFyIGZvcndhcmRzO1xufVxuXG4ucHJvZ3Jlc3MueWVsbG93IC5wcm9ncmVzcy1iYXIge1xuICBib3JkZXItY29sb3I6ICNmZGJhMDQ7XG59XG5cbi5wcm9ncmVzcy55ZWxsb3cgLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhciB7XG4gIGFuaW1hdGlvbjogbG9hZGluZy0zIDFzIGxpbmVhciBmb3J3YXJkcyAxLjhzO1xufVxuXG5Aa2V5ZnJhbWVzIHRpbWVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZy0xIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nLTIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxvYWRpbmctMyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZy00IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZy01IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xuICAucHJvZ3Jlc3Mge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cblxuLnNlbGVjdC1tZCAuc2VsZWN0LWljb24ge1xuICBsZWZ0OiAtMTJweCAhaW1wb3J0YW50O1xuICB0b3A6IDNweCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbG9nbykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG5Db25maXJtIHtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbG9nbyk7XG4gIC0taWNvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxvZ28pO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4iXX0= */");

/***/ }),

/***/ 87466:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-product/add-product.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"logo\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button>\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{'addproduct.page'|translate}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"rem\">\r\n  <div class=\"main\">\r\n    <form [formGroup]=\"addProducts\">\r\n      <ion-item lines=\"none\">\r\n        <ion-label color=\"primary\" position=\"stacked\" class=\"mylab\">{{'addproduct.title'|translate}}</ion-label>\r\n        <ion-input id=\"title\" maxLength=\"500\" formControlName=\"title\" [(ngModel)]=\"product.title\"\r\n                   placeholder=\"{{'addproduct.placeHolders.title'|translate}}\"></ion-input>\r\n      </ion-item>\r\n      <div *ngIf=\"(!addProducts.controls.title?.valid && (addProducts.controls.title?.dirty || addProduct))\"\r\n           class=\"animated fadeIn erreurMsg\">{{'errors.required'|translate}}</div>\r\n      <ion-item lines=\"none\">\r\n        <ion-label color=\"primary\" position=\"stacked\" class=\"mylab\">{{'addproduct.category'|translate}}</ion-label>\r\n        <ion-select [compareWith]=\"compareFn\" (ionChange)=\"loadSubcategories($event)\" [(ngModel)]=\"selectedC\"  formControlName=\"category\"  placeholder=\"{{'addproduct.placeHolders.category'|translate}}\">\r\n          <ion-select-option *ngFor=\"let category of categorys;let i=index;\" [value]=\"category\">\r\n                    {{category.title}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      \r\n\r\n      <div *ngIf=\"(!addProducts.controls.category?.valid && (addProducts.controls.category?.dirty || addProduct))\"\r\n           class=\"animated fadeIn erreurMsg\">{{'errors.required'|translate}}</div>\r\n      <ion-item lines=\"none\">\r\n        <ion-label   color=\"primary\" position=\"stacked\" class=\"mylab\">{{'addproduct.subcategory'|translate}}</ion-label>\r\n        <ion-select  (ionChange)=\"loadproperties($event)\" formControlName=\"subcategory\"  [(ngModel)]=\"selectedCategory\"  placeholder=\"{{'addproduct.placeHolders.subcategory'|translate}}\">\r\n          <ion-select-option *ngFor=\"let subcategory of subcategories;let i=index;\" [value]=\"subcategory.id\">\r\n                    {{subcategory.title}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <div *ngIf=\"(!addProducts.controls.subcategory?.valid && (addProducts.controls.subcategory?.dirty || addProduct))\"\r\n           class=\"animated fadeIn erreurMsg\">{{'errors.required'|translate}}</div>\r\n\r\n      <ion-item lines=\"none\" class=\"animated fadeIn\" *ngIf=\"selectedC.title!='EMPLOI'\">\r\n        <ion-label color=\"primary\" position=\"stacked\" class=\"mylab\">{{'addproduct.price'|translate}}</ion-label>\r\n        <ion-input id=\"price\" formControlName=\"price\" type=\"number\" [(ngModel)]=\"product.price\"\r\n                   placeholder=\"{{'addproduct.placeHolders.price'|translate}}\"></ion-input>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" class=\"animated fadeIn\">\r\n        <ion-label color=\"primary\" position=\"stacked\" class=\"mylab\">{{'addproduct.telephone'|translate}}</ion-label>\r\n        <ion-input id=\"phone\" formControlName=\"phone\" maxlength=\"18\" minlength=\"8\" type=\"tel\" [(ngModel)]=\"product.phone\"\r\n                   placeholder=\"{{'addproduct.placeHolders.telephone'|translate}}\"></ion-input>\r\n      </ion-item>\r\n      <div\r\n        *ngIf=\"(!addProducts.controls.price?.valid && (addProducts.controls.price?.dirty || addProduct) && selectedC.title!='EMPLOI')\"\r\n        class=\"animated fadeIn erreurMsg\">{{'errors.required'|translate}}</div>\r\n        \r\n        <ion-item lines=\"none\">\r\n        <!-- <div  class=\"progress blue\" (click)=\"playAudio()\"  item-start top center>\r\n                <span class=\"progress-left\">\r\n                    <span *ngIf=\"go\" class=\"progress-bar\"  [style.animation-delay]=\"(audioDuration/2)+'s'\" [style.animation-duration]=\"(audioDuration/2)+'s'\"></span>\r\n                </span>\r\n                <span class=\"progress-right\" >\r\n                    <span  *ngIf=\"go\" class=\"progress-bar\" [style.animation-duration]=\"(audioDuration/2)+'s'\"></span>\r\n                </span>\r\n                <div class=\"progress-value\">\r\n                    <ion-icon name=\"play\"></ion-icon>\r\n                  </div>\r\n            </div> -->\r\n        <!-- ^^^^^^^^ -->\r\n\r\n        <ion-fab   vertical=\"center\" horizontal=\"end\">\r\n          <ion-row>\r\n            <ion-col style=\"left: 40%;\">\r\n          <ion-fab-button  *ngIf=\"!startRecord\" (click)=\"startAudioRecorde()\" primary size=\"small\">\r\n            <ion-icon name=\"mic\">\r\n            </ion-icon>\r\n          </ion-fab-button>\r\n        </ion-col>\r\n        <ion-col style=\"left: 25%;\">\r\n          <ion-fab-button *ngIf=\"!(isplaying !== false || isAudio !== true)\" (click)=\"playAudio()\" primary size=\"small\">\r\n            <ion-icon name=\"play\">\r\n            </ion-icon>\r\n          </ion-fab-button>\r\n        </ion-col>\r\n          <ion-col style=\"left: 10%;\">\r\n          <ion-fab-button *ngIf=\"startRecord\"  (click)=\"showAndPlay()\" primary size=\"small\">\r\n            <ion-icon name=\"pause\">\r\n            </ion-icon>\r\n          </ion-fab-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-fab-button *ngIf=\"isplaying\" (click)=\"pauseAudio()\" primary size=\"small\">\r\n            <ion-icon name=\"pause\">\r\n            </ion-icon>\r\n          </ion-fab-button>\r\n        </ion-col>\r\n        </ion-row>\r\n        </ion-fab>\r\n\r\n        <!-- <ion-fab style=\"top: 25%;\" slot=\"start\" horizontal=\"end\" vertical=\"center\" slot=\"end\">\r\n          <ion-fab-button *ngIf=\"!isplaying\" (click)=\"playAudio()\" primary size=\"small\">\r\n            <ion-icon name=\"play\">\r\n            </ion-icon>\r\n          </ion-fab-button>\r\n          <ion-fab-button *ngIf=\"isplaying\" (click)=\"pauseAudio()\" primary size=\"small\">\r\n            <ion-icon name=\"pause\">\r\n            </ion-icon>\r\n          </ion-fab-button>\r\n        </ion-fab> -->\r\n\r\n\r\n        <ion-label color=\"primary\" position=\"stacked\" class=\"mylab\">{{'addproduct.description'|translate}}</ion-label>\r\n        <ion-textarea fz-elastic id=\"Area\" maxLength=\"500\" formControlName=\"description\"\r\n                      [(ngModel)]=\"product.description\"\r\n                      placeholder=\"{{'addproduct.placeHolders.description'|translate}}\">\r\n                      \r\n        </ion-textarea>\r\n        <!-- <audio *ngIf=\"showplay\" src=\"filePath\" class=\"animated fadeInUp\" controls>\r\n        </audio>\r\n        <audio style=\"width: auto !important;\" *ngIf=\"showplay\" #audioID class=\"animated fadeInUp\" controls>\r\n        </audio> -->\r\n      </ion-item>\r\n       \r\n      <div *ngIf=\"(!addProducts.controls.description.valid && (addProducts.controls.description.dirty || addProduct))\"\r\n           class=\"animated fadeIn erreurMsg\">\r\n        <span *ngIf=\"addProducts.hasError('minlength',['description'])\">{{'errors.min-length.10'|translate}}</span>\r\n        <span *ngIf=\"addProducts.hasError('required',['description'])\">{{'errors.required'|translate}}</span>\r\n      </div>\r\n      <!-- <ion-item lines=none>\r\n      <ion-label  color=\"primary\"  position=\"stacked\" class=\"mylab\">Region </ion-label>\r\n      <ion-select   formControlName=\"region\"  [(ngModel)]=\"selectedRegion\"  placeholder=\"Selectionner La Region\">\r\n        <ion-option *ngFor=\"let region of regions;let i=index;\" value=\"{{region.id}}\">\r\n                  {{region.name}}\r\n        </ion-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <div *ngIf=\"(!addProducts.controls.region?.valid && (addProducts.controls.region?.dirty || addProduct))\" class=\"animated fadeIn erreurMsg\">{{'errors.required'|translate}}</div> -->\r\n      <ion-item lines=\"none\" (click)=\"showMap()\">\r\n        <!--        <ion-fab (click)=\"showMap()\" class=\"customfabLocalisation\" slot=\"start\" horizontal=\"end\" vertical=\"center\" slot=\"end\">-->\r\n        <!--          <ion-fab-button   primary size=\"small\">-->\r\n        <!--            <ion-icon name=\"map\">-->\r\n        <!--            </ion-icon>-->\r\n        <!--          </ion-fab-button>-->\r\n        <!--        </ion-fab>-->\r\n        <ion-label color=\"primary\" position=\"stacked\" class=\"mylab\">{{'addproduct.localisation'|translate}}</ion-label>\r\n        <ion-input type=\"text\" readonly formControlName=\"address\" name=\"address\"\r\n                   [(ngModel)]=\"product.address.address\"\r\n                   placeholder=\"{{'addproduct.placeHolders.localisation'|translate}}\"></ion-input>\r\n      </ion-item>\r\n      <div *ngIf=\"(!addProducts.controls.address?.valid && (addProducts.controls.address?.dirty || addProduct))\"\r\n           class=\"animated fadeIn erreurMsg\">{{'errors.required'|translate}}</div>\r\n\r\n      <!-- Start Properties -->\r\n      <div *ngFor=\"let property of selectedProperties;let i=index;\">\r\n        <ion-item lines=\"none\" class=\"animated fadeIn\">\r\n          <ion-label color=\"primary\" position=\"stacked\" class=\"mylab\">{{property.key}}</ion-label>\r\n          <ion-datetime formControlName=\"{{property.key}}\" *ngIf=\"property.type=='date'\" displayFormat=\"MM/DD/YYYY\"\r\n                        placeholder=\"{{property.key}}\" [(ngModel)]=\"propertyModel[property.id]\"></ion-datetime>\r\n          <ion-input formControlName=\"{{property.key}}\" [(ngModel)]=\"propertyModel[property.id]\"\r\n                     *ngIf=\"property.type=='number'\" type=\"number\" placeholder=\"{{property.key}}\"></ion-input>\r\n          <ion-input formControlName=\"{{property.key}}\" [(ngModel)]=\"propertyModel[property.id]\"\r\n                     *ngIf=\"property.type=='text'\" type=\"text\" placeholder=\"{{property.key}}\"></ion-input>\r\n          <ion-select formControlName=\"{{property.key}}\" [(ngModel)]=\"propertyModel[property.id]\"\r\n                      *ngIf=\"property.type=='select'\" placeholder=\"{{property.key}}\">\r\n            <ion-select-option *ngFor=\"let option of property.responces;let i=index;\" value=\"{{option.id}}\">\r\n              {{option.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <div *ngIf=\"(!addProducts.get(property.key).valid && (addProducts.get(property.key).dirty || addProduct))\"\r\n             class=\"animated fadeIn erreurMsg\">\r\n          {{'errors.required'|translate}}\r\n        </div>\r\n      </div>\r\n      <!--End Insert Custom Properties -->\r\n\r\n      <div *ngIf=\"arrayImages.length >3\" class=\"animated fadeIn erreurMsg\">\r\n        <span>{{'errors.min-length.3pic'|translate}}</span>\r\n      </div>\r\n      <div class=\"slideContent\">\r\n        <ion-slides loop='false' [pager]=\"arrayImages.length > 1\" #slides>\r\n          <ion-slide *ngFor=\"let img of arrayImages;let i = index\">\r\n            <img [src]='img'>\r\n            <ion-fab vertical=\"top\" side=\"start\">\r\n              <ion-fab-button size=\"small\" (click)=\"deleteImage(img, i)\">\r\n                <ion-icon name=\"trash-outline\"></ion-icon>\r\n              </ion-fab-button>\r\n            </ion-fab>\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <ion-fab *ngIf=\"arrayImages.length <3\" vertical=\"bottom\" horizontal=\"end\" class=\"addPic\">\r\n          <ion-fab-button size=\"small\" (click)=\"pictureType()\">\r\n            <ion-icon name=\"camera\"></ion-icon>\r\n          </ion-fab-button>\r\n        </ion-fab>\r\n      </div>\r\n      <div *ngIf=\"(arrayImages.length ==0 && addProduct)\"\r\n           class=\"animated fadeIn erreurMsg\">{{'errors.required-pic'|translate}}</div>\r\n\r\n      <ion-button class=\"btnConfirm\" fill=\"clear\" shape=\"round\" expand=\"block\" slot=\"start\" (click)=\"sendingData()\">\r\n        <ion-icon name=\"checkmark\"></ion-icon>\r\n        {{'addproduct.confirm'|translate}}\r\n      </ion-button>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n<!-- <app-footer></app-footer> -->\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-product_add-product_module_ts.js.map