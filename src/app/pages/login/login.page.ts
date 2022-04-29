import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavParams, Platform, ToastController} from '@ionic/angular';
import {UiService} from '../../services/ui/ui';
import {Router} from '@angular/router';
import {ApiServices} from '../../services/api-services/api-services';
import {Device} from '@awesome-cordova-plugins/device/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('mailConfirmation') mailConfirmation: ElementRef;

  loginForm: FormGroup;
  private user: any = {};
  private showMessagebox = false;
  public submitReg = false;

  constructor(public router: Router,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private services: ApiServices,
              private ui: UiService,
              public plt: Platform,
              private toastController: ToastController,
              private device: Device) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    const emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });

  }

  userLogin() {
    this.submitReg = true;
    if (this.loginForm.valid) {
      this.ui.loading();
      const deviceData = this.services.device_data;
      setTimeout(() => {
        if (Object.keys(deviceData).length !== 0) {
          this.user.platform = deviceData.os;
          this.user.deviceid = deviceData.reg_id;
        }
        this.user.email = this.loginForm.controls.email.value;
        this.user.password = this.loginForm.controls.password.value;
        // else {
        //   console.log('From Login2 ', deviceData);
        //   this.user.platform = 'Browser';
        //   this.user.deviceid = JSON.stringify(Date());
        // }
        console.log(this.user, ' <<< We HAVE THIS USER WANT TO REGISTER');
        this.services.login(this.user).then((res: any) => {
          this.ui.unLoading();
          this.submitReg = false;
          this.services.isLoggedIn = true;
          this.services.current_user = res.user;
          const tokens = {
            token: res.token,
            refresh_token: res.refresh_token
          };
          localStorage.setItem('onatrouvé_user', JSON.stringify(res.user));
          localStorage.setItem('onatrouvé_token', JSON.stringify(tokens));
          // this.events.publish('user_loggedIn', res.user);
         // this.presentToast('user_loggedIn ' + res?.user?.name);
          this.router.navigateByUrl('/products');
        }).catch(err => {
          console.log(err.message);
          this.submitReg = false;
          this.services.fireError(err);
          this.ui.unLoading();

        });
      }, 2000);
    }
  }

  resetPassword() {
    if (this.loginForm.controls.email.valid) {
      this.services.sendResetEmail(this.user.email).subscribe(res => {
        this.submitReg = false;
        this.mailConfirmation.nativeElement.style.top = '0px';
        setTimeout(() => {
          this.mailConfirmation.nativeElement.style.top = '-200px';
        }, 5000);
      },(err: any) => {
        console.log(err);
        this.services.fireError(err);
      });

    } else {
      this.submitReg = true;
    }
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 1000
    });
    toast.present();
  }
}
