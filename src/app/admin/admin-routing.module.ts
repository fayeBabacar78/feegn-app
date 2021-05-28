import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AdminGuard} from './guards/admin.guard';
import {CategorieComponent} from './pages/categorie/categorie.component';
import {CategorieCreateComponent} from './pages/categorie/categorie-create/categorie-create.component';
import {CategorieEditComponent} from './pages/categorie/categorie-edit/categorie-edit.component';
import {CategorieListComponent} from './pages/categorie/categorie-list/categorie-list.component';
import {ArticlesComponent} from './pages/articles/articles.component';
import {ArticlesListComponent} from './pages/articles/articles-list/articles-list.component';
import {ArticlesCreateComponent} from './pages/articles/articles-create/articles-create.component';
import {ArticlesEditComponent} from './pages/articles/articles-edit/articles-edit.component';
import {ClaimsListComponent} from './pages/claims/claims-list/claims-list.component';
import {AgencesComponent} from './pages/agences/agences.component';
import {AgenceListComponent} from './pages/agences/agence-list/agence-list.component';
import {AgenceCreateComponent} from './pages/agences/agence-create/agence-create.component';
import {AgenceEditComponent} from './pages/agences/agence-edit/agence-edit.component';
import {UsersListComponent} from './pages/users/users-list/users-list.component';
import {UsersComponent} from './pages/users/users.component';
import {UsersCreateComponent} from './pages/users/users-create/users-create.component';
import {UsersEditComponent} from './pages/users/users-edit/users-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'categories', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'categories', component: CategorieComponent, canActivate: [AdminGuard], children: [
      {path: 'list', component: CategorieListComponent},
      {path: 'create', component: CategorieCreateComponent},
      {path: 'edit/:id', component: CategorieEditComponent},
      {path: '', redirectTo: 'list', pathMatch: 'full'}
    ]
  },
  {
    path: 'articles', component: ArticlesComponent, canActivate: [AdminGuard], children: [
      {path: 'list', component: ArticlesListComponent},
      {path: 'create', component: ArticlesCreateComponent},
      {path: 'edit/:id', component: ArticlesEditComponent},
      {path: '', redirectTo: 'list', pathMatch: 'full'}
    ]
  },
  {
    path: 'articles', component: ArticlesComponent, canActivate: [AdminGuard], children: [
      {path: 'list', component: ArticlesListComponent},
      {path: 'create', component: ArticlesCreateComponent},
      {path: 'edit/:id', component: ArticlesEditComponent},
      {path: '', redirectTo: 'list', pathMatch: 'full'}
    ]
  },
  {
    path: 'agences', component: AgencesComponent, canActivate: [AdminGuard], children: [
      {path: 'list', component: AgenceListComponent},
      {path: 'create', component: AgenceCreateComponent},
      {path: 'edit/:id', component: AgenceEditComponent},
      {path: '', redirectTo: 'list', pathMatch: 'full'}
    ]
  },
  {
    path: 'users', component: UsersComponent, canActivate: [AdminGuard], children: [
      {path: 'list', component: UsersListComponent},
      {path: 'create', component: UsersCreateComponent},
      {path: 'edit/:id', component: UsersEditComponent},
      {path: '', redirectTo: 'list', pathMatch: 'full'}
    ]
  },
  {path: 'claims', component: ClaimsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
