import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController, NavParams, Platform, ToastController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiServices} from '../../services/api-services/api-services';
import {UiService} from '../../services/ui/ui';
import {Device} from '@awesome-cordova-plugins/device/ngx';
import { AppConfigService } from 'src/app/services/app-config/app-config';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/services/storage/storage';
import { FirebaseX } from '@awesome-cordova-plugins/firebase-x/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  addReginForm: FormGroup;
  public submitReg = false;
  public isProfile = false;
  public showpassword = false;
  public user: any = {};
  userSettings: any = {
    language: this.appConfig.userSettings.language,

  };
  constructor(public router: Router, public navParams: NavParams,
              private formBuilder: FormBuilder,
              private services: ApiServices,
              private ui: UiService,
              private modalController: ModalController,
              // private events: Events,
              public appConfig: AppConfigService,
              public plt: Platform,
              private translate: TranslateService,
              private storage: StorageService,
              private zone: NgZone,
              private device: Device,
              private firebase:FirebaseX,
              private toastController: ToastController,
  ) {
    this.isProfile = this.router.getCurrentNavigation().extras.state?.profile ? true : false;
    console.log(this.isProfile);
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](\d{2}){4}$/g;
    const emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (this.isProfile) {
      this.user = this.services.current_user;
      console.log(this.user);
      
      this.addReginForm = formBuilder.group(
        {
          name: [
            '',
            Validators.compose([Validators.required, Validators.minLength(3)])
          ],

          last_name: [
            '',
            Validators.compose([Validators.required, Validators.minLength(3)])
          ],
          email: [
            '',
            Validators.compose([Validators.required, Validators.pattern(emailRegex)
            ])
          ],
          // phone: [
          //   '',
          //   Validators.compose([Validators.required, Validators.pattern(phoneRegex)
          //   ])
          // ]
        });
    } else {
      this.addReginForm = this.formBuilder.group(
        {
          name: [
            '',
            Validators.compose([Validators.required, Validators.minLength(3)])
          ],

          last_name: [
            '',
            Validators.compose([Validators.required, Validators.minLength(3)])
          ],
          email: [
            '',
            Validators.compose([Validators.required, Validators.pattern(emailRegex)
            ])
          ],
          phone: [
            ''
          ],
          password: [
            '',
            Validators.compose([Validators.required, Validators.minLength(8)])
          ],
          vpassword: [
            '',
            Validators.compose([Validators.required, Validators.minLength(8)])
          ]
        },
        {validator: this.checkIfMatchingPasswords('password', 'vpassword')});
    }

  }


  checkIfMatchingPasswords(
    passwordKey: string,
    passwordConfirmationKey: string
  ) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey];
      const passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true});
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }

  cahngepasswordView() {
    this.showpassword = !this.showpassword;
    console.log(this.showpassword);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 10000
    });
    toast.present();
  }
  token:any;
  userDataSubmit() {
 this.firebase.getAPNSToken()
    .then(token => {
      this.token=token
      alert("token"+token)
    })
   alert(this.token)
    this.submitReg = true;

    if (this.addReginForm.valid) {
      if (this.isProfile) {
        this.user.id = this.services.current_user.id;
        delete this.user.password;
      }
      // this.ui.loading();
      const deviceData = JSON.parse(localStorage.getItem('deviceData'));
      if (deviceData) {

        this.user.platform = deviceData.os;
        this.user.deviceid = deviceData.reg_id;
        this.submitRegistration()
      }else{
        this.firebase.getAPNSToken()
        .then(token => {
          const deviceData = {
            reg_id: token,
            os: this.device.platform
          };
         
          this.services.device_data = deviceData;
          localStorage.setItem('deviceData', JSON.stringify(deviceData));
          this.user.platform = deviceData.os;
          this.user.deviceid = deviceData.reg_id;
        }).finally(()=>{
          this.submitRegistration()
        }) 
        .catch(error => console.error('Error getting token', error));
      }
      console.log(this.user, ' <<< We HAVE THIS USER WANT TO REGISTER');

    }
  }

   submitRegistration(){
    this.services.register(this.user).subscribe(async (res: any) => {
      // this.ui.unLoading();
      this.submitReg = false;
      if (!this.isProfile) {
        this.services.isLoggedIn = true;
        this.services.current_user = res.user;
        const tokens = {
          token: res.token,
          refresh_token: res.refresh_token
        };
        localStorage.setItem("com.onatrouve-regId", (res.registrationId));
        let deviceData = {
          reg_id: res.registrationId,
          os: this.device.platform
        };
        this.services.device_data = deviceData;
        localStorage.setItem('deviceData', JSON.stringify(deviceData));
        localStorage.setItem('onatrouvé_user', JSON.stringify(res.user));
        localStorage.setItem('onatrouvé_token', JSON.stringify(tokens));
        this.router.navigateByUrl('/products');
      } else {
       this.ngOnInit()
        
      }
    },err => {
      console.log(err.message);
      this.submitReg = false;
      this.services.fireError(err);
      // this.ui.unLoading();

    });
  }
  async closeModal() {
    await this.modalController.dismiss();
  }

  ngOnInit(): void {
  this.firebase.getAPNSToken().then(token=>{this.token=token})
  }
  async changeDirection() {
    const userSettings = await this.storage.get('userSettings');
    if (userSettings) {
      this.appConfig.userSettings = userSettings;
    }
    if (this.appConfig.userSettings.language === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
    this.translate.use(this.appConfig.userSettings.language);
    // this.events.publish('languageChange', true);
    this.ngOnInit()
  }


  async changeLanguage(lang) {
    console.log(this.appConfig.userSettings);
    this.zone.run(() => {
      this.appConfig.userSettings.language = lang;
    });
    console.log('UserSettinrg', this.appConfig.userSettings);
    await this.storage.set('userSettings', this.appConfig.userSettings);
    this.changeDirection();
  }

  ionViewDidLeave() {
    this.storage.set('userSettings', this.userSettings);
  }
}
