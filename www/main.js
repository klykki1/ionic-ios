(self["webpackChunkmigrationto5"] = self["webpackChunkmigrationto5"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        redirectTo: 'map',
        pathMatch: 'full'
    },
    {
        path: 'sub-categories',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_sub-categories_sub-categories_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sub-categories/sub-categories.module */ 80319)).then(m => m.SubCategoriesPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/settings.module */ 7850)).then(m => m.SettingsPageModule)
    },
    {
        path: 'info',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_info_info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/info/info.module */ 24461)).then(m => m.InfoPageModule)
    },
    {
        path: 'custom-card',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_custom-card_custom-card_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/custom-card/custom-card.module */ 66994)).then(m => m.CustomCardPageModule)
    },
    {
        path: 'filters-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_filters-modal_filters-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/filters-modal/filters-modal.module */ 13932)).then(m => m.FiltersModalPageModule)
    },
    {
        path: 'map',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/map/map.module */ 96016)).then(m => m.MapPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register/register.module */ 60207)).then(m => m.RegisterPageModule)
    },
    {
        path: 'map-pikker',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_map-pikker_map-pikker_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/map-pikker/map-pikker.module */ 25445)).then(m => m.MapPikkerPageModule)
    },
    {
        path: 'rating',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_rating_rating_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rating/rating.module */ 34176)).then(m => m.RatingPageModule)
    },
    {
        path: 'finders',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_finders_finders_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/finders/finders.module */ 786)).then(m => m.FindersPageModule)
    },
    {
        path: 'discussion',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_discussion_discussion_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/discussion/discussion.module */ 59704)).then(m => m.DiscussionPageModule)
    },
    {
        path: 'discussion/:idProduct',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_discussion_discussion_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/discussion/discussion.module */ 59704)).then(m => m.DiscussionPageModule)
    },
    {
        path: 'add-product',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_add-product_add-product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/add-product/add-product.module */ 5354)).then(m => m.AddProductPageModule)
    },
    {
        path: 'a-propos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_a-propos_a-propos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/a-propos/a-propos.module */ 57246)).then(m => m.AProposPageModule)
    },
    {
        path: 'change-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_change-password_change-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/change-password/change-password.module */ 68292)).then(m => m.ChangePasswordPageModule)
    },
    {
        path: 'chat',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_chat_chat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/chat/chat.module */ 35501)).then(m => m.ChatPageModule)
    },
    {
        path: 'confidentialite',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_confidentialite_confidentialite_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/confidentialite/confidentialite.module */ 1603)).then(m => m.ConfidentialitePageModule)
    },
    {
        path: 'favorites',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_favorites_favorites_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/favorites/favorites.module */ 99883)).then(m => m.FavoritesPageModule)
    },
    // {
    //   path: 'home',
    //   loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    // },
    {
        path: 'login',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
    },
    {
        path: 'mes-annonces',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_mes-annonces_mes-annonces_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mes-annonces/mes-annonces.module */ 61229)).then(m => m.MesAnnoncesPageModule)
    },
    {
        path: 'product-details/:idProduct',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_product-details_product-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product-details/product-details.module */ 81067)).then(m => m.ProductDetailsPageModule)
    },
    {
        path: 'products',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_products_products_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/products/products.module */ 95712)).then(m => m.ProductsPageModule)
    },
    {
        path: 'products/:category',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_products_products_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/products/products.module */ 95712)).then(m => m.ProductsPageModule)
    },
    {
        path: 'suivi',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_suivi_suivi_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/suivi/suivi.module */ 33688)).then(m => m.SuiviPageModule)
    },
    {
        path: '**',
        redirectTo: 'products'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/animations */ 55160);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 25028);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 42848);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 51874);
/* harmony import */ var _awesome_cordova_plugins_branch_io_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/branch-io/ngx */ 44659);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 60758);
/* harmony import */ var _awesome_cordova_plugins_badge_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/badge/ngx */ 98336);
/* harmony import */ var _awesome_cordova_plugins_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/background-geolocation/ngx */ 31565);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/api-services/api-services */ 92844);
/* harmony import */ var _services_app_config_app_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/app-config/app-config */ 55619);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _services_storage_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/storage/storage */ 63762);
/* harmony import */ var _pages_custom_card_custom_card_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/custom-card/custom-card.page */ 61245);
/* harmony import */ var _pages_settings_settings_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/settings/settings.page */ 41902);
/* harmony import */ var _pages_sub_categories_sub_categories_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/sub-categories/sub-categories.page */ 61939);
/* harmony import */ var _pages_info_info_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/info/info.page */ 57429);
/* harmony import */ var _awesome_cordova_plugins_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @awesome-cordova-plugins/firebase-x/ngx */ 53849);
/* harmony import */ var _services_badge_service_badge_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/badge-service/badge.service */ 17516);
/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/product/product.service */ 45798);
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/add/operator/filter */ 37125);










//import {NotificationEventResponse, Push, PushObject, PushOptions} from '@havesource/cordova-plugin-push/types';

















let AppComponent = class AppComponent {
    constructor(platform, zone, statusBar, splashScreen, router, services, productService, modalCtrl, menu, device, branch, callNumber, badge, appConfig, translate, storage, backgroundGeolocation, firebase, badgeService) {
        this.platform = platform;
        this.zone = zone;
        this.router = router;
        this.services = services;
        this.productService = productService;
        this.modalCtrl = modalCtrl;
        this.menu = menu;
        this.device = device;
        this.branch = branch;
        this.callNumber = callNumber;
        this.badge = badge;
        this.appConfig = appConfig;
        this.translate = translate;
        this.storage = storage;
        this.backgroundGeolocation = backgroundGeolocation;
        this.firebase = firebase;
        this.badgeService = badgeService;
        this.rootPage = 'MapPage';
        this.timeoutHandle = null;
        this.notifys = [];
        this.isInChat = false;
        this.notify = {
            product: {}
        };
        this.discussion = null;
        this.profile = null;
        this.profileId = null;
        this.showProfileCard = false;
        this.showNotify = false;
        this.showRow = false;
        this.categories = [];
        this.showPushNotification = false;
        this.notificationProductNumber = 0;
        this.notificationMessageNumber = 0;
        this.suiviIdNotif = [];
        this.platform.ready().then(() => {
            if (this.platform.is('cordova')) {
                Promise.resolve().then(() => {
                    statusBar.overlaysWebView(true);
                    statusBar.backgroundColorByHexString('hsl(209deg 71% 28%)');
                    statusBar.styleDefault();
                    splashScreen.hide();
                    console.log('we Are inside Events now');
                    this.initLocation();
                });
            }
            // this.subscription= this.badgeService.clearBadgesMessage();
        });
        this.subscription = this.badgeService.resetBadgeMessage().subscribe(() => { this.notificationMessageNumber = 0; });
        this.subscription = this.badgeService.resetBadgeProduct().subscribe(() => { this.notificationProductNumber = 0; });
        router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_21__.NavigationEnd)
            .subscribe(event => {
            ;
            if (event['url'] == '/chat') {
                this.badgeService.insideChat(true);
            }
            else {
                this.badgeService.insideChat(false);
            }
        });
        this.isLoggedIn = services.isLoggedIn;
        const self = this;
        platform.ready().then(() => {
            this.initLang();
            const user = JSON.parse(localStorage.getItem('onatrouvé_user'));
            const tokens = JSON.parse(localStorage.getItem('onatrouvé_token'));
            if (user && tokens) {
                this.currentToken = tokens.token;
                this.services.current_user = user;
                this.services.isLoggedIn = true;
                if (this.platform.is('cordova')) {
                    Promise.resolve().then(() => {
                        this.initLocation();
                    });
                }
            }
            this.firebase.getToken()
                .then(token => {
                const deviceData = {
                    reg_id: token,
                    os: this.device.platform
                };
                this.services.device_data = deviceData;
                localStorage.setItem('deviceData', JSON.stringify(deviceData));
            })
                .catch(error => console.error('Error getting token', error));
            this.firebase.onMessageReceived()
                .subscribe((notification) => {
                if (notification.data) {
                    router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_21__.NavigationEnd)
                        .subscribe(event => {
                        ;
                        if (event['url'] !== '/discussion') {
                            this.badgeService.clearBadgesMessage();
                        }
                        else if (event['url'] !== '/finders') {
                            this.badgeService.clearBadges();
                        }
                        else {
                            console.log(event);
                        }
                    });
                    notification.data = JSON.parse(notification.data);
                    const { conversation, ischat, isproduct, foreground } = notification.data;
                    if (ischat) {
                        this.notify.product.title = notification.title;
                        this.notify.target = 'discussion';
                        this.notify.product.description = notification.message;
                        this.notify.product.src = notification.image;
                        this.notify.conversation = conversation;
                        this.zone.run(() => {
                            this.notifys.push(this.notify);
                        });
                    }
                    else if (isproduct) {
                        this.notify.product = notification.data;
                        this.notify.target = 'finders';
                        this.notify.conversation = null;
                        // Promise.resolve().then(() => {
                        //   this.zone.run(() => {
                        //     this.notifys.push(this.notify);
                        //   });
                        // })
                        setTimeout(() => {
                            this.zone.run(() => {
                                this.suiviIdNotif.push(notification.data.suivi);
                                this.notifys.push(this.notify);
                            });
                        }, 10);
                    }
                    if (notification.tap == "background") {
                        this.firebeep();
                        Promise.resolve().then(() => {
                            this.gotoTarget(this.notify);
                            this.firebase.clearAllNotifications();
                        });
                    }
                    else {
                        if (ischat) {
                            this.badgeService.sendBadgeMessageNumber(this.increamentMessageNumber());
                        }
                        else if (isproduct) {
                            badgeService.sendSuivisNotificationId(this.suiviIdNotif);
                            this.badgeService.sendBadgeProductNumber(this.increamentProductNumber());
                        }
                    }
                }
            });
            this.firebase.onTokenRefresh()
                .subscribe(token => {
                localStorage.setItem('com.onatrouve-regId', (token));
                const deviceData = {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    reg_id: token,
                    os: this.device.platform
                };
                this.services.device_data = deviceData;
                localStorage.setItem('deviceData', JSON.stringify(deviceData));
            });
            // const options: PushOptions = {
            //   android: {
            //     senderID: '586038491325',
            //     sound: true,
            //     vibrate: true,
            //     icon: 'icon'
            //     // forceShow:true
            //   },
            //   ios: {
            //     alert: true,
            //     badge: true,
            //     sound: true,
            //   },
            //   windows: {
            //     senderID: '586038491325',
            //     sound: true,
            //     vibrate: true,
            //     icon: 'icon'
            //   },
            //   browser: {
            //     applicationServerKey: '586038491325'
            //   }
            // };
            statusBar.backgroundColorByHexString('hsl(209deg 71% 28%)');
            splashScreen.hide();
            setTimeout(() => {
                this.branchInit();
            }, 3000);
        });
        this.platform.resume.subscribe(() => {
            this.branchInit();
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).on('click', '.tappeditems .label', (e) => {
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).parent().parent().parent().siblings().slideToggle(120);
            e.preventDefault();
        });
    }
    showNotification() {
        this.firebeep();
        if (this.notifTimeout) {
            window.clearTimeout(this.notifTimeout);
        }
        // this.receivedNotification = notification;
        this.zone.run(() => {
            this.showPushNotification = true;
        });
        this.notifTimeout = setTimeout(() => {
            this.zone.run(() => {
                this.showPushNotification = false;
                this.notifys = [];
            });
        }, 500);
    }
    increamentProductNumber() {
        this.notificationProductNumber += 1;
        return this.notificationProductNumber;
    }
    increamentMessageNumber() {
        this.notificationMessageNumber += 1;
        return this.notificationMessageNumber;
    }
    // Branch initialization
    branchInit() {
        // only on devices
        if (!this.platform.is('cordova')) {
            return;
        }
        this.branch.initSession().then(data => {
            if (data['+clicked_branch_link']) {
                // read deep link data on click
                // alert('Deep Link Data: ' + JSON.stringify(data));
                switch (data.$deeplink_path) {
                    case 'reset-password':
                        this.router.navigateByUrl('/change-password/' + data.token);
                        break;
                    case 'product-details':
                        this.showProductDetails(data.productId);
                        break;
                }
            }
            else {
                if (data['+non_branch_link'] && data['+non_branch_link'].indexOf('reset')) {
                    console.log('Inside Branche');
                    const fullurl = data['+non_branch_link'];
                    const reseToken = fullurl.substr(fullurl.lastIndexOf('/') + 1, fullurl.length);
                    setTimeout(() => {
                        this.router.navigateByUrl('/change-password/' + reseToken);
                    }, 10);
                }
            }
        });
    }
    showProductDetails(pooductId) {
        this.productService.getProductbyId(pooductId).subscribe((product) => {
            this.router.navigateByUrl('product-details/' + product);
        }, (err) => {
            console.log(err);
        });
    }
    closenotif() {
        this.showPushNotification = false;
    }
    firebeep() {
        const audio3 = new Audio('assets/sounds/intuition.mp3');
        audio3.onloadeddata = () => {
            audio3.play();
        };
    }
    getcategorie() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(() => {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.tappeditems').on('click', (event) => {
                alert('aaaa');
            });
        });
    }
    gotoTarget(notify) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            this.showPushNotification = false;
            if (notify.target === 'Profile' && notify.profile_id) {
                // Get User By ID Profile Is the id
                this.services.getuserByID(notify.profile_id).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
                    this.profile = res;
                    setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
                        const modal = yield this.modalCtrl.create({
                            component: _pages_custom_card_custom_card_page__WEBPACK_IMPORTED_MODULE_13__.CustomCardPage,
                            componentProps: {
                                notify,
                                profile: this.profile,
                            },
                            cssClass: 'filter-modal'
                        });
                        return yield modal.present();
                    }), 0);
                })).catch((error) => {
                    console.log(error);
                });
            }
            else if (notify.target === 'discussion') {
                const conversation = {
                    product: notify.product,
                    conversation: notify.conversation,
                    comefromnotif: true
                };
                this.increamentMessageNumber();
                this.badgeService.sendBadgeMessageNumber(this.increamentMessageNumber());
                this.router.navigateByUrl(notify.target, { state: { conversation } });
            }
            else if (notify.target === 'finders') {
                const natification = {
                    notif: notify,
                    comefromnotif: true
                };
                this.increamentProductNumber();
                this.badgeService.sendBadgeProductNumber(this.increamentProductNumber());
                this.router.navigateByUrl(notify.target, { state: { natification } });
            }
            else {
                console.log("route undefinned");
            }
        });
    }
    openLangModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _pages_settings_settings_page__WEBPACK_IMPORTED_MODULE_14__.SettingsPage,
                cssClass: 'categories-modal'
            });
            yield modal.present();
            yield modal.dismiss(params => {
                console.log('Console from LangModals');
            });
        });
    }
    openCategoryModal(category) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            this.menu.close();
            const modal = yield this.modalCtrl.create({
                component: _pages_sub_categories_sub_categories_page__WEBPACK_IMPORTED_MODULE_15__.SubCategoriesPage,
                componentProps: { subcategories: category.subcategories },
                cssClass: 'categories-modal'
            });
            yield modal.present();
            yield modal.onDidDismiss().then((params) => {
                if (params && params.data.link) {
                    this.gotoproducts(params.data.link.title);
                }
            });
        });
    }
    gotoproductsfrommenue(subcategorie_title) {
        this.gotoproducts(subcategorie_title);
    }
    openInfoModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _pages_info_info_page__WEBPACK_IMPORTED_MODULE_16__.InfoPage
            });
            return yield modal.present();
        });
    }
    mes_Annonces() {
        this.router.navigateByUrl('/annonces');
    }
    // End background grolocation
    // *********************************************
    // sendGPS Method to send data to api locate
    // start Methode
    // ************************************
    sendGPS(location) {
        this.services.sendGpsToApi(location, this.services.current_user.HasTarget.map(res => res.id)).then(data => {
        })
            .catch(error => {
            console.log('Error when sending data to server Side');
            console.log(error);
        });
    }
    // End Method sendGps Here
    initLocation() {
        const bgGeolocationConfig = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 5,
            interval: 5000,
            notificationTitle: 'Tracking',
            notificationText: '',
            debug: true,
            stopOnTerminate: false,
            stopOnStillActivity: false,
            startOnBoot: true,
            maxLocations: 500,
            // url: 'http://192.168.1.29:3003/geolocation',
            //url: `${this.appConfig.API}/locate`,
            url: 'http://vps-6496d4c1.vps.ovh.net/api/locate',
            httpHeaders: {
                accept: 'application/json',
                authorization: `Bearer ${this.currentToken}`,
                'content-type': 'application/json'
            },
            // customize post properties
            postTemplate: {
                latitude: '@latitude',
                longitude: '@longitude',
            }
        };
        this.backgroundGeolocation.configure(bgGeolocationConfig).then(() => {
            console.log('First then');
            const status = this.backgroundGeolocation.checkStatus();
            let config = this.backgroundGeolocation.getConfig();
            this.backgroundGeolocation.on(_awesome_cordova_plugins_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__.BackgroundGeolocationEvents.location).subscribe((location) => {
                config = this.backgroundGeolocation.getConfig();
                console.log('config', config, status);
                console.log('Inside location : ', location);
                // this.sendGPS(location);
            });
        });
        this.backgroundGeolocation.start();
    }
    stopBackgroundGeolocation() {
        // If you wish to turn OFF background-tracking, call the #stop method.
        this.backgroundGeolocation.stop();
    }
    dialCall() {
        console.log('callPerson', this.notify);
        const called = this.profile.phone.substr(1, this.profile.phone.length);
        this.callNumber.callNumber('0033' + called, true)
            .then(res => {
            console.log('Launched dialer!', res);
            this.showProfileCard = false;
        })
            .catch(err => console.log('Error launching dialer', err));
    }
    cancel() {
        this.showProfileCard = false;
    }
    goto(link, params) {
        this.menu.close();
        this.router.navigateByUrl(link);
    }
    gotoHome() {
        this.router.navigateByUrl('/map');
    }
    logout() {
        this.services.logout().then((res) => {
            this.stopBackgroundGeolocation();
            this.services.isLoggedIn = false;
            localStorage.clear();
            setTimeout(() => {
                this.router.navigateByUrl('/map');
            }, 100);
        }).catch((err) => {
            this.services.fireError(err);
        });
    }
    setBagdgePermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const hasPermission = yield this.badge.hasPermission();
                if (!hasPermission) {
                    const permission = yield this.badge.requestPermission();
                }
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    setbadge(badgeNumber) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const badges = yield this.badge.set(badgeNumber);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    getbadges() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const existingBadges = yield this.badge.get();
                return existingBadges;
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    clearBadges() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.badge.clear();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    increasebadges(badgeNumber) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const badges = yield this.badge.increase(Number(badgeNumber));
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    fireMethod({ method, params }) {
        this[method](params);
    }
    decreasebadges(badgeNumber) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const badges = yield this.badge.decrease(Number(badgeNumber));
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    changeLanguage(lang) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            this.appConfig.userSettings.language = lang;
            yield this.storage.set('userSettings', this.appConfig.userSettings);
            this.changeDirection();
        });
    }
    changeDirection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            const userSettings = yield this.storage.get('userSettings');
            if (userSettings) {
                this.appConfig.userSettings = userSettings;
            }
            if (this.appConfig.userSettings.language === 'ar') {
                document.documentElement.dir = 'rtl';
            }
            else {
                document.documentElement.dir = 'ltr';
            }
            this.translate.use(this.appConfig.userSettings.language);
            // this.events.publish('languageChange',true);
        });
    }
    initLang() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            const userSettings = yield this.storage.get('userSettings');
            this.translate.setDefaultLang('fr');
            if (userSettings && userSettings.language) {
                this.appConfig.userSettings = userSettings;
                if (userSettings.language === 'ar') {
                    document.documentElement.dir = 'rtl';
                }
                else {
                    document.documentElement.dir = 'ltr';
                }
                ;
                this.translate.use(userSettings.language);
            }
            else {
                document.documentElement.dir = 'ltr';
                this.translate.use('fr');
            }
        });
    }
    gotoproducts(category) {
        // this.router.navigateByUrl('/products/' + category);
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_24__.NgZone },
    { type: _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__.StatusBar },
    { type: _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__.SplashScreen },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__.Router },
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_10__.ApiServices },
    { type: _services_product_product_service__WEBPACK_IMPORTED_MODULE_19__.ProductService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.MenuController },
    { type: _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_5__.Device },
    { type: _awesome_cordova_plugins_branch_io_ngx__WEBPACK_IMPORTED_MODULE_6__.BranchIo },
    { type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__.CallNumber },
    { type: _awesome_cordova_plugins_badge_ngx__WEBPACK_IMPORTED_MODULE_8__.Badge },
    { type: _services_app_config_app_config__WEBPACK_IMPORTED_MODULE_11__.AppConfigService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateService },
    { type: _services_storage_storage__WEBPACK_IMPORTED_MODULE_12__.StorageService },
    { type: _awesome_cordova_plugins_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__.BackgroundGeolocation },
    { type: _awesome_cordova_plugins_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_17__.FirebaseX },
    { type: _services_badge_service_badge_service__WEBPACK_IMPORTED_MODULE_18__.BadgeService }
];
AppComponent.propDecorators = {
    customCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_24__.ViewChild, args: ['customCard',] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_24__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.trigger)('pushNotifAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.animate)('.5s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.keyframes)([
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({ transform: 'translateY(-100%)', offset: 0 }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({ transform: 'translateY(10px)', offset: .4 }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({ transform: 'translateY(-5px)', offset: .7 }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({ transform: 'translateY(0px)', offset: 1.0 }),
                    ]))
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.animate)('.2s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.keyframes)([
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({ transform: 'translateY(0px)', offset: 0 }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({ transform: 'translateY(-100%)', offset: 1.0 }),
                    ]))
                ])
            ])
        ],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ngx-socket-io */ 75421);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);
/* harmony import */ var ionic_rating__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ionic-rating */ 80001);
/* harmony import */ var _awesome_cordova_plugins_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/firebase-x/ngx */ 53849);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-ionic-image-viewer */ 51210);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 35221);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 42848);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 51874);
/* harmony import */ var _awesome_cordova_plugins_badge_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/badge/ngx */ 98336);
/* harmony import */ var _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/email-composer/ngx */ 17265);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 60758);
/* harmony import */ var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/file-transfer/ngx */ 50806);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _awesome_cordova_plugins_branch_io_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/branch-io/ngx */ 44659);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 25028);
/* harmony import */ var _awesome_cordova_plugins_dialogs_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @awesome-cordova-plugins/dialogs/ngx */ 72551);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 33493);
/* harmony import */ var _awesome_cordova_plugins_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @awesome-cordova-plugins/background-geolocation/ngx */ 31565);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @agm/core */ 15971);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _pages_map_map_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/map/map.module */ 96016);
/* harmony import */ var _pages_login_login_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/login/login.module */ 21053);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/pipes.module */ 35503);
/* harmony import */ var _pipes_time_ago_pipe_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/time-ago-pipe/index */ 83187);
/* harmony import */ var _services_ui_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/ui/ui */ 85081);
/* harmony import */ var _services_utils_IonicGestureConfig__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/utils/IonicGestureConfig */ 86292);
/* harmony import */ var _services_camera_camera__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/camera/camera */ 82289);
/* harmony import */ var _services_jwt_helper_jwt_helper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/jwt-helper/jwt-helper */ 54967);
/* harmony import */ var _services_http_helper_http_helper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/http-helper/http-helper */ 42516);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/api-services/api-services */ 92844);
/* harmony import */ var _services_app_config_app_config__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/app-config/app-config */ 55619);
/* harmony import */ var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/auth-service/auth-service */ 44073);
/* harmony import */ var _services_storage_storage__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/storage/storage */ 63762);
/* harmony import */ var _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @awesome-cordova-plugins/media/ngx */ 83621);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/components.module */ 45642);
/* harmony import */ var _awesome_cordova_plugins_image_picker_ngx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @awesome-cordova-plugins/image-picker/ngx */ 20433);


















// import {Push} from '@havesource/cordova-plugin-push/types';






























