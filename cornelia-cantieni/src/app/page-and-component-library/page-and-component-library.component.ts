import { Component, OnInit } from '@angular/core';
import { ccComponent } from './ccComponent';

@Component({
  selector: 'page-and-component-library',
  templateUrl: './page-and-component-library.component.html',
  styleUrls: ['./page-and-component-library.component.scss']
})

export class PageAndComponentLibraryComponent implements OnInit {

  pagesList: Array<ccComponent> = new Array<ccComponent>();
  componentsList: Array<ccComponent> = new Array<ccComponent>();

  constructor() { }

  ngOnInit() {
  }

}
