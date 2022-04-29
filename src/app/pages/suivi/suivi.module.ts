import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SuiviPageRoutingModule} from './suivi-routing.module';

import {SuiviPage} from './suivi.page';
import {TranslateModule} from '@ngx-translate/core';
import {ColorPickerModule} from 'ngx-color-picker';
import {ProductSuiviPickerPopOverComponent} from "./product-suivi-picker-pop-over/product-suivi-picker-pop-over.component";
import {TimeAgoPipeModule} from "../../pipes/time-ago-pipe/index";
import { ComponentModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    SuiviPageRoutingModule,
    ColorPickerModule,
    TranslateModule.forChild(),
    TimeAgoPipeModule,
    ComponentModule
  ],
  declarations: [SuiviPage, ProductSuiviPickerPopOverComponent]
})
export class SuiviPageModule {
}
