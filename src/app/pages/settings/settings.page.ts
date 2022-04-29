import {Component, NgZone, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Platform} from '@ionic/angular';
import {StorageService} from '../../services/storage/storage';
import {AppConfigService} from '../../services/app-config/app-config';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  userSettings: any = {
    language: this.appConfig.userSettings.language,

  };
  user: any = {};

  constructor(private translate: TranslateService,
              private platform: Platform,
              public appConfig: AppConfigService,
              private storage: StorageService,
              private zone: NgZone
  ) {
    console.log(this.userSettings.language = this.appConfig.userSettings.language);
  }

  ngOnInit() {
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
    console.log('UsedLanguage', this.appConfig.userSettings.language);
    this.translate.use(this.appConfig.userSettings.language);
    console.log(this.translate);
    // this.events.publish('languageChange', true);
  }


  async changeLanguage(lang) {
    console.log(this.appConfig.userSettings);
    this.zone.run(() => {
      this.appConfig.userSettings.language = lang;
      console.log(this.appConfig.userSettings.language);
    });
    console.log('UserSettinrg', this.appConfig.userSettings);
    await this.storage.set('userSettings', this.appConfig.userSettings);
    this.changeDirection();
  }

  ionViewDidLeave() {
    this.storage.set('userSettings', this.userSettings);
  }
}
