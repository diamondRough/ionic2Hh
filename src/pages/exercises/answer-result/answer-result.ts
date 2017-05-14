import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

/*
  Generated class for the AnswerResult page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-answer-result',
  templateUrl: 'answer-result.html'
})
export class AnswerResultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnswerResultPage');
  }

}
