import { Component, ModuleWithComponentFactories } from "@angular/core";
import { Route } from "./Route";

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
        new Route("Button", "button-view"),
        new Route("Header", "header-view"),
        new Route("Heading", "heading-view"),
        new Route("Image", "image-view"),
        new Route("Input", "input-view"),
        new Route("Link", "link-view"),
        new Route("Link-Tiles", "link-tiles-view"),
        new Route("Quote", "quote-view"),
        new Route("Richtext", "richtext-view")
    ];

    pagesList: Array<Route> = [new Route("Page-Home", "page-home")];
}
