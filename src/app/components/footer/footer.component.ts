import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppConfigService} from '../../services/app-config/app-config';
import {ApiServices} from "../../services/api-services/api-services";
import {Router} from "@angular/router";
import { Observable, Subscription } from 'rxjs';
import { BadgeService } from 'src/app/services/badge-service/badge.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit,OnDestroy {
  currentUser: any;
  currentUserPrefix = this.appConfig.appPrefixes.user;
  subscription:Subscription;
   productNotificationBadge:Observable<number>;
   messageNotificationBadge:Observable<number>;
   insideChat:boolean;
  constructor(private appConfig: AppConfigService,
              private router: Router,
              private badgeService:BadgeService,
              public service:ApiServices
              ) 
              {
              this.subscription= this.badgeService.getinsidechat().subscribe( (number)=>this.insideChat=number);
              this.subscription= this.badgeService.getNumber().subscribe((number)=>this.productNotificationBadge=number);
              this.subscription= this.badgeService.getNumberMessage().subscribe((number)=>this.messageNotificationBadge=number);                      
              }

 ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('onatrouvé_user'));
  }


ngOnDestroy(): void {
    this.subscription.unsubscribe();
}

  gotTofavorites() {
    this.router.navigateByUrl('/favorites');
  }
  gotToRecherche() {
    this.router.navigateByUrl('/finders');
  }
  gotToDiscussion() {
    this.router.navigateByUrl('/discussion');
  }
  gotToProducts() {
    this.router.navigateByUrl('/products');
  }
  
  gotToAddProduct(){
    this.router.navigateByUrl('/add-product');
  }
}
