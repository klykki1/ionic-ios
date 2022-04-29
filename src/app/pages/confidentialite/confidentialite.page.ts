import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-confidentialite',
  templateUrl: './confidentialite.page.html',
  styleUrls: ['./confidentialite.page.scss'],
})
export class ConfidentialitePage {

  constructor(private modalController: ModalController) {
  }


  closeModal() {
    this.modalController.dismiss();
  }

}
