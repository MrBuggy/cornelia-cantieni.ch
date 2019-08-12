import { Component } from "@angular/core";
import { NavigationService } from "../../../services/navigation.service";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { HeaderService } from "src/app/services/header.service";

@Component({
    selector: "can-header",
    templateUrl: "./can-header.component.html",
    styleUrls: ["./can-header.component.scss"],
    animations: [
        trigger('toggleAnimation', [
            state('void', style({
                transform: 'translateY(-100%)'
            })),
            state('*', style({
                transform: 'translateY(0%)'
            })),
            transition('void <=> *', animate('0.2s'))
        ]),
        trigger('toggleHeight', [
            transition('* <=> *', animate('0.2s'))
        ])
    ]
})
export class CanHeaderComponent {
    navOpen: boolean = false;
    counter: number = 0;

    get isImageHeaderVisible() {
        return this.headerService.isImageHeaderVisible;
    }
    
    constructor(
        private navigationService: NavigationService,
        private headerService: HeaderService
    ) { }

    toggleOffCanvas() {
        this.navOpen = !this.navOpen;
        this.navigationService.toggleCanvas();
    }
}
