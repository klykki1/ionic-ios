import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingPageRoutingModule } from './rating-routing.module';

import { RatingPage } from './rating.page';
import {TranslateModule} from '@ngx-translate/core';
import {IonicRatingModule} from 'ionic-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingPageRoutingModule,
    IonicRatingModule,
    TranslateModule.forChild()
  ],
  declarations: [RatingPage]
})
export class RatingPageModule {}
