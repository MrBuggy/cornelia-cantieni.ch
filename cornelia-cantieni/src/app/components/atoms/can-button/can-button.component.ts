import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "can-button",
    templateUrl: "./can-button.component.html",
    styleUrls: ["./can-button.component.scss"]
})
export class CanButtonComponent implements OnInit {
    @Input() modifier: string;
    @Input() text: string = "Default button";

    className: string = "can-button";

    constructor() {}

    ngOnInit() {}
}
