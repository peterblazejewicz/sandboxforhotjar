import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="about-header">
        <h1>About Us</h1>
        <p class="about-intro">
          We are passionate developers creating amazing web experiences with Angular
        </p>
      </div>
      
      <div class="about-content">
        <div class="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to create innovative web applications that solve real-world problems
            and provide exceptional user experiences. We believe in the power of modern web
            technologies to transform how people interact with digital products.
          </p>
        </div>
        
        <div class="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2025, we started as a small team of developers with a big vision.
            Today, we continue to push the boundaries of what's possible with Angular and
            modern web development practices.
          </p>
        </div>
        
        <div class="about-section">
          <h2>Our Values</h2>
          <div class="values-grid">
            <div class="value-item">
              <h3>Innovation</h3>
              <p>We embrace new technologies and creative solutions</p>
            </div>
            <div class="value-item">
              <h3>Quality</h3>
              <p>We deliver high-quality code and user experiences</p>
            </div>
            <div class="value-item">
              <h3>Collaboration</h3>
              <p>We work together to achieve common goals</p>
            </div>
            <div class="value-item">
              <h3>Growth</h3>
              <p>We continuously learn and improve our skills</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AboutComponent {}