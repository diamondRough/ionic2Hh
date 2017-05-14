import { UserInfoPage } from './../pages/user-info/user-info';
import { PracticePage } from './../pages/practice/practice';
import { MarkCoursesDetailPage } from './../pages/mark-courses/mark-courses-detail/mark-courses-detail';
import { MarkCoursesPage } from './../pages/mark-courses/mark-courses';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { SlidePlayerPage } from './../pages/slide-player/slide-player';
import { LoginPage } from './../pages/account/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AccountService } from "../services/account";
import { PersonalInfoPage } from "../pages/personal/personal-info/personal-info";
import { EditProfilePage } from "../pages/personal/edit-profile/edit-profile";
import { MarkCoursewarePage } from "../pages/courseware/mark-courseware/mark-courseware";
import { AnswerResultPage } from "../pages/exercises/answer-result/answer-result";
import { AnswerErrorPage } from "../pages/exercises/answer-error/answer-error";


@Component({
  templateUrl: 'app.html'
})
export class App {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, accountService: AccountService,screen:ScreenOrientation) {
    platform.ready().then(() => {
      this.rootPage = HomePage;
      /*accountService.current().then(data=> {
        // 已登录，直接进入Home
        this.rootPage = HomePage;
      }).catch(error => {
        // 如果未登录，直接把rootPage设置为登录页
        // this.rootPage = LoginPage;
        // this.rootPage = PersonalInfoPage;
        // this.rootPage = MarkCoursewarePage;
        // this.rootPage = MarkCoursesPage;
        // this.rootPage = MarkCoursesDetailPage;
      });*/

      statusBar.styleDefault();
      // screen.lock(screen.ORIENTATIONS.PORTRAIT);
      splashScreen.hide();
      statusBar.overlaysWebView(true);
    });
  }

}
