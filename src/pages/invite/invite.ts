import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';



@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitePage');
  }

  showActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Invite',
      cssClass: "padding",
      buttons: [
        {
          text: 'Whatsapp',
          // handler: () => {
          //   this.shareWhatsApp();
          // }
        },
        {
          text: 'Twitter',
          // handler: () => {
          //   this.shareTwitter();
          // }
        },
        {
          text: 'Email',
          // handler: () => {
          //   this.shareEmail();
          // }
        },
        {
          text: 'SMS',
          // handler: () => {
          //   this.shareSMS();
          // }
        },
        {
          text: 'Facebook',
          //   handler: () => {
          //     this.shareFacebook();
          //   }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    actionSheet.present();
  }


}
