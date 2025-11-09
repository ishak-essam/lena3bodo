import {Component, HostListener} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'لنعبده';
  showBackToTop = false;
constructor(private router:Router) {
  router.events.pipe(filter(e => e instanceof NavigationEnd))
    .subscribe(() => window.scrollTo({ top: 0 }));
}
  @HostListener('window:scroll')
  onWindowScroll() {
    const y = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.showBackToTop = y > 300; // show after 300px
  }

  backToTop(e?: Event) {
    e?.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
