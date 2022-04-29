import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPikkerPageRoutingModule } from './map-pikker-routing.module';

import { MapPikkerPage } from './map-pikker.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPikkerPageRoutingModule,
    AgmCoreModule

  ],
  declarations: [MapPikkerPage]
})
export class MapPikkerPageModule {}
