import { Component, AfterViewInit } from "@angular/core";
import { NavigationService } from "../../../services/navigation.service";
import { HeaderService } from "src/app/services/header.service";

@Component({
    selector: "can-header",
    templateUrl: "./can-header.component.html",
    styleUrls: ["./can-header.component.scss"]
})
export class CanHeaderComponent implements AfterViewInit {
    navOpen: boolean = false;
    counter: number = 0;

    get isImageHeaderVisible() {
        return this.headerService.isImageHeaderVisible;
    }

    constructor(
        private navigationService: NavigationService,
        private headerService: HeaderService
    ) {

    }

    ngAfterViewInit(): void {
            this.headerService.imageHeaderHeight = document.getElementById('imageHeader').clientHeight;
    }

    toggleOffCanvas() {
        this.navOpen = !this.navOpen;
        this.navigationService.toggleCanvas();
    }
}
