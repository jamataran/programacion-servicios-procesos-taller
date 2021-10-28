import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {SocialAuthService} from "angularx-social-login";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy, OnInit {

  mobileQuery: MediaQueryList;

  // https://fonts.google.com/icons?selected=Material+Icons
  elementosNavegacion = [{
    texto: 'Home',
    icono: 'home',
    ruta: '/home'
  }, {
    texto: 'Login',
    icono: 'login',
    ruta: '/login'
  }];

  noLogin = [{
    texto: 'Home',
    icono: 'home',
    ruta: '/home'
  }, {
    texto: 'Login',
    icono: 'login',
    ruta: '/login'
  }];

  login = [{
    texto: 'Home',
    icono: 'home',
    ruta: '/home'
  }, {
    texto: 'Juego',
    icono: 'videogame_asset',
    ruta: '/juego'
  }];

  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private media: MediaMatcher,
              private socialAuthService: SocialAuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      if (user != null) {
        this.elementosNavegacion = this.login;
      } else {
        this.elementosNavegacion = this.noLogin;
      }
    });
  }

}
