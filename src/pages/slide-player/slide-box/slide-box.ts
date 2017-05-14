import { Component, OnInit, ViewChild, Input } from '@angular/core';
import SlideLoader from '../../../vendor/slide-loader.js';
@Component({
    selector: 'slide-box',
    template: `<div class="ks-slide" [ngStyle]="{'transform': 'scale(' + scale + ')'}" #con></div>`,
})
export class SlideBox implements OnInit {
    @Input() slideUrl: string;
    @Input() scale: number;
    @ViewChild('con') con: any;
    ngOnInit() {
        SlideLoader.renderSlide(this.slideUrl, this.con.nativeElement);
    }
}