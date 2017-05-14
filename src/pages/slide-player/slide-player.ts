import { StatusBar } from '@ionic-native/status-bar';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import AlloyFinger from 'alloyfinger/alloy_finger';

/*
  Generated class for the SlidePlayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-slide-player',
  templateUrl: 'slide-player.html'
})
export class SlidePlayerPage {
  @Input() slideTitle: string;
  @ViewChild('con') con: ElementRef
  showStatusBar: boolean = false;
  slideUrlList = [
    'http://static.beikebao.net/slide/filmstrips/a8ef54c633747bca45961ed2c589dd038ee86bf2',
    'http://static.beikebao.net/slide/filmstrips/37fce2adae9e9d3f2b022ec02112d2ef3594e21d',
    'http://static.beikebao.net/slide/filmstrips/58c0e25ffa705fe003ace25e5caf6f0254e76918',
    'http://static.beikebao.net/slide/filmstrips/a8ef54c633747bca45961ed2c589dd038ee86bf2',
    'http://static.beikebao.net/slide/filmstrips/e9297ccb6a0c34c6121f9017d3a4976b64d4a4b5',
    'http://static.beikebao.net/slide/filmstrips/3218d197b16dd6723fdec460699b68f6adfbdc80',
    'http://static.beikebao.net/slide/filmstrips/e592d0504529067b8391838f291d31309df62182',
    'http://static.beikebao.net/slide/filmstrips/cebbefe84a807f05774e751b8a155e518771a715',
    'http://static.beikebao.net/slide/filmstrips/ac22d7b7e69e421532bb23d17fbe573feb6932bd',
    'http://static.beikebao.net/slide/filmstrips/47896869f67c52c7f2f47311ec89796d3b198da8',
    'http://static.beikebao.net/slide/filmstrips/55fe44c4048ac51daeb0ef1923fd5097279d1cfe',
    'http://static.beikebao.net/slide/filmstrips/12a60431198b9138601c3ed83c7e7e0c0bad1165',
    'http://static.beikebao.net/slide/filmstrips/606d47728db82be86b26b5763dafb4f193551d79',
    'http://static.beikebao.net/slide/filmstrips/1a14516b507b4819bcb3911cd9eee0517440c771',
    'http://static.beikebao.net/slide/filmstrips/98945962318bf9b0d8b6f903755f77a8d35a0903',
    'http://static.beikebao.net/slide/filmstrips/5b8c84c32a8359e7d84f12370254b958b5458828',
    'http://static.beikebao.net/slide/filmstrips/68a3f019e406be640380be931f0ade5a7530c5a9',
    'http://static.beikebao.net/slide/filmstrips/a830956f929ea9acd982887b703e7a7b44b3e16a',
    'http://static.beikebao.net/slide/filmstrips/f623bff99d01d666fe13037d5d69f5732ba20d38',
    'http://static.beikebao.net/slide/filmstrips/e056982d148d47a447f4f37bd4425c07d23afe66',
    'http://static.beikebao.net/slide/filmstrips/114ca6a9c473a1730fb7206783f2264c51f8c797',
    'http://static.beikebao.net/slide/filmstrips/145d6ee3c1a41ec6359b51f60586321a11145a54',
    'http://static.beikebao.net/slide/filmstrips/5ac19454c53b091628fa2fe0dbb8cf248448e486',
    'http://static.beikebao.net/slide/filmstrips/be2adc1a9f6d0ae2a9d776527e585f4eb917593c',
    'http://static.beikebao.net/slide/filmstrips/d2285b0e702be15248b648a2c2a61e83ebbfd8ac',
    'http://static.beikebao.net/slide/filmstrips/c1ff4eca15a589811381317398fc7b2e0aad506e',
    'http://static.beikebao.net/slide/filmstrips/39f7907991ea0e57ffa9ef730f710ddf003c89f7',
    'http://static.beikebao.net/slide/filmstrips/464b8367cac41d0b4512f4d18a4afda7eec68260',
    'http://static.beikebao.net/slide/filmstrips/c3b5fe3bcfcd93d018ba6f7a6ef83770a2796235',
    'http://static.beikebao.net/slide/filmstrips/68a598cab24e9f54c72c6121b80a43d08a01839a',
    'http://static.beikebao.net/slide/filmstrips/8e6cff45820a5cbf9b7e1f3f0191efabf751ab72',
    'http://static.beikebao.net/slide/filmstrips/d15e4e3c97ae0a130d4610746bf43ac8e01371b5',
    'http://static.beikebao.net/slide/filmstrips/735ce06f6ca37000ab013c92327dac419f751e5b',
    'http://static.beikebao.net/slide/filmstrips/982e8e4f929a9d60b69bd56986aea3befff0a90a',
    'http://static.beikebao.net/slide/filmstrips/852acc9f8af4a188f96da3d293775a7114a42d42',
    'http://static.beikebao.net/slide/filmstrips/04d56d33ddddb31fff8b3e77cc270a3eaee666ba',
    'http://static.beikebao.net/slide/filmstrips/b4744277f5cf97cf99efe011c7b638b4a3d9762b',
    'http://static.beikebao.net/slide/filmstrips/f2aa825085a6dd1be3afe63d70d38a25084cf062',
    'http://static.beikebao.net/slide/filmstrips/418af51842cf73ccdf4400fd9bf8fe3df8d5dbd5',
    'http://static.beikebao.net/slide/filmstrips/740674a42dc516563bdc73a33e2083a6101bdb67',
    'http://static.beikebao.net/slide/filmstrips/bca27051725ed621a401eeb43979eab7c5638bb5',
    'http://static.beikebao.net/slide/filmstrips/d0bafc045d39960b62df844e1899fb39c2da624b',
    'http://static.beikebao.net/slide/filmstrips/84a469cc8c2cb4fca381a2ac7a2de5af30fda49e',
    'http://static.beikebao.net/slide/filmstrips/030019df9adf2b457576efbb9f17463bccd4df01',
    'http://static.beikebao.net/slide/filmstrips/6f2c80953b34f2e89845ca40833823ca50f930dc'];
  didEntry: boolean = false;
  screenHeight: number = 0;
  screenWidth: number = 0;
  contentStyle = {};
  currentIndex: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private statusBar: StatusBar) { }
  toggleStatusBar() {
    this.showStatusBar = !this.showStatusBar;
  }
  back() {
    this.didEntry = false;
    this.contentStyle = {};
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    this.screenHeight = screen.height;
    this.screenWidth = screen.width;
    this.statusBar.hide();
    console.log('ionViewDidLoad');
  }
  ionViewDidEnter() {
    this.contentStyle = {
      'width': this.screenHeight + 'px',
      'height': this.screenWidth + 'px',
      'margin-left': -(this.screenHeight / 2) + 'px',
      'margin-top': -(this.screenWidth / 2) + 'px',
      'position': 'absolute',
      'left': '50%',
      'top': '50%',
      'transform': 'rotate(90deg)'
    };
    this.didEntry = true;
    setTimeout(() => {
      new AlloyFinger(this.con.nativeElement, {
        singleTap: () => {
          this.toggleStatusBar();
        }
      })
    });
  }
  ionViewWillLeave() {
    this.statusBar.show();
  }
  handleSlideChange(evt) {
    this.currentIndex = evt.current;
  }
}
