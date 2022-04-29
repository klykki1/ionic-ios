import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController, Platform} from '@ionic/angular';
import {ApiServices} from '../../../services/api-services/api-services';
import {from, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {SuiviService} from '../../../services/suivi.service';
@Component({
  selector: 'app-finder-detail-list-pop-over',
  templateUrl: './finder-detail-list-pop-over.component.html',
  styleUrls: ['./finder-detail-list-pop-over.component.scss'],
})
export class FinderDetailListPopOverComponent implements OnInit {
  @Input() results: any;
  showSpinner = false;
  filtered: any = [];
  item: any;
  active: any;
  selected: any = null;

  constructor(private router: Router,
              private modalController: ModalController,
              private services: ApiServices,
              private suiviService: SuiviService,
              private platform: Platform) {
  }

  ngOnInit() {
    this.getCurrentPosition();
  }



  async gotoDetails(product) {
    this.router.navigateByUrl('/product-details/' + product?.id);
    this.modalController.dismiss();
  }

  playAudio(currentProduct, index) {
    if (currentProduct.voice.length > 0) {
      const audio = new Audio(currentProduct.voice[0]);
      if (this.platform.is('ios')) {
        audio.preload = 'metadata';
        audio.onloadedmetadata = () => {
          this.audioPlay(audio, index);
        };
      } else {
        audio.onloadeddata = () => {
          this.audioPlay(audio, index);
        };
      }
    }
  }

  audioPlay(audio, index) {
    this.selected = index;
    audio.play();
    setTimeout(() => {
      audio.pause();
      this.selected = null;
    }, Math.trunc((audio.duration) * 1000) + 100);
  }
  getCurrentPosition() {
    this.services.getCurrentLocation(true).then((res: any) => {
      this.services.current_position.lat = res.coords.latitude;
      this.services.current_position.lng = res.coords.longitude;
    }).catch(err => {
      console.log('Position Error ', err);
    });
  }

  getDistanceFromLatLonInKm(product) {
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
      return d.toFixed(2);
    } else {
      return 0;
    }
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  activeWatchPosition(event, productId) {
    const body = {
      productId: this.results?.suivi_target?.id,
      isActive: event.target.checked
    };
    this.suiviService.activeWatchPosition(body).subscribe(res => {
      console.log(res);
    });
  }
}
