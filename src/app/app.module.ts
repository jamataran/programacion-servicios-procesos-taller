import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {ComponentsModule} from "./components/components.module";
import {FacebookLoginProvider, SocialLoginModule} from "angularx-social-login";

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
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autologin: false,
      providers: [
        {
          id:FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('id') //FIXME: Add ID
        }
      ]
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
