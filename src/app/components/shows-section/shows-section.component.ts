import { Component, inject } from "@angular/core";
import { ShowDetail } from "../../types/show-detail";
import { ShowsService } from "../../services/shows.service";
import { ShowCard } from "./show-card/show-card.component";

@Component({
    selector: 'app-shows-section',
    standalone: true,
    imports: [ShowCard],
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