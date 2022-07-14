import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEditorModule } from 'ngx-editor';
import { QuillModule } from 'ngx-quill';

import { AppComponent } from './app.component';
import { HomepageComponent } from './HomePage/homepage/homepage.component';
import { TopBannerComponent } from './TopBanner/top-banner/top-banner.component';
import { MiddleBannerComponent } from './middleBanner/middle-banner/middle-banner.component';
import { LowerBannerComponent } from './lowerBanner/lower-banner/lower-banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { routingArr } from './app.routing';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { UserRolesComponent } from './user-roles/user-roles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopBannerComponent,
    MiddleBannerComponent,
    LowerBannerComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    
    PageNotFoundComponent,
         LoginPageComponent,
         MainNavComponent,
         UserRolesComponent,
         
  ],
  imports: [
    BrowserModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
    HttpClientModule,
    routingArr
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
