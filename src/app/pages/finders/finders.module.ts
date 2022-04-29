import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindersPageRoutingModule } from './finders-routing.module';

import { FindersPage } from './finders.page';
import {TranslateModule} from "@ngx-translate/core";
import {ComponentModule} from "../../components/components.module";
import { FinderDetailListPopOverComponent } from './finder-detail-list/finder-detail-list-pop-over';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule.forRoot(),
        FindersPageRoutingModule,
        TranslateModule.forChild(),
        ComponentModule,
        
    ],
  declarations: [FindersPage,FinderDetailListPopOverComponent]
})
export class FindersPageModule {}
