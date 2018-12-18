import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "can-heading",
    templateUrl: "./can-heading.component.html",
    styleUrls: ["./can-heading.component.scss"]
})
export class CanHeadingComponent implements OnInit {
    @Input() anchor: string;
    @Input() title: string = "Default heading title";

    constructor() {}

    ngOnInit() {}
}