const config = { url: 'http://vps-6496d4c1.vps.ovh.net:3001/chat', options: {
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: Infinity
    } };
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_33__.TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_34__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_35__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_38__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_16__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_39__.HttpClientModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_31__.ComponentModule,
            _pages_map_map_module__WEBPACK_IMPORTED_MODULE_17__.MapPageModule,
            ionic_rating__WEBPACK_IMPORTED_MODULE_40__.IonicRatingModule,
            _pages_login_login_module__WEBPACK_IMPORTED_MODULE_18__.LoginPageModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__.BrowserAnimationsModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_19__.PipesModule,
            _pipes_time_ago_pipe_index__WEBPACK_IMPORTED_MODULE_20__.TimeAgoPipeModule,
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_42__.NgxIonicImageViewerModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_43__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_43__.TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_39__.HttpClient]
                }
            }),
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_44__.SocketIoModule.forRoot(config),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_45__.IonicStorageModule.forRoot({ name: 'onaTrouveDatadase' }),
            _agm_core__WEBPACK_IMPORTED_MODULE_46__.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyAh30l0_YwqZkcgVBu-bWXylGO86IhaS84'
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_38__.IonicModule.forRoot({ _forceStatusbarPadding: true })
        ],
        providers: [_awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_1__.SocialSharing,
            _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar,
            _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__.File,
            _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera,
            _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_4__.Device,
            // Push,
            _awesome_cordova_plugins_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_14__.BackgroundGeolocation,
            _awesome_cordova_plugins_image_picker_ngx__WEBPACK_IMPORTED_MODULE_32__.ImagePicker,
            _awesome_cordova_plugins_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_0__.FirebaseX,
            _awesome_cordova_plugins_badge_ngx__WEBPACK_IMPORTED_MODULE_5__.Badge,
            _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__.EmailComposer,
            _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__.CallNumber,
            _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__.FileTransfer,
            _awesome_cordova_plugins_branch_io_ngx__WEBPACK_IMPORTED_MODULE_10__.BranchIo,
            _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__.FileTransferObject,
            _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_11__.SplashScreen,
            _awesome_cordova_plugins_dialogs_ngx__WEBPACK_IMPORTED_MODULE_12__.Dialogs,
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormBuilder,
            _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__.Geolocation,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_38__.NavParams,
            { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__.HAMMER_GESTURE_CONFIG, useClass: _services_utils_IonicGestureConfig__WEBPACK_IMPORTED_MODULE_22__.IonicGestureConfig },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_35__.ErrorHandler },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_47__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_38__.IonicRouteStrategy },
            _services_ui_ui__WEBPACK_IMPORTED_MODULE_21__.UiService,
            _services_camera_camera__WEBPACK_IMPORTED_MODULE_23__.CameraProvider,
            _services_jwt_helper_jwt_helper__WEBPACK_IMPORTED_MODULE_24__.JwtHelperProvider,
            _services_http_helper_http_helper__WEBPACK_IMPORTED_MODULE_25__.HttpHelperService,
            _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_26__.ApiServices,
            _services_app_config_app_config__WEBPACK_IMPORTED_MODULE_27__.AppConfigService,
            _services_ui_ui__WEBPACK_IMPORTED_MODULE_21__.UiService,
            _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_28__.AuthServiceService,
            _services_storage_storage__WEBPACK_IMPORTED_MODULE_29__.StorageService,
            _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_30__.Media,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 44220:
/*!*************************************************************************!*\
  !*** ./src/app/components/categories-list/categories-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesListComponent": () => (/* binding */ CategoriesListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_categories_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./categories-list.component.html */ 91176);
/* harmony import */ var _categories_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories-list.component.scss */ 60140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);







let CategoriesListComponent = class CategoriesListComponent {
    constructor(services) {
        this.services = services;
        this.categoryClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.contentHeight = null;
        this.innerMaxHeight = null;
        this.maxHeight = 0;
        this.categories = [];
        // this.events.unsubscribe('onMenuOpen')
        // this.events.subscribe('onMenuOpen', () => {
        //   this.initComponent();
        // })
    }
    set isVisible(val) {
        if (val !== this.isVisibles) {
            this.isVisibles = val;
            this.toggleState();
        }
    }
    ngOnInit() {
        this.getCategories();
    }
    getCategories() {
        this.services.getCategories().subscribe((res) => {
            // console.log(res)
            this.categories = res;
        }, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((err) => {
            this.services.fireError(err);
            this.categories = [];
            throw err;
        }));
    }
    initComponent() {
        this.contentHeight = this.content.nativeElement.clientHeight;
        this.innerMaxHeight = this.maxHeight;
        this.toggleState();
    }
    showSubcategories(category) {
        this.categoryClick.emit(category);
    }
    toggleState() {
        if (this.isVisibles) {
            this.content.nativeElement.style.height = `${this.contentHeight}px`;
        }
        else {
            this.content.nativeElement.style.height = `${this.innerMaxHeight}px`;
        }
    }
};
CategoriesListComponent.ctorParameters = () => [
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__.ApiServices }
];
CategoriesListComponent.propDecorators = {
    categoryClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenu, { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef },] }],
    isVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
CategoriesListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-categories-list',
        template: _raw_loader_categories_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_categories_list_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CategoriesListComponent);



/***/ }),

/***/ 94254:
/*!*****************************************************************************!*\
  !*** ./src/app/components/categories-slider/categories-slider.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesSliderComponent": () => (/* binding */ CategoriesSliderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_categories_slider_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./categories-slider.component.html */ 32891);
/* harmony import */ var _categories_slider_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories-slider.component.scss */ 87009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);
/* harmony import */ var _pages_sub_categories_sub_categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/sub-categories/sub-categories.page */ 61939);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);








let CategoriesSliderComponent = class CategoriesSliderComponent {
    constructor(services, router, modalController) {
        this.services = services;
        this.router = router;
        this.modalController = modalController;
        this.categoryClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.slideOpts = {
            loop: true,
            pagination: false,
            // centeredSlides: true,
            initialSlide: 0,
            speed: 400,
            // spaceBetween: 50,
            slidesPerView: 6,
        };
        this.categories = [];
    }
    ngOnInit() {
        this.getCategories();
    }
    getCategories() {
        this.services.getCategories().subscribe((res) => {
            // console.log(res)
            this.categories = res;
        }, (err) => {
            this.services.fireError(err);
            this.categories = [];
            throw err;
        });
    }
    showSubcategories(category) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_sub_categories_sub_categories_page__WEBPACK_IMPORTED_MODULE_3__.SubCategoriesPage,
                componentProps: { subcategories: category.subcategories },
                cssClass: 'categories-modal'
            });
            yield modal.present();
            yield modal.onDidDismiss().then((params) => {
                if (params && params.data.link) {
                    this.gotoproducts(params.data.link.title);
                }
            });
        });
    }
    gotoproducts(category) {
        this.router.navigateByUrl('/products/' + category);
    }
    goProducts() {
        console.log('ok');
        this.router.navigateByUrl('/products');
    }
};
CategoriesSliderComponent.ctorParameters = () => [
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__.ApiServices },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
CategoriesSliderComponent.propDecorators = {
    categoryClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
CategoriesSliderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-categories-slider',
        template: _raw_loader_categories_slider_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_categories_slider_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CategoriesSliderComponent);



/***/ }),

/***/ 84309:
/*!*********************************************************!*\
  !*** ./src/app/components/components-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsRoutingModule": () => (/* binding */ ComponentsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [];
let ComponentsRoutingModule = class ComponentsRoutingModule {
};
ComponentsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], ComponentsRoutingModule);



/***/ }),

/***/ 45642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentModule": () => (/* binding */ ComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-routing.module */ 84309);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-menu/side-menu.component */ 23335);
/* harmony import */ var _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories-list/categories-list.component */ 44220);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 43646);
/* harmony import */ var _categories_slider_categories_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories-slider/categories-slider.component */ 94254);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ 64662);
/* harmony import */ var _settings_pop_over_settings_pop_over_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings-pop-over/settings-pop-over.component */ 6728);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _slideup_slideup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slideup/slideup.component */ 25050);














let ComponentModule = class ComponentModule {
};
ComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [
            _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesListComponent,
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
            _categories_slider_categories_slider_component__WEBPACK_IMPORTED_MODULE_4__.CategoriesSliderComponent,
            _settings_pop_over_settings_pop_over_component__WEBPACK_IMPORTED_MODULE_6__.SettingsPopOverComponent,
            _slideup_slideup_component__WEBPACK_IMPORTED_MODULE_7__.SlideupComponent,
            _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__.SideMenuComponent,
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _components_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forChild()
        ],
        exports: [_slideup_slideup_component__WEBPACK_IMPORTED_MODULE_7__.SlideupComponent,
            _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesListComponent,
            _categories_slider_categories_slider_component__WEBPACK_IMPORTED_MODULE_4__.CategoriesSliderComponent,
            _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__.SideMenuComponent,
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent,
            _settings_pop_over_settings_pop_over_component__WEBPACK_IMPORTED_MODULE_6__.SettingsPopOverComponent]
    })
], ComponentModule);



/***/ }),

/***/ 64662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./footer.component.html */ 32517);
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ 82251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app-config/app-config */ 55619);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_badge_service_badge_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/badge-service/badge.service */ 17516);








let FooterComponent = class FooterComponent {
    constructor(appConfig, router, badgeService, service) {
        this.appConfig = appConfig;
        this.router = router;
        this.badgeService = badgeService;
        this.service = service;
        this.currentUserPrefix = this.appConfig.appPrefixes.user;
        this.subscription = this.badgeService.getinsidechat().subscribe((number) => this.insideChat = number);
        this.subscription = this.badgeService.getNumber().subscribe((number) => this.productNotificationBadge = number);
        this.subscription = this.badgeService.getNumberMessage().subscribe((number) => this.messageNotificationBadge = number);
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('onatrouvé_user'));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    gotTofavorites() {
        this.router.navigateByUrl('/favorites');
    }
    gotToRecherche() {
        this.router.navigateByUrl('/finders');
    }
    gotToDiscussion() {
        this.router.navigateByUrl('/discussion');
    }
    gotToProducts() {
        this.router.navigateByUrl('/products');
    }
    gotToAddProduct() {
        this.router.navigateByUrl('/add-product');
    }
};
FooterComponent.ctorParameters = () => [
    { type: _services_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfigService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_badge_service_badge_service__WEBPACK_IMPORTED_MODULE_4__.BadgeService },
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_3__.ApiServices }
];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FooterComponent);



/***/ }),

/***/ 43646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header.component.html */ 97911);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 64993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pages_filters_modal_filters_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/filters-modal/filters-modal.page */ 75995);
/* harmony import */ var _settings_pop_over_settings_pop_over_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings-pop-over/settings-pop-over.component */ 6728);
/* harmony import */ var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product/product.service */ 45798);











let HeaderComponent = class HeaderComponent {
    constructor(services, modalCtrl, router, productService, popoverController) {
        this.services = services;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.productService = productService;
        this.popoverController = popoverController;
        this.filterEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.isFiltered = false;
        this.isProfile = true;
        this.isModal = false;
        this.isLogo = false;
        this.isMenu = true;
        this.isSearch = true;
        this.isBack = false;
        this.showSpinner = false;
        this.filter = {
            price: false,
            distance: false,
            date: false,
            lat: 0,
            lng: 0
        };
        this.page = 1;
        this.products = [];
        this.filtred = [];
    }
    ngOnInit() {
    }
    openfilter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.services.current_position) {
                this.filter.lat = this.services.current_position.lat;
                this.filter.lng = this.services.current_position.lng;
            }
            const modal = yield this.modalCtrl.create({
                component: _pages_filters_modal_filters_modal_page__WEBPACK_IMPORTED_MODULE_3__.FiltersModalPage,
                componentProps: { filter: this.filter },
                cssClass: 'filter-modal'
            });
            yield modal.present();
            yield modal.onDidDismiss().then(filter => {
                if (filter) {
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
    filterAction(value) {
        this.filterEvent.emit(value);
    }
    getproducts(category) {
        this.products = [];
        if (category) {
            this.productService.getProductsByCategory(category, this.page, false, this.filter).subscribe((res) => {
                this.products = res;
                this.filtred = this.products;
                console.log('filtred', this.filtred);
                this.filterAction(this.filtred);
                this.services.getCurrentLocation(true).then((pos) => {
                    this.services.current_position.lat = pos.coords.latitude;
                    this.services.current_position.lng = pos.coords.longitude;
                }).catch(err => {
                    console.log(err);
                });
            }, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => {
                console.log(err);
                throw err;
            }));
        }
        else {
            this.productService.getAllProducts(this.page, false, this.filter).subscribe((res) => {
                this.products = res;
                this.filtred = this.products;
                this.filterAction(this.filtred);
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
    getdatfromdateBase(ev) {
        if (this.router.url !== '/products') {
            // this.router.navigateByUrl('/products', {skipLocationChange: true});
        }
        const val = ev.target.value;
        console.log(val);
        this.newItemEvent.emit(val);
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
    close() {
        this.modalCtrl.dismiss();
    }
    openPopOver(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _settings_pop_over_settings_pop_over_component__WEBPACK_IMPORTED_MODULE_4__.SettingsPopOverComponent,
                cssClass: 'custom-popover',
                event: ev,
                // translucent: true,
                // mode:'ios'
            });
            yield popover.present();
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__.ApiServices },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController }
];
HeaderComponent.propDecorators = {
    filterEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }],
    newItemEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }],
    isFiltered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    isProfile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    isModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    isLogo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    isMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    isSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    isBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderComponent);



/***/ }),

/***/ 6728:
/*!*****************************************************************************!*\
  !*** ./src/app/components/settings-pop-over/settings-pop-over.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPopOverComponent": () => (/* binding */ SettingsPopOverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_settings_pop_over_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./settings-pop-over.component.html */ 88085);
/* harmony import */ var _settings_pop_over_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-pop-over.component.scss */ 44973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);
/* harmony import */ var _awesome_cordova_plugins_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/background-geolocation/ngx */ 31565);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_app_config_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app-config/app-config */ 55619);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);









let SettingsPopOverComponent = class SettingsPopOverComponent {
    constructor(services, router, appConfig, popoverController, backgroundGeolocation) {
        this.services = services;
        this.router = router;
        this.appConfig = appConfig;
        this.popoverController = popoverController;
        this.backgroundGeolocation = backgroundGeolocation;
    }
    ngOnInit() {
    }
    stopBackgroundGeolocation() {
        // If you wish to turn OFF background-tracking, call the #stop method.
        this.backgroundGeolocation.stop();
    }
    fireMethod(method, params) {
        this[method](params);
    }
    logout() {
        this.services.logout().then((res) => {
            this.stopBackgroundGeolocation();
            this.services.isLoggedIn = false;
            localStorage.clear();
            this.popoverController.dismiss();
            setTimeout(() => {
                this.router.navigateByUrl('/map');
            }, 100);
        }).catch((err) => {
            this.services.fireError(err);
        });
    }
    initLocation() {
        console.log('Init location');
        console.log(this.currentToken);
        const bgGeolocationConfig = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 5,
            interval: 5000,
            debug: false,
            stopOnTerminate: false,
            stopOnStillActivity: false,
            startOnBoot: true,
            maxLocations: 500,
            // url: 'http://192.168.1.29:3003/geolocation',
            url: `${this.appConfig.API}/locate`,
            httpHeaders: {
                accept: 'application/json',
                authorization: `Bearer ${this.currentToken}`,
                'content-type': 'application/json'
            },
            // customize post properties
            postTemplate: {
                latitude: '@latitude',
                longitude: '@longitude',
            }
        };
        this.backgroundGeolocation.configure(bgGeolocationConfig).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('First then');
            const status = yield this.backgroundGeolocation.checkStatus();
            let config = yield this.backgroundGeolocation.getConfig();
            console.log('config', config, status);
            this.backgroundGeolocation.on(_awesome_cordova_plugins_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.BackgroundGeolocationEvents.location).subscribe((location) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                config = yield this.backgroundGeolocation.getConfig();
                console.log('config', config, status);
                console.log('Inside location setting: ', location);
                // this.sendGPS(location);
            }));
        }));
        this.backgroundGeolocation.start();
    }
    goProfile() {
        this.router.navigateByUrl('/profile');
        this.popoverController.dismiss();
    }
    goto(link, params) {
        console.log(link);
        this.router.navigateByUrl(link);
        this.popoverController.dismiss();
    }
};
SettingsPopOverComponent.ctorParameters = () => [
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__.ApiServices },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_app_config_app_config__WEBPACK_IMPORTED_MODULE_4__.AppConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController },
    { type: _awesome_cordova_plugins_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.BackgroundGeolocation }
];
SettingsPopOverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-settings-pop-over',
        template: _raw_loader_settings_pop_over_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_settings_pop_over_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SettingsPopOverComponent);



/***/ }),

/***/ 23335:
/*!*************************************************************!*\
  !*** ./src/app/components/side-menu/side-menu.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideMenuComponent": () => (/* binding */ SideMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_side_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./side-menu.component.html */ 83987);
/* harmony import */ var _side_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-menu.component.scss */ 47329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);
/* harmony import */ var src_app_pages_confidentialite_confidentialite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/confidentialite/confidentialite.page */ 17639);








let SideMenuComponent = class SideMenuComponent {
    constructor(services, router, modalCtrl, menu) {
        this.services = services;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.menu = menu;
        this.side = 'left';
        this.onFireMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.showrow = true;
    }
    fireMethod(method, params) {
        this.onFireMethod.emit({ method, params });
    }
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_confidentialite_confidentialite_page__WEBPACK_IMPORTED_MODULE_3__.ConfidentialitePage
            });
            return yield modal.present();
        });
    }
    onOpen() {
        console.log('onMenuOpen');
        // this.events.publish('onMenuOpen')
    }
    ngOnInit() {
    }
    goto(event) {
        this.menu.close();
        this.router.navigateByUrl('/' + event);
    }
    profileEdit() {
        this.menu.close();
        this.router.navigateByUrl('/register', {
            state: {
                profile: true,
            }
        });
    }
};
SideMenuComponent.ctorParameters = () => [
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__.ApiServices },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController }
];
SideMenuComponent.propDecorators = {
    main: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    side: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    onFireMethod: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
SideMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-side-menu',
        template: _raw_loader_side_menu_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_side_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SideMenuComponent);



/***/ }),

/***/ 25050:
/*!*********************************************************!*\
  !*** ./src/app/components/slideup/slideup.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideupComponent": () => (/* binding */ SlideupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_slideup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./slideup.component.html */ 41463);
/* harmony import */ var _slideup_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideup.component.scss */ 90959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 35758);
/* harmony import */ var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product/product.service */ 45798);
/* harmony import */ var src_app_services_suivi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/suivi.service */ 97623);









let SlideupComponent = class SlideupComponent {
    constructor(navCtrl, modalController, services, productService, suiviServices) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.services = services;
        this.productService = productService;
        this.suiviServices = suiviServices;
        this.show_confirm = false;
        this.showways = false;
        this.gettingLocation = false;
    }
    ngOnInit() {
        console.log('1');
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)([
            this.productService.getProductbyId(this.product),
            this.services.addvisitors(this.product)
        ]).subscribe(results => {
            this.currentProduct = results[0];
            this.currentProduct.visitor = results[1].visitors;
            this.getCurrentPosition();
        });
    }
    getCurrentPosition() {
        console.log('2');
        this.gettingLocation = true;
        this.services.getCurrentLocation(true).then((res) => {
            this.gettingLocation = false;
            this.services.current_position.lat = res.coords.latitude;
            this.services.current_position.lng = res.coords.longitude;
            console.log(this.services.current_position);
            console.log(this.currentProduct);
            this.loadMap();
            this.startNavigating();
        }).catch(err => {
            this.gettingLocation = false;
            console.log('Position Error ', err);
        });
    }
    convertedtoObject(start) {
        return Array(start).fill(1);
    }
    // MAPS Methodes
    loadMap() {
        console.log(this.currentProduct);
        const latLng = new google.maps.LatLng(parseFloat(this.currentProduct.address.lat), parseFloat(this.currentProduct.address.long));
        const mapOptions = {
            center: latLng,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }
    startNavigating() {
        console.log(this.currentProduct, 'currentProduct');
        console.log(this.services, 'services');
        let directionsService = new google.maps.DirectionsService();
        let directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(this.directionsPanel.nativeElement);
        directionsService.route({
            origin: {
                lat: parseFloat(this.services.current_position.lat),
                lng: parseFloat(this.services.current_position.lng)
            },
            destination: {
                lat: parseFloat(this.currentProduct.address.lat),
                lng: parseFloat(this.currentProduct.address.long)
            },
            travelMode: google.maps.TravelMode.DRIVING
        }, (res, status) => {
            console.log(res);
            if (status === google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(res);
            }
            else {
                console.warn(status);
            }
        });
    }
    scrollToBottom(duration) {
        this.showways = !this.showways;
        if (this.showways) {
            setTimeout(() => {
                if (this.content) {
                    this.content.scrollToBottom(duration);
                }
            }, 200);
        }
    }
    thisIstheProduct() {
        console.log('this is The product');
        this.suiviServices.deletesuivi(this.currentProduct.id).then((res) => {
            console.log(res);
            // this.ui.toast('On a Trouvé : '+this.current_product.title+' !!! ' ,null,null,null,'top');
            this.show_confirm = false;
        }).catch((err) => {
            console.log(err);
        });
    }
    close() {
        // this.navCtrl.pop();
        this.modalController.dismiss();
    }
};
SlideupComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__.ApiServices },
    { type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService },
    { type: src_app_services_suivi_service__WEBPACK_IMPORTED_MODULE_4__.SuiviService }
];
SlideupComponent.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['map',] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent,] }],
    directionsPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['directionsPanel',] }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['product',] }]
};
SlideupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-slideup',
        template: _raw_loader_slideup_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_slideup_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SlideupComponent);



/***/ }),

/***/ 17639:
/*!***************************************************************!*\
  !*** ./src/app/pages/confidentialite/confidentialite.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfidentialitePage": () => (/* binding */ ConfidentialitePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_confidentialite_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./confidentialite.page.html */ 37180);
/* harmony import */ var _confidentialite_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confidentialite.page.scss */ 39519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let ConfidentialitePage = class ConfidentialitePage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    closeModal() {
        this.modalController.dismiss();
    }
};
ConfidentialitePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ConfidentialitePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-confidentialite',
        template: _raw_loader_confidentialite_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_confidentialite_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfidentialitePage);



/***/ }),

/***/ 61245:
/*!*******************************************************!*\
  !*** ./src/app/pages/custom-card/custom-card.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomCardPage": () => (/* binding */ CustomCardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_custom_card_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./custom-card.page.html */ 20518);
/* harmony import */ var _custom_card_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-card.page.scss */ 10462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 60758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);








let CustomCardPage = class CustomCardPage {
    constructor(router, services, modalController, callNumber, navParams) {
        this.router = router;
        this.services = services;
        this.modalController = modalController;
        this.callNumber = callNumber;
        this.navParams = navParams;
        this.notify = {};
        this.profile = {};
        this.notify = this.navParams.get('notify');
        this.profile = this.navParams.get('profile');
    }
    ngOnInit() {
    }
    sendSms() {
        if (this.services.isLoggedIn) {
            this.router.navigateByUrl('/chat', { state: { product: this.notify.product, opner: this.profile } });
        }
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad CustomCardPage');
    }
    cancel() {
        this.modalController.dismiss();
    }
    dialCall() {
        console.log('callPerson', this.notify);
        const called = this.profile.phone.substr(1, this.profile.phone.length);
        this.callNumber.callNumber('0033' + called, true)
            .then(res => {
            console.log('Launched dialer!', res);
            this.modalController.dismiss();
        })
            .catch(err => console.log('Error launching dialer', err));
    }
    SendSms() {
    }
};
CustomCardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__.ApiServices },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__.CallNumber },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams }
];
CustomCardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-custom-card',
        template: _raw_loader_custom_card_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_custom_card_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CustomCardPage);



/***/ }),

/***/ 75995:
/*!***********************************************************!*\
  !*** ./src/app/pages/filters-modal/filters-modal.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersModalPage": () => (/* binding */ FiltersModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_filters_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./filters-modal.page.html */ 85376);
/* harmony import */ var _filters_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters-modal.page.scss */ 1126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);






let FiltersModalPage = class FiltersModalPage {
    constructor(router, zone, navParams, modalController) {
        this.router = router;
        this.zone = zone;
        this.navParams = navParams;
        this.modalController = modalController;
        this.structure = { lower: 15, upper: 30 };
        this.filter = {
            price: false,
            distance: false,
            date: true,
            lat: 0,
            lng: 0,
        };
        this.filter = this.navParams.get('filter');
    }
    ngOnInit() {
    }
    filtred() {
        this.filter.range = this.structure;
        setTimeout(() => {
            this.modalController.dismiss({ filter: this.filter });
        }, 10);
    }
    dismiss() {
        this.modalController.dismiss();
    }
    distanceSelect(e) {
        if (e.target.value) {
            this.zone.run(() => {
                this.filter.date = false;
                this.filter.price = false;
                // console.log(this.filter);
            });
        }
    }
    dateSelect(e) {
        // console.log(e.target.value);
        if (e.target.value) {
            this.zone.run(() => {
                this.filter.distance = false;
                this.filter.price = false;
                // console.log(this.filter);
            });
        }
    }
    priceSelect(e) {
        // console.log(e.target.value);
        if (e.target.value) {
            this.zone.run(() => {
                this.filter.distance = false;
                this.filter.date = false;
                // console.log(this.filter);
            });
        }
    }
};
FiltersModalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
FiltersModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-filters-modal',
        template: _raw_loader_filters_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_filters_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FiltersModalPage);



/***/ }),

/***/ 57429:
/*!*****************************************!*\
  !*** ./src/app/pages/info/info.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPage": () => (/* binding */ InfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./info.page.html */ 24258);
