import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {IonicModule, IonicRouteStrategy, NavParams} from '@ionic/angular';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {IonicRatingModule} from 'ionic-rating';
import { FirebaseX } from '@awesome-cordova-plugins/firebase-x/ngx';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxIonicImageViewerModule} from 'ngx-ionic-image-viewer';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {IonicStorageModule} from '@ionic/storage';
import {SocialSharing} from '@awesome-cordova-plugins/social-sharing/ngx';
import {StatusBar} from '@awesome-cordova-plugins/status-bar/ngx';
import {Camera} from '@awesome-cordova-plugins/camera/ngx';
import {Device} from '@awesome-cordova-plugins/device/ngx';
// import {Push} from '@havesource/cordova-plugin-push/types';
import {Badge} from '@awesome-cordova-plugins/badge/ngx';
import {EmailComposer} from '@awesome-cordova-plugins/email-composer/ngx';
import {CallNumber} from '@awesome-cordova-plugins/call-number/ngx';
import {FileTransfer, FileTransferObject} from '@awesome-cordova-plugins/file-transfer/ngx';
import {File} from '@awesome-cordova-plugins/file/ngx';
import {BranchIo} from '@awesome-cordova-plugins/branch-io/ngx';
import {SplashScreen} from '@awesome-cordova-plugins/splash-screen/ngx';
import {Dialogs} from '@awesome-cordova-plugins/dialogs/ngx';
import {Geolocation} from '@awesome-cordova-plugins/geolocation/ngx';
import {BackgroundGeolocation} from '@awesome-cordova-plugins/background-geolocation/ngx';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MapPageModule} from './pages/map/map.module';
import {LoginPageModule} from './pages/login/login.module';
import {PipesModule} from './pipes/pipes.module';
import {TimeAgoPipeModule} from './pipes/time-ago-pipe/index';
import {UiService} from './services/ui/ui';
import {IonicGestureConfig} from './services/utils/IonicGestureConfig';
import {CameraProvider} from './services/camera/camera';
import {JwtHelperProvider} from './services/jwt-helper/jwt-helper';
import {HttpHelperService} from './services/http-helper/http-helper';
import {ApiServices} from './services/api-services/api-services';
import {AppConfigService} from './services/app-config/app-config';
import {AuthServiceService} from './services/auth-service/auth-service';
import {StorageService} from './services/storage/storage';
import {Media} from '@awesome-cordova-plugins/media/ngx';
import {ComponentModule} from './components/components.module';
import {JWTInterceptor} from './shared/interceptors/JWTInterceptor';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
import { Adjust } from '@awesome-cordova-plugins/adjust/ngx';
import { FCM } from 'plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM';

const config: SocketIoConfig = { url: 'http://vps-6496d4c1.vps.ovh.net:3001/chat', options:  {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax : 5000,
  reconnectionAttempts: Infinity
} };

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ComponentModule,
    MapPageModule,
    IonicRatingModule,
    LoginPageModule,
    BrowserAnimationsModule,
    PipesModule,
    TimeAgoPipeModule,
    NgxIonicImageViewerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    SocketIoModule.forRoot(config),
    IonicStorageModule.forRoot({name: 'onaTrouveDatadase'}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAh30l0_YwqZkcgVBu-bWXylGO86IhaS84'
    }),
    IonicModule.forRoot({_forceStatusbarPadding: true})
  ],
  providers: [
    FCM,
    SocialSharing,
    StatusBar,
    File,
    Camera,
    Device,
    Adjust,

   // Push,
       BackgroundGeolocation,
   ImagePicker,
   FirebaseX,
    Badge,
    EmailComposer,
    CallNumber,
    FileTransfer,
    BranchIo,
    FileTransferObject,
    SplashScreen,
    Dialogs,
    ReactiveFormsModule,
    FormBuilder,
    Geolocation,
    NavParams,

    {provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig},
    {provide: ErrorHandler},
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    UiService,
    CameraProvider,
    JwtHelperProvider,
    HttpHelperService,
    ApiServices,
    AppConfigService,
    UiService,
    AuthServiceService,
    StorageService,
    Media,
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
