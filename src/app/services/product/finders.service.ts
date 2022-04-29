import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfigService } from '../app-config/app-config';
import { HttpHelperService } from '../http-helper/http-helper';
import { UiService } from '../ui/ui';

@Injectable({
  providedIn: 'root'
})
export class FindersService {

  constructor(
    private httpHelper: HttpHelperService,
    private config: AppConfigService,
    private ui: UiService,
  ) { }
  getsearches(): Observable<any> {
     this.ui.loading();
    return this.httpHelper.request('get', this.config.API + '/searches').pipe(map((data) => {
       this.ui.unLoading();
      return data;
    }, (error) => {
       this.ui.unLoading();
      throw (error);
    }));
  }
  deletesearch(suiviId) {
    console.log(suiviId)
     this.ui.loading();
    // eslint-disable-next-line @typescript-eslint/naming-convention
    return this.httpHelper.request('post', this.config.API + '/search/delete',
      {suivi_id: suiviId}).pipe(map((data) => {
        if (data) {
          this.ui.unLoading()}
        },
      (error) => {
         this.ui.unLoading();
        throw (error);
      }
    ));

  }



}
