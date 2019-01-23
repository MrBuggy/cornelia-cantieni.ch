import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'can-image',
    templateUrl: './can-image.component.html',
    styleUrls: ['./can-image.component.scss']
})
export class CanImageComponent implements OnInit {
    @Input() imgAlt: string;
    @Input() imgSrc: string;
    @Input() modifier: string;

    constructor() { }

    ngOnInit() {
    }

}
