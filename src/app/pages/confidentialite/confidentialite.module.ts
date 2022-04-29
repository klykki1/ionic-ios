import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfidentialitePageRoutingModule } from './confidentialite-routing.module';

import { ConfidentialitePage } from './confidentialite.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfidentialitePageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [ConfidentialitePage]
})
export class ConfidentialitePageModule {}
