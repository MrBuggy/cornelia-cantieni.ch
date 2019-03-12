import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'can-accordion',
    templateUrl: './can-accordion.component.html',
    styleUrls: ['./can-accordion.component.scss']
})
export class CanAccordionComponent implements OnInit {
    selectors = {
        accordionItem: ".can-accordion__item"
    };

    states = {
        open: "state-can-accordion__item--open",
        collapsed: "state-can-accordion__item--collapsed"
    };

    activeIndex: number = 0;
    accordionList: Array<object> = [
        {
            title: "Coaching",
            text: "Begleitung in Lebensphasen. Beratung, welche prozessorientierte Lösungen für Fragen im Beruf oder des Alltaglebens schafft."
        },
        {
            title: "Supervision",
            text: "Übersicht durch Aussensicht. Die Motivation und die Zufriedenheit Ihrer Mitarbeitenden resultieren aus der professionellen Reflexion von konkreten Lebens- und Erfahrungssituationen. Ziele sind die Standortbestimmung, die Prozessbegleitung, die Chancenerkennung und die Problemlösung."
        },
        {
            title: "Beratung",
            text: "Hilfe zur Selbsthilfe. Die Entwicklung Ihrer Organisation ist die Sicherstellung eines dynamischen Prozesses, um die Abläufe und die Zusammenarbeit wirksam zu gestalten. Kompetenz, Vertrauen und Sympathie – damit stärken Sie die Kommunikations-, die Kooperations- und die Organisationsfähigkeit von Teams."
        },
        {
            title: "Bildung",
            text: "Bewegung im Kopf, im Geist, in jeder Zelle des Menschen. Ihre Fort- und Weiterbildung ist die Antwort auf die konstante Herausforderung, neuem Wissen und Veränderungen im Beruf zu begegnen. Ziele sind die Bereicherung, die Entwicklung und die Festigung Ihrer Fähigkeiten."
        }
    ];
    collapsed: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    toggleActiveItem(i: number): void {
        this.collapsed = true;
        this.activeIndex = i;
    }

    resetAccordion(i: number, event: Event) {
        if (i === this.activeIndex && this.collapsed) {
            event.stopPropagation();
            this.collapsed = false;
            const items = document.querySelectorAll(this.selectors.accordionItem);
            [].forEach.call(items, (item: HTMLElement) => {
                item.classList.remove(this.states.open);
                item.classList.remove(this.states.collapsed);
            });
        }
    }

    isOpen(i: number) {
        return this.activeIndex === i && this.collapsed;
    }

    isCollapsed(i: number) {
        return this.activeIndex != i && this.collapsed;
    }
}
