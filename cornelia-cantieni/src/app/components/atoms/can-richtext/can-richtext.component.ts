import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'can-richtext',
    templateUrl: './can-richtext.component.html',
    styleUrls: ['./can-richtext.component.scss']
})
export class CanRichtextComponent implements OnInit {
    @Input() children: string;

    constructor() { }

    ngOnInit() {
    }

}