/* harmony import */ var _info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.page.scss */ 84762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let InfoPage = class InfoPage {
    constructor(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    closeModal() {
        this.modalCtrl.dismiss();
    }
};
InfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
InfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-info',
        template: _raw_loader_info_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_info_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InfoPage);



/***/ }),

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 84236);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild(),
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 31021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 28781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_ui_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ui/ui */ 85081);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 51874);










let LoginPage = class LoginPage {
    constructor(router, navParams, formBuilder, services, ui, plt, toastController, device) {
        this.router = router;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.services = services;
        this.ui = ui;
        this.plt = plt;
        this.toastController = toastController;
        this.device = device;
        this.user = {};
        this.showMessagebox = false;
        this.submitReg = false;
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        const emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(emailRegex)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)])]
        });
    }
    userLogin() {
        this.submitReg = true;
        if (this.loginForm.valid) {
            this.ui.loading();
            const deviceData = this.services.device_data;
            setTimeout(() => {
                if (Object.keys(deviceData).length !== 0) {
                    this.user.platform = deviceData.os;
                    this.user.deviceid = deviceData.reg_id;
                }
                this.user.email = this.loginForm.controls.email.value;
                this.user.password = this.loginForm.controls.password.value;
                // else {
                //   console.log('From Login2 ', deviceData);
                //   this.user.platform = 'Browser';
                //   this.user.deviceid = JSON.stringify(Date());
                // }
                console.log(this.user, ' <<< We HAVE THIS USER WANT TO REGISTER');
                this.services.login(this.user).then((res) => {
                    this.ui.unLoading();
                    this.submitReg = false;
                    this.services.isLoggedIn = true;
                    this.services.current_user = res.user;
                    const tokens = {
                        token: res.token,
                        refresh_token: res.refresh_token
                    };
                    localStorage.setItem('onatrouvé_user', JSON.stringify(res.user));
                    localStorage.setItem('onatrouvé_token', JSON.stringify(tokens));
                    // this.events.publish('user_loggedIn', res.user);
                    // this.presentToast('user_loggedIn ' + res?.user?.name);
                    this.router.navigateByUrl('/products');
                }).catch(err => {
                    console.log(err.message);
                    this.submitReg = false;
                    this.services.fireError(err);
                    this.ui.unLoading();
                });
            }, 2000);
        }
    }
    resetPassword() {
        if (this.loginForm.controls.email.valid) {
            this.services.sendResetEmail(this.user.email).subscribe(res => {
                this.submitReg = false;
                this.mailConfirmation.nativeElement.style.top = '0px';
                setTimeout(() => {
                    this.mailConfirmation.nativeElement.style.top = '-200px';
                }, 5000);
            }, (err) => {
                console.log(err);
                this.services.fireError(err);
            });
        }
        else {
            this.submitReg = true;
        }
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 1000
            });
            toast.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavParams },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_3__.ApiServices },
    { type: _services_ui_ui__WEBPACK_IMPORTED_MODULE_2__.UiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_4__.Device }
];
LoginPage.propDecorators = {
    mailConfirmation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['mailConfirmation',] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 76770:
/*!*************************************************!*\
  !*** ./src/app/pages/map/map-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageRoutingModule": () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page */ 69763);




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_0__.MapPage
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapPageRoutingModule);



/***/ }),

/***/ 96016:
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "MapPageModule": () => (/* binding */ MapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-routing.module */ 76770);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page */ 69763);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let MapPageModule = class MapPageModule {
};
MapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            }),
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
        ],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_1__.MapPage]
    })
], MapPageModule);



/***/ }),

/***/ 69763:
/*!***************************************!*\
  !*** ./src/app/pages/map/map.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPage": () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./map.page.html */ 83892);
/* harmony import */ var _map_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page.scss */ 64669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _register_register_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register/register.page */ 66690);
/* harmony import */ var _confidentialite_confidentialite_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../confidentialite/confidentialite.page */ 17639);










let MapPage = class MapPage {
    constructor(router, modalCtrl, navParams, menu, services) {
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.services = services;
        this.showbutton = false;
        this.filtred = [];
        this.focused = false;
        this.autocomplete = false;
        this.regions = [{ title: '- Vide -' }];
        this.chosedRegion = false;
        const self = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(() => {
            jquery__WEBPACK_IMPORTED_MODULE_3__('path').on('click', (event) => {
                jquery__WEBPACK_IMPORTED_MODULE_3__('path').css('fill', '#c4bcb2');
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).css('fill', '#f0b43e');
                this.showbutton = true;
                console.log(this.showbutton);
                setTimeout(() => {
                    // self.router.push(HomePage, {'location': $('path').attr('id')});
                    // this.router.navigateByUrl('/home');
                }, 200);
            });
        });
        this.filtred = this.regions;
    }
    ngOnInit() {
    }
    gotoHome() {
        // this.navCtrl.push(HomePage,{'region':this.address});
        // this.navCtrl.push(HomePage, {'openMenu': true});
        // this.menu.open('first');
        this.router.navigateByUrl('/products');
    }
    filterItems(ev) {
        this.chosedRegion = false;
        const val = ev.target.value;
        const me = this;
        this.filtred = this.regions;
        if (val && val.trim() !== '') {
            console.log('This is The value ', val, ' / ', val.trim());
            this.filtred = this.filtred.filter((item) => item.name.toLowerCase().includes(val.toLowerCase()));
            if (this.filtred.length > 0) {
                this.autocomplete = true;
            }
            else {
                this.autocomplete = false;
            }
            console.log('After-Filter-Search : ', this.filtred);
        }
        else {
            this.autocomplete = false;
        }
    }
    choseRegion(filter) {
        console.log(filter);
        this.address = filter.name;
        this.autocomplete = false;
        this.chosedRegion = true;
        console.log('Chosed Region Here ', this.chosedRegion);
    }
    changePosition($event) {
        this.focused = true;
        this.mainContainer.nativeElement.style.transform = 'translateY(0%)';
        this.mainContainer.nativeElement.style.width = '100%';
        this.logo.nativeElement.style.transform = 'translateX(-50%) rotate(360deg)';
        this.logo.nativeElement.style.width = '0px';
        console.log(this.mainContainer.nativeElement);
    }
    changePositionBlur($event) {
        setTimeout(() => {
            this.focused = false;
            this.mainContainer.nativeElement.style.transform = 'translateY(50%)';
            this.logo.nativeElement.style.transform = 'translateX(-50%)';
            this.logo.nativeElement.style.width = '120px';
            console.log(this.mainContainer.nativeElement);
        }, 10);
    }
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _confidentialite_confidentialite_page__WEBPACK_IMPORTED_MODULE_5__.ConfidentialitePage
            });
            return yield modal.present();
        });
    }
    profileEdit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _register_register_page__WEBPACK_IMPORTED_MODULE_4__.RegisterPage,
                componentProps: {
                    profile: true
                }
            });
            return yield modal.present();
        });
    }
};
MapPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController },
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__.ApiServices }
];
MapPage.propDecorators = {
    mainContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['mainContainer',] }],
    logo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['logo',] }],
    myInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['chat_input',] }]
};
MapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-map',
        template: _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_map_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapPage);



/***/ }),

/***/ 66690:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 84315);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 43436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);
/* harmony import */ var _services_ui_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ui/ui */ 85081);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 51874);
/* harmony import */ var src_app_services_app_config_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app-config/app-config */ 55619);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var src_app_services_storage_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage/storage */ 63762);
/* harmony import */ var _awesome_cordova_plugins_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/firebase-x/ngx */ 53849);














let RegisterPage = class RegisterPage {
    constructor(router, navParams, formBuilder, services, ui, modalController, 
    // private events: Events,
    appConfig, plt, translate, storage, zone, device, firebase) {
        var _a;
        this.router = router;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.services = services;
        this.ui = ui;
        this.modalController = modalController;
        this.appConfig = appConfig;
        this.plt = plt;
        this.translate = translate;
        this.storage = storage;
        this.zone = zone;
        this.device = device;
        this.firebase = firebase;
        this.submitReg = false;
        this.isProfile = false;
        this.showpassword = false;
        this.user = {};
        this.userSettings = {
            language: this.appConfig.userSettings.language,
        };
        this.isProfile = ((_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.profile) ? true : false;
        console.log(this.isProfile);
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](\d{2}){4}$/g;
        const emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (this.isProfile) {
            this.user = this.services.current_user;
            console.log(this.user);
            this.addReginForm = formBuilder.group({
                name: [
                    '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(3)])
                ],
                last_name: [
                    '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(3)])
                ],
                email: [
                    '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(emailRegex)
                    ])
                ],
                // phone: [
                //   '',
                //   Validators.compose([Validators.required, Validators.pattern(phoneRegex)
                //   ])
                // ]
            });
        }
        else {
            this.addReginForm = this.formBuilder.group({
                name: [
                    '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(3)])
                ],
                last_name: [
                    '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(3)])
                ],
                email: [
                    '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(emailRegex)
                    ])
                ],
                phone: [
                    ''
                ],
                password: [
                    '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(8)])
                ],
                vpassword: [
                    '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(8)])
                ]
            }, { validator: this.checkIfMatchingPasswords('password', 'vpassword') });
        }
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
    cahngepasswordView() {
        this.showpassword = !this.showpassword;
        console.log(this.showpassword);
    }
    userDataSubmit() {
        this.submitReg = true;
        console.log(this.addReginForm.valid);
        if (this.addReginForm.valid) {
            if (this.isProfile) {
                this.user.id = this.services.current_user.id;
                delete this.user.password;
            }
            // this.ui.loading();
            const deviceData = JSON.parse(localStorage.getItem('deviceData'));
            if (deviceData) {
                this.user.platform = deviceData.os;
                this.user.deviceid = deviceData.reg_id;
                this.submitRegistration();
            }
            else {
                this.firebase.getToken()
                    .then(token => {
                    const deviceData = {
                        reg_id: token,
                        os: this.device.platform
                    };
                    this.services.device_data = deviceData;
                    localStorage.setItem('deviceData', JSON.stringify(deviceData));
                    this.user.platform = deviceData.os;
                    this.user.deviceid = deviceData.reg_id;
                }).finally(() => {
                    this.submitRegistration();
                })
                    .catch(error => console.error('Error getting token', error));
            }
            console.log(this.user, ' <<< We HAVE THIS USER WANT TO REGISTER');
        }
    }
    submitRegistration() {
        this.services.register(this.user).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // this.ui.unLoading();
            this.submitReg = false;
            if (!this.isProfile) {
                this.services.isLoggedIn = true;
                this.services.current_user = res.user;
                const tokens = {
                    token: res.token,
                    refresh_token: res.refresh_token
                };
                localStorage.setItem("com.onatrouve-regId", (res.registrationId));
                let deviceData = {
                    reg_id: res.registrationId,
                    os: this.device.platform
                };
                this.services.device_data = deviceData;
                localStorage.setItem('deviceData', JSON.stringify(deviceData));
                localStorage.setItem('onatrouvé_user', JSON.stringify(res.user));
                localStorage.setItem('onatrouvé_token', JSON.stringify(tokens));
                this.router.navigateByUrl('/products');
            }
            else {
                console.log("update");
            }
        }), err => {
            console.log(err.message);
            this.submitReg = false;
            this.services.fireError(err);
            // this.ui.unLoading();
        });
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    ngOnInit() {
    }
    changeDirection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const userSettings = yield this.storage.get('userSettings');
            if (userSettings) {
                this.appConfig.userSettings = userSettings;
            }
            if (this.appConfig.userSettings.language === 'ar') {
                document.documentElement.dir = 'rtl';
            }
            else {
                document.documentElement.dir = 'ltr';
            }
            this.translate.use(this.appConfig.userSettings.language);
            // this.events.publish('languageChange', true);
        });
    }
    changeLanguage(lang) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.appConfig.userSettings);
            this.zone.run(() => {
                this.appConfig.userSettings.language = lang;
            });
            console.log('UserSettinrg', this.appConfig.userSettings);
            yield this.storage.set('userSettings', this.appConfig.userSettings);
            this.changeDirection();
        });
    }
    ionViewDidLeave() {
        this.storage.set('userSettings', this.userSettings);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavParams },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__.ApiServices },
    { type: _services_ui_ui__WEBPACK_IMPORTED_MODULE_3__.UiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_services_app_config_app_config__WEBPACK_IMPORTED_MODULE_5__.AppConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: src_app_services_storage_storage__WEBPACK_IMPORTED_MODULE_6__.StorageService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone },
    { type: _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_4__.Device },
    { type: _awesome_cordova_plugins_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_7__.FirebaseX }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 41902:
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./settings.page.html */ 56909);
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss */ 55479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_storage_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/storage/storage */ 63762);
/* harmony import */ var _services_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app-config/app-config */ 55619);








let SettingsPage = class SettingsPage {
    constructor(translate, platform, appConfig, storage, zone) {
        this.translate = translate;
        this.platform = platform;
        this.appConfig = appConfig;
        this.storage = storage;
        this.zone = zone;
        this.userSettings = {
            language: this.appConfig.userSettings.language,
        };
        this.user = {};
        console.log(this.userSettings.language = this.appConfig.userSettings.language);
    }
    ngOnInit() {
    }
    changeDirection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const userSettings = yield this.storage.get('userSettings');
            if (userSettings) {
                this.appConfig.userSettings = userSettings;
            }
            if (this.appConfig.userSettings.language === 'ar') {
                document.documentElement.dir = 'rtl';
            }
            else {
                document.documentElement.dir = 'ltr';
            }
            console.log('UsedLanguage', this.appConfig.userSettings.language);
            this.translate.use(this.appConfig.userSettings.language);
            console.log(this.translate);
            // this.events.publish('languageChange', true);
        });
    }
    changeLanguage(lang) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.appConfig.userSettings);
            this.zone.run(() => {
                this.appConfig.userSettings.language = lang;
                console.log(this.appConfig.userSettings.language);
            });
            console.log('UserSettinrg', this.appConfig.userSettings);
            yield this.storage.set('userSettings', this.appConfig.userSettings);
            this.changeDirection();
        });
    }
    ionViewDidLeave() {
        this.storage.set('userSettings', this.userSettings);
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _services_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__.AppConfigService },
    { type: _services_storage_storage__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SettingsPage);



/***/ }),

/***/ 61939:
/*!*************************************************************!*\
  !*** ./src/app/pages/sub-categories/sub-categories.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubCategoriesPage": () => (/* binding */ SubCategoriesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sub_categories_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sub-categories.page.html */ 12416);
/* harmony import */ var _sub_categories_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-categories.page.scss */ 3823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let SubCategoriesPage = class SubCategoriesPage {
    constructor(navCtrl, navParams, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalController = modalController;
        this.subcategories = [];
        this.subcategories = this.navParams.get('subcategories');
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SubCategoriesPage');
    }
    dismiss(subcategories) {
        this.modalController.dismiss({ link: subcategories });
    }
    closeView() {
        this.modalController.dismiss({ link: false });
    }
    ngOnInit() {
    }
};
SubCategoriesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
SubCategoriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sub-categories',
        template: _raw_loader_sub_categories_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sub_categories_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SubCategoriesPage);



/***/ }),

/***/ 99290:
/*!**************************************************!*\
  !*** ./src/app/pipes/date-format/date-format.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateFormatPipe": () => (/* binding */ DateFormatPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 30331);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 92707);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 94513);



let DateFormatPipe = class DateFormatPipe {
    transform(date, dFormat = 'dd-MM-yyyy') {
        const newDate = typeof (date) == 'string' ? (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(date) : date;
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(newDate), dFormat);
    }
};
DateFormatPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Pipe)({
        name: 'dateFormat',
    })
], DateFormatPipe);



/***/ }),

/***/ 12223:
/*!******************************************************!*\
  !*** ./src/app/pipes/group-by-days/group-by-days.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupByDaysPipe": () => (/* binding */ GroupByDaysPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _date_format_date_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-format/date-format */ 99290);
var GroupByDaysPipe_1;



let GroupByDaysPipe = GroupByDaysPipe_1 = class GroupByDaysPipe {
    constructor() {
        this.dateFormat = new _date_format_date_format__WEBPACK_IMPORTED_MODULE_0__.DateFormatPipe;
    }
    transform(collection, term) {
        let newValue = [];
        for (let i = 0; i < collection.length; i++) {
            let keyVal = GroupByDaysPipe_1.deepFind(collection[i], term);
            keyVal = this.formatedDate(keyVal);
            const index = newValue.findIndex(myObj => myObj.key == keyVal);
            if (index >= 0) {
                newValue[index].value.push(collection[i]);
            }
            else {
                newValue.push({ key: keyVal, value: [collection[i]] });
            }
        }
        return newValue;
    }
    formatedDate(date) {
        return this.dateFormat.transform(date, 'dd-MM-yyyy');
    }
    fixDate(date) {
        if (typeof (date) == 'string') {
            return new Date(date.replace(/-/g, '/'));
        }
        else {
            return date;
        }
    }
    static deepFind(obj, path) {
        var paths = path.toString().split(/[\.\[\]]/);
        var current = obj;
        for (let i = 0; i < paths.length; ++i) {
            if (paths[i] !== '') {
                if (current[paths[i]] == undefined) {
                    return undefined;
                }
                else {
                    current = current[paths[i]];
                }
            }
        }
        return current;
    }
};
GroupByDaysPipe = GroupByDaysPipe_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'groupByDays',
    })
], GroupByDaysPipe);



/***/ }),

/***/ 35503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _group_by_days_group_by_days__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-by-days/group-by-days */ 12223);
/* harmony import */ var _date_format_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-format/date-format */ 99290);




let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_group_by_days_group_by_days__WEBPACK_IMPORTED_MODULE_0__.GroupByDaysPipe,
            _date_format_date_format__WEBPACK_IMPORTED_MODULE_1__.DateFormatPipe],
        imports: [],
        exports: [_group_by_days_group_by_days__WEBPACK_IMPORTED_MODULE_0__.GroupByDaysPipe,
            _date_format_date_format__WEBPACK_IMPORTED_MODULE_1__.DateFormatPipe]
    })
], PipesModule);



/***/ }),

/***/ 83187:
/*!**********************************************!*\
  !*** ./src/app/pipes/time-ago-pipe/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeAgoPipeModule": () => (/* binding */ TimeAgoPipeModule),
/* harmony export */   "TimeAgoPipe": () => (/* reexport safe */ _time_ago_pipe__WEBPACK_IMPORTED_MODULE_0__.TimeAgoPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time-ago-pipe */ 23663);



let TimeAgoPipeModule = class TimeAgoPipeModule {
};
TimeAgoPipeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_time_ago_pipe__WEBPACK_IMPORTED_MODULE_0__.TimeAgoPipe],
        exports: [_time_ago_pipe__WEBPACK_IMPORTED_MODULE_0__.TimeAgoPipe],
    })
], TimeAgoPipeModule);




/***/ }),

/***/ 23663:
/*!******************************************************!*\
  !*** ./src/app/pipes/time-ago-pipe/time-ago-pipe.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeAgoPipe": () => (/* binding */ TimeAgoPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 94513);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 30331);
/* harmony import */ var _services_app_config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/app-config/app-config */ 55619);




let TimeAgoPipe = class TimeAgoPipe {
    constructor(changeDetectorRef, appconfig, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.appconfig = appconfig;
        this.ngZone = ngZone;
    }
    transform(value, langue = 'en') {
        langue = this.appconfig.userSettings.language;
        this.removeTimer();
        const d = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(value));
        const now = new Date();
        const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        const timeToUpdate = this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(() => {
            if (typeof window !== 'undefined') {
                return window.setTimeout(() => {
                    this.ngZone.run(() => this.changeDetectorRef.markForCheck());
                }, timeToUpdate);
            }
            return null;
        });
        const minutes = Math.round(Math.abs(seconds / 60));
        const hours = Math.round(Math.abs(minutes / 60));
        const days = Math.round(Math.abs(hours / 24));
        const months = Math.round(Math.abs(days / 30.416));
        const years = Math.round(Math.abs(days / 365));
        if (seconds <= 45) {
            switch (langue) {
                case 'ar':
                    return 'منذ ثوان';
                case 'en':
                    return 'sec(s)';
                case 'fr':
                    return 'sec(s)';
            }
        }
        else if (seconds <= 90) {
            switch (langue) {
                case 'ar':
                    return 'منذ دقيقة';
                case 'en':
                    return '1 min';
                case 'fr':
                    return '1 min';
            }
        }
        else if (minutes <= 45) {
            switch (langue) {
                case 'ar':
                    return 'منذ ' + minutes + ' دقائق';
                default:
                    return minutes + 'min';
            }
        }
        else if (minutes <= 90) {
            switch (langue) {
                case 'ar':
                    return 'منذ ساعة';
                case 'en':
                    return '1 h';
                case 'fr':
                    return '1 h';
            }
        }
        else if (hours <= 22) {
            switch (langue) {
                case 'ar':
                    return 'منذ ' + hours + ' ساعات';
                case 'en':
                    return hours + ' h';
                case 'fr':
                    return hours + ' h';
            }
        }
        else if (hours <= 36) {
            switch (langue) {
                case 'ar':
                    return 'منذ يوم';
                case 'en':
                    return '1 day';
                case 'fr':
                    return '1 jour';
            }
        }
        else if (days <= 25) {
            switch (langue) {
                case 'ar':
                    return days + ' يوم';
                case 'en':
                    return days + ' days';
                case 'fr':
                    return days + ' jours';
            }
        }
        else if (days <= 45) {
            switch (langue) {
                case 'ar':
                    return 'شهر';
                case 'en':
                    return '1 month';
                case 'fr':
                    return '1 mois';
            }
        }
        else if (days <= 345) {
            switch (langue) {
                case 'ar':
                    return months + ' أشهر';
                case 'en':
                    return months + ' months';
                case 'fr':
                    return months + ' mois';
            }
        }
        else if (days <= 545) {
            switch (langue) {
                case 'ar':
                    return '1 سنة';
                case 'en':
                    return '1 year';
                case 'fr':
                    return '1 ans';
            }
        }
        else {
            // (days > 545)
            switch (langue) {
                case 'ar':
                    return years + ' سنة';
                case 'en':
                    return years + ' years';
                case 'fr':
                    return years + ' ans';
            }
        }
    }
    ngOnDestroy() {
        this.removeTimer();
    }
    removeTimer() {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }
    getSecondsUntilUpdate(seconds) {
        const min = 60;
        const hr = min * 60;
        const day = hr * 24;
        if (seconds < min) { // less than 1 min, update ever 2 secs
            return 2;
        }
        else if (seconds < hr) { // less than an hour, update every 30 secs
            return 30;
        }
        else if (seconds < day) { // less then a day, update every 5 mins
            return 300;
        }
        else { // update every hour
            return 3600;
        }
    }
};
TimeAgoPipe.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef },
    { type: _services_app_config_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfigService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone }
];
TimeAgoPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Pipe)({
        name: 'timeAgo',
        pure: false
    })
], TimeAgoPipe);



/***/ }),

/***/ 92844:
/*!*******************************************************!*\
  !*** ./src/app/services/api-services/api-services.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiServices": () => (/* binding */ ApiServices)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-config/app-config */ 55619);
/* harmony import */ var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/file-transfer/ngx */ 50806);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/ui */ 85081);
/* harmony import */ var _http_helper_http_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-helper/http-helper */ 42516);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 33493);











