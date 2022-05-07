(self["webpackChunkmigrationto5"] = self["webpackChunkmigrationto5"] || []).push([["src_app_pages_discussion_discussion_module_ts"],{

/***/ 92398:
/*!***************************************************************!*\
  !*** ./src/app/pages/discussion/discussion-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscussionPageRoutingModule": () => (/* binding */ DiscussionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _discussion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discussion.page */ 24057);




const routes = [
    {
        path: '',
        component: _discussion_page__WEBPACK_IMPORTED_MODULE_0__.DiscussionPage
    }
];
let DiscussionPageRoutingModule = class DiscussionPageRoutingModule {
};
DiscussionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DiscussionPageRoutingModule);



/***/ }),

/***/ 59704:
/*!*******************************************************!*\
  !*** ./src/app/pages/discussion/discussion.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscussionPageModule": () => (/* binding */ DiscussionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _discussion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discussion-routing.module */ 92398);
/* harmony import */ var _discussion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discussion.page */ 24057);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);









let DiscussionPageModule = class DiscussionPageModule {
};
DiscussionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _discussion_routing_module__WEBPACK_IMPORTED_MODULE_0__.DiscussionPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild(),
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
        ],
        declarations: [_discussion_page__WEBPACK_IMPORTED_MODULE_1__.DiscussionPage]
    })
], DiscussionPageModule);



/***/ }),

/***/ 24057:
/*!*****************************************************!*\
  !*** ./src/app/pages/discussion/discussion.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscussionPage": () => (/* binding */ DiscussionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_discussion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./discussion.page.html */ 13981);
/* harmony import */ var _discussion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discussion.page.scss */ 92415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_services_badge_service_badge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/badge-service/badge.service */ 17516);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/chat.service */ 9014);










let DiscussionPage = class DiscussionPage {
    constructor(router, navParams, services, chatService, badgeService, activatedRoute) {
        this.router = router;
        this.navParams = navParams;
        this.services = services;
        this.chatService = chatService;
        this.badgeService = badgeService;
        this.activatedRoute = activatedRoute;
        this.product = {};
        this.discussions = [];
        this.product = this.navParams.get('product');
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(res => {
            this.product = res === null || res === void 0 ? void 0 : res.idProduct;
        });
        this.getdiscussion();
        this.badgeService.clearBadgesMessage();
        this.currentUser = this.services.current_user.id;
        console.log(this.currentUser);
    }
    doRefresh(event) {
        setTimeout(() => {
            this.ngOnInit();
            event.target.complete();
        }, 1000);
    }
    getdiscussion() {
        this.chatService.getChatByUser(this.product).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(discussion => discussion.sort((a, b) => { var _a, _b; return new Date((_a = b.last_message) === null || _a === void 0 ? void 0 : _a.created_at).getTime() - new Date((_b = a.last_message) === null || _b === void 0 ? void 0 : _b.created_at).getTime(); }))).subscribe((discussion) => {
            this.discussions = discussion;
        }, err => {
            this.services.fireError(err);
        });
    }
    gotoChat(conversation) {
        this.router.navigateByUrl('/chat', { state: { conversation } }).then(() => {
            this.chatService.updateMessage(conversation.last_message.id).subscribe(res => {
            });
        });
    }
    delete(discussion) {
        let conversationId = discussion.id;
        this.chatService.deleteConversationUser(conversationId).subscribe(res => {
            this.ngOnInit();
        });
    }
};
DiscussionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams },
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_3__.ApiServices },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_4__.ChatService },
    { type: src_app_services_badge_service_badge_service__WEBPACK_IMPORTED_MODULE_2__.BadgeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
DiscussionPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInfiniteScroll,] }]
};
DiscussionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-discussion',
        template: _raw_loader_discussion_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_discussion_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DiscussionPage);



/***/ }),

