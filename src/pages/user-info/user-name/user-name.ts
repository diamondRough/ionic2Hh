import { Component, Input } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'user-name-modal',
    templateUrl: 'user-name.html'
})
export class UserNameModal {

    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
        this.username = navParams.get('username') || '';
    }
    username: string;
    close() {
        this.viewCtrl.dismiss();
    }
    save() {
        this.viewCtrl.dismiss({ username: this.username });
    }
}
