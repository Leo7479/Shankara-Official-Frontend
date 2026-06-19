import { Component, inject } from "@angular/core";
import { ShowDetail } from "../../types/show-detail";
import { ShowsService } from "../../services/shows.service";
import { ShowCard } from "./show-card/show-card.component";
import { IntersectionObserverDirective } from "../../directives/intersection-observer.directive";

@Component({
    selector: 'app-shows-section',
    standalone: true,
    imports: [ShowCard, IntersectionObserverDirective],
    templateUrl: './shows-section.component.html',
    styleUrl: './shows-section.component.css'
})
export class ShowsSection{
    showsData !: ShowDetail[];
    private showsService = inject(ShowsService);

    constructor(){
        this.showsData = this.showsService.data;
    }
}