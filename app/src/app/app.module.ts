import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {SpinnerComponent} from './common-components/spinner/spinner.component';
import {CommonComponentsModule} from './common-components/common-components.module';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
    SpinnerComponent
  ],
  imports: [
    CommonComponentsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
