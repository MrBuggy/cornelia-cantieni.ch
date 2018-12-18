import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../../../services/navigation.service";

@Component({
    selector: "can-off-canvas",
    templateUrl: "./can-off-canvas.component.html",
    styleUrls: ["./can-off-canvas.component.scss"]
})
export class CanOffCanvasComponent implements OnInit {
    _selectors = {
        layoutCanvas: ".l-off-canvas"
    };

    _states = {
        layoutCanvasOpen: "l-off-canvas--open"
    };

    navList = [
        { name: "Home", anchor: "home" },
        { name: "Portrait", anchor: "portrait" },
        { name: "Angebote", anchor: "offers" },
        { name: "Tarife", anchor: "rates" },
        { name: "Projekte", anchor: "projects" },
        { name: "Kontakt", anchor: "conact" }
    ]

    constructor(private navigationService: NavigationService) {}

    ngOnInit() {
        this.navigationService.evToggleCanvas.subscribe( () => {
            this.toggleCanvas();
        });
    }

    toggleCanvas() {
        let offCanvas = document.querySelector(this._selectors.layoutCanvas);
        console.log(offCanvas);
        offCanvas.classList.toggle(this._states.layoutCanvasOpen);
    }
}
