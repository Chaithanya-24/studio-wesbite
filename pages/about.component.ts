
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
      <h1 class="text-5xl md:text-7xl font-bold mb-12 serif">Our Vision</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <img src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=800" class="rounded shadow-xl">
        <div class="space-y-6 text-gray-600">
          <h2 class="text-2xl font-bold text-gray-900 serif">Experienced Photographers</h2>
          <p>Founded on the belief that every moment is a piece of art, Your Studio has been providing premium services in Your City for over a decade.</p>
          <p>Our team specializes in capturing emotion and technical perfection in every frame.</p>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent implements OnInit {
  constructor(private seo: SeoService) {}
  ngOnInit() {
    this.seo.updateSeo({
      title: 'About Us | Professional Photographers in Your City',
      description: 'Learn the story of Your Studio, your local experts in professional photography since 2014.'
    });
  }
}
