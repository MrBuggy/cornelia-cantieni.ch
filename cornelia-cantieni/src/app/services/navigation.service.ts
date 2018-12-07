import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class NavigationService {
    evToggleCanvas: EventEmitter<boolean> = new EventEmitter;

    constructor() {}

    toggleCanvas() {
        this.evToggleCanvas.next();
    }
}
