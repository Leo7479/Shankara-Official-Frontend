import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { forkJoin, fromEvent, mapTo, merge, of, take, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('shankara-official-frontend');
  loading = signal(true);

  ngAfterViewInit(): void {
    const minDuration$ = timer(1000);
    const load$ = (document.readyState==='complete')?of(true):fromEvent(window, 'load').pipe(take(1));

    forkJoin([
      load$, 
      minDuration$
    ]).subscribe(()=>{
      this.loading.set(false);
    })
  }
}
