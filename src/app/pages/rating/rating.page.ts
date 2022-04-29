import {Component, Input, OnInit} from '@angular/core';
import {HttpHelperService} from '../../services/http-helper/http-helper';
import {ModalController, NavParams} from '@ionic/angular';
import {UiService} from '../../services/ui/ui';
import {ApiServices} from '../../services/api-services/api-services';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  @Input() providerRate: any;
  rate = 0;
  provider: any = {};
  methode: any = 'post';
  profile: any;
  isProfileOwner = false;

  constructor(public modalController: ModalController,
              private navParams: NavParams,
              public services: ApiServices)
               {
    this.provider = this.navParams.get('provider') || null;
    this.rate = this.navParams.get('providerRate') || 0;
    if (this.rate > 0) {
      this.methode = 'put';
    }
  }

  ngOnInit(): void {
  }

  async confirm() {
    await this.modalController.dismiss(this.rate);
  }


}
