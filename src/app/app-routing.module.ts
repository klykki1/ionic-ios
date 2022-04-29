import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full'
  },
  {
    path: 'sub-categories',
    loadChildren: () => import('./pages/sub-categories/sub-categories.module').then(m => m.SubCategoriesPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then(m => m.InfoPageModule)
  },
  {
    path: 'custom-card',
    loadChildren: () => import('./pages/custom-card/custom-card.module').then(m => m.CustomCardPageModule)
  },
  {
    path: 'filters-modal',
    loadChildren: () => import('./pages/filters-modal/filters-modal.module').then(m => m.FiltersModalPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then(m => m.MapPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'map-pikker',
    loadChildren: () => import('./pages/map-pikker/map-pikker.module').then(m => m.MapPikkerPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./pages/rating/rating.module').then(m => m.RatingPageModule)
  },
  {
    path: 'finders',
    loadChildren: () => import('./pages/finders/finders.module').then(m => m.FindersPageModule)
  },
  {
    path: 'discussion',
    loadChildren: () => import('./pages/discussion/discussion.module').then(m => m.DiscussionPageModule)
  },
  {
    path: 'discussion/:idProduct',
    loadChildren: () => import('./pages/discussion/discussion.module').then(m => m.DiscussionPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./pages/add-product/add-product.module').then(m => m.AddProductPageModule)
  },
  {
    path: 'a-propos',
    loadChildren: () => import('./pages/a-propos/a-propos.module').then(m => m.AProposPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then(m => m.ChangePasswordPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: 'confidentialite',
    loadChildren: () => import('./pages/confidentialite/confidentialite.module').then(m => m.ConfidentialitePageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.FavoritesPageModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'mes-annonces',
    loadChildren: () => import('./pages/mes-annonces/mes-annonces.module').then(m => m.MesAnnoncesPageModule)
  },
  {
    path: 'product-details/:idProduct',
    loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsPageModule)
  },
  {
    path: 'products/:category',
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsPageModule)
  },
  {
    path: 'suivi',
    loadChildren: () => import('./pages/suivi/suivi.module').then(m => m.SuiviPageModule)
  },
  {
    path: '**',
    redirectTo: 'products'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
