import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalflightPage } from '../pages/calflight/calflight';
import { OffflightPage } from '../pages/offflight/offflight';
import { PayflightPage } from '../pages/payflight/payflight';
import { AboutPage } from '../pages/about/about';
import { LandingPage } from '../pages/landing/landing';
import { InvitePage } from '../pages/invite/invite';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalflightPage,
    OffflightPage,
    PayflightPage,
    AboutPage,
    LandingPage,
    InvitePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalflightPage,
    OffflightPage,
    PayflightPage,
    AboutPage,
    LandingPage,
    InvitePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
