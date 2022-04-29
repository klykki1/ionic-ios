import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {AppConfigService} from '../app-config/app-config';

@Injectable({ providedIn: 'root' })
export class StorageService {
  appPrefix: string = this.appConfig.appPrefix;

  constructor(private storage: Storage, private appConfig: AppConfigService) {
  }

  public set(key: string, value: any) {
    return this.storage.set(`${this.appPrefix}-${key}`, value);
  }

  public async get(key) {
    return await this.storage.get(`${this.appPrefix}-${key}`);
  }

  public async remove(key) {
    return await this.storage.remove(`${this.appPrefix}-${key}`);
  }

  public clear() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }
}
