import { Component, OnInit } from "@angular/core";

@Component({
    selector: "can-link-tiles",
    templateUrl: "./can-link-tiles.component.html",
    styleUrls: ["./can-link-tiles.component.scss"]
})
export class CanLinkTilesComponent implements OnInit {
    tiles = [
        {
            title: "PORTRAIT",
            text: "Ein Einblick über meine Aus- und Weiterbildung, meine Arbeitsmethoden und mein Privatleben.",
            btnText: "Mehr erfahren"
        },
        {
            title: "ANGEBOTE",
            text: "Schauen Sie sich meine breite Palette an Angeboten, wie Coaching oder Organisationsberatung an.",
            btnText: "Mehr erfahren"
        },
        {
            title: "PROJEKTE",
            text: "Eine Vielzahl von erfolgreich abgeschlossenen Projekten sind eine schlagkräftige Referenz meiner Arbeit.",
            btnText: "Mehr erfahren"
        },
        {
            title: "KONTAKT",
            text: "Zögern Sie nicht, mich telefonisch oder per E-Mail zu kontaktieren. Ich stehe Ihnen jederzeit zur Verfügung.",
            btnText: "Mehr erfahren"
        }
    ]

    constructor() {}

    ngOnInit() {}
}
