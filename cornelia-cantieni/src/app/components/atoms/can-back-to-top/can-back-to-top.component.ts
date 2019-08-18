import { Component, HostListener } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
    selector: 'can-back-to-top',
    templateUrl: './can-back-to-top.component.html',
    styleUrls: ['./can-back-to-top.component.scss']
})
export class CanBackToTopComponent {

    @HostListener('window:scroll', ['$event']) onscroll() {
        if (window.pageYOffset > 800) {
            this.isButtonVisible = true
        } else  {
            this.isButtonVisible = false;
        }
    }

    isButtonVisible: boolean = false;

    constructor(private headerService: HeaderService) { }

    scrollToTop() {
        this.headerService.isImageHeaderVisible = true;
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

}
