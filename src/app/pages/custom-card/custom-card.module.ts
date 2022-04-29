import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomCardPageRoutingModule } from './custom-card-routing.module';

import { CustomCardPage } from './custom-card.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomCardPageRoutingModule,
    TranslateModule.forChild(),

  ],
  declarations: [CustomCardPage]
})
export class CustomCardPageModule {}
