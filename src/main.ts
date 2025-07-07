import { Component, OnInit, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { HotjarService } from './services/hotjar.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="app-container">
      <nav class="navbar">
        <div class="nav-brand">
          <h2>My Angular App</h2>
        </div>
        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
          <li><a routerLink="/about" routerLinkActive="active">About</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
        </ul>
      </nav>

      <main class="main-content">
        <router-outlet></router-outlet>
      </main>

      <footer class="footer">
        <p>&copy; 2025 My Angular App. All rights reserved.</p>
      </footer>
    </div>
  `,
})
export class App implements OnInit {
  name = 'Angular';
  private router = inject(Router);
  private hotjarService = inject(HotjarService);

  ngOnInit(): void {
    // Track initial page load
    this.hotjarService.trackStateChange(window.location.pathname);

    // Track subsequent navigation events
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.hotjarService.trackStateChange(event.urlAfterRedirects);
    });
  }
}

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
