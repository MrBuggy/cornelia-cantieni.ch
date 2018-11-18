import { Component, ModuleWithComponentFactories } from '@angular/core';
import { Route } from './Route';

@Component({
  selector: 'page-component-library',
  templateUrl: './page-component-library.component.html',
  styleUrls: ['./page-component-library.component.scss']
})

/**
 * PageComponentLibrary
 * @author Danijel Malinovic
 */

export class PageComponentLibraryComponent {

  componentsList: Array<Route> = [];

  pagesList: Array<Route> = [];
}
