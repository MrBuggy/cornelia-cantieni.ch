import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../../../services/navigation.service";
import { NavLink } from '../../../models/navLink';

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

    navList: Array<NavLink> = [
        new NavLink ('Home', 'home'),
        new NavLink ('Portrait', 'portrait'),
        new NavLink ('Angebote', 'offers'),
        new NavLink ('Tarife', 'rates'),
        new NavLink ('Projekte', 'projects'),
        new NavLink ('Kontakt', 'contact')
    ];

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
