import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'loginform',
    pathMatch: 'full'
  },
  {
    path: 'regions',
    loadChildren: () => import('./regions/regions.module').then( m => m.RegionsPageModule)
  },
  {
    path: 'ajouter',
    loadChildren: () => import('./ajouter/ajouter.module').then( m => m.AjouterPageModule)
  },
  {
    path: 'details-region',
    loadChildren: () => import('./details-region/details-region.module').then( m => m.DetailsRegionPageModule)
  },
  {
    path: 'loginform',
    loadChildren: () => import('./loginform/login.module').then( m => m.LoginPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
