import {Component, NgZone, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-filters-modal',
  templateUrl: './filters-modal.page.html',
  styleUrls: ['./filters-modal.page.scss'],
})
export class FiltersModalPage implements OnInit {

  structure: any = {lower: 15, upper: 30};
   filter: any = {
    price: false,
    distance: false,
    date: true,
    lat: 0,
    lng: 0,
  };


  constructor(public router: Router,
              private zone: NgZone,
              public navParams: NavParams,
              private modalController: ModalController) {
    this.filter = this.navParams.get('filter');
  }

  ngOnInit() {
  }


  filtred() {
    this.filter.range = this.structure;
    setTimeout(() => {
      this.modalController.dismiss({filter: this.filter});
    }, 10);

  }

  dismiss() {
    this.modalController.dismiss();
  }

  distanceSelect(e) {
    if (e.target.value) {
      this.zone.run(() => {
        this.filter.date = false;
        this.filter.price = false;
        // console.log(this.filter);
      });
    }
  }

  dateSelect(e) {
    // console.log(e.target.value);
    if (e.target.value) {
      this.zone.run(() => {
        this.filter.distance = false;
        this.filter.price = false;
        // console.log(this.filter);
      });
    }
  }

  priceSelect(e) {
    // console.log(e.target.value);
    if (e.target.value) {
      this.zone.run(() => {
        this.filter.distance = false;
        this.filter.date = false;
        // console.log(this.filter);
      });
    }
  }
}
