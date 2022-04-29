import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import {TimeAgoPipeModule} from '../../pipes/time-ago-pipe/index';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductsPageRoutingModule,
        TimeAgoPipeModule,
        TranslateModule.forChild(),
        ComponentModule,
    ],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
