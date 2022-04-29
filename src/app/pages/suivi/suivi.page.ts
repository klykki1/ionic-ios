import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiServices} from '../../services/api-services/api-services';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {ModalController, NavParams} from '@ionic/angular';
import {UiService} from '../../services/ui/ui';
import {MapPikkerPage} from '../map-pikker/map-pikker.page';
import {ProductSuiviPickerPopOverComponent} from './product-suivi-picker-pop-over/product-suivi-picker-pop-over.component';
import { FindersService } from 'src/app/services/product/finders.service';
import { SuiviService } from 'src/app/services/suivi.service';

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.page.html',
  styleUrls: ['./suivi.page.scss'],
})
export class SuiviPage implements OnInit {
   color: any;
   selectedC: any = {};
   subcategories: any = [];
   selectedSub: any = {};
   suivi: any = {
    locate: true,
  };
   selected: any = null;

   propertyModel: any = {
    min: {},
    max: {}
  };
   metre: any;
   submit = false;
   selectedProperties: any = [];
   findProduct: any = {};
   selectedCategory: any = {};
   meter: any;
   priceMin: number;
   priceMax: number;
   structure: any = {lower: 33, upper: 60};
   categorys: any = [];

  constructor(public router: Router,
              private services: ApiServices,
              private suiviService: SuiviService,
              private formBuilder: FormBuilder,
              private zone: NgZone,
              private modalCtrl: ModalController,
              public navParams: NavParams,
              private ui: UiService) {
    this.initializeFrom();
  }


  loadSubcategories(event?) {
    //   if(this.selectedC.title!='EMPLOI'){
    //     this.findProduct.addControl('price_min', new FormControl('', Validators.required));
    //     this.findProduct.addControl('price_max', new FormControl('', Validators.required));
    //   }
    //   else{
    //   this.findProduct.removeControl('price_min');
    //   this.findProduct.removeControl('price_max');

    // }
    this.findProduct.controls.subcategory.reset();
    this.suivi.selectedCategory = null;
    setTimeout(() => {
      this.subcategories = this.selectedC.subcategories;
    }, 10);

  }

  loadproperties(subcategory) {
    this.suivi.selectedCategory = subcategory.target.value.id;
    setTimeout(() => {
      this.selectedSub = subcategory;
    }, 100);
    if (subcategory.target.value.has_price) {
      this.findProduct.addControl('price_min', new FormControl('', Validators.required));
      this.findProduct.addControl('price_max', new FormControl('', Validators.required));
    } else {
      this.findProduct.removeControl('price_min');
      this.findProduct.removeControl('price_max');

    }
    //   this.services.getProperties(this.suivi.selectedCategory).then((res:any)=>{
    //     console.log('Recieved Properties : ',res.properties);
    //     this.zone.run(() => {
    //       this.clearfoms().then(()=>{
    //         this.propertyModel={
    //           min:{},
    //           max:{}
    //         };
    //         this.selectedProperties=res.properties;
    //         console.log(this.selectedProperties);
    //         this.refactureFroms(res.properties);
    //       });
    //     });

    //   }).catch((error:any)=>{

    //   });


  }

  clearfoms() {
    return new Promise((resolve, reject) => {
      this.selectedProperties.forEach(property => {
        this.findProduct.removeControl(property.key);
      });
      resolve(true);
    });
  }

  refactureFroms(properties) {
    console.log('this is  The Properties : ', properties);
    return new Promise((resolve, reject) => {
      properties.forEach(property => {
        if (property.required) {
          this.findProduct.addControl(property.key, new FormControl('', Validators.required));
        } else {
          this.findProduct.addControl(property.key, new FormControl(''));
        }
      });
      resolve(true);
    });
  }