let ApiServices = class ApiServices {
    constructor(http, ui, config, transfer, file, platform, 
    // private backgroundGeolocation: BackgroundGeolocation,
    geolocation, httpHelper) {
        this.http = http;
        this.ui = ui;
        this.config = config;
        this.transfer = transfer;
        this.file = file;
        this.platform = platform;
        this.geolocation = geolocation;
        this.httpHelper = httpHelper;
        this.current_position = {};
        this.isLoggedIn = false;
        this.current_user = null;
        this.counts_products = 0;
        this.device_data = {};
    }
    sendGpsToApi(location, suivis) {
        console.log(location, suivis);
        return new Promise((resolve, reject) => {
            this.httpHelper.request('post', 'http://192.168.1.29:3003/geolocation', Object.assign(Object.assign({}, location), { 
                // eslint-disable-next-line @typescript-eslint/naming-convention
                targets_ids: suivis })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((data) => {
                resolve(data);
            }, (error) => {
                reject(error);
            }));
        });
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getRegions() {
        return this.http.get(this.config.API + '/regions').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(data => data, error => {
            throw error;
        }));
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getuserByID(user_id) {
        this.ui.loading();
        return new Promise((resolve, reject) => {
            this.http.get(this.config.API + '/getuser/' + user_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((data) => {
                this.ui.unLoading();
                resolve(data);
            }, (error) => {
                this.ui.unLoading();
                reject(error);
            }));
        });
    }
    addvisitors(product_id) {
        return this.httpHelper.request('post', this.config.API + '/visitors', { product_id }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((data) => {
            this.ui.unLoading();
            //    console.log('Visitors ', data);
            return data;
        }));
    }
    uploadAudio(filepath, productId) {
        const fileTransfer = this.transfer.create();
        const options = {
            fileKey: 'voiceRecorder',
            mimeType: 'audio/mp3',
            httpMethod: 'post',
            chunkedMode: false,
            headers: { 'content-type': undefined },
            params: { productId }
        };
        fileTransfer.abort();
        return fileTransfer.upload(filepath, this.config.API + '/uploadAudio', options, true)
            .then((data) => {
            //  console.log('Success Upload : ', data);
            return data;
        }, err => {
            console.log('Error Upload : ', err);
            this.ui.toast('Erreur : Audio Upload ');
        });
    }
    getCategories() {
        // return new Promise((resolve, reject) => {
        return this.http.get(this.config.API + '/categories').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((data) => {
            return data;
        }, error => {
            throw (error);
        }));
    }
    getProperties(categoryId) {
        return new Promise((resolve, reject) => {
            this.httpHelper.request('get', this.config.API + '/properies/' + categoryId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((data) => {
                resolve(data);
            }, (error) => {
                reject(error);
            }));
        });
    }
    getCurrentLocation(noloding) {
        if (!noloding) {
            this.ui.loading();
        }
        const options = {
            enableHighAccuracy: true,
            timeout: 5000
        };
        return this.geolocation.getCurrentPosition(options).then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            // console.log(resp);
            // console.log('This Wat Must Be In The details', resp);
            if (!noloding) {
                this.ui.unLoading();
            }
            return resp;
        }, error => {
            this.ui.toast('errors.loaction', error);
            if (!noloding) {
                this.ui.unLoading();
            }
            console.log('Error getting location', error);
        });
    }
    register(userInfo) {
        return this.http.post(this.config.API + '/register', Object.assign({}, userInfo)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((data) => {
            return data;
        }, (error) => {
            console.error(error);
        }));
    }
    login(userInfo) {
        return new Promise((resolve, reject) => {
            // console.log(userInfo);
            this.http.post(this.config.API + '/login', Object.assign({}, userInfo)).subscribe((data) => {
                // console.log(data);
                resolve(data);
            }, (error) => {
                console.log(error);
                reject(error);
            });
        });
    }
    fireError(err) {
        console.log(err);
        if (err.errors) {
            let messageArray = '';
            // eslint-disable-next-line guard-for-in
            for (const element in err.errors) {
                console.log(err.errors[element][0]);
                messageArray = messageArray + (err.errors[element][0] + '/n');
            }
            this.ui.toast(messageArray, '', '', null, 5000);
        }
        else if (err.error) {
            this.ui.toast(err.error, '', '', null, 5000);
        }
        else {
            this.ui.toast('Une erreur est survenue', '', '', null, 5000);
        }
    }
    addrates(product_id, rates) {
        return this.httpHelper.request('post', this.config.API + '/rates', {
            product_id,
            rates
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((data) => {
            this.ui.unLoading();
            // console.log('Rates ', data);
            return data;
        }, (error) => {
            console.log(error);
        }));
    }
    sendMesages(discussion_id, message, reciever) {
        this.ui.loading();
        //   console.log('Here wat You Send', discussion_id, message);
        return new Promise((resolve, reject) => {
            this.httpHelper.request('post', this.config.API + '/savediscussion', {
                discussion_id,
                message,
                reciever
            }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((data) => {
                this.ui.unLoading();
                resolve(data);
            }, (error) => {
                this.ui.unLoading();
                reject(error);
            }));
        });
    }
    sendNotification(reciever, message) {
        this.ui.loading();
        //  console.log('Here wat You Send Notification to ', reciever, ':', message);
        return new Promise((resolve, reject) => {
            this.httpHelper.request('post', this.config.API + '/sendNotification', {
                receiver: reciever,
                message
            }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((data) => {
                this.ui.unLoading();
                resolve(data);
            }, (error) => {
                this.ui.unLoading();
                reject(error);
            }));
        });
    }
    logout() {
        this.ui.loading();
        return new Promise((resolve, reject) => {
            console.log(this.device_data);
            let device_data = this.device_data;
            this.isLoggedIn = false;
            setTimeout(() => {
                localStorage.clear();
            }, 100);
            console.log('Here wat You Send Notification to ', device_data);
            this.httpHelper.request('post', this.config.API + '/logout', { "deviceid": device_data.reg_id }).subscribe((data) => {
                this.ui.unLoading();
                resolve(data);
            }, (error) => {
                this.ui.unLoading();
                reject(error);
            });
        });
    }
    sendResetEmail(email) {
        this.ui.loading();
        return this.httpHelper.request('post', this.config.API + '/mail', { email }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((data) => {
            this.ui.unLoading();
            return data;
        }, (error) => {
            this.ui.unLoading();
            const error_mail = JSON.stringify(error, ['status', 'arguments', 'type', 'name']);
            const error_status = JSON.parse(error_mail).status;
            console.log(error_status);
            if (error_status == 0) {
                throw true;
            }
            else {
                throw error;
            }
        }));
    }
    changepassword(token, password) {
        this.ui.loading();
        return new Promise((resolve, reject) => {
            this.httpHelper.request('post', this.config.API + '/reset/password', {
                token,
                password
            }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((data) => {
                this.ui.unLoading();
                resolve(data);
            }, (error) => {
                this.ui.unLoading();
                reject(error);
            }));
        });
    }
};
ApiServices.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ui_ui__WEBPACK_IMPORTED_MODULE_3__.UiService },
    { type: _app_config_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfigService },
    { type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_1__.FileTransfer },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_2__.File },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation },
    { type: _http_helper_http_helper__WEBPACK_IMPORTED_MODULE_4__.HttpHelperService }
];
ApiServices = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({ providedIn: 'root' })
], ApiServices);



/***/ }),

/***/ 55619:
/*!***************************************************!*\
  !*** ./src/app/services/app-config/app-config.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfigService": () => (/* binding */ AppConfigService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


const localUrl = 'dev.trouve.192.168.1.48.xip.io';
const prodUrl = 'vps-6496d4c1.vps.ovh.net';
const local = 'localhost:8000';
let AppConfigService = class AppConfigService {
    constructor() {
        this.appPrefix = 'onatrouve';
        this.appPrefixes = {
            app: 'onatrouve',
            settings: 'userSettings',
            user: 'currentUser',
            token: 'token',
            deviceId: 'deviceId'
        };
        this.currentUrl = prodUrl;
        this.CONFIG = {
            apiUrl: `http://${this.currentUrl}/api`,
            baseAPI: `http://${this.currentUrl}`,
        };
        this.API = this.CONFIG.apiUrl;
        this.BASE_API = this.CONFIG.baseAPI;
        this.CHAT_URL = this.CONFIG.chatUrl;
        this.userSettings = { language: null, country: null };
        this.userSettings.language = 'fr';
    }
    getTwoCharLang() {
        return navigator.language ? navigator.language.substr(0, 2) : 'fr';
    }
    getLang() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return this.userSettings.language;
        });
    }
};
AppConfigService.ctorParameters = () => [];
AppConfigService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: 'root' })
], AppConfigService);



/***/ }),

/***/ 44073:
/*!*******************************************************!*\
  !*** ./src/app/services/auth-service/auth-service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthServiceService": () => (/* binding */ AuthServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui */ 85081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ 16137);
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage */ 63762);
/* harmony import */ var _http_helper_http_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-helper/http-helper */ 42516);
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-config/app-config */ 55619);
/* harmony import */ var _awesome_cordova_plugins_device__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/device */ 41070);








let AuthServiceService = class AuthServiceService {
    constructor(httpHelper, appConfig, uI, device, storage) {
        this.httpHelper = httpHelper;
        this.appConfig = appConfig;
        this.uI = uI;
        this.device = device;
        this.storage = storage;
        this.user = null;
        this.role = null;
        this.isAuthenticated = false;
        this.aPI = this.appConfig.API;
        this.baseAPI = this.appConfig.BASE_API;
        this.deviceIdPrefix = this.appConfig.appPrefixes.deviceId;
        this.currentUserPrefix = this.appConfig.appPrefixes.user;
        this.tokenPrefix = this.appConfig.appPrefixes.token;
        // this.appConfig.translate.onLangChange.subscribe((event)=> {
        //   if (this.isAuthenticated) {
        //     this.setSettings({language: event.lang})
        //   }
        // })
        this.loadUserCredentials();
    }
    loadUserCredentials() {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const token = yield this.storage.get(this.tokenPrefix);
            const currentUser = yield this.storage.get(this.currentUserPrefix);
            if (token && currentUser) {
                this.useCredentials(token, currentUser);
                resolve(currentUser);
            }
        }));
    }
    storeUserCredentials(token, currentUser) {
        //if (user.remember){
        this.storage.set(this.tokenPrefix, token);
        this.storage.set(this.currentUserPrefix, currentUser);
        //}
        this.useCredentials(token, currentUser);
    }
    storeUser(currentUser) {
        this.storage.set(this.currentUserPrefix, currentUser);
        this.user = currentUser;
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.user) {
                return this.user;
            }
            else {
                return yield this.storage.get(this.currentUserPrefix);
            }
        });
    }
    setUser(user) {
        this.user = user;
        this.storage.set(this.currentUserPrefix, user);
    }
    useCredentials(token, currentUser) {
        console.log('i use the creadentials');
        this.isAuthenticated = true;
        this.authToken = token;
        this.user = currentUser;
        this.role = currentUser.role;
        console.log(this.user);
        setTimeout(() => {
            // this.events.publish('onLogin');
        }, 100);
    }
    destroyUserCredentials() {
        return new Promise((resolve) => {
            this.authToken = undefined;
            this.isAuthenticated = false;
            this.storage.remove(this.currentUserPrefix);
            this.storage.remove(this.tokenPrefix);
            // this.storage.remove('userSettings');
            this.user = null;
            resolve(true);
        });
    }
    getDeviceInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const deviceId = this.deviceId || (yield this.storage.get(this.deviceIdPrefix));
            return {
                platform: this.device.platform,
                model: this.device.model,
                version: this.device.version,
                manufacturer: this.device.manufacturer,
                deviceId
            };
        });
    }
    registerDevice(deviceId) {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const data = {
                deviceId
            };
            this.httpHelper.request('post', '/devices', data).subscribe();
        }));
    }
    register(user, type) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.uI.loading();
            // let deviceId = await this.storage.get('deviceId');
            const settings = this.appConfig.userSettings.country ? this.appConfig.userSettings : yield this.storage.get('userSettings');
            const data = Object.assign(Object.assign(Object.assign({}, user), yield this.getDeviceInfo()), { settings });
            this.httpHelper.request('post', `/register/${type}`, data).subscribe((response) => {
                this.uI.unLoading();
                const resp = response;
                this.storeUserCredentials(resp.token, resp.user);
                resolve(resp);
            }, err => {
                this.uI.fireError(err);
                reject(err);
            });
        }));
    }
    login(user) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.uI.loading();
            // let deviceId = await this.storage.get('deviceId');
            const settings = this.appConfig.userSettings.country ? this.appConfig.userSettings : yield this.storage.get('userSettings');
            const data = Object.assign(Object.assign(Object.assign({}, user), yield this.getDeviceInfo()), { settings });
            this.httpHelper.request('post', '/login', data).subscribe(response => {
                this.uI.unLoading();
                const resp = response;
                this.storeUserCredentials(resp.token, resp.user);
                this.uI.fireSuccess('login.success');
                resolve(resp);
            }, err => {
                this.uI.fireError(err);
                reject(err);
            });
        }));
    }
    updateProfile(user, type) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const settings = this.appConfig.userSettings.country ? this.appConfig.userSettings : yield this.storage.get('userSettings');
            const data = Object.assign(Object.assign(Object.assign({}, user), yield this.getDeviceInfo()), { settings });
            this.uI.loading();
            this.httpHelper.request('post', `/register/${type}`, data).subscribe((response) => {
                this.uI.unLoading();
                const userResponse = response;
                this.storeUser(userResponse);
                resolve(userResponse);
            }, err => {
                this.uI.fireError(err);
                reject(err);
            });
        }));
    }
    forgotRequest(email) {
        return new Promise((resolve) => {
            this.uI.loading();
            this.httpHelper.request('post', '/forgot', { email }).subscribe(res => {
                this.uI.unLoading();
                resolve(res);
            }, err => this.uI.fireError(err));
        });
    }
    resetPassword(password, token) {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const data = Object.assign(Object.assign({ password, password_confirmation: password }, yield this.getDeviceInfo()), { token });
            this.uI.loading();
            return this.httpHelper.request('post', '/reset', data).subscribe(res => {
                this.uI.unLoading();
                const resp = res;
                this.storeUserCredentials(resp.token, resp.user);
                this.uI.fireSuccess('login.success');
                resolve(resp);
            }, err => this.uI.fireError(err));
        }));
    }
    logout() {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.uI.loading();
            this.httpHelper.request('post', '/logout', Object.assign({}, yield this.getDeviceInfo())).subscribe(res => {
                this.uI.unLoading();
                this.destroyUserCredentials();
                resolve(res);
            }, err => this.uI.fireError(err));
        }));
    }
};
AuthServiceService.ctorParameters = () => [
    { type: _http_helper_http_helper__WEBPACK_IMPORTED_MODULE_3__.HttpHelperService },
    { type: _app_config_app_config__WEBPACK_IMPORTED_MODULE_4__.AppConfigService },
    { type: _ui_ui__WEBPACK_IMPORTED_MODULE_0__.UiService },
    { type: _awesome_cordova_plugins_device__WEBPACK_IMPORTED_MODULE_5__.Device },
    { type: _storage_storage__WEBPACK_IMPORTED_MODULE_2__.StorageService }
];
AuthServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({ providedIn: 'root' })
], AuthServiceService);



/***/ }),

/***/ 17516:
/*!*********************************************************!*\
  !*** ./src/app/services/badge-service/badge.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeService": () => (/* binding */ BadgeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 26215);



let BadgeService = class BadgeService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.messageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.resetmessageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.resetSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.suiviSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.insideChatSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    }
    sendBadgeProductNumber(number) {
        this.subject.next(number);
    }
    sendBadgeMessageNumber(number) {
        this.messageSubject.next(number);
    }
    sendSuivisNotificationId(number) {
        this.suiviSubject.next(number);
        console.log(number);
        console.log(this.suiviSubject.next(number));
    }
    insideChat(response) {
        this.insideChatSubject.next(response);
    }
    clearBadges() {
        this.subject.next();
        this.resetSubject.next();
    }
    clearBadgesMessage() {
        this.messageSubject.next();
        this.resetmessageSubject.next();
    }
    resetBadgeMessage() {
        return this.resetmessageSubject.asObservable();
    }
    resetBadgeProduct() {
        return this.resetSubject.asObservable();
    }
    getNumber() {
        return this.subject.asObservable();
    }
    getNumberMessage() {
        return this.messageSubject.asObservable();
    }
    getinsidechat() {
        return this.insideChatSubject.asObservable();
    }
    getSuiviNotif() {
        return this.suiviSubject.asObservable();
    }
};
BadgeService.ctorParameters = () => [];
BadgeService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], BadgeService);



/***/ }),

/***/ 82289:
/*!*******************************************!*\
  !*** ./src/app/services/camera/camera.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraProvider": () => (/* binding */ CameraProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _awesome_cordova_plugins_image_picker_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/image-picker/ngx */ 20433);





let CameraProvider = class CameraProvider {
    constructor(platform, imagePicker, 
    // public events: EventTarget,
    camera) {
        this.platform = platform;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.optionsPicker = {
            //quality: 100, 
            maximumImagesCount: 8
        };
    }
    fromCamera() {
        return new Promise((resolve, reject) => {
            const options = {
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.CAMERA,
                encodingType: this.camera.EncodingType.JPEG,
                quality: 50,
                targetWidth: 500,
                correctOrientation: true
            };
            this.platform.ready().then(() => {
                this.camera.getPicture(options).then((imageData) => {
                    let base64Image = 'data:image/jpeg;base64,' + imageData;
                    // this.events.publish('image:success', base64Image);
                    resolve(base64Image);
                }, (err) => {
                    reject(err);
                    console.log('err get image : ', err);
                });
            });
        });
    }
    fromGalley() {
        return new Promise((resolve, reject) => {
            const options = {
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                encodingType: this.camera.EncodingType.JPEG,
                quality: 50,
                targetWidth: 500,
                correctOrientation: true,
            };
            this.platform.ready().then(() => {
                this.camera.getPicture(options).then((imageData) => {
                    let base64Image = 'data:image/jpeg;base64,' + imageData;
                    // this.events.publish('image:success', base64Image);
                    resolve(base64Image);
                }, (err) => {
                    reject(err);
                    console.log('err get image : ', err);
                    // Handle error
                });
            });
        });
    }
};
CameraProvider.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform },
    { type: _awesome_cordova_plugins_image_picker_ngx__WEBPACK_IMPORTED_MODULE_1__.ImagePicker },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_0__.Camera }
];
CameraProvider = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: 'root' })
], CameraProvider);



/***/ }),

/***/ 42516:
/*!*****************************************************!*\
  !*** ./src/app/services/http-helper/http-helper.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpHelperService": () => (/* binding */ HttpHelperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _jwt_helper_jwt_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jwt-helper/jwt-helper */ 54967);
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-config/app-config */ 55619);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);







let HttpHelperService = class HttpHelperService {
    constructor(http, appSettings, jwt) {
        this.http = http;
        this.appSettings = appSettings;
        this.jwt = jwt;
    }
    request(method, url, data, options) {
        const tokens = JSON.parse(localStorage.getItem('onatrouvé_token'));
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        headers.set('Content-Type', 'application/json');
        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Accept': 'application/json'
        });
        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Content-Type': 'application/json'
        });
        options = ({ headers });
        if (tokens) {
            if (tokens.token) {
                headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                    'Authorization': 'Bearer ' + tokens.token
                });
                // headers.set('Authorization', 'Bearer ' + tokens.token);
                options = ({ headers });
                if (this.jwt.isTokenExpired(tokens.token)) {
                    console.log('isTokenExpired = true', options);
                    return this.refreshToken(tokens, options)
                        .subscribe((options) => this.methods(method, url, data, options));
                }
                else {
                    return this.methods(method, url, data, options);
                }
            }
            else {
                return this.methods(method, url, data, options);
            }
        }
        else {
            return this.methods(method, url, data, options);
        }
    }
    methods(method, url, params, options) {
        method = method.toLowerCase();
        if (url[0] === '/') {
            url = this.appSettings.API + url;
        }
        // return this.http.options(url, {method, params, ...options})
        if (method === 'get' || method === 'delete') {
            return this.http[method](url, options);
        }
        else {
            return this.http[method](url, params, options);
        }
    }
    refreshToken(tokens, options) {
        return this.http.post(this.appSettings.API + '/token/refresh', { refresh_token: tokens.token }, options)
            .map((response) => {
            console.log(response);
            const resp = response;
            const token = {
                token: resp.token,
                refresh_token: resp.token
            };
            localStorage.setItem('onatrouvé_token', JSON.stringify(token));
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + tokens.token);
            headers.append('Accept', 'application/json');
            return options = ({ headers });
        }, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
            console.log(error);
            // this.events.publish('sessionExpired', error);
            return rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable.throw('refreshTokenError');
        }));
    }
};
HttpHelperService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _app_config_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfigService },
    { type: _jwt_helper_jwt_helper__WEBPACK_IMPORTED_MODULE_0__.JwtHelperProvider }
];
HttpHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({ providedIn: 'root' })
], HttpHelperService);



/***/ }),

/***/ 54967:
/*!***************************************************!*\
  !*** ./src/app/services/jwt-helper/jwt-helper.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtHelperProvider": () => (/* binding */ JwtHelperProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let JwtHelperProvider = class JwtHelperProvider {
    constructor() {
    }
    getTokenExpirationDate(token) {
        const decoded = this.decodeToken(token);
        if (!decoded.hasOwnProperty('exp')) {
            return null;
        }
        const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
        date.setUTCSeconds(decoded.exp);
        return date;
    }
    isTokenExpired(token, offsetSeconds) {
        const date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date == null) {
            return false;
        }
        // Token expired?
        return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    }
    urlBase64Decode(str) {
        let output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += '==';
                break;
            }
            case 3: {
                output += '=';
                break;
            }
            default: {
                throw 'Illegal base64url string!';
            }
        }
        return this.b64DecodeUnicode(output);
    }
    decodeToken(token) {
        const parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }
        const decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    }
    // credits for decoder goes to https://github.com/atk
    b64decode(str) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        let output = '';
        str = String(str).replace(/=+$/, '');
        if (str.length % 4 === 1) {
            throw new Error('atob failed: The string to be decoded is not correctly encoded.');
        }
        for (
        // initialize result and counters
        let bc = 0, bs, buffer, idx = 0; 
        // get next character
        // eslint-disable-next-line no-cond-assign
        buffer = str.charAt(idx++); 
        // character found in table? initialize bit storage and add its ascii value;
        // eslint-disable-next-line no-bitwise
        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
            // and if not first of each 4 characters,
            // convert the first 8 bits to one ascii character
            // eslint-disable-next-line no-bitwise
            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
            // try to find character in table (0-63, not found => -1)
            buffer = chars.indexOf(buffer);
        }
        return output;
    }
    // https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
    b64DecodeUnicode(str) {
        return decodeURIComponent(Array.prototype.map.call(this.b64decode(str), (c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    }
};
JwtHelperProvider.ctorParameters = () => [];
JwtHelperProvider = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: 'root' })
], JwtHelperProvider);



/***/ }),

/***/ 45798:
/*!*****************************************************!*\
  !*** ./src/app/services/product/product.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/file-transfer/ngx */ 50806);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-config/app-config */ 55619);
/* harmony import */ var _http_helper_http_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-helper/http-helper */ 42516);
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/ui */ 85081);








let ProductService = class ProductService {
    constructor(http, httpHelper, config, transfer, ui) {
        this.http = http;
        this.httpHelper = httpHelper;
        this.config = config;
        this.transfer = transfer;
        this.ui = ui;
    }
    getProperties(categoryId) {
        //   return this.httpHelper.request('get', this.config.API + '/properies/' + categoryId).pipe(map((data) => {
        //     return data;
        //   }, error => {
        //     throw (error);
        //   }
        // ));
        return new Promise((resolve, reject) => {
            this.httpHelper.request('get', this.config.API + '/properies/' + categoryId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
                resolve(data);
            }, (error) => {
                reject(error);
            }));
        });
    }
    getRegions() {
        return this.http.get(this.config.API + '/regions').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => data, error => {
            throw error;
        }));
    }
    addFullProduct(product, audiopath) {
        return this.addNewProduct(product).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => {
            ;
            const productId = res.id;
            if (audiopath) {
                this.uploadAudio(audiopath, productId).then(response => {
                    return (response);
                }, err => {
                    console.log('Return From Audio Result Failed', err);
                });
            }
            else {
                return res;
            }
        }, err => {
            console.log('Return From Product Result SUccess', err);
        }));
    }
    addNewProduct(product) {
        this.ui.loading();
        return this.httpHelper.request('post', this.config.API + '/product', Object.assign({}, product)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            this.ui.unLoading();
            this.ui.toast('Le produit a été ajouté');
            return data;
        }, error => {
            this.ui.unLoading();
            console.log('err', error);
        }));
    }
    uploadAudio(filepath, productId) {
        const fileTransfer = this.transfer.create();
        return new Promise((resolve, reject) => {
            let options = {
                fileKey: 'voiceRecorder',
                mimeType: 'audio/mp3',
                httpMethod: 'post',
                chunkedMode: false,
                headers: { 'Content-Type': undefined },
                params: { 'product_id': productId }
            };
            fileTransfer.abort();
            fileTransfer.upload(filepath, this.config.API + '/uploadAudio', options, true)
                .then((data) => {
                console.log('Success Upload : ', data);
                resolve(data);
            }).catch((err) => {
                console.log('Error Upload : ', err);
                this.ui.toast("Erreur : Audio Upload ");
                reject(err);
            });
        });
    }
    getCategories() {
        // return new Promise((resolve, reject) => {
        return this.http.get(this.config.API + '/categories').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            return data;
        }, error => {
            throw (error);
        }));
    }
    getsearchMyAds(val) {
        console.log(val);
        return this.httpHelper.request('get', this.config.API + '/search/products/' + val).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            console.log(data);
            return data;
        }, (error) => {
            this.ui.fireError(error);
            throw error;
        }));
    }
    getsearchAds(val, category) {
        const term = category ? '/category/' + category + '/search/' + val : '/search/' + val;
        return this.http.get(this.config.API + term).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => data, (error) => {
            this.ui.fireError(error);
            throw error;
        }));
        // });
    }
    getmyproducts(pager, noloding) {
        return this.httpHelper.request('get', this.config.API + '/owers?page=' + pager).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            if (!noloding) {
                this.ui.unLoading();
            }
            return (data.data);
        }, (error) => {
            console.log('err', error);
            if (!noloding) {
                this.ui.unLoading();
            }
            throw (error);
        }));
    }
    delete(product) {
        this.ui.loading();
        return this.httpHelper.request('post', this.config.API + '/delete', { product_id: product.id }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            this.ui.unLoading();
            return data;
        }, (error) => {
            this.ui.unLoading();
            return error;
        }));
    }
    getProductbyId(productId, noload) {
        if (!noload) {
            this.ui.loading();
        }
        return this.httpHelper.request('get', this.config.API + '/product/' + productId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            if (!noload) {
                this.ui.unLoading();
            }
            return data;
        }, (error) => {
            if (!noload) {
                this.ui.unLoading();
            }
            throw error;
        }));
    }
    getProductsByCategory(category, pager, nolodaing, filter) {
        return this.httpHelper.request('post', this.config.API + '/products/category', {
            category,
            page: pager,
            date: filter.date,
            distance: filter.distance,
            price: filter.price,
            lat: filter.lat,
            lng: filter.lng,
            range: filter.range
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            if (!nolodaing) {
                this.ui.unLoading();
            }
            // eslint-disable-next-line no-underscore-dangle
            if (data.data.length > 0) {
                this.ui.unLoading();
                return data.data;
            }
            else {
                return [];
            }
        }, (error) => {
            throw error;
        }));
    }
    getAllProducts(pager, noloding, filter) {
        //  console.log('From services => ', 'pager', pager, 'noloding', noloding, filter);
        if (!noloding) {
            this.ui.loading();
        }
        // return new Promise((resolve, reject) => {
        if (filter.range) {
            return this.httpHelper.request('get', this.config.API + '/products?page=' +
                pager + '&date=' + filter.date + '&distance=' + filter.distance + '&price=' +
                filter.price + '&lat=' + filter.lat + '&lng=' + filter.lng + '&range_lower=' +
                filter.range.lower + '&range_upper=' + filter.range.upper).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
                if (!noloding) {
                    this.ui.unLoading();
                }
                return data.data;
            }, (error) => {
                console.log(error);
                if (!noloding) {
                    this.ui.unLoading();
                }
            }));
        }
        else {
            return this.http.get(this.config.API + '/products?page=' + pager + '&date=' + filter.date +
                '&distance=' + filter.distance + '&price=' + filter.price + '&lat=' + filter.lat +
                '&lng=' + filter.lng).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
                if (!noloding) {
                    this.ui.unLoading();
                }
                if (data) {
                    this.ui.unLoading();
                    return data.data;
                }
            }, (error) => {
                console.log(error);
                if (!noloding) {
                    this.ui.unLoading();
                }
                return error;
            }));
        }
    }
    getProductsByRegion(region, pager, noloding) {
        if (!noloding) {
            this.ui.loading();
        }
        return new Promise((resolve, reject) => {
            this.httpHelper.request('get', this.config.API + '/products/' + region + '?page=' + pager).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
                if (!noloding) {
                    this.ui.unLoading();
                }
                resolve(data.data);
            }, (error) => {
                if (!noloding) {
                    this.ui.unLoading();
                }
                reject(error);
            }));
        });
    }
    getProductsBySearch(region, search_term) {
        this.ui.loading();
        return new Promise((resolve, reject) => {
            this.httpHelper.request('post', this.config.API + '/search', {
                region,
                search: search_term
            }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
                this.ui.unLoading();
                resolve(data);
            }, (error) => {
                this.ui.unLoading();
                reject(error);
            }));
        });
    }
    countsProduct() {
        // return new Promise((resolve, reject) => {
        return this.httpHelper.request('get', this.config.API + '/counts').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            return data;
        }, (error) => {
            console.log(error);
        }));
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _http_helper_http_helper__WEBPACK_IMPORTED_MODULE_2__.HttpHelperService },
    { type: _app_config_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfigService },
    { type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_0__.FileTransfer },
    { type: _ui_ui__WEBPACK_IMPORTED_MODULE_3__.UiService }
];
ProductService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ 63762:
/*!*********************************************!*\
  !*** ./src/app/services/storage/storage.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-config/app-config */ 55619);




