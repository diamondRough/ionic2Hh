import { PracticePage } from './../../practice/practice';
import { SlidePlayerPage } from './../../slide-player/slide-player';
import { AnswerResultPage } from './../exercises/answer-result/answer-result';

import { NavController, ModalController } from 'ionic-angular';
import { Course } from './../../../models/course';
import { Component, Input } from '@angular/core';
@Component({
  moduleId: 'course-card',
  selector: 'course-card',
  templateUrl: 'course-card.html',
})
export class CourseCard {
  constructor(private navCtrl: NavController,private modalCtrl: ModalController) {
  }
  @Input() course: Course;
  play() {
    this.navCtrl.push(SlidePlayerPage);
  }
  goToPractice(){
    //this.navCtrl.push(PracticePage);
    this.modalCtrl.create(PracticePage)
        .present();
  }
  goToExercisises() {
    alert(68);
    // this.navCtrl.push(AnswerResultPage);
  }
}