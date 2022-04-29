import {Injectable} from '@angular/core';

const localUrl = 'dev.trouve.192.168.1.48.xip.io';
const prodUrl = 'vps-6496d4c1.vps.ovh.net';
const local = 'localhost:8000';

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  appPrefix = 'onatrouve';
  appPrefixes = {
    app: 'onatrouve',
    settings: 'userSettings',
    user: 'currentUser',
    token: 'token',
    deviceId: 'deviceId'
  };
  currentUrl = prodUrl;
  CONFIG: any = {
    apiUrl: `http://${this.currentUrl}/api`,
    baseAPI: `http://${this.currentUrl}`,
  };

  API = this.CONFIG.apiUrl;
  BASE_API = this.CONFIG.baseAPI;
  CHAT_URL = this.CONFIG.chatUrl;
  userSettings = {language: null, country: null};

  constructor() {
    this.userSettings.language = 'fr';
  }

  public getTwoCharLang() {
    return navigator.language ? navigator.language.substr(0, 2) : 'fr';
  }

  async getLang() {
    return this.userSettings.language;
  }

}
