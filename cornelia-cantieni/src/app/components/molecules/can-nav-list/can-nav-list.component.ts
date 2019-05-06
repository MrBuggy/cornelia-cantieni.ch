import { Component } from "@angular/core";
import { NavLink } from '@models/navLink';

@Component({
    selector: "can-nav-list",
    templateUrl: "./can-nav-list.component.html",
    styleUrls: ["./can-nav-list.component.scss"]
})
export class CanNavListComponent {
    navList: Array<NavLink> = [
        new NavLink ('Home', 'home'),
        new NavLink ('Portrait', 'portrait'),
        new NavLink ('Angebote', 'offers'),
        new NavLink ('Tarife', 'rates'),
        new NavLink ('Projekte', 'projects'),
        new NavLink ('Kontakt', 'contact')
    ];
}
