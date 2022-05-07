(self["webpackChunkmigrationto5"] = self["webpackChunkmigrationto5"] || []).push([["src_app_pages_chat_chat_module_ts"],{

/***/ 44322:
/*!***************************************************!*\
  !*** ./src/app/pages/chat/chat-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageRoutingModule": () => (/* binding */ ChatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.page */ 25448);




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_0__.ChatPage
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ 35501:
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageModule": () => (/* binding */ ChatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-routing.module */ 44322);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page */ 25448);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/pipes.module */ 35503);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ 45642);










//const config: SocketIoConfig = { url: 'http://vps-6496d4c1.vps.ovh.net:3000/chat', options: {} };
let ChatPageModule = class ChatPageModule {
};
ChatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatPageRoutingModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild(),
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
            //      SocketIoModule.forRoot(config),
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_1__.ChatPage]
    })
], ChatPageModule);



/***/ }),

/***/ 25448:
/*!*****************************************!*\
  !*** ./src/app/pages/chat/chat.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPage": () => (/* binding */ ChatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chat.page.html */ 86038);
/* harmony import */ var _chat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page.scss */ 47365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ 55160);
/* harmony import */ var _pipes_group_by_days_group_by_days__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/group-by-days/group-by-days */ 12223);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-services/api-services */ 92844);
/* harmony import */ var _services_ui_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ui/ui */ 85081);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-socket-io */ 75421);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/chat.service */ 9014);
/* harmony import */ var src_app_services_badge_service_badge_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/badge-service/badge.service */ 17516);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88002);














