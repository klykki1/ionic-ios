import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapPikkerPage } from './map-pikker.page';

const routes: Routes = [
  {
    path: '',
    component: MapPikkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapPikkerPageRoutingModule {}
