import {Component, OnInit} from '@angular/core';
import {ModalController, NavController, NavParams} from '@ionic/angular';
import {ApiServices} from '../../services/api-services/api-services';
import {CallNumber} from '@awesome-cordova-plugins/call-number/ngx';
import {Router} from "@angular/router";

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.page.html',
  styleUrls: ['./custom-card.page.scss'],
})
export class CustomCardPage implements OnInit {


   notify: any = {};
   profile: any = {};

  constructor(public router: Router,
              private services: ApiServices,
              private modalController: ModalController,
              private callNumber: CallNumber,
              public navParams: NavParams) {
    this.notify = this.navParams.get('notify');
    this.profile = this.navParams.get('profile');
  }

  ngOnInit() {
  }

  sendSms() {
    if (this.services.isLoggedIn) {
      this.router.navigateByUrl('/chat', {state: {product: this.notify.product, opner: this.profile}});
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomCardPage');
  }

  cancel() {
    this.modalController.dismiss();
  }

  dialCall() {
    console.log('callPerson', this.notify);
    const called = this.profile.phone.substr(1, this.profile.phone.length);
    this.callNumber.callNumber('0033' + called, true)
      .then(res => {
        console.log('Launched dialer!', res);
        this.modalController.dismiss();
      })
      .catch(err => console.log('Error launching dialer', err));
  }
  SendSms(){
    
  }
}
