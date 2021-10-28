import { Component, OnInit } from '@angular/core';
import {FacebookLoginProvider, SocialAuthService} from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
  }

  facebookSignin(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

}
