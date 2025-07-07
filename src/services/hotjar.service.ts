import { Injectable } from '@angular/core';

/**
 * Service for interacting with Hotjar API
 * Provides methods to control Hotjar widgets and feedback
 */
@Injectable({
  providedIn: 'root'
})
export class HotjarService {
  /**
   * Tracks a state change in the application
   * Used for SPA route changes to notify Hotjar
   * @param path The current route path
   */
  trackStateChange(path: string): void {
    if (this.isHotjarLoaded()) {
      (window as any).hj('stateChange', path);
      console.log('Hotjar state change tracked:', path);
    }
  }
  /**
   * Shows the Hotjar feedback widget
   * @param widgetId The ID of the feedback widget to show
   */
  showFeedbackWidget(widgetId: number): void {
    if (this.isHotjarLoaded()) {
      (window as any).hj('trigger', `show_feedback_${widgetId}`);
    }
  }

  /**
   * Manually triggers the feedback widget to be shown again after submission
   * This can be called after receiving the feedback submission event
   * @param widgetId The ID of the feedback widget to show
   */
  reopenFeedbackWidget(widgetId: number): void {
    if (this.isHotjarLoaded()) {
      // First remove any existing widgets
      this.removeFeedbackWidgets();

      // Short delay to ensure widget is properly removed
      setTimeout(() => {
        // Then show the widget again
        this.showFeedbackWidget(widgetId);
      }, 300);
    }
  }

  /**
   * Removes all active Hotjar feedback widgets from the page
   */
  removeFeedbackWidgets(): void {
    if (this.isHotjarLoaded()) {
      // Remove any existing feedback widgets from the DOM
      const feedbackWidgets = document.querySelectorAll('[data-hj-feedback]');
      feedbackWidgets.forEach(widget => {
        widget.parentNode?.removeChild(widget);
      });
    }
  }

  /**
   * Adds an event listener for Hotjar feedback submission
   * @param callback Function to call when feedback is submitted
   */
  onFeedbackSubmitted(callback: () => void): void {
    if (this.isHotjarLoaded()) {
      // Listen for the Hotjar feedback submitted event
      (window as any)._hjSettings.hjSiteSettings = (window as any)._hjSettings.hjSiteSettings || {};
      (window as any)._hjSettings.hjSiteSettings.features = (window as any)._hjSettings.hjSiteSettings.features || [];
      (window as any)._hjSettings.hjSiteSettings.features.push({
        name: 'feedback',
        callback: (data: any) => {
          if (data.action === 'submitted') {
            callback();
          }
        }
      });
    }
  }

  /**
   * Checks if Hotjar is loaded and available
   * @returns boolean indicating if Hotjar is loaded
   */
  private isHotjarLoaded(): boolean {
    return typeof (window as any).hj === 'function';
  }
}
