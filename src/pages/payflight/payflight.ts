import { Component } from '@angular/core';
import { NavController, NavParams, App, AlertController } from 'ionic-angular';
import { OffflightPage } from '../offflight/offflight';

@Component({
  selector: 'page-payflight',
  templateUrl: 'payflight.html',
})
export class PayflightPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app:App, public alertController:AlertController) {
  }
  
  // async presentAlert() {
  //   const alert = await this.alertController.create({
      
  //     subHeader: 'Subtitle',
  //     message: 'This is an alert message.',
  //     buttons: ['OK']
  //   });

  //   await alert.present();
  // }
  presentAlert(title,message) {
    let alert = this.alertController.create({
      title: title,
      message: message,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayflightPage');
  }

  gototabs(){
    var nav = this.app.getRootNav();
    nav.setRoot(OffflightPage);
  }

}