let StorageService = class StorageService {
    constructor(storage, appConfig) {
        this.storage = storage;
        this.appConfig = appConfig;
        this.appPrefix = this.appConfig.appPrefix;
    }
    set(key, value) {
        return this.storage.set(`${this.appPrefix}-${key}`, value);
    }
    get(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.storage.get(`${this.appPrefix}-${key}`);
        });
    }
    remove(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.storage.remove(`${this.appPrefix}-${key}`);
        });
    }
    clear() {
        this.storage.clear().then(() => {
            console.log('all keys cleared');
        });
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _app_config_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfigService }
];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], StorageService);



/***/ }),

/***/ 97623:
/*!*******************************************!*\
  !*** ./src/app/services/suivi.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuiviService": () => (/* binding */ SuiviService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-config/app-config */ 55619);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _http_helper_http_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-helper/http-helper */ 42516);
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/ui */ 85081);






let SuiviService = class SuiviService {
    constructor(request, appConfigService, ui) {
        this.request = request;
        this.appConfigService = appConfigService;
        this.ui = ui;
        this.api = `${this.appConfigService.API}/suivi`;
    }
    activeWatchPosition(body) {
        console.log(body);
        return this.request.request('POST', `${this.api}/active-suivi`, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res));
    }
    suiviAnnonce(product) {
        this.ui.loading();
        return this.request.request('post', this.appConfigService.API + '/suivi', Object.assign({}, product)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            this.ui.unLoading();
            return data;
        }, (error) => {
            this.ui.unLoading();
            console.log(error);
            throw error;
        }));
    }
    deletesuivi(productid) {
        this.ui.loading();
        return new Promise((resolve, reject) => {
            this.request.request('post', this.appConfigService.API + '/suivi/delete', { productid }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
                // this.http.post(this.config.API+'/product',{...product}).pipe(map((data)=> {
                this.ui.unLoading();
                resolve(data);
            }, (error) => {
                this.ui.unLoading();
                reject(error);
            }));
        });
    }
};
SuiviService.ctorParameters = () => [
    { type: _http_helper_http_helper__WEBPACK_IMPORTED_MODULE_1__.HttpHelperService },
    { type: _app_config_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfigService },
    { type: _ui_ui__WEBPACK_IMPORTED_MODULE_2__.UiService }
];
SuiviService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], SuiviService);



/***/ }),

/***/ 85081:
/*!***********************************!*\
  !*** ./src/app/services/ui/ui.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiService": () => (/* binding */ UiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _camera_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../camera/camera */ 82289);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);






let UiService = class UiService {
    constructor(loadingCtrl, toastCtrl, alertCtrl, modalCtrl, actionCtrl, popoverCtrl, 
    // public events: Events,
    sanitizer, translate, camera) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.actionCtrl = actionCtrl;
        this.popoverCtrl = popoverCtrl;
        this.sanitizer = sanitizer;
        this.translate = translate;
        this.camera = camera;
        this.isLoading = false;
    }
    alert(title, message) {
        return new Promise((resolve, reject) => {
            console.log('alert');
            this.translate.get([title, message, 'modals.ok']).subscribe((values) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                console.log('alert');
                const alert = yield this.toastCtrl.create({
                    header: values[title],
                    message: values[message],
                    buttons: [
                        {
                            text: values['modals.ok'],
                            handler: () => {
                                resolve(true);
                            }
                        }
                    ]
                });
                yield alert.present();
            }));
        });
    }
    alertImage(title, message) {
        return new Promise((resolve, reject) => {
            this.translate.get([title, message, 'modals.ok', 'service.addPicture', 'service.getPhoto']).subscribe((values) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: values[title],
                    subHeader: values[message],
                    buttons: [
                        {
                            text: values['service.addPicture'],
                            handler: () => {
                                resolve(1);
                            }
                        },
                        {
                            text: values['service.getPhoto'],
                            handler: () => {
                                resolve(2);
                            }
                        }
                    ]
                });
                yield alert.present();
            }));
        });
    }
    promptAlert(title, message) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                inputs: [
                    {
                        name: 'content',
                        placeholder: 'your comment ...'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: data => {
                        }
                    },
                    {
                        text: 'Save',
                        handler: data => {
                            resolve(data);
                        }
                    }
                ]
            });
            yield alert.present();
        }));
    }
    customLoader() {
        const html = `<div id="loader">
    <div id="shadow"></div>
    <div id="box"></div>
  </div>`;
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
    createLoder(message) {
        this.isLoading = true;
        this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'customLoader',
            htmlAttributes: this.customLoader()
        }).then((response) => {
            response.present().then(() => {
                setTimeout(() => {
                    if (!this.isLoading) {
                        response.dismiss();
                    }
                }, 2000);
            });
        });
    }
    loading(content) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (!content) {
                yield this.createLoder();
            }
            else {
                yield this.createLoder(content);
            }
        });
    }
    unLoading() {
        this.isLoading = false;
        this.loadingCtrl.dismiss().then((response) => {
            // console.log('Loader closed!', response);
        }).catch((err) => {
            //this.loadingCtrl.dismiss()
            console.log('Error occured : ', err);
        });
    }
    toast(message, cssClass, params, duration, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (!params) {
                params = '';
            }
            const toastInst = yield this.toastCtrl.create({
                message: message + params,
                cssClass: cssClass || 'toast-container',
                position: position || 'bottom',
                duration: duration || 2000
            });
            yield toastInst.present();
        });
    }
    confirmation(header, message, yesBtn, noBtn) {
        const agreeBtn = yesBtn || 'Oui';
        const disagreeBtn = noBtn || 'Non';
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const confirm = yield this.alertCtrl.create({
                header,
                message,
                buttons: [
                    {
                        text: agreeBtn,
                        handler: () => {
                            resolve(true);
                        }
                    },
                    {
                        text: disagreeBtn,
                        handler: () => {
                            reject(false);
                        }
                    }
                ]
            });
            yield confirm.present();
        }));
    }
    confirmationWithReject(title, message, yesBtn, noBtn) {
        const agreeBtn = yesBtn || 'modals.ok';
        const disagreeBtn = noBtn || 'modals.cancel';
        return new Promise((resolve, reject) => {
            this.translate.get([title, message, agreeBtn, disagreeBtn]).subscribe((values) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                const confirm = yield this.alertCtrl.create({
                    header: values[title],
                    message: values[message],
                    buttons: [
                        {
                            text: values[agreeBtn],
                            handler: () => {
                                resolve('Agree clicked');
                            }
                        },
                        {
                            text: values[disagreeBtn],
                            handler: () => {
                                reject('Disagree clicked');
                            }
                        }
                    ]
                });
                yield confirm.present();
            }));
        });
    }
    rating(title, message, yesBtn, noBtn) {
        const agreeBtn = yesBtn || 'modals.ok';
        const disagreeBtn = noBtn || 'modals.cancel';
        return new Promise((resolve, reject) => {
            this.translate.get([title, message, agreeBtn, disagreeBtn]).subscribe((values) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                const confirm = yield this.alertCtrl.create({
                    header: values[title],
                    message: values[message],
                    buttons: [
                        {
                            text: values[agreeBtn],
                            handler: () => {
                                resolve(true);
                                console.log('Agree clicked');
                            }
                        },
                        {
                            text: values[disagreeBtn],
                            handler: () => {
                                console.log('Disagree clicked');
                            }
                        }
                    ]
                });
                yield confirm.present();
            }));
        });
    }
    imageType() {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const action = yield this.actionCtrl.create({
                header: 'Ajouter Les Images d\'Annonce',
                buttons: [
                    {
                        text: 'Appareil Photo',
                        icon: 'camera',
                        handler: () => {
                            this.camera.fromCamera().then(base64 => resolve(base64));
                        }
                    }, {
                        text: 'Chercher Photo',
                        icon: 'images',
                        handler: () => {
                            this.camera.fromGalley().then(base64 => resolve(base64));
                        }
                    }, {
                        text: 'Fermer',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            // reject('cancel');
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield action.present();
        }));
    }
    postType() {
        return new Promise((resolve) => {
            this.translate.get(['modals.ok', 'modals.cancel', 'addLost.title', 'addFound.title']).subscribe((values) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                const action = yield this.actionCtrl.create({
                    //title: 'Take photo from',
                    buttons: [
                        {
                            text: values['addLost.title'],
                            handler: () => {
                                resolve('title_lost');
                            }
                        }, {
                            text: values['addFound.title'],
                            handler: () => {
                                resolve('title_found');
                            }
                        }, {
                            text: values['modals.cancel'],
                            icon: 'close',
                            role: 'cancel',
                            handler: () => {
                                console.log('Cancel clicked');
                            }
                        }
                    ]
                });
                yield action.present();
            }));
        });
    }
    privacy() {
        this.translate.get(['modals.ok', 'modals.cancel', 'modals.openPrivacy', 'settings.term']).subscribe((values) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const action = yield this.actionCtrl.create({
                header: values['modals.openPrivacy'],
                buttons: [
                    {
                        text: '<a href="http://peppepcar.com/privacy" target="_system">' + values['settings.term'] + '</a>',
                        //icon: 'camera',
                        handler: () => {
                            console.log('Open website');
                        }
                    }, {
                        text: values['modals.cancel'],
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield action.present();
        }));
    }
    shareType() {
        return new Promise((resolve) => {
            this.translate.get(['modals.ok', 'modals.cancel', 'detailsPage.fabs.shareTitle',
                'detailsPage.fabs.shareFb', 'detailsPage.fabs.shareTwitter',
                'detailsPage.fabs.shareOther']).subscribe((values) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                const action = yield this.actionCtrl.create({
                    header: 'Partager l\'annonce',
                    buttons: [
                        {
                            text: 'Partage Via Fb',
                            icon: 'logo-facebook',
                            handler: () => {
                                resolve('fb');
                            }
                        }, {
                            text: 'Partage Via Twitter',
                            icon: 'logo-twitter',
                            handler: () => {
                                resolve('twitter');
                            }
                        }, {
                            text: 'Autre Outils de Partage',
                            icon: 'md-share',
                            handler: () => {
                                resolve('others');
                            }
                        }
                    ]
                });
                yield action.present();
            }));
        });
    }
    commentOptions() {
        return new Promise((resolve, reject) => {
            this.translate.get(['modals.edit', 'modals.del', 'comment.title']).subscribe((values) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                const action = yield this.actionCtrl.create({
                    header: values['comment.title'],
                    buttons: [
                        {
                            text: values['modals.edit'],
                            //icon: 'camera',
                            handler: () => {
                                resolve('edit');
                                console.log('edit clicked');
                            }
                        }, {
                            text: values['modals.del'],
                            //icon: 'close',
                            //role: 'cancel',
                            handler: () => {
                                resolve('del');
                                console.log('delete clicked');
                            }
                        }
                    ]
                });
                yield action.present();
            }));
        });
    }
    phoneNumbers(phone, secondPhone) {
        return new Promise((resolve, reject) => {
            this.translate.get(['detailsPage.selectNumber']).subscribe((values) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                const action = yield this.actionCtrl.create({
                    header: values['comment.title'],
                    buttons: [
                        {
                            text: phone,
                            //icon: 'camera',
                            handler: () => {
                                resolve(phone);
                                console.log('phone clicked');
                            }
                        }, {
                            text: secondPhone,
                            //icon: 'close',
                            //role: 'cancel',
                            handler: () => {
                                resolve(secondPhone);
                                console.log('secondPhone clicked');
                            }
                        }
                    ]
                });
                yield action.present();
            }));
        });
    }
    modal(page, data, opts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const modalInst = yield this.modalCtrl.create({ component: page, componentProps: { data, opts } });
            yield modalInst.present();
            return modalInst;
        });
    }
    popover(component, event, data, opts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({ component, event, componentProps: { data } });
            return yield popover.present();
        });
    }
    fireError(err, msg = 'Connexion Error') {
        this.unLoading();
        this.toast(msg, 'error');
    }
    fireSuccess(message, duration = 3500) {
        this.toast(message, 'success', null, duration);
    }
    confirmationPrompt(title, message, inputName, inputPrice, yesBtn, noBtn) {
        const agreeBtn = yesBtn || 'modals.yes';
        const disagreeBtn = noBtn || 'modals.no';
        return new Promise((resolve, reject) => {
            this.translate.get([title, message, inputName, inputPrice, agreeBtn, disagreeBtn]).subscribe((values) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                const confirm = yield this.alertCtrl.create({
                    header: values[title],
                    message: values[message],
                    inputs: [
                        {
                            name: 'missionname',
                            placeholder: values[inputPrice],
                            type: 'text',
                        },
                        {
                            name: 'price',
                            placeholder: values[inputName],
                            type: 'number',
                        },
                    ],
                    buttons: [
                        {
                            text: values[agreeBtn],
                            handler: (data) => {
                                resolve(data);
                                console.log('Agree clicked');
                            }
                        },
                        {
                            text: values[disagreeBtn],
                            handler: () => {
                                reject(false);
                                console.log('Disagree clicked');
                            }
                        }
                    ]
                });
                yield confirm.present();
            }));
        });
    }
};
UiService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService },
    { type: _camera_camera__WEBPACK_IMPORTED_MODULE_0__.CameraProvider }
];
UiService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({ providedIn: 'root' })
], UiService);



/***/ }),

/***/ 86292:
/*!******************************************************!*\
  !*** ./src/app/services/utils/IonicGestureConfig.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IonicGestureConfig": () => (/* binding */ IonicGestureConfig)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 39075);



/**
 * @hidden
 * This class overrides the default Angular gesture config.
 */
let IonicGestureConfig = class IonicGestureConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.HammerGestureConfig {
    buildHammer(element) {
        const mc = new window.Hammer(element);
        if (window) {
            for (const eventName in this.overrides) {
                if (eventName) {
                    mc.get(eventName).set(this.overrides[eventName]);
                }
            }
        }
        return mc;
    }
};
IonicGestureConfig = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], IonicGestureConfig);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 60140:
/*!***************************************************************************!*\
  !*** ./src/app/components/categories-list/categories-list.component.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".subitems {\n  transition: height 0.3s ease-in-out;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1DQUFtQztBQUF2QyIsImZpbGUiOiJjYXRlZ29yaWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAuc3ViaXRlbXMge1xyXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuIl19 */");

/***/ }),

