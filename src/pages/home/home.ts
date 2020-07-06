import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App  } from 'ionic-angular';
import { CalflightPage } from '../calflight/calflight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController,public app:App) {

  }

  gotocalflight()
  {
    var nav = this.app.getRootNav();
    nav.setRoot(CalflightPage);
   }

}
