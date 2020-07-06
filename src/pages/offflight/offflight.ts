import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { App  } from 'ionic-angular';
import { CalflightPage } from '../calflight/calflight';
import { PayflightPage } from '../payflight/payflight';

@Component({
  selector: 'page-offflight',
  templateUrl: 'offflight.html',
})
export class OffflightPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffflightPage');
  }
  gototabs(){
    var nav = this.app.getRootNav();
    nav.setRoot(CalflightPage);
  }

  gotopay(){
    var nav = this.app.getRootNav();
    nav.setRoot(PayflightPage);
  }

}
