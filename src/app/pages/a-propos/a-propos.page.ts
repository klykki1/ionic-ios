import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppConfigService} from '../../services/app-config/app-config';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.page.html',
  styleUrls: ['./a-propos.page.scss'],
})
export class AProposPage implements OnInit {
  constructor(
    public router: Router,
    public appconfig: AppConfigService,
    public navParams: NavParams,
    private modalController: ModalController) {
  }

  ngOnInit() {
    console.log('ionViewDidLoad ApropoPage');
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
