import { Component, OnInit } from "@angular/core";

@Component({
    selector: "can-nav-list",
    templateUrl: "./can-nav-list.component.html",
    styleUrls: ["./can-nav-list.component.scss"]
})
export class CanNavListComponent implements OnInit {
    navList = [
        { name: "Home", anchor: "home" },
        { name: "Portrait", anchor: "portrait" },
        { name: "Angebote", anchor: "offers" },
        { name: "Tarife", anchor: "rates" },
        { name: "Projekte", anchor: "projects" },
        { name: "Kontakt", anchor: "conact" }
    ]

    constructor() {}

    ngOnInit() {}
}
