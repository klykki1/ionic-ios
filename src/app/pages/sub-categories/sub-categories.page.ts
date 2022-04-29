import {Component, OnInit} from '@angular/core';
import {ModalController, NavController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.page.html',
  styleUrls: ['./sub-categories.page.scss'],
})
export class SubCategoriesPage implements OnInit {
   subcategories: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalController: ModalController
  ) {
    this.subcategories = this.navParams.get('subcategories');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubCategoriesPage');
  }


  dismiss(subcategories) {
    this.modalController.dismiss({link: subcategories});
  }

  closeView() {
    this.modalController.dismiss({link: false});
  }

  ngOnInit(): void {
  }
}
