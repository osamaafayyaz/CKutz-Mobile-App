import { Component } from '@angular/core';
import { NavController, NavParams, } from 'ionic-angular';
import { App  } from 'ionic-angular';
import { HomePage } from '../home/home';
import { OffflightPage } from '../offflight/offflight';


@Component({
  selector: 'page-calflight',
  templateUrl: 'calflight.html',
})
export class CalflightPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app:App) {
  }

  back(){
    var nav = this.app.getRootNav();
    nav.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalflightPage');
  }

  gotooffset(){
    var nav = this.app.getRootNav();
    nav.setRoot(OffflightPage);
  }

  gototabs(){
    var nav = this.app.getRootNav();
    nav.setRoot(HomePage);
  }

}
