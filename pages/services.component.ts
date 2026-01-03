
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pt-32 pb-24 container mx-auto px-6">
      <h1 class="text-5xl font-bold mb-16 text-center serif">Photography Services</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div *ngFor="let s of services" class="p-10 bg-white border border-gray-100 hover:border-amber-600 transition-all group">
          <div class="flex justify-between items-start mb-6">
            <h2 class="text-3xl font-bold serif">{{ s.title }}</h2>
            <span class="text-amber-600 font-bold text-sm tracking-widest">{{ s.price }}</span>
          </div>
          <p class="text-gray-500 mb-8">{{ s.description }}</p>
          <a href="#/contact" class="inline-block border-b-2 border-gray-900 pb-1 font-bold uppercase tracking-widest text-xs group-hover:text-amber-600 group-hover:border-amber-600 transition-all">
            Inquire Now
          </a>
        </div>
      </div>
    </div>
  `
})
export class ServicesComponent implements OnInit {
  services = [
    { title: 'Weddings', price: '₹50,000+', description: 'Full day coverage with cinematic editing and premium photo albums.' },
    { title: 'Portraits', price: '₹5,000+', description: 'Professional headshots and branding photography sessions.' },
    { title: 'Corporate', price: '₹15,000+', description: 'Event coverage and architectural photography for businesses.' },
    { title: 'Outdoor', price: '₹8,000+', description: 'Lifestyle shoots in Your City\'s most scenic locations.' }
  ];

  constructor(private seo: SeoService) {}
  ngOnInit() {
    this.seo.updateSeo({
      title: 'Services & Pricing | Professional Photography Your City',
      description: 'Transparent pricing for wedding, portrait, and event photography services by Your Studio.'
    });
  }
}
