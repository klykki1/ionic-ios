import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DomSanitizer} from '@angular/platform-browser';
import {CameraProvider} from '../camera/camera';
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  ModalController, PopoverController,
  ToastController, LoadingOptions
} from '@ionic/angular';

@Injectable({providedIn: 'root'})
export class UiService {
  private loaders: any;

  constructor(public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController,
              private actionCtrl: ActionSheetController,
              private popoverCtrl: PopoverController,
              // public events: Events,
              private sanitizer: DomSanitizer,
              public translate: TranslateService,
              private camera: CameraProvider) {
  }

  alert(title, message,) {
    return new Promise((resolve, reject) => {
      console.log('alert');
      this.translate.get([title, message, 'modals.ok']).subscribe(async values => {
        console.log('alert');
        const alert = await this.toastCtrl.create({
          header: values[title],
          message: values[message],
          buttons: [
            {
              text: values['modals.ok'],
              handler: () => {
                resolve(true);
              }
            }
          ]
        });
        await alert.present();
      });
    });
  }

  alertImage(title, message,) {
    return new Promise((resolve, reject) => {
      this.translate.get([title, message, 'modals.ok', 'service.addPicture', 'service.getPhoto']).subscribe(async values => {
        const alert = await this.alertCtrl.create({
          header: values[title],
          subHeader: values[message],
          buttons: [
            {
              text: values['service.addPicture'],
              handler: () => {
                resolve(1);
              }
            },
            {
              text: values['service.getPhoto'],
              handler: () => {
                resolve(2);
              }
            }
          ]
        });
        await alert.present();
      });
    });
  }

