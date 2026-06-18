import { Component } from "@angular/core";
import { IntersectionObserverDirective } from "../../directives/intersection-observer.directive";

@Component({
    selector: 'app-about-section',
    standalone: true, 
    imports: [IntersectionObserverDirective],
    templateUrl: './about-section.component.html',
    styleUrl: './about-section.component.css'
})
export class AboutSection{
}