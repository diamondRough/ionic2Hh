
// import { AnswerResultPage } from './../pages/exercises/answer-result/answer-result';
// import { AnswerErrorPage } from './../pages/exercises/answer-error/answer-error';

import { UserNameModal } from './../pages/user-info/user-name/user-name';
import { UserInfoPage } from './../pages/user-info/user-info';
import { PracticePage } from './../pages/practice/practice';
import { SlideBox } from './../pages/slide-player/slide-box/slide-box';
import { KlPlayer } from './../pages/slide-player/kl-player/kl-player';
import { SlidePlayerPage } from './../pages/slide-player/slide-player';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { CourseCard } from '../pages/home/course-card/course-card';
import { AboutPage } from './../pages/other/about/about';

import { AccountInfoPage } from './../pages/account/account-info/account-info';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { App } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { HTTP } from '@ionic-native/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AccountService } from "../services/account";
import { HomePage } from "../pages/home/home";
import { Request } from "../services/request";
import { LoginPage } from "../pages/account/login/login";

import { PersonalInfoPage } from "../pages/personal/personal-info/personal-info";
import { PersonalNamePage } from './../pages/personal/personal-name/personal-name';
import { EditProfilePage } from "../pages/personal/edit-profile/edit-profile";
import { MarkCoursewarePage } from "../pages/courseware/mark-courseware/mark-courseware";
import { MarkCoursesDetailPage } from "../pages/mark-courses/mark-courses-detail/mark-courses-detail";
import { ListEmpty } from "../pages/list-empty/list-empty";
import { MarkCoursesPage } from "../pages/mark-courses/mark-courses";



@NgModule({

    declarations: [

        App, HomePage, LoginPage, AccountInfoPage, CourseCard, AboutPage, PracticePage,PersonalInfoPage,
        SlidePlayerPage, KlPlayer, SlideBox, MarkCoursesPage, MarkCoursesDetailPage, ListEmpty, UserNameModal,UserInfoPage 

    ],
    imports: [
        IonicModule.forRoot(App, {
            backButtonText: '',
            backButtonIcon: 'kl-back-button',
            mode: "ios"
        }),
        IonicStorageModule.forRoot(App)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        App, HomePage, LoginPage, AccountInfoPage, CourseCard, AboutPage, PracticePage,PersonalInfoPage,
        SlidePlayerPage, KlPlayer, SlideBox, MarkCoursesPage, MarkCoursesDetailPage, ListEmpty, UserInfoPage, UserNameModal
    ],
    providers: [
        StatusBar, SplashScreen, IonicStorageModule, AccountService, HTTP, Request, ScreenOrientation, InAppBrowser,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
