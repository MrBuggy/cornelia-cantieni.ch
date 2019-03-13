import { Component, Input } from "@angular/core";

@Component({
    selector: "can-input",
    templateUrl: "./can-input.component.html",
    styleUrls: ["./can-input.component.scss"]
})
export class CanInputComponent {
    @Input() state: string;
    @Input() id: string;
    @Input() label: string = "Label";
    @Input() hint: string;
    @Input() inputValue: string;

    isFocused: boolean = false;
}
