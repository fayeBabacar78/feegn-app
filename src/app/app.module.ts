import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ToastrModule} from 'ngx-toastr';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedModule} from './shared/shared.module';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LY_THEME, LY_THEME_NAME, LyHammerGestureConfig, LyTheme2, StyleRenderer} from '@alyle/ui';
import {MinimaDark, MinimaLight} from '@alyle/ui/themes/minima';
import {SpinnerComponent} from './shared/spinner.component';
import {AbstractHttpService} from './admin/models/http.model';
import {HttpRequestService} from './shared/services/http/http-request.service';
import {NgxSpinnerModule} from 'ngx-spinner';
import {HttpInterceptorService} from './shared/services/http/http-interceptor.service';

@NgModule({
  declarations: [
    SpinnerComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
    HttpClientModule,
    FlexLayoutModule,
    SharedModule,

    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: AbstractHttpService, useClass: HttpRequestService},
    [LyTheme2],
    [StyleRenderer],
    // Theme that will be applied to this module
    {provide: LY_THEME_NAME, useValue: 'minima-light'},
    {provide: LY_THEME, useClass: MinimaLight, multi: true}, // name: `minima-light`
    {provide: LY_THEME, useClass: MinimaDark, multi: true}, // name: `minima-dark`
    // Gestures
    {provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig},
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
