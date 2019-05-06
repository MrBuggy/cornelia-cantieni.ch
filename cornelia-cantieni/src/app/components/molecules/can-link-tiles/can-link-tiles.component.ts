import { Component } from "@angular/core";
import { TileValue } from '@models/tileValue';

@Component({
    selector: "can-link-tiles",
    templateUrl: "./can-link-tiles.component.html",
    styleUrls: ["./can-link-tiles.component.scss"]
})
export class CanLinkTilesComponent {
    tiles: Array<TileValue> = [
        new TileValue (
            "Portrait",
            "Ein Einblick über meine Aus- und Weiterbildung, meine Arbeitsmethoden und mein Privatleben.",
            "Mehr erfahren"
        ),

        new TileValue (
            "Angebote",
            "Schauen Sie sich meine breite Palette an Angeboten, wie Coaching oder Organisationsberatung an.",
            "Mehr erfahren"
        ),
        new TileValue (
            "Projekte",
            "Eine Vielzahl von erfolgreich abgeschlossenen Projekten sind eine schlagkräftige Referenz meiner Arbeit.",
            "Mehr erfahren"
        ),
        new TileValue (
            "Kontakt",
            "Zögern Sie nicht, mich telefonisch oder per E-Mail zu kontaktieren. Ich stehe Ihnen jederzeit zur Verfügung.",
            "Mehr erfahren"
        )
    ];
}
