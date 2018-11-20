import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "can-icon",
    templateUrl: "./can-icon.component.html",
    styleUrls: ["./can-icon.component.scss"]
})
export class CanIconComponent implements OnInit {
    @Input() iconName: string;

    constructor() {}

    ngOnInit() {}
}
