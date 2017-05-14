import { MarkCoursesDetailPage } from './mark-courses-detail/mark-courses-detail';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the MarkCourses page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mark-courses',
  templateUrl: 'mark-courses.html'
})
export class MarkCoursesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  markCourseList:Array<any> = [{},{},{}];
  ionViewDidLoad() {
    console.log('ionViewDidLoad MarkCoursesPage');
  }
  goToDetail(){
    this.navCtrl.push(MarkCoursesDetailPage);
  }
}
