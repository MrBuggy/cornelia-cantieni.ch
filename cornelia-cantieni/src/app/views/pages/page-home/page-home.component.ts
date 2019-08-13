import { Component, HostListener, AfterViewInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'page-home',
    templateUrl: './page-home.component.html',
    animations: [
        trigger('toggleAnimation', [
            state('closed', style({
                transform: 'translateY(-{{height}}px)'
            }), { params: {height: 0}}),
            state('open', style({
                transform: 'translateY(0%)'
            })),
            transition('closed <=> open', animate('0.2s'))
        ])
    ]
})
export class PageHomeComponent implements AfterViewInit {

    private isScrolling: boolean = false;
    private lastPosition: number = 0;
    height: number = 0;

    get isImageHeaderVisible() {
        return this.headerService.isImageHeaderVisible;
    }

    @HostListener('window:mousewheel', ['$event']) onscroll(event: MouseWheelEvent) {
        this.isScrolling = true;
    }

    constructor(private headerService: HeaderService) {
        setInterval(() => {
            if (this.isScrolling) {
                let windowOffset = window.pageYOffset;

                if (this.lastPosition > windowOffset) {
                    this.headerService.isImageHeaderVisible = true;
                } else if (this.lastPosition < windowOffset) {
                    this.headerService.isImageHeaderVisible = false;
                }

                this.lastPosition = windowOffset;
                this.isScrolling = false;
            }
        }, 500);
    }

    ngAfterViewInit() {
        this.height = this.headerService.imageHeaderHeight;
    }

}
