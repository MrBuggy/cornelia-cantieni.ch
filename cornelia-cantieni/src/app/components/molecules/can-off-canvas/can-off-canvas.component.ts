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
        { name: "HOME" },
        { name: "PORTRAIT" },
        { name: "ANGEBOTE" },
        { name: "TARIFE" },
        { name: "PROJEKTE" },
        { name: "KONTAKT" }
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
