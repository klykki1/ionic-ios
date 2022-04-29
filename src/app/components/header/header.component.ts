import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiServices} from '../../services/api-services/api-services';
import {ModalController, PopoverController} from '@ionic/angular';
import {catchError} from 'rxjs/operators';
import {Router, RouterLink} from '@angular/router';
import {FiltersModalPage} from '../../pages/filters-modal/filters-modal.page';
import {RegisterPage} from '../../pages/register/register.page';
import {SettingsPageRoutingModule} from "../../pages/settings/settings-routing.module";
import {SettingsPopOverComponent} from "../settings-pop-over/settings-pop-over.component";
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() filterEvent: EventEmitter<any> = new EventEmitter();
  @Output() newItemEvent = new EventEmitter<string>();
  @Input() isFiltered = false;
  @Input() isProfile = true;
  @Input() isModal = false;
  @Input() isLogo = false;
  @Input() isMenu = true;
  @Input() isSearch = true;
  @Input() isBack = false;
  showSpinner = false;
  public filter: any = {
    price: false,
    distance: false,
    date: false,
    lat: 0,
    lng: 0
  };
  public page = 1;
  public products: any = [];
  public filtred: any = [];
  public doinfinity: any;
  public searchterm: any;
  public category: any;

  constructor(
    private services: ApiServices,
     private modalCtrl: ModalController,
              private router: Router,
              private productService:ProductService,
              private popoverController: PopoverController) {
  }

  ngOnInit() {
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

  filterAction(value) {
    this.filterEvent.emit(value);

  }

  getproducts(category?) {
    this.products = [];
    if (category) {
      this.productService.getProductsByCategory(category, this.page, false, this.filter).subscribe((res: any) => {
        this.products = res;
        this.filtred = this.products;
        console.log('filtred', this.filtred);
        this.filterAction(this.filtred);
        this.services.getCurrentLocation(true).then((pos: any) => {
          this.services.current_position.lat = pos.coords.latitude;
          this.services.current_position.lng = pos.coords.longitude;
     
        }).catch(err => {
          console.log(err);
        });
      }, catchError(err => {
        console.log(err);
        throw err;
      }));
    } else {
      this.productService.getAllProducts(this.page, false, this.filter).subscribe((res: any) => {
        this.products = res;
        this.filtred = this.products;
        this.filterAction(this.filtred);
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

  getdatfromdateBase(ev: any) {
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

  close() {
    this.modalCtrl.dismiss();
  }

  async openPopOver(ev: any) {
    const popover = await this.popoverController.create({
      component: SettingsPopOverComponent,
      cssClass: 'custom-popover',
      event: ev,
      // translucent: true,
      // mode:'ios'
    });
    await popover.present();

  }
}
