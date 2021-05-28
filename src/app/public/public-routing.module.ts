import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './homes/home/home.component';
import {CommonComponent} from './common/common.component';
import {ContactComponent} from './contact/contact.component';
import {ByCategorieComponent} from './by-categorie/by-categorie.component';
import {LostComponent} from '../admin/pages/articles/lost/lost.component';
import {MyClaimsComponent} from './my-claims/my-claims.component';

const routes: Routes = [
  {
    path: '', component: CommonComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'by-categorie/:id', component: ByCategorieComponent},
      {path: 'lost-objects', component: LostComponent},
      {path: 'my-claims', component: MyClaimsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
