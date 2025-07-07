# sandboxforhotjar

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/peterblazejewicz/sandboxforhotjar)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start
```

## Hotjar Feedback Widget Implementation

This project demonstrates how to control the Hotjar feedback button after user feedback is submitted, without requiring a page reload.

### HotjarService

The project includes a `HotjarService` that provides methods to interact with the Hotjar API:

```typescript
// Import the service
import { HotjarService } from './services/hotjar.service';

// Inject it in your component
constructor(private hotjarService: HotjarService) {}

// Show the feedback widget
this.hotjarService.showFeedbackWidget(widgetId);

// Listen for feedback submission
this.hotjarService.onFeedbackSubmitted(() => {
  // This callback is executed when feedback is submitted

  // You can show the widget again after a delay
  setTimeout(() => {
    this.hotjarService.reopenFeedbackWidget(widgetId);
  }, 3000);
});
```

### Key Features

1. **Show Feedback Widget**: Programmatically trigger the Hotjar feedback widget
2. **Listen for Submission**: Get notified when a user submits feedback
3. **Reopen Widget**: Show the feedback button again after submission without page reload
4. **Remove Widgets**: Clean up any existing widgets from the DOM

### Implementation Notes

- Replace `widgetId` with your actual Hotjar feedback widget ID
- The service handles checking if Hotjar is loaded before making API calls
- The reopening functionality uses a small delay to ensure proper cleanup

See the `HomeComponent` for a complete implementation example.

## Deployment to GitHub Pages

This project is configured to be deployed to GitHub Pages using angular-cli-ghpages.

```bash
# Deploy to GitHub Pages
npm run deploy
```

The application will be built in production mode and deployed to the gh-pages branch of your repository.

### First-time deployment

For the first deployment, you might need to run with additional options:

```bash
npx angular-cli-ghpages --dir=dist/demo --no-silent
```

### Custom domain

If you want to use a custom domain, you can add the `--cname=your-domain.com` option:

```bash
npx angular-cli-ghpages --dir=dist/demo --cname=your-domain.com
```
