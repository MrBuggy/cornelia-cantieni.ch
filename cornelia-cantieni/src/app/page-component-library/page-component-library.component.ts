import { Component, ModuleWithComponentFactories } from '@angular/core';
import { TestCompComponent } from '../test-comp/test-comp.component';
import { Routes } from '@angular/router';
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

  pagesList: Array<Route> = [
    new Route(
      'TestComponent',
      'testcomp'
    )
  ];
}
