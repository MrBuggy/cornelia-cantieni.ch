import { Component } from "@angular/core";
import { NavLink } from '../../../models/navLink';
import * as smoothscroll from "smoothscroll-polyfill";
import { NavigationService } from "src/app/services/navigation.service";

@Component({
    selector: "can-nav-list",
    templateUrl: "./can-nav-list.component.html",
    styleUrls: ["./can-nav-list.component.scss"]
})
export class CanNavListComponent {

    get currentLink () {
        return this.navigationService.activeLink;
    }

    constructor(private navigationService: NavigationService) {
        smoothscroll.polyfill();
    }

    navList: Array<NavLink> = [
        new NavLink('Home', 'home'),
        new NavLink('Portrait', 'portrait'),
        new NavLink('Angebote', 'offers'),
        new NavLink('Tarife', 'rates'),
        new NavLink('Projekte', 'projects'),
        new NavLink('Kontakt', 'contact')
    ];

    navigate(anchor: string) {
        let elementToNavigate = document.getElementById(anchor);

        let element = elementToNavigate as HTMLElement;

        if (elementToNavigate != null) {
            window.scrollTo({top: this.getPosition(element) / 5 - document.getElementById('header').clientHeight - element.clientHeight - 80, behavior: 'smooth'})
        }

        this.navigationService.activeLink = anchor;
    }
    
    // Inspired by https://stackoverflow.com/a/52445262/8707990
    private getPosition(el: HTMLElement) {
            let offsetTop = 0;

            while (el) {
                offsetTop += el.offsetTop;
                el = el.parentElement;
            }

            return offsetTop
        }
}
