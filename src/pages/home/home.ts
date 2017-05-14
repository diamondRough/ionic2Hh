import { UserInfoPage } from './../user-info/user-info';
import { MarkCoursesPage } from './../mark-courses/mark-courses';
import { PersonalInfoPage } from "./../personal/personal-info/personal-info";
import { Course } from './../../models/course';
import { Page } from './../Page';
import { AboutPage } from './../other/about/about';
import { StatusBar } from '@ionic-native/status-bar';
import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage extends Page implements OnInit {

  @ViewChild("MenuController") menuCtrl: MenuController;

  constructor(public navCtrl: NavController, private statusBar: StatusBar) {
    super();
  }
  ionViewWillEnter() {
    this.statusBar.styleLightContent();
  }
  private courses: Array<Course> = [{ teacher: '王老师', name: '解圆形' }, { teacher: '张老师', name: '解三角形' }, { teacher: '李老师', name: '解正方形' }];
  ngOnInit() {
    //获取课程列表
  }
  //跳转个人中心
  goToPersonalInfo() {
    this.pagePush(PersonalInfoPage);
  }
  goToAbout() {
    // alert(256);
    this.pagePush(AboutPage);
  }
  goToMarkCourse() {
    this.pagePush(MarkCoursesPage);
  }
  goToUserInfo(){
    this.pagePush(UserInfoPage);
  }
  pagePush(page) {
    this.statusBar.styleDefault();
    this.navCtrl.push(page, {}, {}, () => {
      this.menuCtrl.close();
    });
  }
}