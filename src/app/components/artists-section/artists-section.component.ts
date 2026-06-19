import { Component, inject } from "@angular/core";
import { ArtistDetail } from "../../types/artist-detail";
import { ArtistsService } from "../../services/artists.service";
import { ArtistCard } from "./artist-card/artist-card.component";
import { CommonModule } from "@angular/common";
import { IntersectionObserverDirective } from "../../directives/intersection-observer.directive";

@Component({
    selector: 'app-artists-section',
    standalone: true,
    imports: [ArtistCard, CommonModule, IntersectionObserverDirective],
    templateUrl: './artists-section.component.html',
    styleUrl: './artists-section.component.css'
})
export class ArtistsSection {
    artistsData !: ArtistDetail[];
    private artistsService = inject(ArtistsService);

    constructor() {
        this.artistsData = this.artistsService.data;
    }

}