import { Component, Input } from '@angular/core';

@Component({
    selector: 'can-richtext',
    templateUrl: './can-richtext.component.html',
    styleUrls: ['./can-richtext.component.scss']
})
export class CanRichtextComponent {
    @Input() children: string;
}
