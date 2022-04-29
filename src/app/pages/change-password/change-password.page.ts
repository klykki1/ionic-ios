import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UiService} from '../../services/ui/ui';
import {ApiServices} from '../../services/api-services/api-services';
import {NavParams} from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

   addReginForm: any;
   submitReg = false;
public   token: any;
public   showPassword = false;
   user: any = {};

  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private ui: UiService,
              private services: ApiServices,
              public navParams: NavParams) {
    this.token = this.navParams.get('token');
    console.log(' TOKEN TOKEN', this.token);
    this.addReginForm = formBuilder.group(
      {
        password: [
          '',
          Validators.compose([Validators.required, Validators.minLength(8)])
        ],
        vpassword: [
          '',
          Validators.compose([Validators.required, Validators.minLength(8)])
        ]
      }, {validator: this.checkIfMatchingPasswords('password', 'vpassword')});
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

  ngOnInit() {
    
  }

  cahngepasswordView() {
    this.showPassword = !this.showPassword;
   
  }

  changePassword() {
    this.submitReg = true;
    if (this.addReginForm.valid) {
      this.services.changepassword(this.token, this.user.password).then(() => {
        console.log('passwordChanged');
        this.router.navigateByUrl('/login');
        this.ui.toast('Mot de Passe Changer', null, null, 3000, 'top');
      }).catch((err: any) => {
        this.services.fireError(err);
      });

    }
  }
}
