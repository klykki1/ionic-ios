import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController, NavController, NavParams} from '@ionic/angular';
import {ApiServices} from '../../services/api-services/api-services';
import {catchError} from 'rxjs/operators';
import {ViewerModalComponent} from 'ngx-ionic-image-viewer';
import {ProductDetailsPage} from '../product-details/product-details.page';
import { FavoritesService } from 'src/app/services/product/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  public products: any = [];
  public filtred: any = [];

  constructor(public router: Router,
              public navParams: NavParams,
              private modalCtrl: ModalController,
              private services: FavoritesService) {

  }

  ngOnInit() {
    this.getfavories();
  }
  getfavories() {
    this.filtred = [];
    this.services.getfavories().subscribe((res: any) => {
      this.filtred  = res;
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

  async gotoDetails(product) {

    this.router.navigateByUrl('/product-details/' + product?.id);
  }

  filterItems(ev: any) {
    const val = ev.target.value;
    this.filtred = this.products;
    if (val && val.trim() !== '') {
      console.log('This is The value ', val, '/', val.trim());
      this.filtred = this.filtred.filter((item) => {
        return item.title.toLowerCase().includes(val.toLowerCase());
      });
      // console.log('After-Filter-Search : ', this.products);
    }
  }

  change(date) {

    return new Date(date);
  }

  delete(prodcut) {
    this.services.deleteFavory(prodcut.id).subscribe(res => {
      this.getfavories();
    }, catchError((err) => {
      console.log(err);
      throw (err);
    }));
  }


}
