import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './admin/pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'feegn', pathMatch: 'full'},
      {path: 'feegn', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
    ]
  },
  {path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
