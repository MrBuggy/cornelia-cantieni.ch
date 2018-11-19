import { Component, ModuleWithComponentFactories } from "@angular/core";
import { Route } from "./Route";
import { ButtonViewComponent } from "../views/components/button-view/button-view.component";

@Component({
    selector: "page-component-library",
    templateUrl: "./page-component-library.component.html",
    styleUrls: ["./page-component-library.component.scss"]
})

/**
 * PageComponentLibrary
 * @author Danijel Malinovic
 */
export class PageComponentLibraryComponent {
    componentsList: Array<Route> = [
        new Route("Button", "button-view")
    ];

    pagesList: Array<Route> = [
        new Route("Page-Home", "page-home")
    ];
}
