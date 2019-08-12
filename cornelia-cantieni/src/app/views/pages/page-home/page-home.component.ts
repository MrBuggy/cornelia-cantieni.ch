import { Component, HostListener } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html'
})
export class PageHomeComponent {

  private lastPosition: number = 0;

  get isImageHeaderVisible() {
    return this.headerService.isImageHeaderVisible;
  }

  @HostListener('window:mousewheel', ['$event']) onscroll(event: MouseWheelEvent) {
    let windowOffset = window.pageYOffset;

    if (this.lastPosition > windowOffset) {
      this.headerService.isImageHeaderVisible = true;
    } else if (this.lastPosition < windowOffset) {
      this.headerService.isImageHeaderVisible = false;
    }

    this.lastPosition = windowOffset;
  }

  constructor(private headerService: HeaderService) { }

}