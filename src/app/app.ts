import { Component, signal } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Header } from './componentes/header/header';
import { Footer } from './componentes/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('centroFomentoVE');

  showHeaderAndFooter = signal(true);

  constructor(private router: Router) {
    this.router.events.pipe(takeUntilDestroyed()).subscribe(event => {
      if (event instanceof NavigationEnd) {
        
        const url = event.urlAfterRedirects;

        // Oculta el Header/Footer si la URL incluye '/login' O si comienza con '/admin/posts'.
        const hideLayout = 
            url.includes('/login') || 
            url.startsWith('/admin/posts');
        
        this.showHeaderAndFooter.set(!hideLayout);
      }
    });
  }
}
