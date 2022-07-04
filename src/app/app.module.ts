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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopBannerComponent,
    MiddleBannerComponent,
    LowerBannerComponent
  ],
  imports: [
    BrowserModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
