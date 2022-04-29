import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProductPageRoutingModule } from './add-product-routing.module';

import { AddProductPage } from './add-product.page';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        IonicModule,
        AddProductPageRoutingModule,
        TranslateModule.forChild(),
        ComponentModule,
    ],
  declarations: [AddProductPage]
})
export class AddProductPageModule {}
