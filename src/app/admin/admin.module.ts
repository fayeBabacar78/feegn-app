import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {PagesComponent} from './pages/pages.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AppHeaderComponent} from './layouts/header/header.component';
import {AdminMenuComponent} from './layouts/admin-menu/admin-menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {ChartistModule} from 'ng-chartist';
import {LyIconModule} from '@alyle/ui/icon';
import {LyImageCropperModule} from '@alyle/ui/image-cropper';
import {LySliderModule} from '@alyle/ui/slider';
import {FormsModule} from '@angular/forms';
import {LyDialogModule} from '@alyle/ui/dialog';
import {LyButtonModule} from '@alyle/ui/button';
import {FlexModule} from '@angular/flex-layout';
import {CropperDialogComponent} from './layouts/cropper/cropper-dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {SharedModule} from '../shared/shared.module';
import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import {CarouselModule} from 'primeng/carousel';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import {MultiSelectModule} from 'primeng/multiselect';
import {DataViewModule} from 'primeng/dataview';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputNumberModule} from 'primeng/inputnumber';
import {CheckboxModule} from 'primeng/checkbox';
import {StepsModule} from 'primeng/steps';
import {PaginatorModule} from 'primeng/paginator';
import {CategorieCreateComponent} from './pages/categorie/categorie-create/categorie-create.component';
import {CategorieEditComponent} from './pages/categorie/categorie-edit/categorie-edit.component';
import {CategorieFormComponent} from './pages/categorie/categorie-form/categorie-form.component';
import {CategorieListComponent} from './pages/categorie/categorie-list/categorie-list.component';
import {CategorieComponent} from './pages/categorie/categorie.component';
import {CategorieDetailsComponent} from './pages/categorie/categorie-details/categorie-details.component';
import {LyToolbarModule} from '@alyle/ui/toolbar';
import {LyGridModule} from '@alyle/ui/grid';
import {LyTypographyModule} from '@alyle/ui/typography';
import {RippleModule} from 'primeng/ripple';
import {FileUploadModule} from 'primeng/fileupload';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticlesListComponent } from './pages/articles/articles-list/articles-list.component';
import { ArticlesCreateComponent } from './pages/articles/articles-create/articles-create.component';
import { ArticlesEditComponent } from './pages/articles/articles-edit/articles-edit.component';
import { ArticlesDetailsComponent } from './pages/articles/articles-details/articles-details.component';
import { ClaimsListComponent } from './pages/claims/claims-list/claims-list.component';
import { AgenceListComponent } from './pages/agences/agence-list/agence-list.component';
import { AgenceCreateComponent } from './pages/agences/agence-create/agence-create.component';
import { AgencesComponent } from './pages/agences/agences.component';
import { AgenceEditComponent } from './pages/agences/agence-edit/agence-edit.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersCreateComponent } from './pages/users/users-create/users-create.component';
import { UsersEditComponent } from './pages/users/users-edit/users-edit.component';
import { LostComponent } from './pages/articles/lost/lost.component';

@NgModule({
  declarations: [
    PagesComponent,
    AppHeaderComponent,
    AdminMenuComponent,
    DashboardComponent,
    CropperDialogComponent,
    CategorieListComponent,
    CategorieCreateComponent,
    CategorieFormComponent,
    CategorieEditComponent,
    CategorieDetailsComponent,
    CategorieComponent,
    ArticlesComponent,
    ArticlesListComponent,
    ArticlesCreateComponent,
    ArticlesEditComponent,
    ArticlesDetailsComponent,
    ClaimsListComponent,
    AgenceListComponent,
    AgenceCreateComponent,
    AgencesComponent,
    AgenceEditComponent,
    UsersListComponent,
    UsersComponent,
    UsersCreateComponent,
    UsersEditComponent,
    LostComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    FlexModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    ChartistModule,
    FieldsetModule,
    ButtonModule,
    ToolbarModule,
    TabViewModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    LyIconModule,
    LyImageCropperModule,
    LySliderModule,
    LyDialogModule,
    LyButtonModule,
    FormsModule,
    MatMenuModule,
    MatListModule,
    CheckboxModule,
    MatCheckboxModule,
    NgScrollbarModule,
    MatSelectModule,
    MultiSelectModule,
    DropdownModule,
    MatTooltipModule,
    SharedModule,
    SharedModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    CardModule,
    CarouselModule,
    StepsModule,
    PaginatorModule,
    TableModule,
    TabMenuModule,
    LyToolbarModule,
    LyGridModule,
    LyTypographyModule,
    RippleModule,
    FileUploadModule,
    InputSwitchModule
  ]
})
export class AdminModule {
}
