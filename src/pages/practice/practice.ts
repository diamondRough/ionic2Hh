import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Practice page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-practice',
  templateUrl: 'practice.html'
})
export class PracticePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewChild: ViewController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PracticePage');
  }
  close() {
    this.viewChild.dismiss();
  }
}
