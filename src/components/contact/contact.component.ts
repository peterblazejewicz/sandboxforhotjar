import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="page-container">
      <div class="contact-header">
        <h1>Contact Us</h1>
        <p class="contact-intro">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>
      
      <div class="contact-content">
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>myangularapp.com</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📱</div>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <h3>Address</h3>
                <p>123 Angular Street<br>Web City, WC 12345</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <h2>Send us a Message</h2>
          <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                [(ngModel)]="formData.name" 
                required 
                class="form-control"
              >
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                [(ngModel)]="formData.email" 
                required 
                class="form-control"
              >
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                [(ngModel)]="formData.subject" 
                required 
                class="form-control"
              >
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                [(ngModel)]="formData.message" 
                required 
                rows="5" 
                class="form-control"
              ></textarea>
            </div>
            
            <button type="submit" [disabled]="!contactForm.form.valid" class="btn btn-primary">
              Send Message
            </button>
          </form>
          
          @if (submitted) {
            <div class="success-message">
            <p>Thank you for your message! We'll get back to you soon.</p>
          </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  submitted = false;

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.submitted = true;

    // Reset form after 3 seconds
    setTimeout(() => {
      this.submitted = false;
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: '',
      };
    }, 3000);
  }
}
