
import React, { useEffect } from 'react';
import { SEOProps } from '../types';

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "photography, studio, your city, wedding photographer",
  ogType = "website",
  ogImage = "https://picsum.photos/1200/630",
  canonicalUrl = window.location.href
}) => {
  useEffect(() => {
    // Update Title
    document.title = `${title} | Your Studio`;

    // Update Meta Tags
    const updateMeta = (name: string, content: string, isProperty: boolean = false) => {
      let element = isProperty 
        ? document.querySelector(`meta[property="${name}"]`) 
        : document.querySelector(`meta[name="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);
    
    // Open Graph
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', ogType, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('og:url', canonicalUrl, true);

    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);

  }, [title, description, keywords, ogType, ogImage, canonicalUrl]);

  return null;
};

export default SEO;
