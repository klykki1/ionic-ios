import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {UiService} from '../../services/ui/ui';
import {Geolocation} from '@awesome-cordova-plugins/geolocation/ngx';

declare const google: any;

@Component({
  selector: 'app-map-pikker',
  templateUrl: './map-pikker.page.html',
  styleUrls: ['./map-pikker.page.scss'],
})
export class MapPikkerPage implements OnInit {
  @Input() product: any;
  title: string;
  map: any = {
    lat: 45.087890625,
    lng: 2.321167252957821,
    zoom: 2
  };
  marker: any = {};
  address: any = '';

  constructor(public modalController: ModalController, public navParams: NavParams,
              private ui: UiService,
              private geolocation: Geolocation) {
    // this.product = this.navParams.get('product') || {};
    if (this.navParams.get('title')) {
      this.title = this.navParams.get('title');
    }

    if (!this.product || (this.product && !this.product.address) ||
      (this.product && this.product.address && !this.product.address.address)) {
      this.getCurrentPosition();
      console.log(this.address)
    } else {
      const latLng = {
        lat: Number(this.product.address.lat),
        lng: Number(this.product.address.long)
      };
      this.map = latLng;
      this.map.zoom = 8;
      this.marker = latLng;
      this.address = this.product.address.address;
    }
  }

  getCurrentPosition() {
    // this.ui.loading();
    const options = {
      enableHighAccuracy: true,
      timeout: 5000
    };
    this.geolocation.getCurrentPosition(options).then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.map = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude,
        zoom: 8
      };
      this.marker = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude,
      };
      this.geocodeLatLng(this.marker).then((resp) => {
        this.address = resp;
      });
      // this.ui.unLoading();
    }).catch((error) => {
      this.ui.toast('errors.loaction', error);
      console.log('unloading');
      this.ui.unLoading();
    });
  }

  mapClicked(ev) {
    this.marker = {
      lat: ev.coords.lat,
      lng: ev.coords.lng
    };
    this.geocodeLatLng(this.marker).then((resp) => {
      this.address = resp;
    });
  }

  clickedMarker(marker) {
  }

  markerDragEnd(marker, ev) {
    this.marker = {
      lat: ev.coords.lat,
      lng: ev.coords.lng
    };
    this.geocodeLatLng(this.marker).then((resp) => {
      this.address = resp;
    });
  }

  geocodeLatLng(latlng) {
    return new Promise((resolve, reject) => {

      try {
        const geocoder = new google.maps.Geocoder();
        return geocoder.geocode({'location': latlng}, (results, status) => {
          if (status === 'OK') {
            if (results[1]) {
              this.address = results[0].formatted_address;
              resolve(results[0].formatted_address);
            } else {
              this.ui.alert('map.error', 'map.noResult');
              reject('No results found');

            }
          } else {
            this.ui.alert('map.error', 'map.geoFaild');
            reject('Geocoder failed due to: ' + status);

          }

        });
      } catch (e) {
        console.log(e);
      }
    });
  }

  confirmAddress() {
    if (this.marker.lat) {
      console.log(this.address)
      // this.geocodeLatLng(this.marker).then((resp)=> {
      const params: any = {
        lat: this.marker.lat,
        long: this.marker.lng,
        address: this.address
      };
      this.modalController.dismiss(params);
      // })
    } else {
      this.ui.alert('Warrning', 'map.chooseLocation');
    }

  }

  async closeModal() {
    // if (this.marker.lat) {
    //   this.geocodeLatLng(this.marker).then((resp)=> {
    //     this.viewCtrl.dismiss({address: resp});
    //   }).catch((err)=> this.viewCtrl.dismiss())
    // }else
    await this.modalController.dismiss();
  }

  ngOnInit(): void {
  }


}
