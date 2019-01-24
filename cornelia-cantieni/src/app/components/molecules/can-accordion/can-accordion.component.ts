import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'can-accordion',
    templateUrl: './can-accordion.component.html',
    styleUrls: ['./can-accordion.component.scss']
})
export class CanAccordionComponent implements OnInit {
    accordionList: Array<object> = [
        {
            title: "Coaching",
            text: "Lorem Ipsum"
        },
        {
            title: "Supervision",
            text: "Lorem Ipsum"
        },
        {
            title: "Beratung",
            text: "Lorem Ipsum"
        },
        {
            title: "Bildung",
            text: "Lorem Ipsum"
        }
    ]

    constructor() { }

    ngOnInit() {
    }
}
