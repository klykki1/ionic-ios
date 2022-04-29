import {Injectable} from '@angular/core';
import {AppConfigService} from '../app-config/app-config';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@awesome-cordova-plugins/file-transfer/ngx';
import {File} from '@awesome-cordova-plugins/file/ngx';
import {HttpClient} from '@angular/common/http';
import {Platform} from '@ionic/angular';
import {map} from 'rxjs/operators';
import {UiService} from '../ui/ui';
import {HttpHelperService} from '../http-helper/http-helper';
import {Geolocation} from '@awesome-cordova-plugins/geolocation/ngx';
import {Observable} from 'rxjs';


@Injectable({providedIn: 'root'})
export class ApiServices {
  current_position: any = {};
  isLoggedIn: boolean = false;
  current_user: any = null;
  counts_products: any = 0;
  device_data: any = {};

  constructor(public http: HttpClient,
              private ui: UiService, private config: AppConfigService,
              private transfer: FileTransfer,
              private file: File,
              private platform: Platform,
              // private backgroundGeolocation: BackgroundGeolocation,
              private geolocation: Geolocation,
              private httpHelper: HttpHelperService) {

  }
  sendGpsToApi(location, suivis) {
    console.log(location,suivis);
    
    return new Promise((resolve, reject) => {
      this.httpHelper.request('post', 'http://192.168.1.29:3003/geolocation', {
        ...location,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        targets_ids: suivis
      }).pipe(map((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      }));
    });
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention


  getRegions() {
    return this.http.get(this.config.API + '/regions').pipe(map(data => data, error => {
      throw error;
    }));

  }

// eslint-disable-next-line @typescript-eslint/naming-convention
  getuserByID(user_id) {
    this.ui.loading();
    return new Promise((resolve, reject) => {
      this.http.get(this.config.API + '/getuser/' + user_id).pipe(map((data) => {
        this.ui.unLoading();
        resolve(data);
      }, (error) => {
        this.ui.unLoading();
        reject(error);
      }));
    });
  }

  addvisitors(product_id)
    :
    Observable<any> {
    return this.httpHelper.request('post', this.config.API + '/visitors', {product_id}).pipe(map((data) => {
      this.ui.unLoading();
      //    console.log('Visitors ', data);
      return data;
    }));
  }

  uploadAudio(filepath, productId) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const options: FileUploadOptions = {
      fileKey: 'voiceRecorder',
      mimeType: 'audio/mp3',
      httpMethod: 'post',
      chunkedMode: false,
      headers: {'content-type': undefined},
      params: {productId}
    };
    fileTransfer.abort();
    return fileTransfer.upload(filepath, this.config.API + '/uploadAudio', options, true)
      .then((data) => {
        //  console.log('Success Upload : ', data);
        return data;

      }, err => {
        console.log('Error Upload : ', err);
        this.ui.toast('Erreur : Audio Upload ');
      });
  }
  getCategories() {
    // return new Promise((resolve, reject) => {
    return this.http.get(this.config.API + '/categories').pipe(map((data) => {
        return data;
      }, error => {
        throw (error);
      }
    ));
  }
  getProperties(categoryId) {
    return new Promise((resolve, reject) => {
      this.httpHelper.request('get', this.config.API + '/properies/' + categoryId).pipe(map((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      }));
    });
  }

  getCurrentLocation(noloding ?) {
    if (!noloding) {
      this.ui.loading();
    }
    const options = {
      enableHighAccuracy: true,
      timeout: 5000
    };
    return this.geolocation.getCurrentPosition(options).then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      // console.log(resp);
      // console.log('This Wat Must Be In The details', resp);
      if (!noloding) {
        this.ui.unLoading();
      }
      return resp;
    }, error => {
      this.ui.toast('errors.loaction', error);
      if (!noloding) {
        this.ui.unLoading();
      }
      console.log('Error getting location', error);
    });
  }

  register(userInfo): Observable<any> {
    return this.http.post(this.config.API + '/register', {...userInfo}).pipe(map((data) => {
      return data;
    }, (error) => {
      console.error(error);
    }));
  }

  login(userInfo) {
    return new Promise((resolve, reject) => {
      // console.log(userInfo);
      this.http.post(this.config.API + '/login', {...userInfo}).subscribe((data) => {
        // console.log(data);
        resolve(data);
      }, (error) => {
        console.log(error);
        reject(error);
      });
    });
  }

  fireError(err) {
    console.log(err);
    if (err.errors) {
      let messageArray = '';
      // eslint-disable-next-line guard-for-in
      for (const element in err.errors) {
        console.log(err.errors[element][0]);
        messageArray = messageArray + (err.errors[element][0] + '/n');
      }
      this.ui.toast(messageArray, '', '', null, 5000);
    } else if (err.error) {
      this.ui.toast(err.error, '', '', null, 5000);
    } else {
      this.ui.toast('Une erreur est survenue', '', '', null, 5000);
    }
  }
  addrates(product_id, rates): Observable<any> {
    return this.httpHelper.request('post', this.config.API + '/rates', {
      product_id,
      rates
    }).pipe(map((data) => {
      this.ui.unLoading();
      // console.log('Rates ', data);
      return data;
    }, (error) => {
      console.log(error);
    }));
  }


  sendMesages(discussion_id, message, reciever) {
    this.ui.loading();
    //   console.log('Here wat You Send', discussion_id, message);
    return new Promise((resolve, reject) => {
      this.httpHelper.request('post', this.config.API + '/savediscussion', {
        discussion_id,
        message,
        reciever
      }).pipe(map((data) => {
        this.ui.unLoading();
        resolve(data);
      }, (error) => {
        this.ui.unLoading();
        reject(error);
      }));
    });
  }

  sendNotification(reciever, message) {
    this.ui.loading();
    //  console.log('Here wat You Send Notification to ', reciever, ':', message);
    return new Promise((resolve, reject) => {
      this.httpHelper.request('post', this.config.API + '/sendNotification', {
        receiver: reciever,
        message
      }).pipe(map((data) => {
        this.ui.unLoading();
        resolve(data);
      }, (error) => {
        this.ui.unLoading();
        reject(error);
      }));
    });
  }

  logout() {
    this.ui.loading();
    return new Promise((resolve, reject) => {
      console.log(this.device_data)
      let device_data = this.device_data;
      this.isLoggedIn = false;
      setTimeout(() => {
        localStorage.clear();
      }, 100);
      console.log('Here wat You Send Notification to ', device_data);
      this.httpHelper.request('post', this.config.API + '/logout',
        {"deviceid": device_data.reg_id}).subscribe((data) => {
        this.ui.unLoading();
        resolve(data);
      }, (error) => {
        this.ui.unLoading();
        reject(error);
      });
    })
  }

  sendResetEmail(email):Observable<any> {
    this.ui.loading();
    return this.httpHelper.request('post', this.config.API + '/mail', {email}).pipe(map((data: any) => {
      this.ui.unLoading();
      return data;
    }, (error: any) => {
      this.ui.unLoading();
      const error_mail = JSON.stringify(error, ['status', 'arguments', 'type', 'name']);
      const error_status = JSON.parse(error_mail).status;
      console.log(error_status);
      if (error_status == 0) {
        throw true;
      } else {
        throw error;
      }
    }));
  }
  changepassword(token, password) {
    this.ui.loading();
    return new Promise((resolve, reject) => {
      this.httpHelper.request('post', this.config.API + '/reset/password', {
        token,
        password
      }).pipe(map((data: any) => {
        this.ui.unLoading();
        resolve(data);
      }, (error) => {
        this.ui.unLoading();
        reject(error);
      }));

    });
  }

}