let ChatPage = class ChatPage {
    constructor(navCtrl, services, chatservice, ui, zone, platform, router, socket, chatService, groupPipe, badgeService) {
        this.navCtrl = navCtrl;
        this.services = services;
        this.chatservice = chatservice;
        this.ui = ui;
        this.zone = zone;
        this.platform = platform;
        this.router = router;
        this.socket = socket;
        this.chatService = chatService;
        this.groupPipe = groupPipe;
        this.badgeService = badgeService;
        this.product_target = {};
        this.conversation = {};
        this.receiver = {};
        this.amCalenderOptions = {};
        this.messages = [];
        this.groupedMessages = [];
        this.typing = false;
        this.isTyping = false;
        this.onTypingTimeout = null;
        this.messagesCurrentPage = 0;
        this.isInfinitScrollEnabled = true;
        this.messageList = [];
        if (this.router.getCurrentNavigation().extras.state.conversation || {}) {
            this.conversation = this.router.getCurrentNavigation().extras.state.conversation || {};
            this.product_target = this.conversation.product;
            this.from_notif = this.conversation.comefromnotif;
        }
        if (this.from_notif) {
            this.productId = this.conversation.conversation.product.id;
            this.receiver = this.conversation.conversation.receiver;
        }
        else {
            this.productId = this.conversation.product.id;
            this.receiver = this.conversation.receiver;
        }
        ;
        this.amCalenderOptions = {
            sameDay: 'Aujourd\'hui',
            nextDay: 'Demain',
            lastDay: 'Hier',
            nextWeek: 'dddd',
            lastWeek: 'dddd',
            sameElse: 'DD/MM/YYYY'
        };
        this.initApp();
        this.platform.keyboardDidShow.subscribe(ev => {
            const { keyboardHeight } = ev;
            document.getElementById('footer-id').style.height = `${keyboardHeight + 94}px`;
            this.platform.backButton.subscribe(() => {
                console.log("test");
            });
        });
        this.platform.keyboardDidHide.subscribe(() => {
            document.getElementById('footer-id').style.height = 'auto';
        });
    }
    ionViewWillLeave() {
    }
    ionViewDidEnter() {
        this.initializeBackButtonCustomHandler();
    }
    openViewer(event) {
        console.log(event);
    }
    initApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('init', this.conversation);
            yield this.initChat();
            this.initSocket();
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.chatService
                .getMessages()
                .subscribe((message) => {
                this.messageList.push(message);
            });
        });
    }
    initSocket() {
        this.socket.connect();
        this.socket.emit('joint-room', this.conversation.id);
        console.log(this.socket.emit('joint-room', this.conversation.id));
        this.socket.on('newMessage', (msg) => {
            console.log('messages essaii');
            if (msg.sender.id !== this.services.current_user.id) {
                this.zone.run(() => {
                    this.isTyping = false;
                    this.messages.push(msg);
                    this.groupedMessages = this.groupPipe.transform(this.messages, 'created_at');
                    this.scrollToBottom();
                    console.log('new messages...');
                });
            }
        });
        this.socket.on('isTyping', (userId) => {
            if (this.services.current_user.id !== userId) {
                this.zone.run(() => {
                    this.isTyping = true;
                    this.scrollToBottom();
                    console.log('isTyping...');
                });
            }
        });
        this.socket.on('notTyping', (userId) => {
            if (this.services.current_user.id !== userId) {
                this.zone.run(() => {
                    this.isTyping = false;
                    this.typing = false;
                    console.log('stopTyping');
                });
            }
        });
    }
    initChat(infiniteScroll) {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const data = {
                senderId: this.services.current_user.id,
                receiverId: this.receiver.id,
                productId: this.productId
            };
            this.messagesCurrentPage++;
            this.chatservice.initConversation(data, this.messagesCurrentPage, infiniteScroll).subscribe(res => {
                this.conversation = res;
                // this.events.publish('chatPage', this.conversation.id)
                resolve(this.conversation);
                if (this.conversation.messages.length < 10) {
                    this.isInfinitScrollEnabled = false;
                }
                this.messages = [...this.conversation.messages.reverse(), ...this.messages];
                this.groupedMessages = this.groupPipe.transform(this.messages, 'created_at');
                if (!infiniteScroll) {
                    this.scrollToBottom(0);
                }
                else {
                    infiniteScroll.target.complete();
                }
            });
        }));
    }
    pickImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield this.ui.imageType();
            this.sendMsg(image);
        });
    }
    onFocus() {
        this.zone.run(() => {
            this.scrollToBottom();
        });
    }
    onTyping() {
        if (this.typing == false) {
            this.typing = true;
            this.socket.emit('typing', { userId: this.services.current_user.id, room: this.conversation.id });
        }
        else {
            clearTimeout(this.onTypingTimeout);
        }
        this.onTypingTimeout = setTimeout(() => {
            this.typing = false;
            this.socket.emit('noLongerTyping', { userId: this.services.current_user.id, room: this.conversation.id });
        }, 3000);
    }
    send() {
        if (!this.newMsg.trim()) {
            return;
        }
        this.sendMsg();
    }
    sendMessage() {
        const storedMsg = {
            conversation_id: this.conversation.id,
            created_at: new Date(),
            sender: this.services.current_user
        };
        this.socket.emit('message', storedMsg);
        console.log(this.socket.emit('message', storedMsg));
    }
    getMessage() {
        return this.socket.fromEvent('message').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((data) => console.log(data)));
    }
    /**
     * @name sendMsg
     */
    sendMsg(image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const storedMsg = {
                conversation_id: this.conversation.id,
                created_at: new Date(),
                sender: this.services.current_user
            };
            if (image) {
                storedMsg.image = image;
            }
            else {
                storedMsg.body = this.newMsg;
            }
            this.pushNewMsg(storedMsg);
            console.log("send msg");
            if (!image) {
                this.newMsg = null;
            }
            yield this.chatService.storeMessage(storedMsg).subscribe(res => {
                console.log(res);
            });
        });
    }
    /**
     * @name pushNewMsg
     * @param msg
     */
    pushNewMsg(msg) {
        this.zone.run(() => {
            this.messages.push(msg);
            // console.log("messages", this.socket.emit('message', {room: this.conversation.id, msg}));
            this.groupedMessages = this.groupPipe.transform(this.messages, 'created_at');
            this.socket.emit('message', { room: this.conversation.id, msg });
            this.scrollToBottom();
        });
    }
    scrollToBottom(duration) {
        setTimeout(() => {
            if (this.content && this.content.ionScroll) {
                this.content.scrollToBottom(duration);
            }
        }, 200);
    }
    initializeBackButtonCustomHandler() {
        this.unregisterBackButtonAction = this.platform.ready().then(() => {
            document.addEventListener('backbutton', () => {
                this.whengetout();
            });
        });
    }
    whengetout() {
        this.socket.emit('leave-room', this.conversation.id);
        console.log('leaveRoom', this.conversation.id);
        setTimeout(() => {
            this.socket.disconnect();
            // this.navCtrl.pop();
            // if (this.navCtr.canGoBack()) {
            // 	this.navCtr.pop();
            // } else {
            // 	this.platform.exitApp();
            // }
            console.log('Disconnect');
        }, 100);
    }
    ngOnDestroy() {
        this.whengetout();
    }
    goBackProduct(product) {
        this.router.navigateByUrl('/discussion').finally(() => this.whengetout());
        this.whengetout();
        this.navCtrl.back();
    }
    goToProduct(product) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.whengetout();
            setTimeout(() => {
                this.router.navigateByUrl('/product-details/' + (product === null || product === void 0 ? void 0 : product.id));
            }, 200);
        });
    }
};
ChatPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _services_api_services_api_services__WEBPACK_IMPORTED_MODULE_3__.ApiServices },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_5__.ChatService },
    { type: _services_ui_ui__WEBPACK_IMPORTED_MODULE_4__.UiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__.Socket },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_5__.ChatService },
    { type: _pipes_group_by_days_group_by_days__WEBPACK_IMPORTED_MODULE_2__.GroupByDaysPipe },
    { type: src_app_services_badge_service_badge_service__WEBPACK_IMPORTED_MODULE_6__.BadgeService }
];
ChatPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent,] }]
};
ChatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-chat',
        template: _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('isTypingAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('.2s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.keyframes)([
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({ transform: 'translateY(10px)', opacity: 0, offset: 0 }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({ transform: 'translateY(0)', opacity: 1, offset: 1.0 }),
                    ]))
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('.2s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.keyframes)([
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({ transform: 'translateY(0)', opacity: 1, offset: 0 }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({ transform: 'translateY(10px)', opacity: 0, offset: 1.0 }),
                    ]))
                ])
            ])
        ],
        providers: [_pipes_group_by_days_group_by_days__WEBPACK_IMPORTED_MODULE_2__.GroupByDaysPipe],
        styles: [_chat_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatPage);



