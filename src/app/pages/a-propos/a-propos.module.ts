import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AProposPageRoutingModule } from './a-propos-routing.module';

import { AProposPage } from './a-propos.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AProposPageRoutingModule,
    TranslateModule.forChild(),

  ],
  declarations: [AProposPage]
})
export class AProposPageModule {}
