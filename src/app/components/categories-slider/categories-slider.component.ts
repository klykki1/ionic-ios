import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {ApiServices} from '../../services/api-services/api-services';
import {SubCategoriesPage} from '../../pages/sub-categories/sub-categories.page';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrls: ['./categories-slider.component.scss'],
})
export class CategoriesSliderComponent implements OnInit {
  @Output() categoryClick: EventEmitter<any> = new EventEmitter();
  slideOpts = {
    loop: true,
    pagination: false,
    // centeredSlides: true,
    initialSlide: 0,
    speed: 400,
    // spaceBetween: 50,
    slidesPerView: 6,
  };
  categories: any = [];

  constructor(private services: ApiServices,
              private router: Router,
              private modalController: ModalController) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.services.getCategories().subscribe((res: any) => {
      // console.log(res)
      this.categories = res;
    }, (err: any) => {
      this.services.fireError(err);
      this.categories = [];
      throw err;
    });
  }

  async showSubcategories(category) {
    const modal = await this.modalController.create({
      component: SubCategoriesPage,
      componentProps: {subcategories: category.subcategories},
      cssClass: 'categories-modal'
    });
    await modal.present();
    await modal.onDidDismiss().then((params: any) => {
      if (params && params.data.link) {
        this.gotoproducts(params.data.link.title);
      }

    });
  }

  gotoproducts(category) {
    this.router.navigateByUrl('/products/' + category);
  }

  goProducts() {
    console.log('ok');
    this.router.navigateByUrl('/products');

  }
}
