import {BehaviorSubject, from, Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Platform, ToastController} from '@ionic/angular';
import {catchError, mergeMap} from 'rxjs/operators';
import {AuthServiceService} from '../../services/auth-service/auth-service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  token$ = new BehaviorSubject(JSON.parse(localStorage.getItem('onatrouvé_token')));
  myToast: any;

  constructor(
    private authService: AuthServiceService,
    private platform: Platform,
    private toastCtrl: ToastController) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

    const promise = JSON.parse(localStorage.getItem('onatrouvé_token'));

    return from(promise).pipe(mergeMap(token => {

      const cloneReq = this.addToken(request, token);

      return next.handle(cloneReq).pipe(catchError(error => {
          console.log(error);
          if (error.status === 401) {
            this.handleAuthError();
            return of(error);
          }
          const msg = error.error.message;
          this.presentToast(msg, 'danger', 'top');
          throw error;
        }
      ));

    }));


    // request = request.clone({
    //   setHeaders: {
    //     authorization: `Bearer ${this.token$}`
    //   }
    // });
    // return next.handle(request);


    //   // Retry on faillure
    //   retry(2),
    //   catchError((error, caught) => {
    //     console.error(error);
    //     if (error.status === 0) {
    //       this.presentToast('Probléme serveur! \n Veuillez patienter SVP...', 'danger', 'middle');
    //     }
    //     if (error.status === 400) {
    //       this.presentToast(error?.error?.message, 'danger', 'middle');
    //     }

    //     if (error.status === 500) {
    //       this.handleServer();
    //       return of(error);
    //     }
    //     throw error;
    //   }));

  }

  async presentToast(message, color, position) {
    this.myToast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      position
    }).then((toastData) => {
      toastData.present();
    });
  }

  private addToken(request: HttpRequest<any>, token: any) {
    // console.log(token);

    if (token) {
      return request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      });
    }
    return request;
  }

  // getToken(): Observable<any> {
  //   return this.storage.get(environment.token).pipe(map(res => { this.token$ = res; }));
  // }
  // public jwt() {


  //   this.getToken();
  //   const headers = new HttpHeaders({ authorization: 'Bearer ' + this.token$ });
  //   //   console.log(headers);
  //   return ({ headers });
  // }

  private typeError() {
    return this.presentToast('Votre session est expiré', 'danger', 'top');
  }

  private handleAuthError() {
    this.authService.logout();
    this.typeError();
  }

  // private handleServer() {
  //   this.presentToast('Probléme Serveur veuillez patienter Svp...', 'danger', 'middle');
  // }

}
