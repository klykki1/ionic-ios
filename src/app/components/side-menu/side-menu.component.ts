import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IonContent, MenuController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ApiServices} from '../../services/api-services/api-services';
import { ConfidentialitePage } from 'src/app/pages/confidentialite/confidentialite.page';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  @Input() main: IonContent;
  @Input() side: 'left' | 'right' = 'left';
  @Output() onFireMethod: EventEmitter<{ method: string, params: any }> = new EventEmitter();
  showrow = true;

  constructor(public services: ApiServices,
              private router: Router,
              private modalCtrl: ModalController,
              private  menu: MenuController) {
  }

  fireMethod(method, params?) {
    this.onFireMethod.emit({method, params});
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
        component: ConfidentialitePage
    });
    return await modal.present();
}
  onOpen() {
    console.log('onMenuOpen');
    // this.events.publish('onMenuOpen')
  }

  ngOnInit(): void {
  }

  goto(event) {
    this.menu.close();
    this.router.navigateByUrl('/' + event);
  }
  profileEdit() {
    this.menu.close();
    this.router.navigateByUrl('/register' ,{
      state: {
        profile: true,
      }
    });
  }
}
