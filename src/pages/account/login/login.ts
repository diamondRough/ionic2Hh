import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from './../../home/home';
import { NavController, Platform } from 'ionic-angular';
import { AccountInfoPage } from './../account-info/account-info';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  phoneNumber: Number = null;
  vcodeLock: boolean = false;
  countDown: number = 60;
  intervalID: number = null;
  constructor(public navCtrl: NavController, private statusBar: StatusBar, private platform: Platform) { }
  ngOnInit() {
    // this.statusBar.styleLightContent();
  }
  blurActiveInput() {
    if (!this.platform.is("iOS")) return;
  }
  //获取验证码
  getVCode() {
    if (this.vcodeLock) {
      return;
    }
    this.vcodeLock = true;
    this.countDown = 60;
    this.intervalID = setInterval(() => {
      this.countDown--;
      if (this.countDown === 0) {
        clearInterval(this.intervalID);
        this.vcodeLock = false;
      }
    }, 1000);
  }
  login() {
    this.navCtrl.setRoot(HomePage);
  }
}