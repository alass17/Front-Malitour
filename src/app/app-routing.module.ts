import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },


  {
    path:'home',
    loadChildren:() => import('./home/home.module').then( m => m.HomePageModule)
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
  
  
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
