import { Component, Input } from "@angular/core";

@Component({
    selector: "can-link",
    templateUrl: "./can-link.component.html",
    styleUrls: ["./can-link.component.scss"]
})
export class CanLinkComponent {
    @Input() modifier: string;
    @Input() text: string = "This is a default link text";
    @Input() url: string;
}
