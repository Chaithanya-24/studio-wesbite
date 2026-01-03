
import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly siteName = 'Your Studio';

  constructor(private title: Title, private meta: Meta) {}

  updateSeo(config: SeoConfig) {
    const fullTitle = `${config.title} | ${this.siteName}`;
    this.title.setTitle(fullTitle);

    const tags = [
      { name: 'description', content: config.description },
      { name: 'keywords', content: config.keywords || 'photography, studio, your city, wedding photographer' },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: config.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: config.image || 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: config.description }
    ];

    tags.forEach(tag => {
      if ('name' in tag) {
        this.meta.updateTag({ name: tag.name, content: tag.content });
      } else {
        this.meta.updateTag({ property: tag.property, content: tag.content });
      }
    });
  }
}
