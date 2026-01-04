import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-32 pb-24">
      <div class="container mx-auto px-6">
        <!-- Header -->
        <header class="text-center mb-20 max-w-3xl mx-auto animate-fade-in">
          <h1 class="text-5xl font-bold mb-6 serif">Our Services & Pricing</h1>
          <p class="text-gray-500 text-lg">
            Transparent pricing and premium quality for all your visual needs. Each package is customizable to fit your specific requirements.
          </p>
        </header>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <article *ngFor="let service of services; let i = index" 
                   class="group bg-white border border-gray-100 p-8 md:p-12 hover:border-amber-200 transition-colors shadow-sm animate-fade-in-up"
                   [style.animation-delay]="(i * 0.1) + 's'">
            <div class="flex justify-between items-start mb-6">
              <h2 class="text-3xl font-bold text-gray-900 serif">{{ service.title }}</h2>
              <span class="text-amber-600 font-bold whitespace-nowrap text-sm tracking-widest">{{ service.price }}</span>
            </div>
            <p class="text-gray-600 mb-8 leading-relaxed">
              {{ service.description }}
            </p>
            <ul class="space-y-4 mb-10">
              <li *ngFor="let feat of service.features" class="flex items-center text-sm text-gray-500">
                <svg class="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
                {{ feat }}
              </li>
            </ul>
            <a routerLink="/contact" 
               class="inline-block w-full text-center border border-gray-900 py-4 font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all text-xs">
              Inquire Now
            </a>
          </article>
        </div>

        <!-- Custom Requirements CTA -->
        <section class="mt-24 bg-amber-50 p-12 text-center rounded">
          <h3 class="text-2xl font-bold mb-4 serif">Custom Requirements?</h3>
          <p class="text-gray-600 mb-8 max-w-xl mx-auto">
            We understand that some projects don't fit into a box. If you have a specific vision or large-scale project in Your City, reach out for a custom proposal.
          </p>
          <a routerLink="/contact" class="bg-gray-900 text-white px-10 py-4 font-bold uppercase tracking-widest text-xs inline-block hover:bg-amber-600 transition-colors">
            Request Custom Quote
          </a>
        </section>
      </div>
    </div>
  `
})
export class ServicesComponent implements OnInit {
  services = [
    {
      title: 'Wedding Photography',
      price: 'Starting at ₹50,000',
      description: 'Full day coverage including pre-wedding sessions, cinematic editing, and high-resolution digital galleries.',
      features: ['2 Photographers', '1000+ Raw Photos', '200 Edited Images', 'Physical Album Option']
    },
    {
      title: 'Corporate Events',
      price: 'Starting at ₹15,000',
      description: 'Professional coverage for seminars, conferences, and office culture shoots in Your City.',
      features: ['Candid Shots', 'Keynote Coverage', 'Next-Day Preview', 'Commercial Rights']
    },
    {
      title: 'Family & Individual Portraits',
      price: 'Starting at ₹5,000',
      description: 'Elegant studio or outdoor portraits capturing personality and professional brand identity.',
      features: ['1 Hour Session', 'Multiple Outfits', '10 Retouched Images', 'Print Release']
    },
    {
      title: 'Commercial & Product',
      price: 'Contact for Quote',
      description: 'High-end imagery for e-commerce, advertising, and branding campaigns across Your Area.',
      features: ['White Background', 'Lifestyle Setting', 'High-Res TIFFs', 'Batch Editing']
    }
  ];

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Professional Photography Services in Your City',
      description: 'Browse our range of photography services including weddings, corporate events, and personal portraits at Your Studio.',
      keywords: 'photography services pricing, wedding photography cost, portrait session rates'
    });
  }
}

