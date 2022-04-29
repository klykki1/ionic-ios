import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuController, ModalController, NavParams} from '@ionic/angular';
import {ApiServices} from '../../services/api-services/api-services';
import {UiService} from '../../services/ui/ui';
import * as $ from 'jquery';
import {catchError} from 'rxjs/operators';
import {ProductDetailsPage} from '../product-details/product-details.page';
import {ViewerModalComponent} from 'ngx-ionic-image-viewer';
import { ProductService } from 'src/app/services/product/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  banners: any = [];
  toogleInfo = false;
  categorys: any = [];
  doinfinity: any;
  products: any = [];
  countsProducts: any = null;
  page = 1;
  region: any;
  list = false;
  filter: any = {
    price: false,
    distance: false,
    date: true,
    lat: 0,
    lng: 0
  };
  private filtred: any = [];
  private searchKey: any;
  private searchAddress: any;

  constructor(public router: Router,
              private params: NavParams,
              public menuCtrl: MenuController,
              private modalController: ModalController,
              private services: ApiServices,
              private Productservices: ProductService,
              private ui: UiService) {
    this.Productservices.countsProduct().subscribe(data => {
      this.countsProducts = data;
    });

    // console.log('Welcome To Home Page ');
    $(() => {
      // console.log('Inside Jquery');
      const images = $('.img-card');
      images.each(function() {
        if (!this.complete) {
          console.log('Inside Jquery Images');
          $(this).one('load', function() {
            console.log('Inside Load Event');
            $(this).show();
            $(this).next('.no-contain').hide();
          });
        } else {
          $(this).show();
          $(this).next('.no-contain').hide();
        }
      });

    });
    this.filtred = this.products;
  }

  ngOnInit() {
    if (this.params.get('openMenu')) {
      this.openMenu();
    }
    this.region = this.params.get('region');
    if (this.region) {
      console.log('Region to Search ', this.region);
      this.Productservices.getProductsByRegion(this.region, this.page).then((products) => {
        console.log('This IS The Products Recived ', products);
        console.log('region changed');
        console.log(' >>> >>> >>> >>> >>> >>> >>> >>> >>> >>> > ', products);
        this.products = products;
        this.loadImages();
      }).catch((err) => {
        console.log('Request Error', err);
      });
    } else {
      this.Productservices.getAllProducts(this.page, false, this.filter).subscribe((products) => {
        this.products = products;
        this.loadImages();
      }, catchError(error => {
        console.log('Error : ', error);
        throw error;
      }));
    }
  }


  async openViewer(img) {
    const modal = await this.modalController.create({
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

  async gotoDetails(product) {
    // this.router.navigateByUrl('/product-details', {state: {product}});
    this.toogleInfo = false;
    const modal = await this.modalController.create({
      component: ProductDetailsPage,
      componentProps: {product},
    });
    return await modal.present();
  }


  gotoproducts(category?) {
    this.toogleInfo = false;
    // this.router.navigateByUrl('/products', {state: {category}});
  }

  filterItems(ev: any) {
    const val = ev.target.value;
    this.filtred = this.products;
    if (val && val.trim() !== '') {
      console.log('This is The value ', val, ' / ', val.trim());
      this.filtred = this.filtred.filter( (item)=> {
        console.log(item);
        return item.title.toLowerCase().includes(val.toLowerCase());
      });
      console.log('After-Filter-Search : ', this.products);
    }
  }

  switchtolist() {
    this.list = !this.list;
    this.loadImages();
  }


  loadImages() {
    $(function() {
      // console.log('Inside Jquery');
      const images = $('.img-card');
      images.each(function() {
        if (!this.complete) {
          // console.log('Inside Jquery Images');
          $(this).one('load', function() {
            // console.log('Inside Load Event');
            $(this).show();
            $(this).next('.no-contain').hide();
          });
        } else {
          $(this).show();
          $(this).next('.no-contain').hide();
        }
      });
    });
  }


  openMenu() {
    this.menuCtrl.open('first');
  }

  change(date) {
    console.log(date);
    console.log(new Date(date));
    return new Date(date);
  }

  getspeceficProducts() {
    this.Productservices.getProductsBySearch(this.searchAddress, this.searchKey).then((res: any) => {
      if (res.products)
        {this.products = res.products;}
      else
        {this.products = res;}
      this.toogleInfo = false;
      this.region = this.searchAddress;
      this.loadImages();
      console.log(this.products);
    }).catch((err) => {
      this.ui.toast('Erreur : Recherche non Abouti');
    });
  }

  // addFavories(current_product) {
  //   if (this.services.isLoggedIn) {
  //     this.services.addfavories(current_product.id).subscribe((res) => {
  //       this.ui.toast('Ce produit est Favori');
  //     },catchError((err) => {
  //       this.services.fireError(err);
  //       throw err;
  //     }));
  //   } else {
  //     this.ui.confirmation('s\'identifier ! ', 'Identfiez Vous pour Consulter la Conversation').then(() => {
  //       this.router.navigateByUrl('/login');
  //     });

  //   }
  // }

  doInfinite(event) {
    this.doinfinity = event.target;
    this.page++;
    if (this.region) {
      console.log('Region to Search ', this.region);
      this.Productservices.getProductsByRegion(this.region, this.page, true).then((res: any) => {
        console.log('This IS The Products Recived ', res);
        console.log('region changed', this.products);
        if (res.length > 0) {
          res.forEach(element => {
            this.products.push(element);
          });
          console.log('this is the Filtred From Infinity Scroll >>>', this.products);
          // setTimeout(() => {
          //   this.products=this.filtred;
          //   console.log('this is the Product From Infinity Scroll >>>',this.products);
          //   this.loadImages();
          // }, 10);

        } else {
          this.doinfinity.disabled = true;
        }
        this.doinfinity.complete();
        setTimeout(() => {
          this.loadImages();
        }, 5);
      }).catch((err) => {
        this.doinfinity.complete();
        console.log('Request Error', err);
      });
    } else {
      this.Productservices.getAllProducts(this.page, true, this.filter).subscribe((res: any) => {
        res.forEach(element => {
          this.products.push(element);
        });
        // setTimeout(() => {
        //         this.products=this.filtred;
        //       }, 10);
        this.services.getCurrentLocation(true).then((pos: any) => {
          this.services.current_position.lat = pos.coords.latitude;
          this.services.current_position.lng = pos.coords.longitude;
          // console.log('This is The Current Location Information : ', pos);
        }).catch(err => {
          console.log(err);
          // this.services.fireError(err);
        });
        if (res.length === 0) {
          this.doinfinity.disabled = true;
        }
        this.doinfinity.complete();
        setTimeout(() => {
          this.loadImages();
        }, 5);

      });
    }
  }


}
