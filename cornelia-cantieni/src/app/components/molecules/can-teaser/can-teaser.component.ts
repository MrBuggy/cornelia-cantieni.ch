import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'can-teaser',
    templateUrl: './can-teaser.component.html',
    styleUrls: ['./can-teaser.component.scss']
})
export class CanTeaserComponent implements OnInit {
    @Input() showImg: boolean = true;
    @Input() imgAlt: string;
    @Input() imgSrc: string;
    @Input() modifier: string;
    @Input() teaserText: string;
    @Input() teaserTitle: string;

    constructor() { }

    ngOnInit() {
    }

}
