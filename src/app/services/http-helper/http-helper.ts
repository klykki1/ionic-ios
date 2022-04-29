import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {JwtHelperProvider} from '../jwt-helper/jwt-helper';
import {AppConfigService} from '../app-config/app-config';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {catchError} from 'rxjs/operators';
import {mergeMap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class HttpHelperService {

  constructor(
    public http: HttpClient,
    public appSettings: AppConfigService,
    public jwt: JwtHelperProvider,
    // public events: Events
  ) {
  }

  public request(method: string, url: string, data?: any, options?: any) {
    const tokens = JSON.parse(localStorage.getItem('onatrouvé_token'));
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    options = ({headers});
    if (tokens) {
      if (tokens.token) {
        headers = new HttpHeaders({
          'Authorization': 'Bearer ' + tokens.token
        });

        // headers.set('Authorization', 'Bearer ' + tokens.token);
        options = ({headers});

        if (this.jwt.isTokenExpired(tokens.token)) {
          console.log('isTokenExpired = true', options);
          return this.refreshToken(tokens, options)
            .subscribe((options) => this.methods(method, url, data, options));
        } else {
          return this.methods(method, url, data, options);
        }
      } else {
        return this.methods(method, url, data, options);
      }
    } else {
      return this.methods(method, url, data, options);
    }
  }

  private methods(method: string, url: string, params?: any, options?: any) {
    method = method.toLowerCase();
    if (url[0] === '/') {
      url = this.appSettings.API + url;
    }
    // return this.http.options(url, {method, params, ...options})
    if (method === 'get' || method === 'delete') {
      return this.http[method](url, options);
    } else {
      return this.http[method](url, params, options);
    }
  }

  private refreshToken(tokens, options) {
    return this.http.post(this.appSettings.API + '/token/refresh', {refresh_token: tokens.token}, options)
      .map((response: any) => {
        console.log(response)
        const resp = response;
        const token = {
          token: resp.token,
          refresh_token: resp.token
        };
        localStorage.setItem('onatrouvé_token', JSON.stringify(token));
        const headers = new HttpHeaders();
        headers.append('Authorization', 'Bearer ' + tokens.token);
        headers.append('Accept', 'application/json');
        return options = ({headers});
      }, catchError(error => {
        console.log(error);
        // this.events.publish('sessionExpired', error);
        return Observable.throw('refreshTokenError');
      }));
  }


}