/***/ }),

/***/ 47365:
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item-divider {\n  padding: 0 !important;\n  background: transparent !important;\n  border: none !important;\n}\n\nion-item-divider ion-label {\n  margin: 13px 0 !important;\n}\n\nion-item-divider ion-label h3 {\n  display: inline-block;\n  padding: 5px;\n  font-size: 11px !important;\n  font-weight: 400 !important;\n  background: #c3dff7;\n  color: var(--ion-color-logo);\n  border-radius: 4px;\n}\n\n.line-breaker {\n  white-space: pre-line;\n}\n\nion-avatar {\n  min-width: 40px;\n  min-height: 40px;\n  width: 55px;\n  height: 55px;\n}\n\nion-avatar ion-img, ion-avatar img {\n  border-radius: .5rem;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.current_product {\n  width: -webkit-fill-available;\n  margin-bottom: 10px !important;\n  border-top: 0.5px solid var(--ion-color-logo);\n  border-bottom: 0.5px solid var(--ion-color-logo);\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);\n}\n\n.current_product .item-inner {\n  border: none !important;\n}\n\n.item-md.item-block .item-inner {\n  padding-bottom: 28px !important;\n}\n\n.is-typing-dots {\n  text-align: left;\n  padding: 10px 20px;\n}\n\n.is-typing-dots ion-spinner {\n  background: var(--ion-color-secondary);\n  border-radius: 10px;\n  width: 51px;\n}\n\n.is-typing-dots ion-spinner svg circle {\n  fill: #fff !important;\n}\n\nion-footer ion-col {\n  padding: 0 !important;\n  text-align: center;\n  display: flex;\n  align-items: center;\n}\n\nion-footer button {\n  width: 100%;\n  height: 55px;\n  margin: 0;\n}\n\nion-footer ion-textarea {\n  padding: 5px;\n}\n\nion-footer ion-textarea {\n  margin: 5px;\n  --padding: 2px 10px !important;\n  max-height: 55px !important;\n  background: #eee !important;\n  border-radius: 10px !important;\n  width: 100% !important;\n  padding: 2px 10px !important;\n  padding-top: 7px !important;\n  min-height: 29px;\n}\n\n#send {\n  text-align: center;\n}\n\n#send ion-icon {\n  font-size: 35px !important;\n  padding: 0 !important;\n}\n\n#send button {\n  text-align: center;\n}\n\n.message-wrap {\n  padding: 0 10px;\n}\n\n.message-wrap .message {\n  position: relative;\n  padding: 7px 0;\n}\n\n.message-wrap .message .msg-detail {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.message-wrap .message .msg-detail .message p {\n  margin: 0;\n}\n\n.msg-info {\n  position: relative;\n  text-align: left;\n  clear: both;\n  direction: initial;\n  color: #bdbdbd;\n  font-size: 11px;\n}\n\n.msg-content {\n  position: relative;\n  margin-top: 5px;\n  border-radius: 8px;\n  padding: 8px;\n  /* padding-bottom: 8px; */\n  color: #fff;\n  min-width: 50px;\n  width: 15rem;\n  max-width: 80%;\n  overflow: hidden;\n  border: 1px solid #ddd;\n}\n\n.msg-content .username {\n  font-weight: bold;\n  margin-top: -5px;\n  padding: 8px;\n  text-decoration: underline;\n}\n\n.msg-content .text-msg {\n  padding: 0 8px;\n  margin: 0;\n}\n\n.msg-content .image-msg {\n  width: 100%;\n  max-width: 250px;\n}\n\n.msg-detail span.triangle {\n  background-color: #fff;\n  border-radius: 2px;\n  height: 8px;\n  width: 8px;\n  top: 22px;\n  display: block;\n  border-style: solid;\n  border-color: #ddd;\n  border-width: 1px;\n  transform: rotate(45deg);\n  position: absolute;\n  z-index: 10;\n}\n\n.message.left .msg-content {\n  background-color: var(--ion-color-secondary);\n  float: left;\n  border-bottom: 2px solid #ce91b6;\n}\n\n.message.left .msg-content .msg-detail {\n  padding-left: 6px;\n}\n\n.message.left .msg-content .msg-detail .username {\n  color: #fff;\n}\n\n.message.left .user-img {\n  left: 0;\n}\n\n.message.left .msg-content {\n  color: #fff;\n  border-bottom-left-radius: 0;\n}\n\n.message.left span.triangle {\n  border-top-width: 0;\n  border-right-width: 0;\n  left: -2px;\n  background: var(--ion-color-secondary);\n}\n\n.message.right .msg-detail {\n  padding-right: 6px;\n}\n\n.message.right .msg-detail .msg-info {\n  text-align: right;\n}\n\n.message.right .msg-detail .username {\n  color: #fff;\n}\n\n.message.right .user-img {\n  right: 0;\n}\n\n.message.right ion-spinner {\n  position: absolute;\n  right: 10px;\n  top: 50px;\n}\n\n.message.right .msg-content {\n  background-color: var(--ion-color-logo);\n  text-align: end;\n  border-bottom-right-radius: 0;\n  margin: 0 0 0 auto;\n}\n\n.message.right span.triangle {\n  background-color: var(--ion-color-secondary);\n  border-bottom-width: 0;\n  border-left-width: 0;\n  right: 2px;\n}\n\n.item-md ion-avatar ion-img, .item-md ion-avatar img {\n  border-radius: 4px;\n  overflow: hidden;\n  width: 87px;\n  height: 87px;\n  object-fit: cover;\n}\n\nion-note {\n  color: var(--ion-color-logo);\n  font-weight: bolder;\n}\n\n.info-row {\n  z-index: 9999 !important;\n  width: 12%;\n  text-overflow: ellipsis;\n  justify-content: space-around;\n  display: flex;\n  position: relative;\n}\n\n.info-row ion-col {\n  align-content: center;\n  text-align: center;\n  align-items: center;\n  align-self: center;\n}\n\n.info-row ion-col ion-icon {\n  letter-spacing: 5px;\n}\n\n.text-center {\n  text-align: center !important;\n}\n\n.text-center .day-label {\n  display: inline-block;\n  padding: 5px 15px;\n  border: 2px solid var(--ion-color-logo);\n  color: var(--ion-color-logo);\n  border-radius: 15px;\n  margin: 0 auto;\n  font-weight: bolder;\n  font-size: 16px;\n}\n\n.detailConversation {\n  margin-top: 5px;\n}\n\n.detailConversation h2,\n.detailConversation p {\n  margin: 0;\n  color: var(--ion-color-logo);\n  font-size: 2rem;\n}\n\np {\n  display: block;\n  /* overflow: hidden; */\n  flex: 1;\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.image_sender {\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  margin-right: 14px;\n  align-self: center;\n}\n\n.col_button_options_send {\n  justify-content: center;\n}\n\n.col_button_options_send > ion-button {\n  --padding-start: unset;\n  --padding-end: unset;\n}\n\n.color-footer {\n  background-color: currentColor !important;\n}\n\napp-footer {\n  order: 1;\n  margin-top: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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QTtFQUNFLHVCQUF1QjtBQXZCekI7O0FBeUJBO0VBQ0Usc0JBQWdCO0VBQ2hCLG9CQUFjO0FBdEJoQjs7QUF3QkE7RUFDRSx5Q0FBeUM7QUFyQjNDOztBQXlCQTtFQUNFLFFBQVE7RUFDUixlQUFlO0FBdEJqQiIsImZpbGUiOiJjaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk6ICRwcmltYXJ5O1xyXG4vLyR0b1VzZXJCYWNrZ3JvdW5kQ29sb3I6IG1hcC1nZXQoJGNvbG9ycywgc2Vjb25kYXJ5KTtcclxuXHJcbmlvbi1pdGVtLWRpdmlkZXIge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taXRlbS1kaXZpZGVyIGlvbi1sYWJlbCB7XHJcbiAgbWFyZ2luOiAxM3B4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW0tZGl2aWRlciBpb24tbGFiZWwgaDMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICNjM2RmZjc7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sb2dvKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcblxyXG4ubGluZS1icmVha2VyIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIge1xyXG4gIG1pbi13aWR0aDogNDBweDtcclxuICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogNTVweDtcclxufVxyXG5cclxuaW9uLWF2YXRhciBpb24taW1nLCBpb24tYXZhdGFyIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5jdXJyZW50X3Byb2R1Y3Qge1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wOiAuNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1sb2dvKTtcclxuICBib3JkZXItYm90dG9tOiAuNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1sb2dvKTtcclxuICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAuNCk7XHJcbn1cclxuXHJcbi5jdXJyZW50X3Byb2R1Y3QgLml0ZW0taW5uZXIge1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDI4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlzLXR5cGluZy1kb3RzIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5cclxuLmlzLXR5cGluZy1kb3RzIGlvbi1zcGlubmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHdpZHRoOiA1MXB4O1xyXG59XHJcblxyXG4uaXMtdHlwaW5nLWRvdHMgaW9uLXNwaW5uZXIgc3ZnIGNpcmNsZSB7XHJcbiAgZmlsbDogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuaW9uLWZvb3RlciBpb24tY29sIHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWZvb3RlciBidXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTVweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIgaW9uLXRleHRhcmVhIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIgaW9uLXRleHRhcmVhIHtcclxuICBtYXJnaW46IDVweDtcclxuICAtLXBhZGRpbmc6IDJweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LWhlaWdodDogNTVweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICNlZWUgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHJcbiAgcGFkZGluZzogMnB4IDEwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogMjlweDtcclxufVxyXG5cclxuXHJcbiNzZW5kIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzZW5kIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDM1cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNzZW5kIGJ1dHRvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vQGluY2x1ZGUgcnRsKCkge1xyXG4gIC8vICB0cmFuc2Zvcm06IHNjYWxlKC0xKTtcclxuICAvL31cclxufVxyXG5cclxuXHJcbi5tZXNzYWdlLXdyYXAge1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDdweCAwO1xyXG59XHJcblxyXG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG59XHJcblxyXG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIC5tZXNzYWdlIHAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm1zZy1pbmZvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjbGVhcjogYm90aDtcclxuICBkaXJlY3Rpb246IGluaXRpYWw7XHJcbiAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4ubXNnLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICAvKiBwYWRkaW5nLWJvdHRvbTogOHB4OyAqL1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1pbi13aWR0aDogNTBweDtcclxuICB3aWR0aDogMTVyZW07XHJcbiAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4ubXNnLWNvbnRlbnQgLnVzZXJuYW1lIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLm1zZy1jb250ZW50IC50ZXh0LW1zZyB7XHJcbiAgcGFkZGluZzogMCA4cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubXNnLWNvbnRlbnQgLmltYWdlLW1zZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuXHJcbi5tc2ctZGV0YWlsIHNwYW4udHJpYW5nbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgdG9wOiAyMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcblxyXG4ubWVzc2FnZS5sZWZ0IC5tc2ctY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZTkxYjY7XHJcbn1cclxuXHJcbi5tZXNzYWdlLmxlZnQgLm1zZy1jb250ZW50IC5tc2ctZGV0YWlsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLm1lc3NhZ2UubGVmdCAubXNnLWNvbnRlbnQgLm1zZy1kZXRhaWwgLnVzZXJuYW1lIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi5tZXNzYWdlLmxlZnQgLnVzZXItaW1nIHtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4ubWVzc2FnZS5sZWZ0IC5tc2ctY29udGVudCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG5cclxuLm1lc3NhZ2UubGVmdCBzcGFuLnRyaWFuZ2xlIHtcclxuICBib3JkZXItdG9wLXdpZHRoOiAwO1xyXG4gIGJvcmRlci1yaWdodC13aWR0aDogMDtcclxuICBsZWZ0OiAtMnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG5cclxuLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcclxufVxyXG5cclxuLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwgLm1zZy1pbmZvIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwgLnVzZXJuYW1lIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi5tZXNzYWdlLnJpZ2h0IC51c2VyLWltZyB7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5tZXNzYWdlLnJpZ2h0IGlvbi1zcGlubmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS5yaWdodCAubXNnLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1sb2dvKTtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xyXG5cclxuICAvLyBib3JkZXItYm90dG9tOiAycHggc29saWQgIzljMTQ2MjtcclxufVxyXG5cclxuLm1lc3NhZ2UucmlnaHQgc3Bhbi50cmlhbmdsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICByaWdodDogMnB4O1xyXG59XHJcblxyXG5cclxuLml0ZW0tbWQgaW9uLWF2YXRhciBpb24taW1nLCAuaXRlbS1tZCBpb24tYXZhdGFyIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDg3cHg7XHJcbiAgaGVpZ2h0OiA4N3B4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIC8vIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5pb24tbm90ZSB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sb2dvKTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uaW5mby1yb3cge1xyXG4gIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTIlO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIC8vbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW5mby1yb3cgaW9uLWNvbCB7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmluZm8tcm93IGlvbi1jb2wgaW9uLWljb24ge1xyXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbn1cclxuXHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIgLmRheS1sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1sb2dvKTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxvZ28pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcblxyXG4uZGV0YWlsQ29udmVyc2F0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5kZXRhaWxDb252ZXJzYXRpb24gaDIsXHJcbi5kZXRhaWxDb252ZXJzYXRpb24gcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbG9nbyk7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5wIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgLXdlYmtpdC1mbGV4OiAxO1xyXG4gIC1tcy1mbGV4OiAxO1xyXG4gIGZsZXg6IDE7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5pbWFnZV9zZW5kZXIge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTRweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLmNvbF9idXR0b25fb3B0aW9uc19zZW5ke1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jb2xfYnV0dG9uX29wdGlvbnNfc2VuZCA+IGlvbi1idXR0b24ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogdW5zZXQ7XHJcbiAgLS1wYWRkaW5nLWVuZDogdW5zZXQ7XHJcbn1cclxuLmNvbG9yLWZvb3RlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3IgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbmFwcC1mb290ZXJ7XHJcbiAgb3JkZXI6IDE7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 86038:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button fill=\"clear\" (click)=\"goBackProduct(conversation?.product)\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ receiver?.name }}</ion-title>\r\n    <!-- <ion-buttons right>\r\n      <button ion-button clear icon-only (click)=\"pickImage()\">\r\n        <ion-icon name=\"images\"></ion-icon>\r\n      </button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #content>\r\n  <!-- <app-categories-slider></app-categories-slider> -->\r\n  <div>\r\n  <ion-item slot='fixed' (click)=\"goToProduct(conversation?.product)\" class=\"current_product\">\r\n    <ion-avatar class='animated fadeIn' slot=\"start\">\r\n      <img\r\n        [src]=\"conversation?.product?.src || (conversation?.product?.galleries && conversation?.product?.galleries[0].url)\"\r\n        (click)=\"openViewer(conversation?.product?.src || (conversation?.product?.galleries && conversation?.product?.galleries[0].url))\">\r\n    </ion-avatar>\r\n    <ion-row class=\"detailConversation\">\r\n      <h2>{{conversation?.product?.title}}</h2>\r\n    </ion-row>\r\n  </ion-item>\r\n</div>\r\n  <ion-infinite-scroll *ngIf=\"isInfinitScrollEnabled\" (ionInfinite)=\"initChat($event)\" position=\"top\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"dots\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n  <div *ngFor=\"let groupedMsgList of groupedMessages \" style=\"padding-block: 2%;\">\r\n    <ion-item-group>\r\n      <ion-item-divider sticky class=\"text-center\">\r\n        <h3 class=\"day-label\">{{ groupedMsgList.key }}\r\n        </h3>\r\n      </ion-item-divider>\r\n      <div class=\"message-wrap\">\r\n        <div *ngFor=\"let msg of groupedMsgList.value\" class=\"message\"\r\n             [class.left]=\"msg.sender.id !== services.current_user.id\"\r\n             [class.right]=\"msg.sender.id === services.current_user.id\">\r\n          <div class=\"msg-detail\">\r\n            <!--             <span class=\"triangle\"></span>-->\r\n            <img src=\"https://via.placeholder.com/150\" class=\"image_sender\" alt=\"\"\r\n                 *ngIf=\"msg.sender.id !== services.current_user.id\">\r\n            <div class=\"msg-content\" [class.image-content]=\"msg.image\">\r\n              <img *ngIf=\"msg.image\" imageViewer class=\"image-msg\" [src]=\"msg.image\">\r\n              <p class=\"line-breaker text-msg\" *ngIf=\"msg.body\">{{msg.body}}</p>\r\n              <div class=\"msg-info\">\r\n                {{msg.created_at | dateFormat : 'HH:mm'}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-item-group>\r\n  </div>\r\n  <!-- [@isTypingAnimation] -->\r\n  <div class=\"is-typing-dots\" [@isTypingAnimation] *ngIf=\"isTyping\">\r\n    <ion-spinner name=\"dots\"></ion-spinner>\r\n  </div>\r\n\r\n</ion-content>\r\n<ion-footer class=\"color-footer\" id=\"footer-id\">\r\n  <ion-row>\r\n    <ion-col size=\"2\" class=\"col_button_options_send\">\r\n      <ion-button fill=\"clear\">\r\n        <ion-icon class=\"animated\" slot=\"icon-only\" name=\"camera-sharp\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button fill=\"clear\">\r\n        <ion-icon class=\"animated\" slot=\"icon-only\" name=\"attach-sharp\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-textarea enterkeyhint=\"send\" elasticTextArea  [placeholder]=\"'chat.tapMsg'|translate\"\r\n                    [(ngModel)]=\"newMsg\"\r\n                    (keydown)=\"onTyping()\" (ionFocus)=\"onFocus()\"></ion-textarea>\r\n    </ion-col>\r\n    <ion-col size=\"2\" id=\"send\">\r\n\r\n      <ion-button fill=\"clear\" (click)=\"send()\" [disabled]=\"!newMsg?.length\">\r\n        <ion-icon class='animated' slot=\"icon-only\" [class.bounceIn]=\"newMsg?.length\" name=\"send\" ios=\"send\" md=\"send\">\r\n        </ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n<!-- <app-footer></app-footer> -->\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_chat_chat_module_ts.js.map