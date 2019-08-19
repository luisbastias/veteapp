import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Mis mascotas',
      url: '/list',
      icon:'paw'
    },
    {
      title: 'Cupones',
      url: '/cupones',
      icon: 'ios-card'
    },
    {
      title: 'Mis Cupones',
      url: '/miscupones',
      icon: 'ios-card'
    },
    {
      title: 'Consejos',
      url: '/miscupones',
      icon: 'ios-pulse'
    },
    {
      title: 'Ubicacion',
      url: '/ubicacion',
      icon: 'ios-navigate'
    },
    {
      title: 'Sociales',
      url: '/miscupones',
      icon: 'logo-facebook'
    },
    {
      title: 'Salir',
      url: '/salir',
      icon: 'md-exit'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
