import { Component, Input } from "@angular/core";

@Component({
    selector: "can-button",
    templateUrl: "./can-button.component.html",
    styleUrls: ["./can-button.component.scss"]
})
export class CanButtonComponent {
    @Input() modifier: string;
    @Input() state: string;
    @Input() text: string = "Default button";
}