  initializeFrom() {
    this.findProduct = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      category: ['', Validators.compose([Validators.required])],
      subcategory: ['', Validators.compose([Validators.required])],
      locate: [''],
      range: [''],
      // 'price_min':['',Validators.compose([Validators.min(0), Validators.max(999999999)])],
      // 'price_max':['',Validators.compose([Validators.min(0), Validators.max(999999999)])],
    });
    // this.metre = Array(100).fill(0).map((x, i) => { if (i > 0) return (i * 5) - 1; else return (i * 5); });
    this.metre = [2, 5, 10, 20, 30, 40, 50, 75, 100, 125, 150, 200, 250, 300, 400, 500, 600, 700, 800, 900, 1000];

  }

  ngOnInit() {
    console.log('ionViewDidLoad SuiviPage');
    this.services.getCategories().subscribe((res: any) => {
      this.categorys = res;
    }, ((err: any) => {
      this.services.fireError(err);
      throw err;
    }));

    this.getCurrentPosition();
  }

  getCurrentPosition() {
    this.services.getCurrentLocation(true).then((res: any) => {
      this.services.current_position.lat = res.coords.latitude;
      this.services.current_position.lng = res.coords.longitude;
    }).catch(err => {
      console.log('Position Error ', err);
    });
  }

  changeIcon() {

  }

  onChange(ev: any) {
    console.log('Changed', ev);
  }

  async suiviAnnonce() {
    this.submit = true;
    if (this.findProduct.valid) {
      this.suivi.properties_search = this.propertyModel;
      console.log(this.suivi.range !== undefined)
      if (this.suivi.locate && this.suivi.range !== undefined) {
        console.log('1')
        await this.localiser();
        this.locateOnServer();
      } else if (!this.suivi.locate) {
        console.log('2')
        this.locateOnServer();
      }
    }
  }

  locateOnServer() {
    let filtred;
    this.suiviService.suiviAnnonce(this.suivi).subscribe(async (res: any) => {
      this.submit = false;
      if (res.products) {
        this.ui.toast('On a Trouvé', null, null, 2000, 'top');
        console.log('ok',res)
        const productModal = await this.modalCtrl.create({
          component: ProductSuiviPickerPopOverComponent,
          componentProps: {
            results: res,
            range:this.suivi.range,
            filtred
          },
          cssClass: 'product-suivi-modal',
        });
        await productModal.present();

        // this.router.navigateByUrl('/product-details', {
        //   state: {
        //     product: res.product
        //   }
        // });
      } else if (!res.product) {
        this.ui.toast('Votre commande sera suivie', null, null, 2000, 'top');
      }
    }, (err: any) => {
      this.services.fireError(err);
    });
  }

  async localiser() {
    return new Promise((resolve, reject) => {
      this.ui.confirmation('Localiser le lieu', 'Voulez-vous déterminer votre emplacement automatiquement?').then(async (res: any) => {
        await this.getCurrentPosition();
        if (this.services.current_position.lat && this.services.current_position.lng) {
          this.suivi.lat = this.services.current_position.lat;
          this.suivi.lng = this.services.current_position.lng;
          resolve(true);
        }
      }).catch(err => {
        this.showMap().then((params: any) => {
          this.suivi.lng = params.long.toString();
          this.suivi.lat = params.lat.toString();
          console.log('FROm MAP', this.suivi);
          resolve(true);
        }).catch(error => {
          reject(false);
        });
        console.log('no');
      });
    });
  }

  async showMap() {
    return new Promise(async (resolve, reject) => {
      const mapModal = await this.modalCtrl.create({
        component: MapPikkerPage
      });
      await mapModal.dismiss(params => {
        console.log(params);
        if (params) {
          this.suivi.lng = params.long.toString();
          this.suivi.lat = params.lat.toString();
          console.log('SuiviLatLng:::', this.suivi);
          resolve(params);
        } else {
          reject(false);
        }
      });
      await mapModal.present();
    });
  }

  getDistanceFromLatLonInKm(product) {
    return new Promise((resolve, reject) => {
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
        resolve(d.toFixed(2));
      } else {
        reject(0);
      }
    });
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

}
