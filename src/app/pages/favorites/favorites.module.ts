import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesPageRoutingModule } from './favorites-routing.module';

import { FavoritesPage } from './favorites.page';
import {TimeAgoPipeModule} from '../../pipes/time-ago-pipe/index';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FavoritesPageRoutingModule,
        TimeAgoPipeModule,
        TranslateModule.forChild(),
        ComponentModule,
    ],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule {}
