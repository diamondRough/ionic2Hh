import { PersonalNamePage } from './../personal-name/personal-name';


import { Component } from '@angular/core';
import { Platform, NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
import { ModalPage } from './modal-page';




/*
  Generated class for the PersonalInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-personal-info',
  templateUrl: 'personal-info.html'
})
export class PersonalInfoPage {
    [name: string]: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, public platform: Platform, public actionsheetCtrl: ActionSheetController) {

  }

  ionViewDidLoad() {

  }
  openModal() {
    let profileModal = this.modalCtrl.create(PersonalNamePage);
    profileModal.present();
  }

   openSexMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '男',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('性别 男');
          }
        },
        {
          text: '女',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('性别 女');
          }
        },
        {
          text: '取消',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('取 消');
          }
        }
      ]
    });
    actionSheet.present();
    
  }


}
