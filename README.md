# Your Studio - Professional Photography Website

A modern, SEO-optimized photography studio website built with **Angular 18** and **Angular CLI**.

## Features

- **Angular 18** with Standalone Components
- **Angular Signals** for reactive state management
- **SEO Service** for dynamic meta tags and Open Graph
- **Lazy-loaded routes** for optimal performance
- **Responsive design** with Tailwind CSS
- **Angular CLI** for standard Angular development

## Pages

- **Home** - Hero section, services overview, testimonials, CTA
- **About** - Team profiles, company story, statistics
- **Services** - Pricing cards with features
- **Gallery** - Filterable masonry portfolio with categories
- **Contact** - Reactive form with validation

## Tech Stack

- Angular 18.2.0
- Angular CLI 18.2.0
- TypeScript 5.4.5
- Tailwind CSS (CDN)
- Zone.js 0.14.10
- RxJS 7.8.1

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The development server runs at `http://localhost:4200`.

## Project Structure

```
Photostudio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header.component.ts
│   │   │   └── footer.component.ts
│   │   ├── pages/
│   │   │   ├── home.component.ts
│   │   │   ├── about.component.ts
│   │   │   ├── services.component.ts
│   │   │   ├── gallery.component.ts
│   │   │   └── contact.component.ts
│   │   ├── services/
│   │   │   └── seo.service.ts
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── tsconfig.json
└── package.json
```

## Customization

1. **Branding**: Update "Your Studio" and "Your City" placeholders
2. **Images**: Replace Unsplash URLs with your own photos
3. **Contact Info**: Update address, phone, and email
4. **Services**: Modify pricing and packages in `services.component.ts`
5. **SEO**: Customize meta tags in each component's `ngOnInit()`

## License

MIT License - Feel free to use for your photography business!
