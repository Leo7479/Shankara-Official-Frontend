import { Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class Header {
    private router = inject(Router);

    onLogoClick(){
        this.router.navigateByUrl("/");
    }

    onHamburgerMenuClick(e: Event, navRef: HTMLDivElement) {
        if (navRef.style.left === '' || navRef.style.left === '200%') {
            console.log("opening");
            navRef.style.left = '0px';
        }
        else {
            console.log("closing");
            navRef.style.left = '200%';
        }
    }

    onNavSectionClick(e: Event) {
        if (e.target instanceof HTMLLIElement || e.target instanceof HTMLAnchorElement) {
            this.onHamburgerMenuClick(e, e.currentTarget as HTMLDivElement);
        }
    }
}