import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterLink, RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

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
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
