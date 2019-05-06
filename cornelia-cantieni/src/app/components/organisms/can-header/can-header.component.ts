import { Component } from "@angular/core";
import { NavigationService } from "@service/navigation.service";

@Component({
    selector: "can-header",
    templateUrl: "./can-header.component.html",
    styleUrls: ["./can-header.component.scss"]
})
export class CanHeaderComponent {
    navOpen: boolean = false;
    counter: number = 0;

    constructor(
        private navigationService: NavigationService,
    ) {}

    toggleOffCanvas() {
        this.navOpen = !this.navOpen;
        this.navigationService.toggleCanvas();
    }
}
