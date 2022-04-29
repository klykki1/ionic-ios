import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindersPage } from './finders.page';

const routes: Routes = [
  {
    path: '',
    component: FindersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindersPageRoutingModule {}
