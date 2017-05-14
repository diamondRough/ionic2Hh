import { Component } from '@angular/core';
import { NavController, NavParams,ViewController  } from 'ionic-angular';

/*
  Generated class for the PersonalName page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-personal-name',
  templateUrl: 'personal-name.html'
})
export class PersonalNamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalNamePage');
  }
  close(){
    this.viewCtrl.dismiss();
  }
}
