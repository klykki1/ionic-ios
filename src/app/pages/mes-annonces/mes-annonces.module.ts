import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesAnnoncesPageRoutingModule } from './mes-annonces-routing.module';

import { MesAnnoncesPage } from './mes-annonces.page';
import {TimeAgoPipeModule} from '../../pipes/time-ago-pipe/index';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MesAnnoncesPageRoutingModule,
        TimeAgoPipeModule,
        TranslateModule.forChild(),
        ComponentModule,
    ],
  declarations: [MesAnnoncesPage]
})
export class MesAnnoncesPageModule {}
