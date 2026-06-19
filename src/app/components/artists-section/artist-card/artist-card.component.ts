import { Component, Input } from "@angular/core";
import { ArtistDetail } from "../../../types/artist-detail";
import { ValueSeperator } from "../../../pipes/value-seperator.pipe";
import { IntersectionObserverDirective } from "../../../directives/intersection-observer.directive";

@Component({
    selector: "app-artist-card",
    standalone: true,
    imports: [ValueSeperator, IntersectionObserverDirective],
    templateUrl: './artist-card.component.html',
    styleUrl: './artist-card.component.css'
})
export class ArtistCard{
    @Input() data !: ArtistDetail;

    constructor(){

    }
}