  promptAlert(title, message?) {
    return new Promise(async (resolve, reject) => {
      const alert = await this.alertCtrl.create({
        header: title,
        inputs: [
          {
            name: 'content',
            placeholder: 'your comment ...'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
            }
          },
          {
            text: 'Save',
            handler: data => {
              resolve(data);
            }
          }
        ]
      });
      await alert.present();

    });
  }

  customLoader(): any {
    const html = `<div id="loader">
    <div id="shadow"></div>
    <div id="box"></div>
  </div>`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  isLoading = false;
   createLoder(message?) {
     this.isLoading=true;
      this.loadingCtrl.create({
      spinner: 'bubbles',
      cssClass: 'customLoader',
      htmlAttributes: this.customLoader()
    }).then((response) => {
      response.present().then(() => {
        setTimeout(() => {
              if (!this.isLoading) {
          response.dismiss();
        }
        }, 2000);
    
      });    });
     
  }

  async loading(content?) {
    if (!content) {
      await this.createLoder();
    } else {
      await this.createLoder(content);
    }
  }

   unLoading() {
    this.isLoading = false;
    this.loadingCtrl.dismiss().then((response) => {
      // console.log('Loader closed!', response);
    }).catch((err) => {
      //this.loadingCtrl.dismiss()
      console.log('Error occured : ', err);
    });
  }

  async toast(message, cssClass?, params?, duration?, position?) {
    if (!params) {
      params = '';
    }
    const toastInst = await this.toastCtrl.create({
      message: message + params,
      cssClass: cssClass || 'toast-container',
      position: position || 'bottom',
      duration: duration || 2000
    });
    await toastInst.present();

  }

  confirmation(header, message, yesBtn?, noBtn?) {
    const agreeBtn = yesBtn || 'Oui';
    const disagreeBtn = noBtn || 'Non';
    return new Promise(async (resolve, reject) => {

      const confirm = await this.alertCtrl.create({
        header,
        message,
        buttons: [
          {
            text: agreeBtn,
            handler: () => {
              resolve(true);
            }
          },
          {
            text: disagreeBtn,
            handler: () => {
              reject(false);
            }
          }
        ]
      });
      await confirm.present();
    });
  }

  confirmationWithReject(title, message, yesBtn?, noBtn?) {
    const agreeBtn = yesBtn || 'modals.ok';
    const disagreeBtn = noBtn || 'modals.cancel';
    return new Promise((resolve, reject) => {
      this.translate.get([title, message, agreeBtn, disagreeBtn]).subscribe(async values => {
        const confirm = await this.alertCtrl.create({
          header: values[title],
          message: values[message],
          buttons: [
            {
              text: values[agreeBtn],
              handler: () => {
                resolve('Agree clicked');
              }
            },
            {
              text: values[disagreeBtn],
              handler: () => {
                reject('Disagree clicked');
              }
            }
          ]
        });
        await confirm.present();
      });
    });
  }

  rating(title, message, yesBtn?, noBtn?) {
    const agreeBtn = yesBtn || 'modals.ok';
    const disagreeBtn = noBtn || 'modals.cancel';
    return new Promise((resolve, reject) => {
      this.translate.get([title, message, agreeBtn, disagreeBtn]).subscribe(async values => {
        const confirm = await this.alertCtrl.create({
          header: values[title],
          message: values[message],
          buttons: [
            {
              text: values[agreeBtn],
              handler: () => {
                resolve(true);
                console.log('Agree clicked');
              }
            },
            {
              text: values[disagreeBtn],
              handler: () => {
                console.log('Disagree clicked');
              }
            }
          ]
        });
        await confirm.present();
      });
    });
  }

  imageType() {
    return new Promise(async (resolve, reject) => {
      const action = await this.actionCtrl.create({
        header: 'Ajouter Les Images d\'Annonce',
        buttons: [
          {
            text: 'Appareil Photo',
            icon: 'camera',
            handler: () => {
              this.camera.fromCamera().then(base64 => resolve(base64));
            }
          }, {
            text: 'Chercher Photo',
            icon: 'images',
            handler: () => {
              this.camera.fromGalley().then(base64 => resolve(base64));
            }
          }, {
            text: 'Fermer',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              // reject('cancel');
              console.log('Cancel clicked');
            }
          }
        ]
      });
      await action.present();

    });
  }


  postType() {
    return new Promise((resolve) => {
      this.translate.get(['modals.ok', 'modals.cancel', 'addLost.title', 'addFound.title']).subscribe(async values => {
        const action = await this.actionCtrl.create({
          //title: 'Take photo from',
          buttons: [
            {
              text: values['addLost.title'],
              handler: () => {
                resolve('title_lost');
              }
            }, {
              text: values['addFound.title'],
              handler: () => {
                resolve('title_found');
              }
            }, {
              text: values['modals.cancel'],
              icon: 'close',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        await action.present();
      });
    });
  }

  privacy() {
    this.translate.get(['modals.ok', 'modals.cancel', 'modals.openPrivacy', 'settings.term']).subscribe(async values => {
      const action = await this.actionCtrl.create({
        header: values['modals.openPrivacy'],
        buttons: [
          {
            text: '<a href="http://peppepcar.com/privacy" target="_system">' + values['settings.term'] + '</a>',
            //icon: 'camera',
            handler: () => {
              console.log('Open website');
            }
          }, {
            text: values['modals.cancel'],
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      await action.present();
    });
  }

  shareType() {
    return new Promise((resolve) => {
      this.translate.get(['modals.ok', 'modals.cancel', 'detailsPage.fabs.shareTitle',
        'detailsPage.fabs.shareFb', 'detailsPage.fabs.shareTwitter',
        'detailsPage.fabs.shareOther']).subscribe(async values => {
        const action = await this.actionCtrl.create({
          header: 'Partager l\'annonce',
          buttons: [
            {
              text: 'Partage Via Fb',
              icon: 'logo-facebook',
              handler: () => {
                resolve('fb');
              }
            }, {
              text: 'Partage Via Twitter',
              icon: 'logo-twitter',
              handler: () => {
                resolve('twitter');
              }
            }, {
              text: 'Autre Outils de Partage',
              icon: 'md-share',
              handler: () => {
                resolve('others');
              }
            }
          ]
        });
        await action.present();
      });
    });
  }

  commentOptions() {
    return new Promise((resolve, reject) => {
      this.translate.get(['modals.edit', 'modals.del', 'comment.title']).subscribe(async values => {
        const action = await this.actionCtrl.create({
          header: values['comment.title'],
          buttons: [
            {
              text: values['modals.edit'],
              //icon: 'camera',
              handler: () => {
                resolve('edit');
                console.log('edit clicked');
              }
            }, {
              text: values['modals.del'],
              //icon: 'close',
              //role: 'cancel',
              handler: () => {
                resolve('del');
                console.log('delete clicked');
              }
            }
          ]
        });
        await action.present();
      });
    });
  }

  phoneNumbers(phone, secondPhone) {
    return new Promise((resolve, reject) => {
      this.translate.get(['detailsPage.selectNumber']).subscribe(async values => {
        const action = await this.actionCtrl.create({
          header: values['comment.title'],
          buttons: [
            {
              text: phone,
              //icon: 'camera',
              handler: () => {
                resolve(phone);
                console.log('phone clicked');
              }
            }, {
              text: secondPhone,
              //icon: 'close',
              //role: 'cancel',
              handler: () => {
                resolve(secondPhone);
                console.log('secondPhone clicked');
              }
            }
          ]
        });
        await action.present();
      });
    });
  }

  async modal(page: any, data?: any, opts?: any) {
    const modalInst = await this.modalCtrl.create({component: page, componentProps: {data, opts}});
    await modalInst.present();
    return modalInst;
  }

  async popover(component: any, event: any, data?: any, opts?: any) {
    const popover = await this.popoverCtrl.create({component, event, componentProps: {data}});

    return await popover.present();
  }

  fireError(err?, msg: string = 'Connexion Error') {
    this.unLoading();
    this.toast(msg, 'error');
  }

  fireSuccess(message: string, duration = 3500) {
    this.toast(message, 'success', null, duration);
  }

  confirmationPrompt(title, message, inputName?, inputPrice?, yesBtn?, noBtn?) {
    const agreeBtn = yesBtn || 'modals.yes';
    const disagreeBtn = noBtn || 'modals.no';
    return new Promise((resolve, reject) => {
      this.translate.get([title, message, inputName, inputPrice, agreeBtn, disagreeBtn]).subscribe(async values => {
        const confirm = await this.alertCtrl.create({
          header: values[title],
          message: values[message],
          inputs: [
            {
              name: 'missionname',
              placeholder: values[inputPrice],
              type: 'text',
            },
            {
              name: 'price',
              placeholder: values[inputName],
              type: 'number',


            },

          ],
          buttons: [
            {
              text: values[agreeBtn],
              handler: (data) => {
                resolve(data);
                console.log('Agree clicked');
              }
            },
            {
              text: values[disagreeBtn],
              handler: () => {
                reject(false);
                console.log('Disagree clicked');
              }
            }
          ]
        });
        await confirm.present();
      });
    });
  }


}
