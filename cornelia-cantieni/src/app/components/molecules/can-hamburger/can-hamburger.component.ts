import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "can-hamburger",
    templateUrl: "./can-hamburger.component.html",
    styleUrls: ["./can-hamburger.component.scss"]
})
export class CanHamburgerComponent implements OnInit {
    @Input() navOpen: boolean;

    constructor() {}

    ngOnInit() {}
}