/***/ 87009:
/*!*******************************************************************************!*\
  !*** ./src/app/components/categories-slider/categories-slider.component.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".itemSlide p {\n  font-size: 8px;\n  white-space: nowrap;\n}\n\n.colVoirTout a {\n  color: var(--ion-color-logo);\n}\n\n.colVoirTout {\n  white-space: nowrap;\n  font-size: 12px;\n}\n\n.rowCategories p {\n  font-size: 12px;\n  color: var(--ion-color-logo);\n}\n\n.slidesCategories p {\n  font-size: 8px;\n  margin: 0;\n}\n\nion-slide {\n  max-width: 60px;\n  max-height: 50px;\n  min-width: 35px;\n  margin-right: 20px !important;\n  margin-left: 5px;\n  min-height: 35px;\n  width: 60px !important;\n  height: 50px;\n  background-color: var(--ion-color-logo);\n  align-items: center;\n  color: var(--ion-color-background);\n  border-radius: 5px;\n}\n\n.itemSlide {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8px;\n  color: var(--ion-color-background);\n}\n\n.slidesCategories {\n  margin-bottom: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMtc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUFyQjs7QUFHQTtFQUNFLDRCQUE0QjtBQUE5Qjs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQWpCOztBQUdBO0VBQ0UsZUFBZTtFQUNmLDRCQUE0QjtBQUE5Qjs7QUFHQTtFQUNFLGNBQWM7RUFDZCxTQUFTO0FBQVg7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBRWhCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQURwQjs7QUFJQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBRW5CLFlBQVk7RUFDWixrQ0FBa0M7QUFGcEM7O0FBTUE7RUFDRSxtQkFBbUI7QUFIckIiLCJmaWxlIjoiY2F0ZWdvcmllcy1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLml0ZW1TbGlkZSBwIHtcclxuICBmb250LXNpemU6IDhweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uY29sVm9pclRvdXQgYSB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sb2dvKTtcclxufVxyXG5cclxuLmNvbFZvaXJUb3V0IHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnJvd0NhdGVnb3JpZXMgcCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbG9nbyk7XHJcbn1cclxuXHJcbi5zbGlkZXNDYXRlZ29yaWVzIHAge1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaW9uLXNsaWRlIHtcclxuICBtYXgtd2lkdGg6IDYwcHg7XHJcbiAgbWF4LWhlaWdodDogNTBweDtcclxuICAvL21hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWluLXdpZHRoOiAzNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWluLWhlaWdodDogMzVweDtcclxuICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbG9nbyk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLml0ZW1TbGlkZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbG9nbyk7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZCk7XHJcbiAgLy9ib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5zbGlkZXNDYXRlZ29yaWVzIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 82251:
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".add-custom-menue {\n  width: 100%;\n  height: 30%;\n  border-radius: 1px;\n  position: relative;\n  padding: 5px;\n  bottom: 0;\n  text-align: center;\n  justify-content: center;\n  z-index: 9999;\n  margin: 0;\n  right: 0;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.012) !important;\n  animation-name: example;\n  animation-duration: 4s;\n}\n\n.add-custom-menue ion-icon {\n  font-size: 1.8rem;\n}\n\n.contact-font {\n  font-size: 24px;\n}\n\n.has-left-bar-footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.has-left-bar-footer:first-child {\n  border-left: unset;\n}\n\nion-footer {\n  background: var(--ion-color-logo) !important;\n}\n\n#notification-button {\n  position: absolute;\n  width: 42px;\n  top: 1px;\n  right: 1px;\n  overflow: visible !important;\n}\n\n#notifications-badge {\n  background-color: red;\n  position: relative;\n  top: -35%;\n  right: 15%;\n  border-radius: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGlEQUFpRDtFQUNqRCx1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsaUJBQWlCO0FBRW5COztBQUNBO0VBQ0UsZUFBZTtBQUVqQjs7QUFFQTtFQUdFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBRHJCOztBQUlBO0VBRUUsa0JBQWtCO0FBRnBCOztBQUtBO0VBQ0UsNENBQTRDO0FBRjlDOztBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFPO0VBQ1AsVUFBVTtFQUNWLDRCQUEyQjtBQUQ3Qjs7QUFLQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDakIsU0FBUztFQUNWLFVBQVU7RUFDVixtQkFBbUI7QUFGckIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1jdXN0b20tbWVudWUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvdHRvbTogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBtYXJnaW46IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMTIpICFpbXBvcnRhbnQ7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcclxufVxyXG4uYWRkLWN1c3RvbS1tZW51ZSBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbn1cclxuXHJcbi5jb250YWN0LWZvbnQge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuXHJcbi5oYXMtbGVmdC1iYXItZm9vdGVyIHtcclxuXHJcbiAgLy9ib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NDkpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhhcy1sZWZ0LWJhci1mb290ZXI6Zmlyc3QtY2hpbGQge1xyXG5cclxuICBib3JkZXItbGVmdDogdW5zZXQ7XHJcblxyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1sb2dvKSAhaW1wb3J0YW50O1xyXG59XHJcbiNub3RpZmljYXRpb24tYnV0dG9uIHsgICAgICAgICAgICBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgdG9wOjFweDtcclxuICByaWdodDogMXB4O1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbiNub3RpZmljYXRpb25zLWJhZGdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICB0b3A6IC0zNSU7XHJcbiAgcmlnaHQ6IDE1JTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ 64993:
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-searchbar {\n  --border-radius: 50px;\n  color: var(--ion-color-logo);\n  --icon-color: var(--ion-color-logo);\n  --box-shadow: none;\n}\n\n.close {\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin-left: 0.3rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsbUNBQWE7RUFDYixrQkFBYTtBQUNmOztBQUVDO0VBQ0MsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlYXJjaGJhciB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbG9nbyk7XHJcbiAgLS1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbG9nbyk7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG5cclxufVxyXG4gLmNsb3NlIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ 44973:
/*!*******************************************************************************!*\
  !*** ./src/app/components/settings-pop-over/settings-pop-over.component.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy1wb3Atb3Zlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 47329:
/*!***************************************************************!*\
  !*** ./src/app/components/side-menu/side-menu.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu {\n  --width: 70%;\n}\n\n.header-wrapper {\n  position: relative;\n}\n\nion-header {\n  background: var(--ion-color-logo);\n  padding-top: 12%;\n}\n\n.logo-container {\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, 20%);\n  display: inline-block;\n  border-radius: 50%;\n  padding: 10px;\n  background: #67c1c2;\n  border: 5px solid #fff;\n}\n\n.logo-container img {\n  width: 45px;\n}\n\n.showRow {\n  transition: all 0.2s ease-in;\n}\n\n.showRow .rotate-icon {\n  transform: rotate(90deg);\n}\n\n.content .list:not(.subitems) {\n  padding-top: 25px;\n  background-color: white;\n}\n\nion-item {\n  margin: 0;\n  padding: 0;\n  background-color: #fff;\n  color: var(--ion-color-logo);\n}\n\nion-icon {\n  --color: var(--ion-color-logo);\n}\n\n.close {\n  font-size: 1.5em;\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUVuQixzQkFBc0I7QUFBeEI7O0FBR0E7RUFDRSxXQUFXO0FBQWI7O0FBSUE7RUFDRSw0QkFBNEI7QUFEOUI7O0FBSUE7RUFDRSx3QkFBd0I7QUFEMUI7O0FBS0E7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0FBRnpCOztBQVlBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsNEJBQTRCO0FBVDlCOztBQWFBO0VBQ0UsOEJBQVE7QUFWVjs7QUFhQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFWbEIiLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUge1xyXG4gIC0td2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmhlYWRlci13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1sb2dvKTtcclxuICBwYWRkaW5nLXRvcDogMTIlO1xyXG59XHJcblxyXG4ubG9nby1jb250YWluZXIge1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIwJSk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICM2N2MxYzI7XHJcbiAgLy8gYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwwLDAsLjI1KTtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4ubG9nby1jb250YWluZXIgaW1nIHtcclxuICB3aWR0aDogNDVweDtcclxufVxyXG5cclxuXHJcbi5zaG93Um93IHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xyXG59XHJcblxyXG4uc2hvd1JvdyAucm90YXRlLWljb24ge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuXHJcbi5jb250ZW50IC5saXN0Om5vdCguc3ViaXRlbXMpIHtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi8vaW9uLWxpc3Qge1xyXG4vL1xyXG4vLyAgcGFkZGluZy10b3A6IDI1cHg7XHJcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy99XHJcblxyXG5pb24taXRlbSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxvZ28pO1xyXG5cclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1sb2dvKTtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 90959:
/*!***********************************************************!*\
  !*** ./src/app/components/slideup/slideup.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-footer {\n  height: 35px;\n}\n\n.drawer {\n  position: absolute;\n  box-shadow: rgba(0, 0, 0, 0.12) 0 4px 16px;\n  width: 100%;\n  border-radius: 20px;\n  z-index: 11;\n  background: #fff;\n}\n\n.drawer-pull {\n  background: #cccccc;\n  height: 4px;\n  width: 60px;\n  border-radius: 2px;\n}\n\n.main {\n  background-color: #f5f5f5;\n  margin-top: 62px;\n}\n\n#map {\n  width: 100%;\n  height: 80%;\n  position: initial !important;\n}\n\n.hiden-ways {\n  opacity: 0;\n}\n\n.product-title {\n  font-family: 'Roboto', sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #343434;\n}\n\n.cat-title {\n  font-size: 11px !important;\n  color: #414141 !important;\n}\n\n.product-description {\n  color: #888;\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  text-overflow: unset;\n  overflow: visible;\n  white-space: pre-line;\n}\n\n.add-custom-menue {\n  width: 100%;\n  border-radius: 1px;\n  position: relative;\n  padding: 5px;\n  bottom: 0px;\n  text-align: center;\n  justify-content: center;\n  text-align: center;\n  z-index: 9999;\n  margin: 0px;\n  right: 0px;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.012) !important;\n}\n\n.has-left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.contact-font {\n  font-size: 24px;\n}\n\n.category-class {\n  color: var(--ion-color-logo);\n  position: relative;\n  transform: translateX(27%);\n  border-radius: 50%;\n  align-items: center;\n  display: inherit;\n  padding-top: 5px;\n  height: 20vw;\n  width: 20vw;\n  text-align: center;\n}\n\n.category-class h3 {\n  padding: 0;\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  font-size: 3.8vw;\n}\n\n.category-class ion-icon {\n  font-size: 9.5vw;\n  margin-bottom: 3px;\n}\n\n.icon-resize {\n  font-size: 22px !important;\n}\n\n.category-title {\n  padding: 7px;\n  padding-bottom: 9px;\n  border-radius: 3px;\n  z-index: 999;\n  margin-left: -15px;\n  text-align: center;\n  width: 95%;\n  font-size: 20px;\n  padding-left: 51px;\n  padding-right: 18px;\n  background-color: #406f6f !important;\n  margin-right: -15px;\n  transform: skew(26deg) !important;\n  color: white !important;\n}\n\nion-footer {\n  background: #417171 !important;\n}\n\n.swiper-pagination-bullet-active {\n  background: var(--ion-color-primary);\n}\n\n.custom-price {\n  font-size: 15px;\n  margin: 0px;\n}\n\n[col-2] {\n  padding: 0px !important;\n}\n\n.add-favory {\n  width: 100%;\n  border-radius: 1px;\n  position: relative;\n  top: 0px;\n  text-align: center;\n  justify-content: center;\n  text-align: center;\n  z-index: 9999;\n  margin: 0px;\n  right: 0px;\n  color: white;\n  background-color: #406f6f !important;\n}\n\n.has-left-bar {\n  border-left: 2px solid rgba(255, 255, 255, 0.849);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-card {\n  max-height: 200px;\n  overflow: scroll;\n  position: absolute;\n  z-index: 1;\n}\n\n.toupperCases {\n  text-transform: uppercase !important;\n}\n\n.item-md {\n  border-radius: 7px !important;\n  background-color: rgba(255, 255, 255, 0.836) !important;\n}\n\n.item-md.item-block .item-inner {\n  padding-right: 0px !important;\n  margin-right: 10px !important;\n  border-bottom: 1px solid rgba(64, 111, 111, 0.445) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRldXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLFdBQVc7RUFDWCxtQkFBbUI7RUFHbkIsV0FBVztFQUNYLGdCQUFnQjtBQUZsQjs7QUFNQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUhwQjs7QUFPQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFKbEI7O0FBUUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLDRCQUE0QjtBQUw5Qjs7QUFTQTtFQUNFLFVBQVU7QUFOWjs7QUFVQTtFQUNFLGlDQUFpQztFQUNqQyxVQUFVO0VBQ1YsU0FBUztFQUNULGNBQWM7QUFQaEI7O0FBVUE7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0FBUDNCOztBQVdBO0VBQ0UsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFSdkI7O0FBWUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixpREFBaUQ7QUFUbkQ7O0FBWUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQVRyQjs7QUFZQTtFQUNFLGVBQWU7QUFUakI7O0FBWUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUUxQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFWcEI7O0FBY0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGlDQUFpQztFQUNqQyxnQkFBZ0I7QUFYbEI7O0FBY0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBWHBCOztBQWVBO0VBQ0UsMEJBQTBCO0FBWjVCOztBQWVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBRW5CLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLHVCQUF1QjtBQWJ6Qjs7QUFpQkE7RUFDRSw4QkFBOEI7QUFkaEM7O0FBaUJBO0VBQ0Usb0NBQW9DO0FBZHRDOztBQWlCQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBZGI7O0FBRUE7RUFnQkUsdUJBQXVCO0FBZHpCOztBQWlCQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBRWxCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osb0NBQW9DO0FBZnRDOztBQXNCQTtFQUNFLGlEQUFpRDtFQUNqRCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQW5CckI7O0FBdUJBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtBQXBCWjs7QUF1QkE7RUFDRSxvQ0FBb0M7QUFwQnRDOztBQXVCQTtFQUNFLDZCQUE2QjtFQUM3Qix1REFBdUQ7QUFwQnpEOztBQXVCQTtFQUNFLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsNkRBQTZEO0FBcEIvRCIsImZpbGUiOiJzbGlkZXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlciB7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG5cclxufVxyXG5cclxuLmRyYXdlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMCA0cHggMTZweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIC8vYm90dG9tOiBjYWxjKC03MHZoICsgZW52KHNhZmUtYXJlYS1pbnNldC1idHRvbSkpO1xyXG4gIC8vaGVpZ2h0OiA4MHZoO1xyXG4gIHotaW5kZXg6IDExO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4uZHJhd2VyLXB1bGwge1xyXG4gIGJhY2tncm91bmQ6ICNjY2NjY2M7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG5cclxuLm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgbWFyZ2luLXRvcDogNjJweDtcclxuXHJcbn1cclxuXHJcbiNtYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIHBvc2l0aW9uOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uaGlkZW4td2F5cyB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuXHJcbi5wcm9kdWN0LXRpdGxlIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICMzNDM0MzQ7XHJcbn1cclxuXHJcbi5jYXQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNDE0MTQxICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6ICM4ODg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LW92ZXJmbG93OiB1bnNldDtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuXHJcblxyXG4uYWRkLWN1c3RvbS1tZW51ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMTIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oYXMtbGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFjdC1mb250IHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1jbGFzcyB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sb2dvKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI3JSk7XHJcbiAgLy8gYm9yZGVyOjEuNXB4IHNvbGlkIG1hcC1nZXQoJGNvbG9ycyAsIHByaW1hcnkgKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgaGVpZ2h0OiAyMHZ3O1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBiYWNrZ3JvdW5kOiByZ2JhKDYzLCAxMDAsIDEzMywgMC4wMik7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1jbGFzcyBoMyB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMy44dnc7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1jbGFzcyBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiA5LjV2dztcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcblxyXG4uaWNvbi1yZXNpemUge1xyXG4gIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2F0ZWdvcnktdGl0bGUge1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogOTUlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUxcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMThweDtcclxuICAvL3RyYW5zZm9ybTogc2tldygtMjZkZWcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDZmNmYgIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gIHRyYW5zZm9ybTogc2tldygyNmRlZykgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM0MTcxNzEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLmN1c3RvbS1wcmljZSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5bY29sLTJdIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFkZC1mYXZvcnkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gcGFkZGluZzogNXB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBtYXJnaW46IDBweDtcclxuICByaWdodDogMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA2ZjZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oYXMtcmlnaHQtYmFyIHtcclxuICAvLyBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODQ5KTtcclxufVxyXG5cclxuLmhhcy1sZWZ0LWJhciB7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODQ5KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5pb24tY2FyZCB7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnRvdXBwZXJDYXNlcyB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbS1tZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgzNikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNjQsIDExMSwgMTExLCAwLjQ0NSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 39519:
/*!*****************************************************************!*\
  !*** ./src/app/pages/confidentialite/confidentialite.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWRlbnRpYWxpdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 10462:
/*!*********************************************************!*\
  !*** ./src/app/pages/custom-card/custom-card.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".card-md {\n  margin: 0px !important;\n  width: 100% !important;\n}\n\n.card-md .closebutton {\n  top: 4px !important;\n  font-size: 17px !important;\n  border-radius: 50% !important;\n  right: 4px !important;\n  color: white !important;\n  width: 32px !important;\n  height: 32px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFvQjtFQUNwQixzQkFBcUI7QUFDdkI7O0FBSEE7RUFLSSxtQkFBa0I7RUFDbEIsMEJBQXlCO0VBQ3pCLDZCQUE0QjtFQUM1QixxQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLHNCQUFxQjtFQUNyQix1QkFBdUI7QUFFM0IiLCJmaWxlIjoiY3VzdG9tLWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtbWR7XHJcbiAgbWFyZ2luOjBweCFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG5cclxuICAuY2xvc2VidXR0b257XHJcbiAgICB0b3A6IDRweCFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE3cHghaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiA0cHghaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMzJweCFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 1126:
/*!*************************************************************!*\
  !*** ./src/app/pages/filters-modal/filters-modal.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".bolde {\n  font-size: 20px;\n  font-weight: 800;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.range-md.range-has-pin {\n  padding-top: 0px !important;\n}\n\nion-label {\n  font-family: 'Poppins',sans-serif;\n  font-size: 16px;\n  margin: 3px 8px 3px 10px;\n}\n\n.modalFilter {\n  padding: 20px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcnMtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJmaWx0ZXJzLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2xkZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ucmFuZ2UtbWQucmFuZ2UtaGFzLXBpbiB7XHJcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiAzcHggOHB4IDNweCAxMHB4O1xyXG59XHJcblxyXG4ubW9kYWxGaWx0ZXIge1xyXG4gIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 84762:
/*!*******************************************!*\
  !*** ./src/app/pages/info/info.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 28781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".input-has-focus .item-inner {\n  border-bottom: none !important;\n  background: #f0b23e0e;\n  box-shadow: none !important;\n}\n\nion-header {\n  background-color: var(--ion-color-logo);\n}\n\n.item {\n  border-radius: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: relative;\n}\n\n.confirmation-modal {\n  position: absolute;\n  top: -200px;\n  background: white;\n  padding: 8px;\n  transition: all 0.8s;\n  right: 50%;\n  width: 100%;\n  transform: translate(50%);\n  border-radius: 5px;\n  box-shadow: -2px 10px 5px 0px #00000047;\n}\n\n.form-position {\n  position: absolute;\n  top: 57%;\n  padding: 10px;\n  width: 100%;\n  left: 0;\n  transform: translateY(-50%);\n  transition: all 0.8s;\n}\n\n.row {\n  border-radius: 20px;\n  margin: 10px 2px;\n  box-shadow: 1px 1px 9px -5px rgba(0, 0, 0, 0.9);\n}\n\n.item-md ion-icon[item-end] {\n  z-index: 999 !important;\n}\n\n.resetCreate {\n  text-align: right;\n}\n\n.reset-password-btn {\n  font-size: 10px;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\nion-toolbar {\n  font-family: 'Poppins', sans-serif;\n  color: white !important;\n  letter-spacing: -0.2px;\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bolder;\n  text-align: center !important;\n}\n\nion-content {\n  margin-top: 56px;\n  font-family: 'Poppins', 'Rubik', sans-serif !important;\n  --ion-background-color: #f5f5f5;\n  top: 0;\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  contain: layout size style;\n}\n\n.logoPosition {\n  width: 100%;\n  height: 100%;\n}\n\nion-avatar {\n  width: 200px;\n  height: 50px;\n  position: relative;\n  top: 10% !important;\n  right: -50%;\n  transform: translate(-50%, -50%);\n  transition: all 0.8s;\n}\n\n.form-position {\n  position: absolute;\n  top: 60%;\n  padding: 5px;\n  width: 100%;\n  left: 0px;\n  transform: translateY(-50%);\n  transition: all 0.8s;\n}\n\n.sidentifierGoogle {\n  margin: 0 auto 10px auto;\n  width: 300px;\n  color: #000;\n  border-radius: 50px;\n  --padding-start: 0;\n  box-shadow: 1px 1px 3px 0 black;\n  padding-right: 25px;\n  padding-left: 20px;\n}\n\n.sidentifierFacebook {\n  --padding-end: 0;\n  --padding-start: 0;\n  box-shadow: 1px 1px 3px 0 black;\n  padding-right: 25px;\n  padding-left: 20px;\n  background-color: #3b5998;\n  color: #fff;\n  margin: 60px auto 10px auto;\n  width: 300px;\n  border-radius: 50px;\n}\n\n.sidentifierGoogle ion-icon {\n  padding-right: 3px;\n  margin: 0;\n}\n\n.sidentifier {\n  overflow: hidden;\n  height: 36px;\n  /* font-size: 1.4rem; */\n  border-radius: 10px;\n  box-shadow: 1px 1px 3px 0 black;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #fff;\n  background-color: var(--ion-color-logo);\n}\n\n.email,\n.password {\n  position: relative;\n  margin: 10px 2px;\n  font-weight: normal;\n  text-transform: none;\n  color: #000;\n  background-color: #fff;\n  box-shadow: none;\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 20px;\n}\n\nion-title {\n  margin-left: -60px;\n  /* font-family: 'Poppins'; */\n  color: white !important;\n  letter-spacing: -0.2px;\n  padding: 4px 10px !important;\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center !important;\n}\n\nion-input {\n  border: 3px solid var(--ion-color-logo);\n  border-radius: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsMkJBQTJCO0FBQTdCOztBQUdBO0VBQ0UsdUNBQXVDO0FBQXpDOztBQVNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBTnBCOztBQVNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUVaLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsdUNBQXVDO0FBTnpDOztBQVNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixhQUFhO0VBQ2IsV0FBVztFQUNYLE9BQU87RUFDUCwyQkFBMkI7RUFDM0Isb0JBQW9CO0FBTnRCOztBQVNBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwrQ0FBK0M7QUFOakQ7O0FBU0E7RUFDRSx1QkFBdUI7QUFOekI7O0FBc0JBO0VBQ0UsaUJBQWlCO0FBbkJuQjs7QUFzQkE7RUFHRSxlQUFlO0VBQ2Ysa0JBQWdCO0VBQ2hCLGdCQUFjO0FBckJoQjs7QUEyQkE7RUFFRSxrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUF6Qi9COztBQTRCQTtFQUNFLGdCQUFnQjtFQUNoQixzREFBc0Q7RUFDdEQsK0JBQXVCO0VBQ3ZCLE1BQU07RUFDTixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCO0FBekI1Qjs7QUE0QkE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQXpCZDs7QUE0QkE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUVYLGdDQUFnQztFQUVoQyxvQkFBb0I7QUF6QnRCOztBQTRCQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBRVQsMkJBQTJCO0VBRTNCLG9CQUFvQjtBQXpCdEI7O0FBNEJBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFnQjtFQUVoQiwrQkFBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQTFCcEI7O0FBOEJBO0VBQ0UsZ0JBQWM7RUFDZCxrQkFBZ0I7RUFDaEIsK0JBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLG1CQUFtQjtBQTNCckI7O0FBK0JBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUE1Qlg7O0FBbUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix1QkFBQTtFQUNBLG1CQUFtQjtFQUNuQiwrQkFBMEM7RUFFMUMsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsdUNBQXVDO0FBakN6Qzs7QUFvQ0E7O0VBRUUsa0JBQWtCO0VBRWxCLGdCQUFnQjtFQUVoQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxzQkFBc0I7RUFFdEIsZ0JBQWdCO0VBRWhCLCtEQUErRDtFQUMvRCxtQkFBbUI7QUFuQ3JCOztBQXNDQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBQTtFQUNBLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBbkMvQjs7QUFzQ0E7RUFDRSx1Q0FBdUM7RUFDdkMsbUJBQW1CO0FBbkNyQiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmlucHV0LWhhcy1mb2N1cyAuaXRlbS1pbm5lciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICNmMGIyM2UwZTtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1sb2dvKTtcclxufVxyXG5cclxuLnRleHQtaW5wdXQtbWQge1xyXG4gIC8vQGluY2x1ZGUgcnRsKCkge1xyXG4gIC8vICBkaXJlY3Rpb246IHJ0bCAhaW1wb3J0YW50O1xyXG4gIC8vfVxyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb25maXJtYXRpb24tbW9kYWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0yMDBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC44cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC44cztcclxuICByaWdodDogNTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IC0ycHggMTBweCA1cHggMHB4ICMwMDAwMDA0NztcclxufVxyXG5cclxuLmZvcm0tcG9zaXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDU3JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG1hcmdpbjogMTBweCAycHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA5cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbn1cclxuXHJcbi5pdGVtLW1kIGlvbi1pY29uW2l0ZW0tZW5kXSB7XHJcbiAgei1pbmRleDogOTk5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vLmxvZ29Qb3NpdGlvbiB7XHJcbi8vICBtYXgtd2lkdGg6IDExOXB4O1xyXG4vLyAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgdG9wOiAyMSUgIWltcG9ydGFudDtcclxuLy8gIC8vQGluY2x1ZGUgcnRsKCkge1xyXG4vLyAgLy8gIHJpZ2h0OiA1MCUgIWltcG9ydGFudDtcclxuLy8gIC8vICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpICFpbXBvcnRhbnQ7XHJcbi8vICAvL31cclxuLy8gIHJpZ2h0OiAtNTAlO1xyXG4vLyAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xyXG4vLyAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbi8vICB0cmFuc2l0aW9uOiBhbGwgMC44cztcclxuLy99XHJcbi5yZXNldENyZWF0ZSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5yZXNldC1wYXNzd29yZC1idG4ge1xyXG4gIC8vanVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIC8vaGVpZ2h0OiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAvL3BhZGRpbmctbGVmdDogNXB4O1xyXG4gIC8vbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgLy9jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxvZ28pO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDU2cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgJ1J1YmlrJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgdG9wOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY29udGFpbjogbGF5b3V0IHNpemUgc3R5bGU7XHJcbn1cclxuXHJcbi5sb2dvUG9zaXRpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW9uLWF2YXRhciB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMCUgIWltcG9ydGFudDtcclxuICByaWdodDogLTUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC44cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC44cztcclxufVxyXG5cclxuLmZvcm0tcG9zaXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDYwJTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjhzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzO1xyXG59XHJcblxyXG4uc2lkZW50aWZpZXJHb29nbGUge1xyXG4gIG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLy8tLXBhZGRpbmctZW5kOiAwO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAxKTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuXHJcbn1cclxuXHJcbi5zaWRlbnRpZmllckZhY2Vib29rIHtcclxuICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IDYwcHggYXV0byAxMHB4IGF1dG87XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblxyXG59XHJcblxyXG4uc2lkZW50aWZpZXJHb29nbGUgaW9uLWljb257XHJcbiAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4vLy5zaWRlbnRpZmllckZhY2Vib29rIGlvbi1pY29uIHtcclxuLy8gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbi8vfVxyXG5cclxuXHJcbi5zaWRlbnRpZmllciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgLyogZm9udC1zaXplOiAxLjRyZW07ICovXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMSk7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbG9nbyk7XHJcbn1cclxuXHJcbi5lbWFpbCxcclxuLnBhc3N3b3JkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy9mb250LXNpemU6IDEuNnJlbTtcclxuICBtYXJnaW46IDEwcHggMnB4O1xyXG5cclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC02MHB4O1xyXG4gIC8qIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7ICovXHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcclxuICBwYWRkaW5nOiA0cHggMTBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1sb2dvKTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 64669:
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\n.scroll-content {\n  overflow: inherit !important;\n}\n.menu-footer {\n  background: var(--ion-color-logo) !important;\n  height: 100% !important;\n}\n.menu-footer ion-col {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 1.2rem;\n}\nion-header {\n  background-color: var(--ion-color-logo);\n}\nion-toolbar {\n  font-family: 'Poppins', sans-serif;\n  color: white !important;\n  letter-spacing: -0.2px;\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bolder;\n  text-align: center !important;\n}\n.header-search-logo {\n  transform: rotate(90deg);\n  font-size: xx-large;\n  padding-left: 2px;\n  position: relative;\n  top: 8px;\n}\n.bg {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  object-fit: cover;\n  z-index: -2;\n  opacity: 0.2;\n}\n.toolbar-title {\n  margin-left: 0 !important;\n}\n.menue-position {\n  padding-right: 54px;\n}\n.title {\n  padding-bottom: 5px;\n}\n.container {\n  width: 100%;\n  height: auto;\n  max-height: 90% !important;\n  top: 50%;\n  transform: translateY(50%);\n  transition: all 0.5s;\n}\n.container .locate-logo {\n  font-size: 2.5rem;\n  opacity: 0.8;\n  margin-top: 3px;\n}\n.container button {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  border-bottom-right-radius: 20px;\n  border-top-right-radius: 20px;\n  padding-left: 0 !important;\n  padding-bottom: 2px;\n}\n.container ion-input {\n  margin: 0 !important;\n  padding: 2px 10px !important;\n  max-height: 55px !important;\n  height: 100%;\n  background: #eee !important;\n  width: 100% !important;\n}\n.container .text-col {\n  padding: 0 !important;\n}\n.container .icon-col {\n  text-align: center;\n  padding: 0 !important;\n  border-bottom-left-radius: 20px;\n  border-top-left-radius: 20px;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.container .icon2-col {\n  padding: 0 !important;\n}\n.container .logo {\n  width: 135px;\n  text-align: center;\n  position: relative;\n  right: -50%;\n  display: flex;\n  transition: all 0.5s;\n  opacity: 0.9;\n  transform: translateX(-50%);\n  box-shadow: 7px 8px 14px -1px rgba(0, 0, 0, 0.14);\n}\n.container .logo-container {\n  text-align: center !important;\n}\n.container .text-btn {\n  margin-top: 1rem !important;\n  margin-left: 1.1rem !important;\n}\n.rowupdatelist {\n  width: 100% !important;\n  height: auto !important;\n  max-height: 90% !important;\n  overflow: scroll !important;\n}\n.focuscontain {\n  height: 100% !important;\n}\n.rowupdatefocus {\n  box-shadow: none !important;\n  border-radius: 20px !important;\n  width: 100% !important;\n}\n.rowupdatefocus .icon-col {\n  text-align: center;\n  padding-right: 0 !important;\n  border-bottom-left-radius: unset !important;\n  border-top-left-radius: unset !important;\n  background-color: white !important;\n}\n.rowupdatefocus .icon-col .locate-logo {\n  opacity: 0.5 !important;\n}\n.row-search {\n  box-shadow: 0 0 14px -1px #0000004a;\n  border-radius: 20px;\n  height: 30px;\n  width: 287px;\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.autocomplete {\n  height: auto;\n  max-height: 210px;\n  overflow: scroll;\n  box-shadow: 0 2px 9px -1px #00000046;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  width: 267px;\n  position: absolute !important;\n  left: 50%;\n  top: 76px;\n  transform: translateX(-50%);\n}\n.autocomplete .item {\n  background: transparent !important;\n}\n.text-input-md {\n  margin: 3px 0 !important;\n}\na[disabled], button[disabled], [ion-button][disabled] {\n  height: 30px !important;\n}\n.container button {\n  height: 35px !important;\n  border-radius: 7px;\n  padding: 17px !important;\n  font-weight: bolder;\n}\nion-footer {\n  height: 43px !important;\n}\n.footeralign {\n  width: 100%;\n  margin: 0 5px;\n}\n.leftside {\n  text-align: left;\n}\n.title {\n  display: inline-block;\n}\n.rightside {\n  text-align: right;\n  font-size: 18px;\n}\n.loggedname {\n  margin-bottom: 5px;\n  margin-left: 8px;\n  font-size: .8rem !important;\n  font-family: 'Poppins', 'Rubik', sans-serif !important;\n}\n.text-input-md {\n  text-align: center;\n}\n.left-bar::before {\n  content: \" \";\n  position: absolute;\n  top: 3px;\n  left: -3px;\n  height: 29px;\n  background: rgba(244, 244, 244, 0.35);\n  border-radius: 24px;\n  width: 3px;\n}\n#send {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  margin-top: 10px;\n}\n#send ion-button {\n  height: 90px !important;\n  width: 90px !important;\n  animation: shadowanimation 1.5s infinite;\n  /* 3 étapes */\n  border-radius: 50% !important;\n  --border-radius: 50% !important;\n  --background: var(--ion-color-logo);\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.657);\n}\n#send h4 {\n  margin: 0 !important;\n}\n@keyframes shadowanimation {\n  0% {\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.357);\n  }\n  100% {\n    box-shadow: 0 0 20px 30px rgba(131, 131, 131, 0);\n  }\n}\n.title-md {\n  position: absolute;\n  width: 100%;\n  left: 0px;\n  top: 50%;\n  transform: translateY(-50%) !important;\n  margin-left: -5px;\n  text-align: center;\n}\n.title-md .toolbar-title-md {\n  margin-left: 0px !important;\n}\n.toolbar-title-ios {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n.toolbar-title-ios .header-search-logo {\n  top: 2px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsNEJBQTRCO0FBRTlCO0FBQ0E7RUFDRSw0Q0FBNEM7RUFDNUMsdUJBQXVCO0FBRXpCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtBQUVuQjtBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDO0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7QUFHQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixRQUFRO0FBQVY7QUE2QkE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7QUExQmQ7QUE2QkE7RUFDRSx5QkFBeUI7QUExQjNCO0FBNkJBO0VBQ0UsbUJBQW1CO0FBMUJyQjtBQTZCQTtFQUNFLG1CQUFtQjtBQTFCckI7QUE2QkE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixRQUFRO0VBQ1IsMEJBQTBCO0VBQzFCLG9CQUFvQjtBQTFCdEI7QUE2QkE7RUFDRSxpQkFBaUI7RUFFakIsWUFBWTtFQUNaLGVBQWU7QUEzQmpCO0FBK0JBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBNUJyQjtBQWdDQTtFQUNFLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBN0J4QjtBQWtDQTtFQUNFLHFCQUFxQjtBQS9CdkI7QUFtQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsMENBQTBDO0FBaEM1QztBQW9DQTtFQUNFLHFCQUFxQjtBQWpDdkI7QUFxQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osMkJBQTJCO0VBSzNCLGlEQUFpRDtBQXRDbkQ7QUEwQ0E7RUFDRSw2QkFBNkI7QUF2Qy9CO0FBNENBO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQXpDaEM7QUE2Q0E7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUExQzdCO0FBNkNBO0VBQ0UsdUJBQXVCO0FBMUN6QjtBQTZDQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBMUN4QjtBQTZDQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsMkNBQTJDO0VBQzNDLHdDQUF3QztFQUN4QyxrQ0FBbUQ7QUExQ3JEO0FBNkNBO0VBQ0UsdUJBQXVCO0FBMUN6QjtBQThDQTtFQUNFLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULDJCQUEyQjtBQTNDN0I7QUE4Q0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsMkJBQTJCO0FBM0M3QjtBQWdDQTtFQWNJLGtDQUFrQztBQTFDdEM7QUFrREE7RUFDRSx3QkFBd0I7QUEvQzFCO0FBa0RBO0VBQ0UsdUJBQXVCO0FBL0N6QjtBQWtEQTtFQUVFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQWhEckI7QUFtREE7RUFDRSx1QkFBdUI7QUFoRHpCO0FBbURBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFoRGY7QUFtREE7RUFDRSxnQkFBZ0I7QUFoRGxCO0FBbURBO0VBQ0UscUJBQXFCO0FBaER2QjtBQW1EQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBaERqQjtBQW1EQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLHNEQUFzRDtBQWhEeEQ7QUF3REE7RUFDRSxrQkFBa0I7QUFyRHBCO0FBd0RBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUtWLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLFVBQVU7QUF6RFo7QUE0REE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBekRsQjtBQTZEQTtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsd0NBQXdDO0VBQUUsYUFBQTtFQUMxQyw2QkFBNkI7RUFDN0IsK0JBQWdCO0VBQ2hCLG1DQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLDBDQUEwQztBQXpENUM7QUE0REE7RUFDRSxvQkFBb0I7QUF6RHRCO0FBNkRBO0VBQ0U7SUFDRSx3Q0FBd0M7RUExRDFDO0VBNkRBO0lBQ0UsZ0RBQWdEO0VBM0RsRDtBQUNGO0FBdUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtFQUNSLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsa0JBQWtCO0FBcEVwQjtBQXVFQTtFQUNFLDJCQUEyQjtBQXBFN0I7QUF3RUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFyRWY7QUF3RUE7RUFDRSxtQkFBbUI7QUFyRXJCIiwiZmlsZSI6Im1hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uc2Nyb2xsLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4ubWVudS1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbG9nbykgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51LWZvb3RlciBpb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1sb2dvKTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItc2VhcmNoLWxvZ28ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOHB4O1xufVxuXG4uYmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgei1pbmRleDogLTI7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLnRvb2xiYXItdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4ubWVudWUtcG9zaXRpb24ge1xuICBwYWRkaW5nLXJpZ2h0OiA1NHB4O1xufVxuXG4udGl0bGUge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5jb250YWluZXIgLmxvY2F0ZS1sb2dvIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG9wYWNpdHk6IDAuODtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uY29udGFpbmVyIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cblxuLmNvbnRhaW5lciBpb24taW5wdXQge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4IDEwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogNTVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNlZWUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciAudGV4dC1jb2wge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIgLmljb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLmNvbnRhaW5lciAuaWNvbjItY29sIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIC5sb2dvIHtcbiAgd2lkdGg6IDEzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IC01MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBvcGFjaXR5OiAwLjk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYm94LXNoYWRvdzogN3B4IDhweCAxNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbn1cblxuLmNvbnRhaW5lciAubG9nby1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciAudGV4dC1idG4ge1xuICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxLjFyZW0gIWltcG9ydGFudDtcbn1cblxuLnJvd3VwZGF0ZWxpc3Qge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBzY3JvbGwgIWltcG9ydGFudDtcbn1cblxuLmZvY3VzY29udGFpbiB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ucm93dXBkYXRlZm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnJvd3VwZGF0ZWZvY3VzIC5pY29uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ucm93dXBkYXRlZm9jdXMgLmljb24tY29sIC5sb2NhdGUtbG9nbyB7XG4gIG9wYWNpdHk6IDAuNSAhaW1wb3J0YW50O1xufVxuXG4ucm93LXNlYXJjaCB7XG4gIGJveC1zaGFkb3c6IDAgMCAxNHB4IC0xcHggIzAwMDAwMDRhO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAyODdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmF1dG9jb21wbGV0ZSB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMjEwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDlweCAtMXB4ICMwMDAwMDA0NjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAyNjdweDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA3NnB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi5hdXRvY29tcGxldGUgLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1pbnB1dC1tZCB7XG4gIG1hcmdpbjogM3B4IDAgIWltcG9ydGFudDtcbn1cblxuYVtkaXNhYmxlZF0sIGJ1dHRvbltkaXNhYmxlZF0sIFtpb24tYnV0dG9uXVtkaXNhYmxlZF0ge1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciBidXR0b24ge1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmlvbi1mb290ZXIge1xuICBoZWlnaHQ6IDQzcHggIWltcG9ydGFudDtcbn1cblxuLmZvb3RlcmFsaWduIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5sZWZ0c2lkZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnJpZ2h0c2lkZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5sb2dnZWRuYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBmb250LXNpemU6IC44cmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsICdSdWJpaycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuLnRleHQtaW5wdXQtbWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sZWZ0LWJhcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IC0zcHg7XG4gIGhlaWdodDogMjlweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDQsIDI0NCwgMjQ0LCAwLjM1KTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgd2lkdGg6IDNweDtcbn1cblxuI3NlbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jc2VuZCBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA5MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogc2hhZG93YW5pbWF0aW9uIDEuNXMgaW5maW5pdGU7XG4gIC8qIDMgw6l0YXBlcyAqL1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbG9nbyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCA3cHggMCByZ2JhKDAsIDAsIDAsIDAuNjU3KTtcbn1cblxuI3NlbmQgaDQge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBzaGFkb3dhbmltYXRpb24ge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDAuMzU3KTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAzMHB4IHJnYmEoMTMxLCAxMzEsIDEzMSwgMCk7XG4gIH1cbn1cblxuLnRpdGxlLW1kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZS1tZCAudG9vbGJhci10aXRsZS1tZCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRvb2xiYXItdGl0bGUtaW9zIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50b29sYmFyLXRpdGxlLWlvcyAuaGVhZGVyLXNlYXJjaC1sb2dvIHtcbiAgdG9wOiAycHggIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 43436:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".input-has-focus .item-inner {\n  border-bottom: none !important;\n  background: #f0b23e0e;\n  box-shadow: none !important;\n}\n\nion-avatar {\n  width: 200px;\n  height: 50px;\n  position: relative;\n  top: 5% !important;\n  right: -50%;\n  transform: translate(-50%, -50%);\n  transition: all 0.8s;\n}\n\nion-item {\n  padding-left: 10px;\n  padding-right: 10px;\n  position: relative;\n}\n\nion-input {\n  border: 3px solid var(--ion-color-logo);\n  border-radius: 15px;\n}\n\n.no-margin {\n  margin-bottom: 0px !important;\n}\n\n.custom-col {\n  margin: 10px 2px;\n  box-shadow: 1px 1px 9px -5px rgba(0, 0, 0, 0.9);\n}\n\n.item-md ion-icon[item-end] {\n  z-index: 999 !important;\n}\n\n.firstCHild {\n  position: relative;\n  margin: 10px 2px;\n  font-weight: normal;\n  text-transform: none;\n  color: #000;\n  box-shadow: none;\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 20px;\n}\n\n.firstCHild ion-col {\n  box-shadow: none;\n  margin-bottom: 0;\n  background-color: #fff;\n  border-radius: 20px;\n}\n\nion-row:not(:first-child) {\n  position: relative;\n  margin: 10px 2px;\n  font-weight: normal;\n  text-transform: none;\n  color: #000;\n  background-color: #fff;\n  box-shadow: none;\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 20px;\n}\n\n.iconPassword {\n  margin: 9px 8px 9px 0;\n  align-content: center;\n  position: relative;\n  font-size: 1.5em;\n  line-height: 1;\n  display: block;\n}\n\nion-title {\n  margin-left: -60px;\n  /* font-family: 'Poppins'; */\n  color: white !important;\n  letter-spacing: -0.2px;\n  padding: 4px 10px !important;\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center !important;\n}\n\n.colShowPassword {\n  margin-left: -50px;\n}\n\n.btnFacebook {\n  width: 300px;\n  margin: 35px auto 0;\n  --background: #3b5998;\n  color: #fff;\n  box-shadow: 1px 1px 3px 0 black;\n  border-radius: 50px;\n}\n\n.btnGoogle {\n  width: 300px;\n  color: #000;\n  box-shadow: 1px 1px 3px 0 black;\n  margin: 15px auto 0;\n  border-radius: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFFWCxnQ0FBZ0M7RUFFaEMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFFRSx1Q0FBdUM7RUFDdkMsbUJBQW1CO0FBQXJCOztBQVFBO0VBQ0UsNkJBQTZCO0FBTC9COztBQVFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLCtDQUErQztBQUxqRDs7QUFRQTtFQUNFLHVCQUF1QjtBQUx6Qjs7QUFRQTtFQUVFLGtCQUFrQjtFQUVsQixnQkFBZ0I7RUFFaEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixXQUFXO0VBRVgsZ0JBQWdCO0VBRWhCLCtEQUErRDtFQUMvRCxtQkFBbUI7QUFSckI7O0FBV0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFSckI7O0FBV0E7RUFDRSxrQkFBa0I7RUFFbEIsZ0JBQWdCO0VBRWhCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHNCQUFzQjtFQUV0QixnQkFBZ0I7RUFFaEIsK0RBQStEO0VBQy9ELG1CQUFtQjtBQVZyQjs7QUFhQTtFQUVFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBRWxCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztBQVpoQjs7QUFlQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBQTtFQUNBLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBWi9COztBQW1CQTtFQUNFLGtCQUFrQjtBQWhCcEI7O0FBbUJBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBYTtFQUNiLFdBQVc7RUFDWCwrQkFBMEM7RUFDMUMsbUJBQW1CO0FBaEJyQjs7QUFvQkE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLCtCQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBakJyQiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtaGFzLWZvY3VzIC5pdGVtLWlubmVyIHtcclxuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2YwYjIzZTBlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWF2YXRhciB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1JSAhaW1wb3J0YW50O1xyXG4gIHJpZ2h0OiAtNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjhzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG5cclxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbG9nbyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLy8gLnJvd3tcclxuLy8gICAgIG1hcmdpbjogMTBweCAycHg7XHJcbi8vICAgICBib3gtc2hhZG93OiAxcHggMXB4IDlweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuLy8gfVxyXG5cclxuLm5vLW1hcmdpbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tY29sIHtcclxuICBtYXJnaW46IDEwcHggMnB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggOXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG59XHJcblxyXG4uaXRlbS1tZCBpb24taWNvbltpdGVtLWVuZF0ge1xyXG4gIHotaW5kZXg6IDk5OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmlyc3RDSGlsZCB7XHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvL2ZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIG1hcmdpbjogMTBweCAycHg7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5maXJzdENIaWxkIGlvbi1jb2wge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1yb3c6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvL2ZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIG1hcmdpbjogMTBweCAycHg7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmljb25QYXNzd29yZCB7XHJcblxyXG4gIG1hcmdpbjogOXB4IDhweCA5cHggMDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAtNjBweDtcclxuICAvKiBmb250LWZhbWlseTogJ1BvcHBpbnMnOyAqL1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XHJcbiAgcGFkZGluZzogNHB4IDEwcHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bkNvbmZpcm0ge1xyXG5cclxufVxyXG5cclxuLmNvbFNob3dQYXNzd29yZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IC01MHB4O1xyXG59XHJcblxyXG4uYnRuRmFjZWJvb2sge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBtYXJnaW46IDM1cHggYXV0byAwO1xyXG4gIC0tYmFja2dyb3VuZDogIzNiNTk5ODtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuXHJcbn1cclxuXHJcbi5idG5Hb29nbGUge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgbWFyZ2luOiAxNXB4IGF1dG8gMDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 55479:
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".scroll-content::before {\n  opacity: .1;\n}\n\n.item {\n  background: transparent;\n}\n\n.notifications-settings {\n  padding: 10px;\n  border: 2px solid #a358a3;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n}\n\n.notifications-settings-header {\n  margin-top: 20px;\n  font-size: 20px;\n  padding: 5px 10px;\n  background: #a358a3;\n  color: #ffffff;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n}\n\nion-select {\n  max-width: none !important;\n}\n\nion-select .select-icon {\n  position: absolute;\n  right: 9px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQVc7QUFBZjs7QUFHRTtFQUNFLHVCQUF1QjtBQUEzQjs7QUFHRTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLCtCQUErQjtBQUFuQzs7QUFHRTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUFoQzs7QUFHRTtFQUNFLDBCQUF3QjtBQUE1Qjs7QUFERTtFQUdNLGtCQUFrQjtFQUNsQixxQkFBb0I7QUFFNUIiLCJmaWxlIjoic2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLnNjcm9sbC1jb250ZW50OjpiZWZvcmUge1xyXG4gICAgb3BhY2l0eTogLjE7XHJcbiAgfVxyXG5cclxuICAuaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC5ub3RpZmljYXRpb25zLXNldHRpbmdzIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYTM1OGEzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcclxuICB9XHJcblxyXG4gIC5ub3RpZmljYXRpb25zLXNldHRpbmdzLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTM1OGEzO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNhMzU4YTM7XHJcbiAgfVxyXG4gIGlvbi1zZWxlY3R7XHJcbiAgICBtYXgtd2lkdGg6bm9uZSFpbXBvcnRhbnQ7XHJcbiAgICAuc2VsZWN0LWljb257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA5cHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 3823:
/*!***************************************************************!*\
  !*** ./src/app/pages/sub-categories/sub-categories.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".scroll-content {\n  overflow: scroll !important;\n}\n\n.closebutton {\n  top: 4px !important;\n  font-size: 17px !important;\n  border-radius: 50% !important;\n  right: 4px !important;\n  color: white !important;\n  width: 32px !important;\n  height: 32px !important;\n}\n\n.item:last-child .item-inner {\n  border: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi1jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUVJLHVCQUF1QjtBQUEzQiIsImZpbGUiOiJzdWItY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsLWNvbnRlbnQge1xyXG4gIG92ZXJmbG93OiBzY3JvbGwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNsb3NlYnV0dG9uIHtcclxuICB0b3A6IDRweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gIHJpZ2h0OiA0cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMzJweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbTpsYXN0LWNoaWxkIHtcclxuICAuaXRlbS1pbm5lciB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <app-side-menu\r\n    *ngIf=\"appConfig.userSettings.language != 'ar'\"\r\n    (onFireMethod)=\"fireMethod($event)\"\r\n    side=\"left\"\r\n  ></app-side-menu>\r\n\r\n  <app-side-menu\r\n    (onFireMethod)=\"fireMethod($event)\"\r\n    *ngIf=\"appConfig.userSettings.language == 'ar'\"\r\n    side=\"right\"\r\n  ></app-side-menu>\r\n\r\n  <div class=\"custom-popup\" [@pushNotifAnimation] *ngIf=\"showPushNotification\" #customCard>\r\n    <div class=\"notification-content\" (click)=\"gotoTarget(notify)\">\r\n      <!--<div (click)=\"closenotif()\" class=\"animated fadeIn closenotifbtn\" [style.animation-delay]=\"'1500ms'\">\r\n        <ion-icon name=\"close\">\r\n        </ion-icon>\r\n      </div>-->\r\n      <ion-item *ngFor=\"let notify of notifys\">\r\n        <ion-avatar item-start>\r\n          <img [src]=\"notify.product?.src || 'assets/imgs/icon.png'\">\r\n        </ion-avatar>\r\n        <h2>{{notify.product?.title}}</h2>\r\n        <p>{{notify.product?.description}}</p>\r\n      </ion-item>\r\n    </div>\r\n  </div>\r\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  <app-footer></app-footer>\r\n</ion-app>\r\n");

/***/ }),

