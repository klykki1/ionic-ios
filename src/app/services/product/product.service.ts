import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileTransfer, FileTransferObject,FileUploadOptions } from '@awesome-cordova-plugins/file-transfer/ngx';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfigService } from '../app-config/app-config';
import { HttpHelperService } from '../http-helper/http-helper';
import { UiService } from '../ui/ui';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
     private http: HttpClient,
    private httpHelper: HttpHelperService,
    private config: AppConfigService,
    private transfer: FileTransfer,
    private ui: UiService
  ) { }

  getProperties(categoryId) {
  //   return this.httpHelper.request('get', this.config.API + '/properies/' + categoryId).pipe(map((data) => {
  //     return data;
  //   }, error => {
  //     throw (error);
  //   }
  // ));
    return new Promise((resolve, reject) => {
      this.httpHelper.request('get', this.config.API + '/properies/' + categoryId).pipe(map((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      }));
    });
  }
  getRegions() {
    return this.http.get(this.config.API + '/regions').pipe(map(data => data, error => {
      throw error;
    }));

  }
  addFullProduct(product, audiopath?) {
    return this.addNewProduct(product).pipe(map((res: any) => {;
      const productId = res.id;
      if (audiopath) {
        this.uploadAudio(audiopath, productId).then(response => {
          return (response);
        }, err => {
          console.log('Return From Audio Result Failed', err);
        });
      } else {
        return res;
      }

    }, err => {
      console.log('Return From Product Result SUccess', err);
    }));
  }
  addNewProduct(product: any) {
     this.ui.loading();
    return this.httpHelper.request('post', this.config.API + '/product', {...product}).pipe(map((data) => {
      this.ui.unLoading();
      this.ui.toast('Le produit a été ajouté');
      return data;
    }, error => {
       this.ui.unLoading();
      console.log('err', error);
    }));
  }

  uploadAudio(filepath, productId) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    return new Promise((resolve, reject) => {
      let options: FileUploadOptions = {
        fileKey: 'voiceRecorder',
        mimeType: 'audio/mp3',
        httpMethod: 'post',
        chunkedMode: false,
        headers: { 'Content-Type': undefined },
        params: { 'product_id': productId }
      }
      fileTransfer.abort();
      fileTransfer.upload(filepath, this.config.API + '/uploadAudio', options, true)
        .then((data) => {
          console.log('Success Upload : ', data);
          resolve(data);

        }).catch((err) => {
          console.log('Error Upload : ', err);
          this.ui.toast("Erreur : Audio Upload ");
          reject(err);
        })
    })
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

  getsearchMyAds(val: any): Observable<any> {
    console.log(val);
    return this.httpHelper.request('get', this.config.API + '/search/products/' + val).pipe(map((data) => {
      console.log(data);
      return data;
    }, (error) => {
      this.ui.fireError(error);
      throw error;
    }));
  }

  getsearchAds(val: any, category): Observable<any> {
    const term = category ? '/category/' + category + '/search/' + val : '/search/' + val;
    return this.http.get(this.config.API + term).pipe(map((data) => data,
      (error) => {
        this.ui.fireError(error);
        throw error;
      }));
    // });
  }
  getmyproducts(pager ?, noloding ?):Observable<any> {
    return this.httpHelper.request('get', this.config.API + '/owers?page=' + pager).pipe(map((data: any) => {
      if (!noloding) {
         this.ui.unLoading();
      }
      return (data.data);
    }, (error) => {
      console.log('err', error);
      if (!noloding) {
         this.ui.unLoading();
      }
      throw (error);
    }));
  }
  delete(product) {
     this.ui.loading();
    return this.httpHelper.request('post', this.config.API + '/delete', {product_id: product.id}).pipe(map((data) => {
         this.ui.unLoading();
        return data;
      }, (error) => {
         this.ui.unLoading();
        return error;
      }));
  }

  getProductbyId(productId, noload ?):Observable<any> {
    if (!
      noload
    ) {
       this.ui.loading();
    }
    return this.httpHelper.request('get', this.config.API + '/product/' + productId).pipe(map((data: any) => {
      if (!noload) {
         this.ui.unLoading();
      }
      return data;
    }, (error: any) => {
      if (!noload) {
         this.ui.unLoading();
      }
      throw error;
    }));
  }

  getProductsByCategory(category, pager ?, nolodaing ?, filter ?): Observable<any> {
    return this.httpHelper.request('post', this.config.API + '/products/category', {
      category,
      page: pager,
      date: filter.date,
      distance: filter.distance,
      price: filter.price,
      lat: filter.lat,
      lng: filter.lng,
      range: filter.range
    }).pipe(map((data: any) => {
      if (!nolodaing) {
         this.ui.unLoading();
      }
      // eslint-disable-next-line no-underscore-dangle
      if (data.data.length > 0) {
         this.ui.unLoading();
        return data.data;
      } else {
        return [];
      }
    }, (error) => {
      throw error;
    }));
  }

  getAllProducts(pager, noloding?, filter?) {
    //  console.log('From services => ', 'pager', pager, 'noloding', noloding, filter);
    if (!noloding) {
      this.ui.loading();
    }
    // return new Promise((resolve, reject) => {
    if (filter.range) {
      return this.httpHelper.request('get', this.config.API + '/products?page=' +
        pager + '&date=' + filter.date + '&distance=' + filter.distance + '&price=' +
        filter.price + '&lat=' + filter.lat + '&lng=' + filter.lng + '&range_lower=' +
        filter.range.lower + '&range_upper=' + filter.range.upper).pipe(map((data: any) => {
        if (!noloding) {
     this.ui.unLoading();
        }
        return data.data;
      }, (error) => {
        console.log(error);
        if (!noloding) {
      this.ui.unLoading();
        }
      }));
    } else {
      return this.http.get(this.config.API + '/products?page=' + pager + '&date=' + filter.date +
        '&distance=' + filter.distance + '&price=' + filter.price + '&lat=' + filter.lat +
        '&lng=' + filter.lng).pipe(map((data: any) => {
        if (!noloding) {
         this.ui.unLoading();
        }
        if (data) {
          this.ui.unLoading();
        return data.data;
        }
       
      }, (error) => {
        console.log(error);
        if (!noloding) {
           this.ui.unLoading();
        }
        return error;
      }));
    }
  }

  getProductsByRegion(region, pager ?, noloding ?) {
    if (!noloding) {
       this.ui.loading();
    }
    return new Promise((resolve, reject) => {
      this.httpHelper.request('get', this.config.API + '/products/' + region + '?page=' + pager).pipe(map((data: any) => {
        if (!noloding) {
           this.ui.unLoading();
        }
        resolve(data.data);
      }, (error) => {
        if (!noloding) {
           this.ui.unLoading();
        }
        reject(error);
      }));
    });
  }
  getProductsBySearch(region, search_term) {
     this.ui.loading();
    return new Promise((resolve, reject) => {
      this.httpHelper.request('post', this.config.API + '/search', {
        region,
        search: search_term
      }).pipe(map((data) => {
         this.ui.unLoading();
        resolve(data);
      }, (error) => {
       this.ui.unLoading();
        reject(error);
      }));
    });
  }
  countsProduct() {
    // return new Promise((resolve, reject) => {
    return this.httpHelper.request('get', this.config.API + '/counts').pipe(map((data) => {
      return data;
    }, (error) => {
      console.log(error);
    }));
  }
}
