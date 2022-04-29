import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController, NavParams} from '@ionic/angular';
import {UiService} from '../../services/ui/ui';
import { FinderDetailListPopOverComponent } from './finder-detail-list/finder-detail-list-pop-over';
import { BadgeService } from 'src/app/services/badge-service/badge.service';
import { FindersService } from 'src/app/services/product/finders.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-finders',
  templateUrl: './finders.page.html',
  styleUrls: ['./finders.page.scss'],
})
export class FindersPage implements OnInit,OnDestroy {
  public recherches: any = [];
  subscription:Subscription;
  suivisNotif:any=[];
  constructor(public router: Router,
              private finderService:FindersService,
              private productService:ProductService,
              public navParams: NavParams,
              private modalCtrl: ModalController,
              private badgeService:BadgeService,
              
              private ui: UiService) {
                this.subscription= this.badgeService.getSuiviNotif().subscribe( (number)=>this.suivisNotif=number);
  }
  ngOnInit(): void {
    this.badgeService.getSuiviNotif().subscribe( (number)=>this.suivisNotif=number);
    console.log(this.suivisNotif);
    
    this.getsearches();
    this.badgeService.getSuiviNotif().subscribe(data=>{

    })
    this.badgeService.clearBadges();
  }
  isExist(id){
    if (this.suivisNotif.length>0) {
      this.suivisNotif.includes(id) 
    }
    else return false
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
}
  getsearches() {
    this.finderService.getsearches().subscribe((res: any) => {
      this.recherches = res.suivis.reverse();
    });
  }


  delete(suiviId, index) {
    this.finderService.deletesearch(suiviId).subscribe((res: any) => {
      this.recherches.splice(index, 1);
      // this.getsearches();
    },(err: any) => {
      console.log(err);
    });
  }

  goto(product) {
    this.productService.getProductbyId(product.id).subscribe((res: any) => {
      this.router.navigateByUrl('/product-details/' + product);
    }, e => {
      console.log(e);
    });
  }

  async doRefresh(refresher) {
    this.finderService.getsearches().subscribe((res: any) => {
      this.recherches = res.suivis;
      refresher.target.complete();
    }, err => {
      this.ui.fireError(err);
      refresher.complete();
    });

  }



  
async searchDetails(recherche){
  if (recherche.product) {
    this.ui.toast('On a Trouvé', null, null, 2000, 'top');
    const productModal = await this.modalCtrl.create({
      component: FinderDetailListPopOverComponent,
      componentProps: {
        results: recherche,
      },
      cssClass: 'product-suivi-modal',
    });
    await productModal.present();

    // this.router.navigateByUrl('/product-details', {
    //   state: {
    //     product: res.product
    //   }
    // });
  } else if (!recherche.product) {
    this.ui.toast('Votre commande sera suivie', null, null, 2000, 'top');
  }
}
async gotoDetails(product) {
  this.router.navigateByUrl('/product-details/' + product?.id);
  //this.modalController.dismiss();
}

}