/***/ 91176:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-list/categories-list.component.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-list id=\"subCategorylist\" class=\"subitems\" id=\"mycontent\">\r\n  <div class=\"categories-row\">\r\n    <div  class=\"category-class\"\r\n         *ngFor=\"let category of categories;let i=index\">\r\n      <div class=\"middle middlecontent\"  (click)=\"showSubcategories(category)\">\r\n        <ion-icon name=\"{{category.icon}}\"></ion-icon>\r\n        <h3 class=\"cat-subtitle\">{{category.title}}</h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-list>\r\n");

/***/ }),

/***/ 32891:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-slider/categories-slider.component.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"ion-align-items-baseline ion-margin-horizontal rowCategories\">\r\n  <ion-col size=\"9\">\r\n    <!-- <p color=\"logo\">Catégories</p> -->\r\n  </ion-col>\r\n  <ion-col size=\"3\" class=\"colVoirTout\">\r\n    <!-- <a (click)=\"goProducts()\">Voir tout\r\n      <span>({{categories?.length}})</span>\r\n    </a> -->\r\n  </ion-col>\r\n</ion-row>\r\n<ion-slides class=\"slidesCategories\" [options]=\"slideOpts\">\r\n  <ion-slide *ngFor=\"let item of categories\">\r\n    <ion-row class=\"itemSlide\" (click)=\"showSubcategories(item)\">\r\n      <ion-icon [name]=\"item?.icon\" size=\"large\"></ion-icon>\r\n      <p>{{item?.title}}</p>\r\n    </ion-row>\r\n  </ion-slide>\r\n</ion-slides>\r\n");

/***/ }),

/***/ 32517:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-footer *ngIf=\"!(insideChat !== false || service.isLoggedIn !==true)\">\r\n  <ion-row  class=\"animated fadeInDown add-custom-menue\">\r\n    <ion-col  size=\"2\" class=\"has-left-bar-footer contact-font \" (click)=\"gotToProducts()\">\r\n      <ion-icon name=\"home-sharp\"></ion-icon>\r\n      <ion-badge id=\"notifications-badge\" color=\"danger\"></ion-badge>\r\n    </ion-col>\r\n    <ion-col  size=\"2\" class=\"has-left-bar-footer contact-font \"   (click)=\"gotToDiscussion()\" clear>  \r\n      <ion-icon name=\"chatbox\"></ion-icon>\r\n      <ion-badge id=\"notifications-badge\" color=\"danger\">{{messageNotificationBadge}}</ion-badge>\r\n    </ion-col>\r\n    <ion-col size=\"2\" class=\"has-left-bar-footer contact-font \" (click)=\"gotTofavorites()\">\r\n      <ion-icon name=\"heart-sharp\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"2\" class=\"has-left-bar-footer contact-font \" (click)=\"gotToRecherche()\">\r\n      <ion-icon name=\"search-sharp\"></ion-icon>\r\n      <ion-badge id=\"notifications-badge\" color=\"danger\">{{productNotificationBadge}}</ion-badge>\r\n    </ion-col>\r\n    <ion-col size=\"2\" class=\"has-left-bar-footer contact-font\" (click)=\"gotToAddProduct()\">\r\n      <ion-icon name=\"add-circle-sharp\"></ion-icon>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 97911:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"logo\">\r\n    <ion-buttons slot=\"start\" >\r\n      <ion-icon name=\"close-circle-sharp\" [hidden]=\"!isModal\" class=\"close\" (click)=\"close()\"></ion-icon>\r\n      <ion-menu-button [hidden]=\"!isMenu\"></ion-menu-button>\r\n      <ion-back-button [hidden]=\"!isBack\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n      <ion-title [hidden]=\"!isLogo\">\r\n        <ion-icon class=\"header-search-logo\" name=\"search\"></ion-icon>\r\n        {{'app.name'|translate}}\r\n      </ion-title>\r\n    <ion-searchbar [hidden]=\"!isSearch\" [placeholder]=\"(category?.title || 'suivi.what_search'|translate)\"\r\n                   (ionInput)=\"getdatfromdateBase($event)\"></ion-searchbar>\r\n    <ion-buttons  slot=\"end\">\r\n      <ion-button (click)=\"openfilter()\" [hidden]=\"!isFiltered\">\r\n        <ion-icon name=\"options\">\r\n        </ion-icon>\r\n      </ion-button>\r\n<!--      <ion-button class=\"left-bar\" (click)=\"openPopOver($event)\"   [hidden]=\"!isProfile\">-->\r\n<!--        <ion-icon name=\"person-sharp\"></ion-icon>-->\r\n<!--      </ion-button>-->\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n");

/***/ }),

