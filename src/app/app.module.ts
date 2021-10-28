import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {ComponentsModule} from "./components/components.module";
import {FacebookLoginProvider, SocialLoginModule} from "angularx-social-login";
import {PagesModule} from "./pages/pages.module";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentsModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autologin: false,
      providers: [
        {
          id:FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider(environment.facebookId)
        }
      ]
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
