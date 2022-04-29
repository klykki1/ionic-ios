import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IonInfiniteScroll, ModalController, NavParams, Platform} from '@ionic/angular';
import {ApiServices} from '../../services/api-services/api-services';
import {FiltersModalPage} from '../filters-modal/filters-modal.page';
import {catchError} from 'rxjs/operators';
import {ViewerModalComponent} from 'ngx-ionic-image-viewer';
import {HttpClient} from '@angular/common/http';
import {UiService} from "../../services/ui/ui";
import { ProductService } from 'src/app/services/product/product.service';
import { FavoritesService } from 'src/app/services/product/favorites.service';

interface InfiniteScrollCustomEvent extends CustomEvent {
  target: HTMLIonInfiniteScrollElement;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit, OnChanges {
  @Output() onFireMethod: EventEmitter<{ method: string, params: any }> = new EventEmitter();
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  showSpinner = false;
  showRow = true;

  slideProductsOpts = {
    pagination: false,
    initialSlide: 0,
    speed: 400,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
   products: any = [];
   filter: any = {
    price: false,
    distance: false,
    date: false,
    lat: 0,
    lng: 0
  };
   category: any;
   searchterm: any;
   doinfinity: any =false; ;
   page = 1;
   selected: any = null;
   filtred: any = [];

  constructor(public router: Router,
              public navParams: NavParams,
              private httpClient: HttpClient,
              public activatedRoute: ActivatedRoute,
              public services: ApiServices,
              public favorieService: FavoritesService,
              private productService:ProductService,
              private ui: UiService,
              private platform: Platform,
              private modalCtrl: ModalController) {
  }


  ngOnInit() {
    this.page=1;
    this.activatedRoute.params.subscribe(res => {
      if (res.category != null) {
        this.getproducts(res.category);
      } else {
        this.getproducts();
      }

    });
  }
  ionViewWillEnter(){
    this.page=1;
  }

  fireMethod(method, params?) {
    this.onFireMethod.emit({method, params});
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
      const location = {lat: product.address.lat, lng: product.address.long};
      const currentPosition = {lat: this.services.current_position.lat, lng: this.services.current_position.lng};
      const R = 6371; // Radius of the earth in km
      const dLat = this.deg2rad(location.lat - currentPosition.lat);  // this.deg2rad below
      const dLon = this.deg2rad(location.lng - currentPosition.lng);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.deg2rad(currentPosition.lat)) * Math.cos(this.deg2rad(location.lat)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c; // Distance in km
      return d.toFixed(2);
    } else {
      return 0;
    }
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }


  async gotoDetails(product) {
    // const modal = await this.modalCtrl.create({
    //   component: ProductDetailsPage,
    //   componentProps: {
    //     product
    //   },
    // });
    //
    // return await modal.present();

    this.router.navigateByUrl('/product-details/' + product?.id);
  }

  filterItems(ev: any) {
    const val = ev.target.value;
    this.filtred = this.products;
    if (val && val.trim() !== '') {
      this.filtred = this.filtred.filter((item) => item.title.toLowerCase().includes(val.toLowerCase()));
    }
  }

  getdatfromdateBase(val: any) {
    this.searchterm = val;
    if (val) {
      this.showSpinner = true;
      this.products = [];
      this.filtred = [];
      this.productService.getsearchAds(val, this.category).subscribe((res: any) => {
        this.showSpinner = false;
        setTimeout(() => {
          this.products = res;
          this.filtred = res;
        }, 0);
      });
    } else {
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
      } else {
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
    this.favorieService.addfavories(product.id).subscribe((res: any) => {
      console.log('Back From Favvoris ', res);
    }, catchError((err: any) => {
      // this.services.fireError(err);
      throw err;
    }));
  }

  getproducts(category?) {
    if (category) {
     // this.ui.loading();
      this.productService.getProductsByCategory(category, this.page, false, this.filter).subscribe((res: any) => {
        this.products = res;
        console.log(this.products);
        
        // this.ui.unLoading();
        this.filtred = this.products;
        this.services.getCurrentLocation(true).then((pos: any) => {
          this.services.current_position.lat = pos.coords.latitude;
          this.services.current_position.lng = pos.coords.longitude;
        }).catch(err => {
          console.log(err);
           this.services.fireError(err);
        });
      }, catchError(err => {
        console.log(err);
        throw err;
        // this.services.fireError(err);
      }));
    } else {
      // this.ui.loading();
      this.productService.getAllProducts(this.page, false, this.filter).subscribe((res: any) => {
        // this.ui.unLoading();
        this.products = res;
        this.filtred = this.products;
        this.services.getCurrentLocation(true).then((pos: any) => {
          this.services.current_position.lat = pos.coords.latitude;
          this.services.current_position.lng = pos.coords.longitude;
        }).catch(err => {
          console.log(err);
          // this.services.fireError(err);
        });
      });
    }
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

  doInfinite(infiniteScroll) {
    if (!this.searchterm) {
      this.doinfinity = infiniteScroll;
      this.page++;
      if (this.category) {
        this.productService.getProductsByCategory(this.category, this.page, true, this.filter).subscribe((res: any) => {
          res.forEach(element => {
            this.filtred.push(element);
          });
          setTimeout(() => {
            this.products = this.filtred;
          }, 100);
          this.services.getCurrentLocation(true).then((pos: any) => {
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
        }, catchError(err => {
          console.log(err);
          // this.services.fireError(err);
          this.doinfinity.target.complete();
          throw err;
        }));
      } else {
        this.productService.getAllProducts(this.page, true, this.filter).subscribe((res: any) => {
          res.forEach(element => {
            this.filtred.push(element);
          });
          setTimeout(() => {
            this.products = this.filtred;
          }, 10);
          this.services.getCurrentLocation(true).then((pos: any) => {
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
        }, catchError(error => {
          this.doinfinity.target.complete();
          throw error;
          // this.services.fireError(err);
        }));
      }
    }
  }

  async openfilter() {
    if (this.services.current_position) {
      this.filter.lat = this.services.current_position.lat;
      this.filter.lng = this.services.current_position.lng;
    }
    const modal = await this.modalCtrl.create({
      component: FiltersModalPage,
      componentProps: {filter: this.filter},
      cssClass: 'filter-modal'
    });
    await modal.present();
    await modal.onDidDismiss().then(filter => {
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
  }

  close() {
    this.modalCtrl.dismiss();
    // this.router.navigateByUrl('/home');
  }


  doRefresh(event) {
      //this.doinfinity.target.disabled = false;
    this.products = [];
    this.page=1;


    setTimeout(() => {
      if (typeof this.doinfinity.target !== 'undefined') {
        if ( this.doinfinity.target.disabled == true) {
          this.getproducts();
          event.target.complete();
          return this.doinfinity.target.disabled =false
        }else {
          this.getproducts();
          event.target.complete();
        }
       
      }else {
        this.getproducts();
        event.target.complete();
      }
    },1500);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getFiltred(event);
  }
}
