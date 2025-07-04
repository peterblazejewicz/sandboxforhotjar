import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container">
      <div class="hero-section">
        <h1 class="hero-title">Welcome to Our Angular App</h1>
        <p class="hero-subtitle">
          Discover amazing features and explore what we have to offer
        </p>
        <div class="hero-actions">
          <a routerLink="/about" class="btn btn-primary">Learn More</a>
          <a routerLink="/contact" class="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
      
      <div class="features-section">
        <h2>Why Choose Us?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3>Fast Performance</h3>
            <p>Built with Angular for lightning-fast user experiences</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>Modern Design</h3>
            <p>Clean, responsive design that works on all devices</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔧</div>
            <h3>Easy to Use</h3>
            <p>Intuitive interface designed with user experience in mind</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent {}