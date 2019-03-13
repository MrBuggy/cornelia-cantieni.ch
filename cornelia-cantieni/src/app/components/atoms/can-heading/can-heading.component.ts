import { Component, Input } from "@angular/core";

@Component({
    selector: "can-heading",
    templateUrl: "./can-heading.component.html",
    styleUrls: ["./can-heading.component.scss"]
})
export class CanHeadingComponent {
    @Input() anchor: string;
    @Input() title: string = "Default heading title";
}
