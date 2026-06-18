import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output } from "@angular/core";

@Directive({
    selector: '[intersectionObserve]'
})
export class IntersectionObserverDirective implements AfterViewInit, OnDestroy{
    private observer!: IntersectionObserver;

    constructor(private element: ElementRef){}
    ngAfterViewInit(): void {
        this.observer = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('fadeUp');
                }
            })
        })
        this.observer.observe(this.element.nativeElement);
    }

    ngOnDestroy(){
        this.observer.unobserve(this.element.nativeElement);
        this.observer.disconnect();
    }
}