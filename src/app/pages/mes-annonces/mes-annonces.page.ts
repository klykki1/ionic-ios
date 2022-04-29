import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController, NavParams} from '@ionic/angular';
import { ProductService } from 'src/app/services/product/product.service';
import {ApiServices} from '../../services/api-services/api-services';
import {ProductDetailsPage} from '../product-details/product-details.page';

@Component({
  selector: 'app-mes-annonces',
  templateUrl: './mes-annonces.page.html',
  styleUrls: ['./mes-annonces.page.scss'],
})
export class MesAnnoncesPage implements OnInit {
  searchTerm: any;
  showSpinner = false;
  public products: any = [];
  private page = 1;
  public filtred: any = [];

  constructor(public router: Router,
              public navParams: NavParams,
              private modalController: ModalController,
              private services: ProductService
  ) {
    this.loadproducts();
  }

  ngOnInit() {
  }

  getdatfromdateBase(ev: any) {
    const val = ev.target.value;
    this.searchTerm = val;
    if (val) {
      this.showSpinner = true;
      this.products = [];
      this.filtred = [];
      this.services.getsearchMyAds(val).subscribe((res: any) => {
        this.showSpinner = false;
        setTimeout(() => {
          this.products = res;
          this.filtred = res;
        }, 0);
      });
    } else {
      this.page = 0;
      this.showSpinner = false;
      this.loadproducts();
    }
  }

  loadproducts() {
    this.services.getmyproducts(null).subscribe((res: any) => {
      console.log('This is a Log From FavoriesPage', res);
      this.products = res;
      this.filtred = this.products;
    }, err => {
      console.log(' >>> >>> >>> ', err);
    });
  }

  async gotoDetails(product) {
    this.router.navigateByUrl('product-details/' + product?.id);
    // const modal = await this.modalController.create({
    //   component: ProductDetailsPage,
    //   componentProps: {
    //     product
    //   },
    // });
    //
    // return await modal.present();
  }

  filterItems(ev: any) {
    const val = ev.target.value;
    this.filtred = this.products;
    if (val && val.trim() !== '') {
      console.log('This is The value ', val, ' / ', val.trim());
      this.filtred = this.filtred.filter((item) => {
        console.log(item);
        return item.title.toLowerCase().includes(val.toLowerCase());
      });
      console.log('After-Filter-Search : ', this.products);
    }
  }

  change(date) {
    console.log(date);
    return new Date(date);
  }

  delete(product, i) {
    this.services.delete(product).subscribe(res => {
      console.log('Delete : ', res);
      this.loadproducts();
    })
  }

  edit(product) {
    this.router.navigateByUrl('/add-product', {
      state: {
        modify: true,
        product_to_edit: product,
      }
    }).then(()=>console.log(product)
    );
  }

  doInfinite(infiniteScroll) {
    if (!this.searchTerm) {
      this.page++;
      this.services.getmyproducts(this.page, true).subscribe((res: any) => {
        console.log('This is a Log From FavoriesPage', res);
        this.products = res;
        res.forEach(element => {
          this.filtred.push(element);
        });
        setTimeout(() => {
          this.products = this.filtred;
        }, 10);
        if (res.length === 0) {
          infiniteScroll.target.disabled=true;
        }
        infiniteScroll.target.complete();
      }, err => {
        console.log(err);
        infiniteScroll.complete();
      });
    }
  }


}
