import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscussionPageRoutingModule } from './discussion-routing.module';

import { DiscussionPage } from './discussion.page';
import {TranslateModule} from "@ngx-translate/core";
import {ComponentModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DiscussionPageRoutingModule,
        TranslateModule.forChild(),
        ComponentModule,

    ],
  declarations: [DiscussionPage]
})
export class DiscussionPageModule {}