/***/ 92415:
/*!*******************************************************!*\
  !*** ./src/app/pages/discussion/discussion.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".rem {\n  --offset-bottom: -3rem!important;\n  --offset-top: 0px;\n}\n\n.touppercase {\n  text-transform: uppercase !important;\n}\n\n.item {\n  box-shadow: 0px 1px 1px 0px var(--ion-color-logo) !important;\n  margin-bottom: 10px;\n}\n\n.content-info {\n  box-shadow: none !important;\n  padding-left: 0px !important;\n  min-height: 0 !important;\n}\n\n.content-info * {\n  font-size: 13px !important;\n}\n\n.content-info .label {\n  margin: 0px !important;\n  color: #818181;\n}\n\n.content-info .icon {\n  font-size: 16px !important;\n  margin: 0px !important;\n  padding-top: 7px !important;\n  color: #818181;\n}\n\nion-avatar {\n  width: 4rem;\n  height: 4rem;\n}\n\nimg {\n  border-radius: 15px;\n}\n\n.item-inner {\n  margin-left: 14px !important;\n}\n\n.hr_strong {\n  height: .2px;\n  border: 0.1px solid var(--ion-color-logo);\n}\n\n.row_messages {\n  border-top: 0px solid var(--ion-color-logo);\n}\n\n.row_messages:last-child {\n  border-bottom: 0px solid var(--ion-color-logo);\n}\n\n.col_avatar {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.col_details {\n  line-height: 2px;\n  margin: 0;\n  padding: 0 0 0 20px;\n}\n\n.col_details h2 {\n  margin-top: 1rem;\n  margin-bottom: 6px;\n  color: var(--ion-color-logo);\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.col_details > p:nth-child(2) {\n  margin-top: 0;\n  color: rgba(128, 128, 128, 0.8);\n  margin-bottom: 1.4rem;\n}\n\n.col_setting > ion-icon {\n  font-weight: bold;\n  font-size: 2rem;\n  color: var(--ion-color-logo);\n}\n\n#notifications-badgee {\n  background-color: #d4921e;\n  position: relative;\n  right: 4px;\n  border-radius: 100%;\n  width: 1.5em;\n  height: 1.5em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2N1c3Npb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdCO0VBQ2hCLGlCQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxvQ0FBb0M7QUFFdEM7O0FBQ0E7RUFDRSw0REFBNEQ7RUFDNUQsbUJBQW1CO0FBRXJCOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qix3QkFBd0I7QUFFMUI7O0FBTEE7RUFNSSwwQkFBMEI7QUFHOUI7O0FBVEE7RUFXSSxzQkFBc0I7RUFDdEIsY0FBeUI7QUFFN0I7O0FBZEE7RUFpQkksMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsY0FBeUI7QUFDN0I7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUFkOztBQUdBO0VBQ0UsbUJBQW1CO0FBQXJCOztBQUdBO0VBQ0UsNEJBQTRCO0FBQTlCOztBQUdBO0VBQ0UsWUFBWTtFQUNaLHlDQUF5QztBQUEzQzs7QUFHQTtFQUNFLDJDQUEyQztBQUE3Qzs7QUFJQTtFQUNFLDhDQUE4QztBQURoRDs7QUFLQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUZmOztBQUtBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxtQkFBbUI7QUFGckI7O0FBS0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBRWxCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIseUJBQXlCO0FBSDNCOztBQU1BO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixxQkFBcUI7QUFIdkI7O0FBTUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDRCQUE0QjtBQUg5Qjs7QUFNQTtFQUNFLHlCQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1YsYUFBYTtBQUhqQiIsImZpbGUiOiJkaXNjdXNzaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZW17XHJcbiAgLS1vZmZzZXQtYm90dG9tOiAtM3JlbSFpbXBvcnRhbnQ7XHJcbiAgLS1vZmZzZXQtdG9wOiAwcHg7XHJcbn1cclxuLnRvdXBwZXJjYXNlIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDFweCAwcHggdmFyKC0taW9uLWNvbG9yLWxvZ28pICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtaW5mbyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogMCAhaW1wb3J0YW50O1xyXG5cclxuICAqIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG4gIC5sYWJlbCB7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYigxMjksIDEyOSwgMTI5KTtcclxuXHJcbiAgfVxyXG5cclxuICAuaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiKDEyOSwgMTI5LCAxMjkpO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWF2YXRhciB7XHJcbiAgd2lkdGg6IDRyZW07XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5pdGVtLWlubmVyIHtcclxuICBtYXJnaW4tbGVmdDogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaHJfc3Ryb25nIHtcclxuICBoZWlnaHQ6IC4ycHg7XHJcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbG9nbyk7XHJcbn1cclxuXHJcbi5yb3dfbWVzc2FnZXMge1xyXG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbG9nbyk7XHJcblxyXG59XHJcblxyXG4ucm93X21lc3NhZ2VzOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbG9nbyk7XHJcblxyXG59XHJcblxyXG4uY29sX2F2YXRhciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29sX2RldGFpbHMge1xyXG4gIGxpbmUtaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMCAwIDIwcHg7XHJcbn1cclxuXHJcbi5jb2xfZGV0YWlscyBoMiB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcblxyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbG9nbyk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNvbF9kZXRhaWxzID4gcDpudGgtY2hpbGQoMikge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44KTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjRyZW07XHJcbn1cclxuXHJcbi5jb2xfc2V0dGluZyA+IGlvbi1pY29uIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sb2dvKTtcclxufVxyXG5cclxuI25vdGlmaWNhdGlvbnMtYmFkZ2VlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAxNDYsIDMwKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHdpZHRoOiAxLjVlbTtcclxuICAgIGhlaWdodDogMS41ZW07XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 13981:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/discussion/discussion.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"logo\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Mes messages</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <!-- <button ion-button>\r\n        <ion-icon name=\"search\">\r\n        </ion-icon>\r\n      </button> -->\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"rem\" padding>\r\n  <!-- <app-categories-slider></app-categories-slider> -->\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"Pull to refresh\"\r\n                           refreshingSpinner=\"circles\" refreshingText=\"Loading...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <div *ngIf=\"discussions.length==0\" class=\"no-content\">\r\n    <h4>{{'not_found.discussion'|translate}} </h4>\r\n    <!-- <h2>-&nbsp;{{region}}&nbsp;-</h2> -->\r\n  </div>\r\n  <ion-grid>\r\n    <ion-item-sliding  *ngFor=\"let discussion of discussions\" class=\"row_messages\">\r\n      <ion-item (click)=\"gotoChat(discussion)\">\r\n      <ion-col size=\"3\" class=\"col_avatar\">\r\n        <ion-avatar>\r\n          <img [src]=\"discussion.product?.src\">\r\n        </ion-avatar>\r\n      </ion-col>\r\n      <ion-col size=\"8\" class=\"col_details\">\r\n        <h2> {{discussion.receiver?.name}}</h2>\r\n        <p class=\"touppercase \">{{discussion.product?.title}}</p>\r\n        <p class=\"touppercase\">{{discussion.last_message?.created_at | date:'shortDate'}}</p>\r\n      </ion-col>\r\n      <ion-col size=\"1\" class=\"ion-align-self-center col_setting\">\r\n        <ng-container *ngIf=\"discussion.last_message.userId !== currentUser\">\r\n          <ion-badge *ngIf=\"!discussion.last_message.isRead\" id=\"notifications-badgee\" color=\"danger\"><span> </span></ion-badge>\r\n        </ng-container>\r\n      \r\n        <ion-icon *ngIf=\"discussion.last_message.isRead\" name=\"ellipsis-vertical-sharp\"></ion-icon>\r\n      </ion-col>\r\n    </ion-item>\r\n      <ion-item-options>\r\n        <ion-button class=\"btnDelete\" color=\"danger\" (click)=\"delete(discussion)\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n          {{'favoris.delete'|translate}}\r\n        </ion-button>\r\n      </ion-item-options>\r\n    \r\n    </ion-item-sliding>\r\n  </ion-grid>\r\n</ion-content>\r\n<!-- <app-footer></app-footer> -->\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_discussion_discussion_module_ts.js.map