(self["webpackChunkmigrationto5"] = self["webpackChunkmigrationto5"] || []).push([["common"],{

/***/ 68225:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 23150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 52954);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 39461);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 77330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 52377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 52954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 60408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 61269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 63768:
/*!*****************************************************!*\
  !*** ./src/app/pages/map-pikker/map-pikker.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPikkerPage": () => (/* binding */ MapPikkerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_map_pikker_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./map-pikker.page.html */ 11260);
/* harmony import */ var _map_pikker_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-pikker.page.scss */ 32943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_ui_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ui/ui */ 85081);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 33493);







let MapPikkerPage = class MapPikkerPage {
    constructor(modalController, navParams, ui, geolocation) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.ui = ui;
        this.geolocation = geolocation;
        this.map = {
            lat: 45.087890625,
            lng: 2.321167252957821,
            zoom: 2
        };
        this.marker = {};
        this.address = '';
        // this.product = this.navParams.get('product') || {};
        if (this.navParams.get('title')) {
            this.title = this.navParams.get('title');
        }
        if (!this.product || (this.product && !this.product.address) ||
            (this.product && this.product.address && !this.product.address.address)) {
            this.getCurrentPosition();
            console.log(this.address);
        }
        else {
            const latLng = {
                lat: Number(this.product.address.lat),
                lng: Number(this.product.address.long)
            };
            this.map = latLng;
            this.map.zoom = 8;
            this.marker = latLng;
            this.address = this.product.address.address;
        }
    }
    getCurrentPosition() {
        // this.ui.loading();
        const options = {
            enableHighAccuracy: true,
            timeout: 5000
        };
        this.geolocation.getCurrentPosition(options).then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            this.map = {
                lat: resp.coords.latitude,
                lng: resp.coords.longitude,
                zoom: 8
            };
            this.marker = {
                lat: resp.coords.latitude,
                lng: resp.coords.longitude,
            };
            this.geocodeLatLng(this.marker).then((resp) => {
                this.address = resp;
            });
            // this.ui.unLoading();
        }).catch((error) => {
            this.ui.toast('errors.loaction', error);
            console.log('unloading');
            this.ui.unLoading();
        });
    }
    mapClicked(ev) {
        this.marker = {
            lat: ev.coords.lat,
            lng: ev.coords.lng
        };
        this.geocodeLatLng(this.marker).then((resp) => {
            this.address = resp;
        });
    }
    clickedMarker(marker) {
    }
    markerDragEnd(marker, ev) {
        this.marker = {
            lat: ev.coords.lat,
            lng: ev.coords.lng
        };
        this.geocodeLatLng(this.marker).then((resp) => {
            this.address = resp;
        });
    }
    geocodeLatLng(latlng) {
        return new Promise((resolve, reject) => {
            try {
                const geocoder = new google.maps.Geocoder();
                return geocoder.geocode({ 'location': latlng }, (results, status) => {
                    if (status === 'OK') {
                        if (results[1]) {
                            this.address = results[0].formatted_address;
                            resolve(results[0].formatted_address);
                        }
                        else {
                            this.ui.alert('map.error', 'map.noResult');
                            reject('No results found');
                        }
                    }
                    else {
                        this.ui.alert('map.error', 'map.geoFaild');
                        reject('Geocoder failed due to: ' + status);
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    confirmAddress() {
        if (this.marker.lat) {
            console.log(this.address);
            // this.geocodeLatLng(this.marker).then((resp)=> {
            const params = {
                lat: this.marker.lat,
                long: this.marker.lng,
                address: this.address
            };
            this.modalController.dismiss(params);
            // })
        }
        else {
            this.ui.alert('Warrning', 'map.chooseLocation');
        }
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // if (this.marker.lat) {
            //   this.geocodeLatLng(this.marker).then((resp)=> {
            //     this.viewCtrl.dismiss({address: resp});
            //   }).catch((err)=> this.viewCtrl.dismiss())
            // }else
            yield this.modalController.dismiss();
        });
    }
    ngOnInit() {
    }
};
MapPikkerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: _services_ui_ui__WEBPACK_IMPORTED_MODULE_2__.UiService },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation }
];
MapPikkerPage.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
MapPikkerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-map-pikker',
        template: _raw_loader_map_pikker_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_map_pikker_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapPikkerPage);



/***/ }),

/***/ 77977:
/*!*********************************************!*\
  !*** ./src/app/pages/rating/rating.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingPage": () => (/* binding */ RatingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_rating_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./rating.page.html */ 31262);
/* harmony import */ var _rating_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating.page.scss */ 7127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);






let RatingPage = class RatingPage {
    constructor(modalController, navParams, services) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.services = services;
        this.rate = 0;
        this.provider = {};
        this.methode = 'post';
        this.isProfileOwner = false;
        this.provider = this.navParams.get('provider') || null;
        this.rate = this.navParams.get('providerRate') || 0;
        if (this.rate > 0) {
            this.methode = 'put';
        }
    }
    ngOnInit() {
    }
    confirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(this.rate);
        });
    }
};
RatingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_2__.ApiServices }
];
RatingPage.propDecorators = {
    providerRate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
RatingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-rating',
        template: _raw_loader_rating_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rating_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RatingPage);



