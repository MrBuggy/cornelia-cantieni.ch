import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../../../services/navigation.service";

@Component({
    selector: "can-header",
    templateUrl: "./can-header.component.html",
    styleUrls: ["./can-header.component.scss"]
})
export class CanHeaderComponent implements OnInit {
    navOpen: boolean = false;
    counter: number = 0;

    constructor(
        private navigationService: NavigationService,
    ) {}

    ngOnInit() {}

    toggleOffCanvas() {
        this.navOpen = !this.navOpen;
        this.navigationService.toggleCanvas();
    }
}
