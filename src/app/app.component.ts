import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { trigger, transition, query, animate, style, keyframes, stagger, state } from '@angular/animations';
import * as $ from 'jquery';
import { NavigationEnd, Router } from '@angular/router';
import { MenuController, ModalController, Platform } from '@ionic/angular';
import { MediaObject } from '@awesome-cordova-plugins/media/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
//import {NotificationEventResponse, Push, PushObject, PushOptions} from '@havesource/cordova-plugin-push/types';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { BranchIo } from '@awesome-cordova-plugins/branch-io/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { Badge } from '@awesome-cordova-plugins/badge/ngx';
import {
  BackgroundGeolocation,
  BackgroundGeolocationConfig,
  BackgroundGeolocationEvents, BackgroundGeolocationResponse
} from '@awesome-cordova-plugins/background-geolocation/ngx';

import { ApiServices } from './services/api-services/api-services';
import { AppConfigService } from './services/app-config/app-config';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './services/storage/storage';
import { CustomCardPage } from './pages/custom-card/custom-card.page';
import { SettingsPage } from './pages/settings/settings.page';
import { SubCategoriesPage } from './pages/sub-categories/sub-categories.page';
import { InfoPage } from './pages/info/info.page';
import { FirebaseX } from '@awesome-cordova-plugins/firebase-x/ngx';
import { jsonpFactory } from '@angular/http/src/http_module';
import { Notification, Subscription } from 'rxjs';
import { BadgeService } from './services/badge-service/badge.service';
import { ProductService } from './services/product/product.service';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [
    trigger('pushNotifAnimation', [
      transition(':enter', [
        animate('.5s ease-in', keyframes([
          style({ transform: 'translateY(-100%)', offset: 0 }),
          style({ transform: 'translateY(10px)', offset: .4 }),
          style({ transform: 'translateY(-5px)', offset: .7 }),
          style({ transform: 'translateY(0px)', offset: 1.0 }),
        ]))
      ]),
      transition(':leave', [
        animate('.2s ease-out', keyframes([
          style({ transform: 'translateY(0px)', offset: 0 }),
          style({ transform: 'translateY(-100%)', offset: 1.0 }),
        ]))
      ])
    ])
  ]

})
export class AppComponent {
  @ViewChild('customCard') customCard: ElementRef;
  rootPage: any = 'MapPage';
  timeoutHandle = null;
  notifys: any = [];
  isInChat = false;
  currentToken: any;
  notify: any = {
    product: {}
  };
  discussion: any = null;
  profile: any = null;
  profileId: any = null;
  showProfileCard = false;
  showNotify = false;
  showRow = false;
  audio: MediaObject;
  categories: any = [];
  showPushNotification = false;
  notifTimeout;
  currentConversationId;
 notificationProductNumber:number = 0;
 notificationMessageNumber:number = 0;
 subscription:Subscription;
 isLoggedIn:boolean;
 currentRoute: string;
 suiviIdNotif:Array<number>=[]
  constructor(private platform: Platform,
    private zone: NgZone,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private router: Router,
    private services: ApiServices,
    private productService:ProductService,
    public modalCtrl: ModalController,
    public menu: MenuController,
    private device: Device,
    private branch: BranchIo,
    private callNumber: CallNumber,
    private badge: Badge,
    public appConfig: AppConfigService,
    private translate: TranslateService,
    private storage: StorageService,
    private backgroundGeolocation: BackgroundGeolocation,
    private firebase: FirebaseX,
    private badgeService: BadgeService,
    
    
  ) {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        Promise.resolve().then(() => {
          statusBar.overlaysWebView(true);
          statusBar.backgroundColorByHexString('hsl(209deg 71% 28%)');
          statusBar.styleDefault();
          splashScreen.hide();
          console.log('we Are inside Events now');
          this.initLocation();
        })
      }
      // this.subscription= this.badgeService.clearBadgesMessage();
    
    });

    this.subscription= this.badgeService.resetBadgeMessage().subscribe(()=>{this.notificationMessageNumber=0});
    this.subscription= this.badgeService.resetBadgeProduct().subscribe(()=>{this.notificationProductNumber=0});
    router.events.filter(event => event instanceof NavigationEnd)
    .subscribe(event => 
     {;
       if (event['url'] == '/chat') {
        this.badgeService.insideChat(true);
       } else{
        this.badgeService.insideChat(false);
       }
     });