/***/ }),

/***/ 9014:
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatService": () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _http_helper_http_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-helper/http-helper */ 42516);
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/ui */ 85081);
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-config/app-config */ 55619);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ 75421);









let ChatService = class ChatService {
    constructor(httpHelper, configService, socket, http, ui) {
        this.httpHelper = httpHelper;
        this.configService = configService;
        this.socket = socket;
        this.http = http;
        this.ui = ui;
    }
    sendMessage(message) {
        this.socket.emit('new-message', message);
    }
    getMessages() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable((observer) => {
            this.socket.on('serverSendMsg', (data) => {
                console.log(data);
                observer.next(data);
            });
        });
    }
    /**
     *   chatList Chat
     */
    chatList(productId) {
        this.ui.loading();
        return this.httpHelper.request('GET', `/chat/list/${productId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            const resp = response;
            this.ui.unLoading();
            return resp;
        }, err => {
            console.log(err);
            this.ui.fireError(err);
        }));
    }
    getChatByUser(productId) {
        this.ui.loading();
        if (productId) {
            return this.httpHelper.request('GET', `/chat/list/${productId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
                const resp = response;
                this.ui.unLoading();
                return resp;
            }, err => {
                console.log(err);
                this.ui.fireError(err);
            }));
        }
        else {
            return this.httpHelper.request('GET', `/chat/list`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
                const resp = response;
                this.ui.unLoading();
                return resp;
            }, err => {
                console.log(err);
                this.ui.fireError(err);
            }));
        }
    }
    /**
     *   storeMessage Chat
     *
     *   @param body: required
     *   @param conversationId: required
     */
    storeMessage(data) {
        return this.httpHelper.request('POST', `${this.configService.API}/chat/message`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            return response;
        }, err => {
            console.log(err);
            this.ui.fireError(err);
        }));
    }
    // Chat methods
    /**
     *   initConversation Chat
     *
     *   @param senderId: required
     *   @param receiverId: required
     */
    initConversation(data, page, infiniteScroll) {
        return this.httpHelper.request('POST', `/chat/init?page=${page}`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            const resp = response;
            return resp;
        }, err => this.ui.fireError(err)));
    }
    deleteConversation(conversationId) {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.httpHelper.request('DELETE', `/chat/conversations/${conversationId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
                const resp = response;
                resolve(resp);
            }, err => this.ui.fireError(err)));
        }));
    }
    deleteConversationUser(conversationId) {
        return this.httpHelper.request('POST', `/chat/updateConversation/${conversationId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            const resp = response;
            return resp;
        }, err => this.ui.fireError(err)));
    }
    updateMessage(id) {
        return this.httpHelper.request('POST', `/chat/updateMessage/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            const resp = response;
            return resp;
        }, err => this.ui.fireError(err)));
    }
    getDiscussions(product_id) {
        this.ui.loading();
        return new Promise((resolve, reject) => {
            this.httpHelper.request('post', this.configService.API + '/discussions', { product_id }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
                this.ui.unLoading();
                resolve(data);
            }, (error) => {
                this.ui.unLoading();
                reject(error);
            }));
        });
    }
    getCurrentdiscussion(product_id, opner) {
        this.ui.loading();
        return new Promise((resolve, reject) => {
            this.httpHelper.request('post', this.configService.API + '/currentdiscussion', {
                product_id,
                opner
            }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
                this.ui.unLoading();
                resolve(data);
            }, (error) => {
                this.ui.unLoading();
                reject(error);
            }));
        });
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getDiscussionsById(discussion_id) {
        this.ui.loading();
        return new Promise((resolve, reject) => {
            this.http.get(this.configService.API + '/discussion/' + discussion_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
                this.ui.unLoading();
                resolve(data);
            }, (error) => {
                this.ui.unLoading();
                reject(error);
            }));
        });
    }
};
ChatService.ctorParameters = () => [
    { type: _http_helper_http_helper__WEBPACK_IMPORTED_MODULE_0__.HttpHelperService },
    { type: _app_config_app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfigService },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__.Socket },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ui_ui__WEBPACK_IMPORTED_MODULE_1__.UiService }
];
ChatService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], ChatService);



/***/ }),

/***/ 17322:
/*!*******************************************************!*\
  !*** ./src/app/services/product/favorites.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesService": () => (/* binding */ FavoritesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-config/app-config */ 55619);
/* harmony import */ var _http_helper_http_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-helper/http-helper */ 42516);
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/ui */ 85081);






let FavoritesService = class FavoritesService {
    constructor(httpHelper, config, ui) {
        this.httpHelper = httpHelper;
        this.config = config;
        this.ui = ui;
    }
    getfavories() {
        this.ui.loading();
        return this.httpHelper.request('get', this.config.API + '/favories').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => {
            this.ui.unLoading();
            return data;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((err, caught) => {
            this.ui.unLoading();
            return err;
        }));
    }
    deleteFavory(product) {
        this.ui.loading();
        // return new Promise((resolve, reject) => {
        return this.httpHelper.request('post', this.config.API + '/favory/delete', { product_id: product }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            this.ui.unLoading();
            return data;
        }, (error) => {
            this.ui.unLoading();
            throw error;
        }));
    }
    addfavories(product_id) {
        this.ui.loading();
        return this.httpHelper.request('post', this.config.API + '/favories', { product_id }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            this.ui.unLoading();
            console.log('Favories ', data);
            return data;
        }, (error) => {
            this.ui.unLoading();
            console.log(error);
        }));
    }
    checkfavories(productId) {
        return new Promise((resolve, reject) => {
            this.httpHelper.request('post', this.config.API + '/checkfavory', { productId }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
                resolve(data);
            }, (error) => {
                reject(error);
            }));
        });
    }
    checkFavory(product_id) {
        return this.httpHelper.request('get', this.config.API + '/isfavory/' + product_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            return data;
        }, (error) => {
            console.log('error', error);
        }));
    }
};
FavoritesService.ctorParameters = () => [
    { type: _http_helper_http_helper__WEBPACK_IMPORTED_MODULE_1__.HttpHelperService },
    { type: _app_config_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfigService },
    { type: _ui_ui__WEBPACK_IMPORTED_MODULE_2__.UiService }
];
FavoritesService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], FavoritesService);



/***/ }),

/***/ 32943:
/*!*******************************************************!*\
  !*** ./src/app/pages/map-pikker/map-pikker.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("agm-map {\n  height: 100% !important;\n}\n\n.button {\n  background: var(--ion-color-logo) !important;\n}\n\n.fab {\n  background-color: var(--ion-color-logo) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC1waWtrZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUNBO0VBQ0Usa0RBQWtEO0FBRXBEIiwiZmlsZSI6Im1hcC1waWtrZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1sb2dvKSAhaW1wb3J0YW50O1xyXG59XHJcbi5mYWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1sb2dvKSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 7127:
/*!***********************************************!*\
  !*** ./src/app/pages/rating/rating.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  padding: 10px !important;\n}\n\n.scroll-content {\n  border-radius: 5px !important;\n}\n\nh3 {\n  text-align: center;\n  font-size: 16px;\n  text-transform: uppercase !important;\n}\n\nion-rating {\n  text-align: center !important;\n  padding: 0 !important;\n}\n\nion-rating ion-icon {\n  font-size: 30px !important;\n  color: var(--ion-color-logo);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSx3QkFBd0I7QUFDNUI7O0FBQ0U7RUFDRSw2QkFBNkI7QUFFakM7O0FBQUU7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9DQUFtQztBQUd2Qzs7QUFBRTtFQUNFLDZCQUE0QjtFQUM1QixxQkFBcUI7QUFHekI7O0FBREU7RUFDRSwwQkFBeUI7RUFDekIsNEJBQTJCO0FBSS9CIiwiZmlsZSI6InJhdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGlvbi1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnNjcm9sbC1jb250ZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi1yYXRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24tcmF0aW5nIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAzMHB4IWltcG9ydGFudDtcclxuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1sb2dvKTtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ 11260:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map-pikker/map-pikker.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-content>\r\n  <agm-map\r\n    [latitude]=\"map.lat\"\r\n    [longitude]=\"map.lng\"\r\n    [zoom]=\"map.zoom\"\r\n    [disableDefaultUI]=\"false\"\r\n    [zoomControl]=\"false\"\r\n    (mapClick)=\"mapClicked($event)\">\r\n\r\n    <agm-marker\r\n      (markerClick)=\"clickedMarker(marker)\"\r\n      [latitude]=\"marker.lat\"\r\n      [longitude]=\"marker.lng\"\r\n      [label]=\"marker.label\"\r\n      [markerDraggable]=\"true\"\r\n      (dragEnd)=\"markerDragEnd(marker, $event)\">\r\n    </agm-marker>\r\n  </agm-map>\r\n\r\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\r\n    <ion-fab-button  logo (click)=\"confirmAddress()\">\r\n      <ion-icon name=\"checkmark\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ 31262:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rating/rating.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\r\n\r\n  <h3 *ngIf=\"services.isLoggedIn\">{{'details.evaluation'|translate}}</h3>\r\n\r\n  <ion-rating [(ngModel)]=\"rate\"\r\n          >\r\n  </ion-rating>\r\n\r\n  <ion-button *ngIf=\"services.isLoggedIn\" shape=\"round\" expand=\"block\" (click)=\"confirm()\" color=\"primary\">{{'buttons.confirm'|translate}}</ion-button>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=common.js.map