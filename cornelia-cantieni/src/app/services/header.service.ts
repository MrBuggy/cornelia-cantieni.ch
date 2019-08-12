import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _isImageHeaderVisible: boolean = true;

  get isImageHeaderVisible() {
    return this._isImageHeaderVisible;
  }

  set isImageHeaderVisible(value: boolean) {
    this._isImageHeaderVisible = this.checkForMobilePhone() ? true : value;
  }

  private checkForMobilePhone(): boolean {
    return (/iphone|ipod|android|ie|blackberry|fennec/).test(navigator.userAgent.toLowerCase())
  }

  constructor() { }
}
