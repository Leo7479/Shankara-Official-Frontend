import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IntersectionObserverDirective } from '../../directives/intersection-observer.directive';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class Footer {
  
}
