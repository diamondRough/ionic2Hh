import { UserNameModal } from './user-name/user-name';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
/*
  Generated class for the UserInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html'
})
export class UserInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private actionSheetCtrl: ActionSheetController) { }

  user: { username: string, sex: number, phone: number, classNum: number } = {
    username: '隔壁班小明',
    sex: 1,
    phone: 18899228833,
    classNum: 7766228
  };
  sexSheetOption = {
    buttons: [
      {
        text: '男',
        handler: () => {
          this.user.sex = 1;
        }
      },     
      {
        text: '女',
        handler: () => {
          this.user.sex = 2;
        }
      },
      {
        text: '取消',
        role: 'cancel'
      }
    ]
  }
  selectSex() {
    let sexSheet = this.actionSheetCtrl.create(this.sexSheetOption);
    sexSheet.present();
  }
  openUserNameModal() {
    let userNameModal = this.modalCtrl.create(UserNameModal, { username: this.user.username });
    userNameModal.onDidDismiss((data) => {
      if (data && data.username) {
        this.user.username = data.username;
      }
    });
    userNameModal.present();
  }
}
