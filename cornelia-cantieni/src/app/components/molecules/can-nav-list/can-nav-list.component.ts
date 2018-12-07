import { Component, OnInit } from "@angular/core";

@Component({
    selector: "can-nav-list",
    templateUrl: "./can-nav-list.component.html",
    styleUrls: ["./can-nav-list.component.scss"]
})
export class CanNavListComponent implements OnInit {
    navList = [
        { name: "HOME" },
        { name: "PORTRAIT" },
        { name: "ANGEBOTE" },
        { name: "TARIFE" },
        { name: "PROJEKTE" },
        { name: "KONTAKT" }
    ]

    constructor() {}

    ngOnInit() {}
}
