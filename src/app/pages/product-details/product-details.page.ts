import {ChangeDetectorRef, Component, ElementRef, Input, NgZone, OnInit, ViewChild} from '@angular/core';
import {
  IonContent,
  IonSlides,
  MenuController,
  ModalController,
  NavController,
  NavParams,
  Platform
} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiServices} from '../../services/api-services/api-services';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import {UiService} from '../../services/ui/ui';
import {AppConfigService} from '../../services/app-config/app-config';
import {RatingPage} from '../rating/rating.page';
import {EmailComposer} from '@awesome-cordova-plugins/email-composer/ngx';
import {SocialSharing} from '@awesome-cordova-plugins/social-sharing/ngx';
import {ViewerModalComponent} from 'ngx-ionic-image-viewer';
import {catchError} from 'rxjs/operators';
import {ChatPage} from '../chat/chat.page';
import {SlideupComponent} from '../../components/slideup/slideup.component';
import { ProductService } from 'src/app/services/product/product.service';
import { FavoritesService } from 'src/app/services/product/favorites.service';
declare var Branch;

declare const google: any;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild('mainSlide') mainSlide: IonSlides;
  // @ViewChild('map') mapElement: ElementRef;
  @ViewChild(IonContent) content: IonContent;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  @Input() product: any;
  map: any;
  currentProduct: any = {};
  showConfirm = false;
  showWays = false;
  gettingLocation = false;
  slideOpts = {
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
  loading = false;
  segmentModel: any = 'image';
  backdropVisible = false;

  constructor(public router: Router,
              public services: ApiServices,
              private productService:ProductService,
              private favorieService:FavoritesService,
              public navParams: NavParams,
              private active: ActivatedRoute,
              private callNumber: CallNumber,
              private emailComposer: EmailComposer,
              private ui: UiService,
              private appConfig: AppConfigService,
              private platform: Platform,
              private socialSharing: SocialSharing,
              private modalCtrl: ModalController,
              private changeDetectorRef: ChangeDetectorRef
  ) {
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
      this.currentProduct = res;
      // if (this.mapElement !== undefined) {
      //
      //   this.getCurrentPosition();
      // }
      this.services.addvisitors(this.currentProduct?.id).subscribe((resp: any) => {
        // console.log(resp);
        this.currentProduct.visitor = resp.visitors;
      });
    });
  }

  async openViewer(img) {
    const modal = await this.modalCtrl.create({
      component: ViewerModalComponent,
      componentProps: {
        src: img
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

  slideChanged(currentIndex) {
    this.mainSlide.slideTo((currentIndex + 1));
  }

  close() {
    this.modalCtrl.dismiss();
    // this.router.navigateByUrl('/home');
  }

  async goto(link, product?) {
    if (this.services.isLoggedIn) {
      if (product.person.id !== this.services.current_user.id) {
        const conversation = {
          receiver: product.person,
          product
        };
        this.router.navigateByUrl('/chat', {state: {conversation}});

      } else {
        this.router.navigateByUrl('/discussion/' + product?.id);
      }
    } else {
      this.ui.confirmation('s\'identifier ! ', 'Identfiez Vous pour Consulter la Conversation').then(() => {
        this.modalCtrl.dismiss();
        this.router.navigateByUrl('login');
      });

    }
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
      this.emailComposer.isAvailable().then((available: boolean) => {
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
    } else {
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
      let properties: any = {
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
        properties = {
          ...properties,
          ...extrasProperties
        };
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
            } else if (shareType === 'twitter') {
              this.socialSharing.shareViaTwitter(this.currentProduct.description, null, res.url).then((resp) => {
                this.ui.unLoading();
              }).catch(err => {
                this.ui.unLoading();
                console.log(err);
              });
            } else {
              this.socialSharing.share(this.currentProduct.description, this.currentProduct.title, picture, res.url)
                .then((resp) => {
                  this.ui.unLoading();
                }).catch(err => {

                this.ui.unLoading();
                console.log(err);
              });
            }// endif shareType
          });// shareType Promise
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

  scrollToBottom(duration?: number) {
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
      this.favorieService.addfavories(this.currentProduct.id).subscribe((res: any) => {
        this.currentProduct.isfavory = res.favory.isfavory;
        if (res.favory.isfavory) {
          this.ui.toast('Cette annonce est dans votre liste de favoris');
        } else {
          this.ui.toast('Cette annonce n’est plus dans votre liste de favoris');
        }
      }, (err) => {
        this.services.fireError(err);
        throw err;
      });
    } else {
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
    } else {
      this.ui.confirmation('Identifier ! ', 'Vous devez vous identifier').then(() => {
        this.router.navigateByUrl('/login');
      });
    }

  }

  async openRateModal() {
    console.log('ok',this.currentProduct)
    const mapModal = await this.modalCtrl.create({
      component: RatingPage,
      componentProps: {
        providerRate: this.currentProduct.rate
      },
      cssClass: 'Rating-modal'
    });
    await mapModal.present();
    await mapModal.onDidDismiss().then(params => {
      if (params) {

        this.services.addrates(this.currentProduct.id, params.data).subscribe((res: any) => {
          this.currentProduct.rate = res.rate.rates;
        }, err => {
          console.log(err);
        });
      } else {
        console.log('No Data');
      }
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
    this.favorieService.checkFavory(this.currentProduct.id).subscribe((res: any) => {
      this.currentProduct.isfavory = res.isfavory;
    }, err => {
      console.log(err);
      this.services.fireError(err);
    });
  }

  public next() {
    this.slides.slideNext();
  }

  public prev() {
    this.slides.slidePrev();
  }

  segmentChanged($event: any) {
    this.segmentModel = $event.target.value;
  }

  async toggleBackdrop(isVisible?) {
    const modal = await this.modalCtrl.create({
      component: SlideupComponent,
      componentProps: {
        product: this.product
      }
    });
    await modal.present();
    // this.backdropVisible = isVisible;
    // this.changeDetectorRef.detectChanges();
  }
}
