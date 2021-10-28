import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from "@angular/material/card";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class PagesModule { }
