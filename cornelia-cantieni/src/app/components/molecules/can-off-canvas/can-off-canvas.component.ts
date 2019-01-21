import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../../../services/navigation.service";

@Component({
    selector: "can-off-canvas",
    templateUrl: "./can-off-canvas.component.html",
    styleUrls: ["./can-off-canvas.component.scss"]
})
export class CanOffCanvasComponent implements OnInit {
    selectors = {
        layoutCanvas: ".l-off-canvas",
        layoutPage: ".l-page"
    };

    states = {
        layoutCanvasOpen: "state-l-off-canvas--open",
        layoutPageNoScroll: "state-l-page--no-scroll"
    };

    navList = [
        { name: "Home", anchor: "home" },
        { name: "Portrait", anchor: "portrait" },
        { name: "Angebote", anchor: "offers" },
        { name: "Tarife", anchor: "rates" },
        { name: "Projekte", anchor: "projects" },
        { name: "Kontakt", anchor: "contact" }
    ]

    constructor(private navigationService: NavigationService) {}

    ngOnInit() {
        this.navigationService.evToggleCanvas.subscribe( () => {
            this.toggleCanvas();
        });
    }

    toggleCanvas() {
        let offCanvas = document.querySelector(this.selectors.layoutCanvas);
        let layoutPage = document.querySelector(this.selectors.layoutPage);

        offCanvas.classList.toggle(this.states.layoutCanvasOpen);
        layoutPage.classList.toggle(this.states.layoutPageNoScroll);
    }
}
