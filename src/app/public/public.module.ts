import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicRoutingModule} from './public-routing.module';
import {HomeComponent} from './homes/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeBannerComponent } from './homes/home-banner/home-banner.component';
import { HowItWorksComponent } from './homes/how-it-works/how-it-works.component';
import { RecentPostsComponent } from './homes/recent-posts/recent-posts.component';
import { TheySayComponent } from './homes/they-say/they-say.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CommonComponent } from './common/common.component';
import { ContactComponent } from './contact/contact.component';
import { ByCategorieComponent } from './by-categorie/by-categorie.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FormsModule} from '@angular/forms';
import { MyClaimsComponent } from './my-claims/my-claims.component';
import {LyDialogModule} from '@alyle/ui/dialog';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HomeBannerComponent,
    HowItWorksComponent,
    RecentPostsComponent,
    TheySayComponent,
    FooterComponent,
    CommonComponent,
    ContactComponent,
    ByCategorieComponent,
    MyClaimsComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CardModule,
    ButtonModule,
    LyDialogModule,
    DialogModule,
    InputTextareaModule,
    FormsModule
  ],
  bootstrap: []
})
export class PublicModule {
}