this.isLoggedIn=services.isLoggedIn;
    const self = this;
    platform.ready().then(() => {
      this.initLang();
      const user = JSON.parse(localStorage.getItem('onatrouvé_user'));
      const tokens = JSON.parse(localStorage.getItem('onatrouvé_token'))

      if (user && tokens) {
        this.currentToken = tokens.token;
        this.services.current_user = user;
        this.services.isLoggedIn = true;
        if (this.platform.is('cordova')) {
          Promise.resolve().then(() => {
            this.initLocation()
          })
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
            router.events.filter(event => event instanceof NavigationEnd)
            .subscribe(event => 
             {;
               if (event['url'] !== '/discussion') {
                this.badgeService.clearBadgesMessage();
               }else if (event['url'] !== '/finders') {
                this.badgeService.clearBadges();
               } else {
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
            } else if (isproduct) {
             
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
              })
              
            }else{
              if (ischat) {
                  this.badgeService.sendBadgeMessageNumber(this.increamentMessageNumber());
            }else if (isproduct) {
              badgeService.sendSuivisNotificationId(this.suiviIdNotif)
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

    $(document).on('click', '.tappeditems .label', (e) => {
      $(this).parent().parent().parent().siblings().slideToggle(120);
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
increamentProductNumber(){
  this.notificationProductNumber += 1;
  return this.notificationProductNumber;
}
 increamentMessageNumber(){
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

      } else {
        if (data['+non_branch_link'] && data['+non_branch_link'].indexOf('reset')) {
          console.log('Inside Branche');
          const fullurl = data['+non_branch_link'];
          const reseToken = fullurl.substr(
            fullurl.lastIndexOf('/') + 1,
            fullurl.length
          );
          setTimeout(() => {
            this.router.navigateByUrl('/change-password/' + reseToken);
          }, 10);

        }
      }
    });
  }

  showProductDetails(pooductId) {
    this.productService.getProductbyId(pooductId).subscribe((product: any) => {
      this.router.navigateByUrl('product-details/' + product);
    }, (err: any) => {
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
    $(document).ready(() => {
      $('.tappeditems').on('click', (event) => {
        alert('aaaa');
      });
    });
  }

  async gotoTarget(notify) {
    this.showPushNotification = false;
    if (notify.target === 'Profile' && notify.profile_id) {
      // Get User By ID Profile Is the id
      this.services.getuserByID(notify.profile_id).then(async (res: any) => {
        this.profile = res;
        setTimeout(async () => {
          const modal = await this.modalCtrl.create({
            component: CustomCardPage,
            componentProps: {
              notify,
              profile: this.profile,
            },
            cssClass: 'filter-modal'
          });
          return await modal.present();
        }, 0);
      }).catch((error: any) => {
        console.log(error);
      });
    } else if (notify.target === 'discussion') {
      const conversation = {
        product: notify.product,
        conversation: notify.conversation,
        comefromnotif: true
      }
      this.increamentMessageNumber()
      this.badgeService.sendBadgeMessageNumber(this.increamentMessageNumber())
      this.router.navigateByUrl(notify.target, { state: { conversation } })
      
    } else if (notify.target === 'finders') {
      const natification = {
        notif: notify,
        comefromnotif: true
      } 
      this.increamentProductNumber()
      this.badgeService.sendBadgeProductNumber(this.increamentProductNumber())     
      this.router.navigateByUrl(notify.target ,{ state: { natification }});
    }else{
      console.log("route undefinned");
      
    }
  }

  async openLangModal() {
    const modal = await this.modalCtrl.create({
      component: SettingsPage,
      cssClass: 'categories-modal'
    });
    await modal.present();
    await modal.dismiss(params => {
      console.log('Console from LangModals');
    });
  }

  async openCategoryModal(category) {
    this.menu.close();
    const modal = await this.modalCtrl.create({
      component: SubCategoriesPage,
      componentProps: { subcategories: category.subcategories },
      cssClass: 'categories-modal'
    });
    await modal.present();
    await modal.onDidDismiss().then((params: any) => {
      if (params && params.data.link) {
        this.gotoproducts(params.data.link.title);
      }

    });
  }

  gotoproductsfrommenue(subcategorie_title) {
    this.gotoproducts(subcategorie_title);
  }


  async openInfoModal() {
    const modal = await this.modalCtrl.create({
      component: InfoPage
    });
    return await modal.present();
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
    const bgGeolocationConfig: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 5,
      interval: 5000,
      notificationTitle: 'Tracking',
      notificationText: '',
      debug: false, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
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
      this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
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

  goto(link, params?) {
    this.menu.close();
    this.router.navigateByUrl(link);
  }



  gotoHome() {
    this.router.navigateByUrl('/map');
  }

  logout() {
    this.services.logout().then((res: any) => {
      this.stopBackgroundGeolocation();
      this.services.isLoggedIn = false;
      localStorage.clear();
      setTimeout(() => {
        this.router.navigateByUrl('/map');
      }, 100);
    }).catch((err: any) => {
      this.services.fireError(err);
    });
  }

  async setBagdgePermission() {
    try {
      const hasPermission = await this.badge.hasPermission();

      if (!hasPermission) {
        const permission = await this.badge.requestPermission();

      }
    } catch (e) {
      console.error(e);
    }
  }

  async setbadge(badgeNumber: number) {
    try {
      const badges = await this.badge.set(badgeNumber);
    } catch (e) {
      console.error(e);
    }
  }

  async getbadges() {
    try {
      const existingBadges = await this.badge.get();
      return existingBadges;
    } catch (e) {
      console.error(e);
    }
  }

  async clearBadges() {
    try {
      await this.badge.clear();
    } catch (error) {
      console.error(error);
    }
  }

  async increasebadges(badgeNumber: number) {
    try {
      const badges = await this.badge.increase(Number(badgeNumber));
    } catch (e) {
      console.error(e);
    }
  }

  fireMethod({ method, params }) {
    this[method](params);
  }

  async decreasebadges(badgeNumber: number) {
    try {
      const badges = await this.badge.decrease(Number(badgeNumber));
    } catch (e) {
      console.error(e);
    }
  }

  async changeLanguage(lang) {
    this.appConfig.userSettings.language = lang;
    await this.storage.set('userSettings', this.appConfig.userSettings);
    this.changeDirection();
  }

  async changeDirection() {
    const userSettings = await this.storage.get('userSettings');
    if (userSettings) {
      this.appConfig.userSettings = userSettings;
    }
    if (this.appConfig.userSettings.language === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
    this.translate.use(this.appConfig.userSettings.language);
    // this.events.publish('languageChange',true);
  }


  async initLang() {
    const userSettings = await this.storage.get('userSettings');
    this.translate.setDefaultLang('fr');
    if (userSettings && userSettings.language) {
      this.appConfig.userSettings = userSettings;
      if (userSettings.language === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      };
      this.translate.use(userSettings.language);
    } else {
      document.documentElement.dir = 'ltr';
      this.translate.use('fr');
    }
  }
  gotoproducts(category) {
    // this.router.navigateByUrl('/products/' + category);
  }
}
