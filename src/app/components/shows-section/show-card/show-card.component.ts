import { Component, ElementRef, Input, OnInit } from "@angular/core";
import { ShowDetail } from "../../../types/show-detail";

@Component({
    selector: 'app-show-card',
    standalone: true,
    imports: [],
    templateUrl: './show-card.component.html',
    styleUrl: './show-card.component.css'
})
export class ShowCard implements OnInit{
    @Input() data !: ShowDetail;
    showDate !: string;
    showMonthYear !: string;
    ngOnInit(){
        this.showDate = this.data?.date.split(" ")[0];
        this.showMonthYear = this.data?.date.split(" ")[1] + ' ' + this.data?.date.split(" ")[2];
    }

    onClickWatchNow(){
        window.open(this.data.link, "_blank");
    }

}