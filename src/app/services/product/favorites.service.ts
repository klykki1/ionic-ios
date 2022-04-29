import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfigService } from '../app-config/app-config';
import { HttpHelperService } from '../http-helper/http-helper';
import { UiService } from '../ui/ui';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(
    private httpHelper: HttpHelperService,
    private config: AppConfigService,
    private ui: UiService,
  ) { }

  getfavories(): Observable<any> {
     this.ui.loading();
    return this.httpHelper.request('get', this.config.API + '/favories').pipe(
      map(data => {
          this.ui.unLoading();
          return data;       
       }),
      catchError((err, caught) => {
        this.ui.unLoading();
        return err;
      }));
  }


  deleteFavory(product): Observable<any> {
     this.ui.loading();
    // return new Promise((resolve, reject) => {
    return this.httpHelper.request('post', this.config.API + '/favory/delete',
      {product_id: product}).pipe(map((data) => {
      this.ui.unLoading();
      return data;
    }, (error) => {
       this.ui.unLoading();
      throw error;
    }));
  }

  addfavories(product_id) {
     this.ui.loading();
    return this.httpHelper.request('post', this.config.API + '/favories', {product_id}).pipe(map((data) => {
       this.ui.unLoading();
        console.log('Favories ', data);
      return data;
    }, (error) => {
       this.ui.unLoading();
      console.log(error);
    }));
  }

  checkfavories(productId) {
    return new Promise((resolve, reject) => {
      this.httpHelper.request('post', this.config.API + '/checkfavory', {productId}).pipe(map((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      }));
    });
  }
  checkFavory(product_id): Observable<any> {
    return this.httpHelper.request('get', this.config.API + '/isfavory/' + product_id).pipe(map((data) => {
      return data;
    }, (error) => {
      console.log('error', error);
    }));
  }
}
