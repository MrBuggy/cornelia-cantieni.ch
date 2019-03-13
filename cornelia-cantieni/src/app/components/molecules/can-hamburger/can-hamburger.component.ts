import { Component, Input } from "@angular/core";

@Component({
    selector: "can-hamburger",
    templateUrl: "./can-hamburger.component.html",
    styleUrls: ["./can-hamburger.component.scss"]
})
export class CanHamburgerComponent {
    @Input() navOpen: boolean;

    constructor() {}

    ngOnInit() {}
}
