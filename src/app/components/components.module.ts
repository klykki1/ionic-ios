import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComponentsRoutingModule} from './components-routing.module';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {CategoriesListComponent} from './categories-list/categories-list.component';
import {HeaderComponent} from './header/header.component';
import {CategoriesSliderComponent} from './categories-slider/categories-slider.component';
import {FooterComponent} from './footer/footer.component';
import {SettingsPopOverComponent} from './settings-pop-over/settings-pop-over.component';
import {RouterModule} from "@angular/router";
import {SlideupComponent} from "./slideup/slideup.component";


@NgModule({
  declarations: [
    CategoriesListComponent,
    HeaderComponent,
    CategoriesSliderComponent,
    SettingsPopOverComponent,
    SlideupComponent,
    SideMenuComponent,
    FooterComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    IonicModule,
    RouterModule,
    TranslateModule.forChild()
  ],
  exports: [SlideupComponent,
    CategoriesListComponent,
    CategoriesSliderComponent,
    SideMenuComponent,
    HeaderComponent,
    FooterComponent,
    SettingsPopOverComponent]
})
export class ComponentModule {
}
