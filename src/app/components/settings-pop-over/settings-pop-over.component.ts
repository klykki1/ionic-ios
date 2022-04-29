import {Component, OnInit} from '@angular/core';
import {ApiServices} from '../../services/api-services/api-services';
import {
  BackgroundGeolocation,
  BackgroundGeolocationConfig,
  BackgroundGeolocationEvents,
  BackgroundGeolocationResponse
} from '@awesome-cordova-plugins/background-geolocation/ngx';
import {Router} from '@angular/router';
import {AppConfigService} from '../../services/app-config/app-config';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-settings-pop-over',
  templateUrl: './settings-pop-over.component.html',
  styleUrls: ['./settings-pop-over.component.scss'],
})
export class SettingsPopOverComponent implements OnInit {
  currentToken: any;

  constructor(public services: ApiServices,
              private router: Router,
              private appConfig: AppConfigService,
              private popoverController: PopoverController,
              private backgroundGeolocation: BackgroundGeolocation
  ) {
  }

  ngOnInit() {
  }

  stopBackgroundGeolocation() {
    // If you wish to turn OFF background-tracking, call the #stop method.
    this.backgroundGeolocation.stop();
  }

  fireMethod(method, params?) {
    this[method](params);
  }

  logout() {
    this.services.logout().then((res: any) => {
      this.stopBackgroundGeolocation();
      this.services.isLoggedIn = false;
      localStorage.clear();
      this.popoverController.dismiss();
      setTimeout(() => {
        this.router.navigateByUrl('/map');
      }, 100);
    }).catch((err: any) => {
      this.services.fireError(err);
    });
  }

  initLocation() {

    console.log('Init location');
    console.log(this.currentToken);
    const bgGeolocationConfig: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 5,
      interval: 5000,
      debug: false, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
      stopOnStillActivity: false,
      startOnBoot: true,
      maxLocations: 500,
      // url: 'http://192.168.1.29:3003/geolocation',
      url: `${this.appConfig.API}/locate`,
      httpHeaders: {
        accept: 'application/json',
        authorization: `Bearer ${this.currentToken}`,
        'content-type': 'application/json'
      },
      // customize post properties
      postTemplate: {
        latitude: '@latitude',
        longitude: '@longitude',
      }
    };

    this.backgroundGeolocation.configure(bgGeolocationConfig).then(async () => {
      console.log('First then');
      const status = await this.backgroundGeolocation.checkStatus();
      let config = await this.backgroundGeolocation.getConfig();
      console.log('config', config, status);
      this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe(async (location: BackgroundGeolocationResponse) => {
        config = await this.backgroundGeolocation.getConfig();
        console.log('config', config, status);
        console.log('Inside location setting: ', location);
        // this.sendGPS(location);
      });
    });


    this.backgroundGeolocation.start();

  }

  goProfile() {
    this.router.navigateByUrl('/profile');
    this.popoverController.dismiss();
  }

  goto(link, params?) {
    console.log(link);
    this.router.navigateByUrl(link);
    this.popoverController.dismiss();
  }

}
