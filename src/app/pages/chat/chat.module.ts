import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';
import {TranslateModule} from '@ngx-translate/core';
import {PipesModule} from '../../pipes/pipes.module';
import {ComponentModule} from "../../components/components.module";
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
//const config: SocketIoConfig = { url: 'http://vps-6496d4c1.vps.ovh.net:3000/chat', options: {} };
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChatPageRoutingModule,
        PipesModule,
        TranslateModule.forChild(),
        ComponentModule,
  //      SocketIoModule.forRoot(config),
    ],
  declarations: [ChatPage]
})
export class ChatPageModule {}
