import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AppConfigService} from "./app-config/app-config";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {HttpHelperService} from "./http-helper/http-helper";
import { UiService } from './ui/ui';

@Injectable({
  providedIn: 'root'
})

export class SuiviService {

  api = `${this.appConfigService.API}/suivi`;

  constructor(
    private request: HttpHelperService,
    private appConfigService: AppConfigService,
    private ui:UiService
  ) {
  }

  activeWatchPosition(body): Observable<any> {
    console.log(body)
    return this.request.request('POST',`${this.api}/active-suivi`, body).pipe(map(res => res));
  }

  suiviAnnonce(product ?) {
     this.ui.loading();
    return this.request.request('post', this.appConfigService.API + '/suivi', {...product}).pipe(map((data) => {
      this.ui.unLoading();
      return data;
    }, (error) => {
      this.ui.unLoading();
      console.log(error);
      throw error;
    }));
  }

  
  deletesuivi(productid) {
     this.ui.loading();
    return new Promise((resolve, reject) => {
      this.request.request('post',  this.appConfigService.API + '/suivi/delete', {productid}).pipe(map((data) => {
        // this.http.post(this.config.API+'/product',{...product}).pipe(map((data)=> {
        this.ui.unLoading();
        resolve(data);
      }, (error) => {
        this.ui.unLoading();
        reject(error);
      }));
    });
  }
}
