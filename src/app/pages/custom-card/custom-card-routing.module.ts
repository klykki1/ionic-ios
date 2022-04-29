import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomCardPage } from './custom-card.page';

const routes: Routes = [
  {
    path: '',
    component: CustomCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomCardPageRoutingModule {}
