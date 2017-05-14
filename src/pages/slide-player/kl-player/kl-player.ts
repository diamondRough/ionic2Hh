import { Component, OnInit, ViewChild, Output, EventEmitter,Input,ElementRef } from '@angular/core';
import { Slides } from 'ionic-angular';
import AlloyFinger from '../../../../node_modules/alloyfinger/alloy_finger';
const baseHeight = 540;
const baseWight = 960;
@Component({
    moduleId: 'kl-player',
    selector: 'kl-player',
    templateUrl: 'kl-player.html',
})
export class KlPlayer implements OnInit {
    @ViewChild(Slides) slides: Slides;
    @ViewChild('slideCover') slideCover:ElementRef;
    @Input() slideUrlList:Array<any>;
    slideScale: number = 1;
    slideNow: number = 0;
    constructor() { }
    ngOnInit() {
        let screenWight = screen.height;
        let screenHeight = screen.width;
        let scaleW = screenWight / baseWight;
        let scaleH = screenHeight / baseHeight;
        this.slideScale = scaleW > scaleH ? scaleH : scaleW;

        new AlloyFinger(this.slideCover.nativeElement, {
            swipe: (evt) => {
                switch (evt.direction) {
                    case 'Down':
                        this.slides.slidePrev();
                        break;
                    case 'Up':
                        this.slides.slideNext();
                        break;
                    default:
                        break;
                }
            }
        })
    }
    @Output() slideChange = new EventEmitter();
    onSlideChange() {
        this.slideNow = this.slides.getActiveIndex();
        this.slideChange.emit({
            current: this.slides.getActiveIndex(),
            isLastPage: this.slides.isEnd()
        });
    }
}