/***/ 88085:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings-pop-over/settings-pop-over.component.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content scrollY=\"false\">\r\n  <ion-row (click)=\"goProfile()\" *ngIf=\"services.isLoggedIn\">\r\n    <ion-col size=\"3\" class=\" ion-align-self-center\">\r\n      <ion-icon name=\"person\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n      <p class=\"loggedname\">{{services?.current_user?.last_name}}</p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"services.isLoggedIn\">\r\n    <ion-col size=\"2\" class=\"\" (click)=\"fireMethod('logout')\">\r\n      <ion-icon name=\"log-out-outline\" color=\"primary\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"10\">\r\n      <ion-label color=\"dark\">{{'menu.Deconnexion'|translate}}</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"!services.isLoggedIn\" (click)=\"fireMethod('goto', 'login')\">\r\n    <ion-col size=\"2\" class=\"\">\r\n      <ion-icon name=\"key-outline\" color=\"primary\"></ion-icon>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"10\">\r\n      <ion-label color=\"dark\">{{'menu.identifier'|translate}}</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"!services.isLoggedIn\" (click)=\"fireMethod('goto', 'register')\">\r\n    <ion-col size=\"2\">\r\n      <ion-icon name=\"log-in\" color=\"primary\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"10\">\r\n      <ion-label color=\"dark\">{{'menu.enregistrer'|translate}}</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ 83987:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-menu/side-menu.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-menu contentId=\"main-content\" menuId=\"first\" swipeEnabled=\"false\" side=\"start\" swipeGesture=\"false\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"logo\">\r\n      <ion-title></ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-icon name=\"close\" class=\"close\" (click)=\"goto('home')\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <div class=\"logo-container\">\r\n    <img src=\"assets/imgs/icon.png\"/>\r\n  </div>\r\n  <ion-content>\r\n    <!--<div class=\"separator\"></div>\r\n    <div class=\"headerBar\">\r\n      <div class=\"logoback\"></div>\r\n      <div class=\"logoContainer\">\r\n        <img src=\"assets/imgs/icon.png\" />\r\n      </div>\r\n    </div>-->\r\n    <!--<ion-icon name=\"close\" class=\"animated fadeIn closebutton\" ></ion-icon>-->\r\n    <ion-list class=\"ion-margin-top\">\r\n<!--      <ion-item (click)=\"goto('map')\">-->\r\n<!--        <ion-icon color=\"primary\" name=\"home\" slot=\"start\"></ion-icon>-->\r\n<!--        <ion-label>{{'menu.acceuil'|translate}}</ion-label>-->\r\n<!--      </ion-item>-->\r\n      <ion-item (click)=\"goto('products')\">\r\n        <ion-icon color=\"primary\" name=\"list-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label color=\"dark\">{{'menu.Toutes_les_annonces'|translate}}</ion-label>\r\n      </ion-item>\r\n<!--      <ion-item id=\"subCategoryBtn\" (click)=\"showrow = !showrow\">-->\r\n\r\n<!--        <ion-icon color=\"primary\" name=\"list\" slot=\"start\"></ion-icon>-->\r\n<!--        <ion-label color=\"dark\">{{'menu.Categories'|translate}}</ion-label>-->\r\n<!--        <ion-icon [class.rotate-icon]=\"showrow\" class=\"showRow\" item-end name=\"arrow-forward\"></ion-icon>-->\r\n<!--        &lt;!&ndash;<ion-icon *ngIf=\"!showrow\" class=\"showRowDown\" item-end name=\"md-arrow-dropdown\"></ion-icon>&ndash;&gt;-->\r\n<!--      </ion-item>-->\r\n<!--      <app-categories-list-->\r\n<!--        (categoryClick)=\"fireMethod('openCategoryModal', $event)\"-->\r\n<!--        [isVisible]=\"showrow\">-->\r\n<!--      </app-categories-list>-->\r\n      <!-- <ion-item *ngIf=\"services.isLoggedIn\" (click)=\"fireMethod('goto', 'favorites')\">\r\n        <ion-icon name=\"star\" slot=\"start\" color=\"primary\"></ion-icon>\r\n        <ion-label color=\"dark\">{{'menu.Mes_favoris'|translate}}</ion-label>\r\n      </ion-item> -->\r\n\r\n      <ion-item *ngIf=\"services.isLoggedIn\" (click)=\"fireMethod('goto', 'suivi')\">\r\n        <ion-icon name=\"locate-outline\" slot=\"start\" color=\"primary\"></ion-icon>\r\n        <ion-label color=\"dark\">{{'menu.Recherche'|translate}}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"services.isLoggedIn\" (click)=\"fireMethod('goto', 'finders')\">\r\n        <ion-icon name=\"search\" slot=\"start\" color=\"primary\"></ion-icon>\r\n        <ion-label color=\"dark\">{{'menu.Mes_recherches'|translate}}</ion-label>\r\n      </ion-item>\r\n\r\n      <!-- <ion-item *ngIf=\"services.isLoggedIn\"\r\n                (click)=\"fireMethod('goto', 'add-product')\">\r\n        <ion-icon name=\"create-outline\" slot=\"start\" color=\"primary\"></ion-icon>\r\n        <ion-label color=\"dark\">{{'menu.Creer_annonce'|translate}}</ion-label>\r\n      </ion-item> -->\r\n\r\n      <ion-item *ngIf=\"services.isLoggedIn\" (click)=\"fireMethod('goto','mes-annonces')\">\r\n        <ion-icon name=\"albums-outline\" slot=\"start\" color=\"primary\"></ion-icon>\r\n        <ion-label color=\"dark\">{{'menu.Mes_annonces'|translate}}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"!services.isLoggedIn\" (click)=\"fireMethod('goto', 'login')\">\r\n        <ion-icon name=\"key-outline\" slot=\"start\" color=\"primary\"></ion-icon>\r\n        <ion-label color=\"dark\">{{'menu.identifier'|translate}}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"!services.isLoggedIn\" (click)=\"fireMethod('goto', 'register')\">\r\n        <ion-icon name=\"log-in\" slot=\"start\" color=\"primary\"></ion-icon>\r\n        <ion-label color=\"dark\">{{'menu.enregistrer'|translate}}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"services.isLoggedIn\" (click)=\"fireMethod('logout')\">\r\n        <ion-icon name=\"log-out\" slot=\"start\" color=\"primary\"></ion-icon>\r\n        <ion-label color=\"dark\">{{'menu.Deconnexion'|translate}}</ion-label>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"services.isLoggedIn\" (click)=\"profileEdit()\">\r\n        <ion-icon name=\"person\" slot=\"start\" color=\"primary\"></ion-icon>\r\n        <ion-label color=\"dark\">{{services.current_user.last_name}}</ion-label>\r\n      </ion-item>\r\n      <!--<ion-button (click)=\"fireMethod('openLangModal')\" ion-item  >\r\n        <ion-icon name=\"md-globe\" slot=start color=\"primary\"></ion-icon>\r\n        <ion-label color=\"dark\">{{'settings.lang'|translate}}</ion-label>\r\n      </button>-->\r\n      <!-- <ion-item (click)=\"fireMethod('openInfoModal')\">\r\n        <ion-icon name=\"information-circle-outline\" slot=\"start\" color=\"primary\"></ion-icon>\r\n        <ion-label color=\"dark\">{{'menu.Info'|translate}}</ion-label>\r\n      </ion-item> -->\r\n      <ion-item (click)=\"openModal()\">\r\n        <ion-icon name=\"information-circle-outline\" slot=\"start\" color=\"primary\"></ion-icon>\r\n        <ion-label color=\"dark\">{{'menu.Info'|translate}}</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n");

/***/ }),

/***/ 41463:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slideup/slideup.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"logo\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"close()\">\r\n        <ion-icon name=\"close-sharp\" slot=\"icon-only\" ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"ion-text-capitalize\">\r\n      {{currentProduct?.title}}\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"scrollToBottom()\">\r\n        <ion-icon *ngIf=\"showways\" style=\"color:#67c1c2!important;\" name=\"logo-steam\"></ion-icon>\r\n        <ion-icon *ngIf=\"!showways\" style=\"color:#67c1c2!important;\" name=\"trending-up-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- Start Main Page -->\r\n  <div class=\"main ion-padding\" >\r\n<!--    <ion-item>-->\r\n<!--      <ion-label>{{'details.Category'|translate}} </ion-label>-->\r\n<!--      <span class=\"cat-title\" >-->\r\n<!--        {{currentProduct?.subcategory?.category?.title}} &nbsp;/&nbsp;{{currentProduct?.subcategory?.title}}-->\r\n<!--      </span>-->\r\n<!--    </ion-item>-->\r\n<!--    <ion-item>-->\r\n<!--      <ion-label>{{'details.Description'|translate}} </ion-label>-->\r\n<!--      <ion-label class=\"product-description\">-->\r\n<!--        {{currentProduct?.description}}-->\r\n<!--      </ion-label>-->\r\n<!--    </ion-item>-->\r\n<!--    <ion-item *ngFor=\"let property of currentProduct?.properties;let i=index;\">-->\r\n<!--      <ion-label>{{property.property}}</ion-label>-->\r\n<!--      <ion-label>{{property.value}}</ion-label>-->\r\n<!--    </ion-item>-->\r\n<!--    <h3 class=\"category-title\">-->\r\n<!--      <span>{{'details.current_location'|translate}}</span>-->\r\n<!--    </h3>-->\r\n  </div>\r\n\r\n  <ion-card [class.hiden-ways]=\"!showways\">\r\n    <ion-card-content>\r\n      <div #directionsPanel></div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div #map id=\"map\">\r\n    <!--    <ion-spinner></ion-spinner>-->\r\n  </div>\r\n  <div class=\"over-map\"></div>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ 37180:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confidentialite/confidentialite.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\r\n  Generated template for the ConfidentialitePage page.\r\n\r\n  See http://ionicframework.com/docs/components/#navigation for more info on\r\n  Ionic pages and navigation.\r\n-->\r\n<ion-header>\r\n\r\n  <ion-toolbar  color=\"logo\">\r\n    <ion-title>\r\n      {{'confidentialite.title'|translate}}\r\n    </ion-title>\r\n    <ion-buttons  side=\"end\">\r\n      <ion-button (click)=\"closeModal()\" >\r\n        <ion-icon class=\"close-modal\" name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding>\r\n  <p class=\"paragraph\">\r\n    {{'confidentialite.text'|translate}}\r\n  </p>\r\n</ion-content>\r\n");

/***/ }),

/***/ 20518:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/custom-card/custom-card.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card class=\"animated bounceIn contact-card\">\r\n  <ion-icon name=\"close\" class=\"animated fadeIn closebutton\" (click)=\"cancel()\"></ion-icon>\r\n  <ion-item>\r\n    <ion-avatar item-start>\r\n      <img [src]=\"notify.product.src\">\r\n    </ion-avatar>\r\n    <h2>{{notify.product.title}}</h2>\r\n    <p>{{notify.product.description}}</p>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-icon name=\"ios-contact-outline\" item-start large ></ion-icon>\r\n    <h2>{{profile?.name}}</h2>\r\n    <p>{{profile?.email}}</p>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-icon name=\"md-phone-portrait\" item-start large ></ion-icon>\r\n    <h2>{{profile?.phone}}</h2>\r\n  </ion-item>\r\n  <ion-item>\r\n    <span item-start>({{notify.product.price}} €)</span>\r\n    <span item-start>{{notify.product.visitor}} v</span>\r\n    <ion-button (click)=\"dialCall()\"  slot=\"start\"   fill=\"clear\" item-end>\r\n      <ion-icon name=\"call\"></ion-icon>\r\n      {{'custom_card.appel'|translate}}\r\n    </ion-button>\r\n\r\n    <ion-button (click)=\"SendSms()\"  slot=\"start\" fill=\"clear\" item-end>\r\n      <ion-icon name=\"chatbubbles\"></ion-icon>\r\n      {{'custom_card.sms'|translate}}\r\n    </ion-button>\r\n  </ion-item>\r\n</ion-card>\r\n");

/***/ }),

/***/ 85376:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filters-modal/filters-modal.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modalFilter\">\r\n  <!--<ion-content>-->\r\n  <ion-list>\r\n\r\n    <ion-item>\r\n      <ion-icon name=\"map-outline\"></ion-icon>\r\n      <ion-label>{{'filter.par_distance'|translate}}</ion-label>\r\n      <ion-toggle (ionChange)=\"distanceSelect($event)\" [(ngModel)]=\"filter.distance\"></ion-toggle>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"animated fadeIn\" *ngIf=\"filter.distance\">\r\n      <ion-range dualKnobs=\"true\" pin=\"true\" step=\"5\" [(ngModel)]=\"structure\" color=\"secondary\" max=\"500\">\r\n        <span range-left class=\"small\">{{structure.lower}}</span>\r\n        <span range-right class=\"bolde\">{{structure.upper}}</span>\r\n      </ion-range>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon name=\"cash-outline\"></ion-icon>\r\n      <ion-label>{{'filter.par_prix'|translate}}</ion-label>\r\n      <ion-toggle (ionChange)=\"priceSelect($event)\" [(ngModel)]=\"filter.price\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"calendar-outline\"></ion-icon>\r\n      <ion-label>{{'filter.par_date'|translate}}</ion-label>\r\n      <ion-toggle (ionChange)=\"dateSelect($event)\" [(ngModel)]=\"filter.date\"></ion-toggle>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-row>\r\n    <ion-col size=\"6\">\r\n      <ion-button (click)=\"filtred()\" >\r\n        <ion-icon name=\"thumbs-up-outline\"></ion-icon>\r\n        {{'filter.Filtrer'|translate}}\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-button  (click)=\"dismiss()\" >\r\n        <ion-icon name=\"arrow-undo-outline\"></ion-icon>\r\n        {{'filter.Annuler'|translate}}\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!--</ion-content>-->\r\n\r\n</div>\r\n");

/***/ }),

/***/ 24258:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/info/info.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\r\n  <ion-toolbar  color=\"logo\">\r\n    <ion-title>\r\n      {{'info.title'|translate}}\r\n    </ion-title>\r\n    <ion-buttons  slot=\"primary\">\r\n      <ion-button (click)=\"closeModal()\" >\r\n        <ion-icon class=\"close-modal\" name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 31021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"logo\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{'login.title'|translate}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-avatar>\r\n    <img src=\"../assets/imgs/oat.png\" class=\"logoPosition\"/>\r\n  </ion-avatar>\r\n  <div #mailConfirmation class=\"confirmation-modal\">\r\n    <h3>{{'login.send_success'|translate}}</h3>\r\n    <p>{{'login.send_info'|translate}}</p>\r\n  </div>\r\n  <form class=\"form-position\" [formGroup]=\"loginForm\">\r\n    <ion-row class=\"email\">\r\n      <ion-col>\r\n        <ion-input formControlName=\"email\" type=\"email\"\r\n                   placeholder=\"{{'login.email'|translate}}\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div *ngIf=\"(!loginForm.controls.email.valid && (loginForm.controls.email.dirty || submitReg))\"\r\n         class=\"erreurMsg\">\r\n      <span>{{'errors.email_validation'|translate}}</span>\r\n    </div>\r\n\r\n    <ion-row class=\"password\">\r\n      <ion-col>\r\n        <ion-input formControlName=\"password\" type=\"password\"\r\n                   placeholder=\"{{'login.password'|translate}}\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div *ngIf=\"(!loginForm.controls.password?.valid && (loginForm.controls.password?.dirty || submitReg))\"\r\n         class=\"erreurMsg\">&nbsp;\r\n      <span *ngIf=\"loginForm.hasError('minlength',['password'])\">{{'errors.min-length.8'|translate}}</span>\r\n      <span *ngIf=\"loginForm.hasError('required',['password'])\">{{'errors.required_password'|translate}}</span>\r\n      &nbsp;\r\n    </div>\r\n    <ion-row class=\" ion-justify-content-between\">\r\n      <ion-col class=\"resetCol\" size=\"6\">\r\n        <ion-button (click)=\"resetPassword()\" type=\"button\" class=\"reset-password-btn\" fill=\"clear\"\r\n        >{{'login.reset'|translate}}</ion-button>\r\n      </ion-col>\r\n      <ion-col class=\"resetCreate\" size=\"6\">\r\n        <ion-button [routerLink]=\"('/register')\" type=\"button\" class=\"reset-password-btn\" fill=\"clear\"\r\n        >{{'login.create_account'|translate}}</ion-button>\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n    <ion-button class=\"sidentifier\" (click)=\"userLogin()\" [disabled]=\"loginForm.invalid\" type=\"submit\"                 expand=\"full\" fill=\"clear\">\r\n      <ion-icon name=\"checkmark\"></ion-icon>\r\n      {{'login.title'|translate}}\r\n    </ion-button>\r\n    <!-- <ion-button shape=\"round\" class=\"sidentifierFacebook \" (click)=\"userLogin()\" type=\"button\" expand=\"full\"\r\n                fill=\"clear\">\r\n      <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\r\n      {{'login.connect_facebook'|translate}}\r\n    </ion-button>\r\n    <ion-button shape=\"round\" class=\"sidentifierGoogle\" (click)=\"userLogin()\" type=\"button\" expand=\"full\" fill=\"clear\">\r\n      <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>\r\n      {{'login.connect_google'|translate}}\r\n    </ion-button> -->\r\n\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ 83892:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [isProfile]=\"true\" [isMenu]=\"true\"></app-header>\r\n\r\n\r\n<ion-content>\r\n  <div class=\"container\" #mainContainer>\r\n    <ion-col class=\"logo-container\" size=\"col-12\">\r\n      <img class=\"logo\" src=\"../../../assets/imgs/icon.png\" #logo/>\r\n    </ion-col>\r\n    <ion-row [class.rowupdatefocus]=\"focused\" class=\"ion-justify-content-center\">\r\n      <!-- <ion-col class=\"icon-col\"  col-2>\r\n          <ion-icon class=\"locate-logo\" name=\"md-search\"></ion-icon>\r\n        </ion-col>\r\n      <ion-col class=\"text-col\" col-8>\r\n        <ion-input (blur)=\"changePositionBlur($event)\" (focus)=\"changePosition($event)\" (input)=\"filterItems($event)\" #chat_input [(ngModel)]=\"address\" placeholder=\"On cherche Où ?\"></ion-input>\r\n      </ion-col> -->\r\n      <ion-col class=\"icon2-col \" size=\"col-8\" id=\"send\">\r\n        <!--(click)=\"gotoHome()\"  [disabled]=\"!chosedRegion\" -->\r\n        <ion-button (click)=\"gotoHome()\">\r\n          <h4 class='animated text-btn' [class.bounceIn]=\"!chosedRegion\">{{'map.Go'|translate}}</h4>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n  </div>\r\n  <ion-row *ngIf=\"autocomplete && focused \" [class.rowupdatelist]=\"focused\" class=\"autocomplete\">\r\n\r\n    <ion-col size=\"col-8\" class=\"ion-justify-content-center\">\r\n      <ion-item (click)=\"choseRegion(filter)\" *ngFor=\"let filter of filtred;let i=index;\">\r\n        {{filter.name}}\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n  <img class=\"bg\" src=\"../assets/imgs/maps.png\">\r\n</ion-content>\r\n<!-- <ion-footer>\r\n  <ion-row class=\"menu-footer\">\r\n    <ion-col (click)=\"openModal()\">\r\n              <span class=\"footeralign leftside\">\r\n                {{'map.CGV'|translate}}\r\n              </span>\r\n    </ion-col>\r\n    <ion-col (click)=\"openModal()\">\r\n              <span class=\"footeralign rightside\">\r\n             <ion-icon name=\"help-circle\"></ion-icon>\r\n            </span>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer> -->\r\n\r\n");

/***/ }),

/***/ 84315:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"logo\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <span *ngIf=\"!isProfile\">{{'register.title'|translate}}</span>\r\n      <span *ngIf=\"isProfile\">{{'register.Profile'|translate}}</span>\r\n    </ion-title>\r\n    <!-- <ion-buttons *ngIf=\"isProfile\" color=\"primary\">\r\n      <ion-button (click)=\"closeModal()\">\r\n        <ion-icon class=\"close-modal\" name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <ion-item>\r\n    <ion-select okText=\"{{'modals.ok'|translate}}\" cancelText=\"{{'modals.cancel'|translate}}\" [(ngModel)]=\"userSettings.language\" \r\n    (ngModelChange)=\"changeLanguage(userSettings.language)\"\r\n    >\r\n      <ion-select-option   value=\"en\">{{'settings.langs.en'|translate}}</ion-select-option>\r\n      <ion-select-option   value=\"ar\">{{'settings.langs.ar'|translate}}</ion-select-option>\r\n      <ion-select-option  value=\"fr\">{{'settings.langs.fr'|translate}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-avatar>\r\n    <img src=\"../assets/imgs/oat.png\" class=\"logoPosition\"/>\r\n  </ion-avatar>\r\n  <form [formGroup]=\"addReginForm\">\r\n    <ion-row class=\"firstCHild\">\r\n      <ion-col class=\"custom-col ion-no-margin \">\r\n        <ion-input formControlName=\"name\" [(ngModel)]=\"user.name\"  type=\"text\" placeholder=\"{{'register.name'|translate}}\"></ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"custom-col ion-no-margin\">\r\n        <ion-input formControlName=\"last_name\" [(ngModel)]=\"user.last_name\"  type=\"text\" placeholder=\"{{'register.last_name'|translate}}\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div\r\n      *ngIf=\"(addReginForm.hasError('required',['name'])||addReginForm.hasError('required',['last_name'])) && submitReg\"\r\n      class=\"erreurMsg resizer\" item-end>{{'errors.required'|translate}}</div>\r\n    <ion-row class=\"custom-col\">\r\n      <ion-col>\r\n        <ion-input formControlName=\"email\" [(ngModel)]=\"user.email\" type=\"email\" placeholder=\"Email\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div *ngIf=\"(!addReginForm.controls.email.valid && (addReginForm.controls.email.dirty || submitReg))\"\r\n         class=\"erreurMsg\">\r\n      <span>{{'errors.email_validation'|translate}}</span>\r\n    </div>\r\n<!--\r\n-->\r\n    <ion-row *ngIf=\"!isProfile\" class=\"custom-col\">\r\n      <ion-col>\r\n        <ion-input formControlName=\"password\" [(ngModel)]=\"user.password\"  [type]=\"!showpassword ? 'password' : 'text'\"\r\n                   placeholder=\"Mot de passe\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div\r\n      *ngIf=\"(!addReginForm.controls.password?.valid && (addReginForm.controls.password?.dirty || submitReg) && !isProfile)\"\r\n      class=\"erreurMsg\">&nbsp;\r\n      <span *ngIf=\"addReginForm.hasError('minlength',['password'])\">{{'errors.min-length.8'|translate}}</span>\r\n      <span *ngIf=\"addReginForm.hasError('required',['password'])\">{{'errors.required'|translate}}</span>\r\n      &nbsp;\r\n    </div>\r\n    <ion-row *ngIf=\"!isProfile\" class=\"custom-col\">\r\n      <ion-col size=\"12\">\r\n        <ion-input formControlName=\"vpassword\" [type]=\"!showpassword ? 'password' : 'text'\"\r\n                   placeholder=\"{{'register.confirm_pass'|translate}}\"></ion-input>\r\n      </ion-col>\r\n      <ion-col class=\"colShowPassword\">\r\n        <ion-icon class=\"iconPassword\" *ngIf=\"!showpassword\" (click)=\"cahngepasswordView()\" color=\"primary\" name=\"eye\">\r\n        </ion-icon>\r\n        <ion-icon class=\"iconPassword\" *ngIf=\"showpassword\" (click)=\"cahngepasswordView()\" color=\"primary\"\r\n                  name=\"eye-off\">\r\n        </ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div\r\n      *ngIf=\"(!addReginForm.controls.vpassword?.valid && (addReginForm.controls.vpassword?.dirty || submitReg)&& !isProfile)\"\r\n      class=\"erreurMsg\">&nbsp;\r\n      <span *ngIf=\"addReginForm.hasError('required',['vpassword'])\">{{'errors.required'|translate}}</span>\r\n      <span *ngIf=\"addReginForm.hasError('notEquivalent',['vpassword'])\">{{'errors.pass_conform'|translate}}</span>\r\n      &nbsp;\r\n    </div>\r\n\r\n\r\n    <ion-button class=\"btnConfirm\" (click)=\"userDataSubmit()\" expand=\"full\" slot=\"end\" shape=\"round\">\r\n      <ion-icon name=\"checkmark\"></ion-icon>\r\n      <span *ngIf=\"!isProfile\">{{'register.confirm'|translate}}</span>\r\n      <span *ngIf=\"isProfile\">{{'register.update'|translate}}</span>\r\n    </ion-button>\r\n    <!-- <ion-button  *ngIf=\"!isProfile\" class=\"btnFacebook\" (click)=\"userDataSubmit()\" expand=\"full\" slot=\"end\" shape=\"round\" fill=\"clear\">\r\n      <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\r\n      <span *ngIf=\"!isProfile\">{{'register.connect_facebook'|translate}}</span>\r\n      <span *ngIf=\"isProfile\">{{'register.connect_facebook'|translate}}</span>\r\n    </ion-button>\r\n    <ion-button  *ngIf=\"!isProfile\" class=\"btnGoogle\" (click)=\"userDataSubmit()\" expand=\"full\" slot=\"end\" shape=\"round\" fill=\"clear\">\r\n      <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>\r\n      <span *ngIf=\"!isProfile\">{{'register.connect_google'|translate}}</span>\r\n      <span *ngIf=\"isProfile\">{{'register.connect_google'|translate}}</span>\r\n    </ion-button> -->\r\n  </form>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 56909:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>{{'settings.title' | translate}}</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button navPop fill=\"clear\" icon-only>\r\n        <ion-icon name=\"md-close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-select okText=\"{{'modals.ok'|translate}}\" cancelText=\"{{'modals.cancel'|translate}}\" [(ngModel)]=\"userSettings.language\" \r\n    (ngModelChange)=\"changeLanguage(userSettings.language)\"\r\n   \r\n    >\r\n      <ion-select-option   value=\"en\">{{'settings.langs.en'|translate}}</ion-select-option>\r\n      <ion-select-option   value=\"ar\">{{'settings.langs.ar'|translate}}</ion-select-option>\r\n      <ion-select-option  value=\"fr\">{{'settings.langs.fr'|translate}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n</ion-content>\r\n");

/***/ }),

/***/ 12416:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sub-categories/sub-categories.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--<ion-content>-->\r\n  <ion-icon name=\"close\" class=\"animated fadeIn closebutton\" (click)=\"closeView()\"></ion-icon>\r\n  <ion-item *ngFor=\"let category of subcategories;let i=index\" (click)=\"dismiss(category)\">\r\n    {{category.title}}\r\n  </ion-item>\r\n<!--</ion-content>-->\r\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map