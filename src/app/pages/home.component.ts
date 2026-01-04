import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop" 
             alt="Cinematic wedding photography by Your Studio" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10 text-center animate-fade-in">
        <h1 class="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
          Professional Photography <br /> <span class="text-amber-400 italic serif">Studio in Your City</span>
        </h1>
        <p class="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 font-light">
          Capturing the timeless moments that matter most. We specialize in high-quality visual storytelling for every occasion.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a routerLink="/contact" class="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-sm font-semibold tracking-widest transition-all text-sm uppercase">
            Book a Photography Session
          </a>
          <a href="tel:+919000000000" class="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-sm font-semibold tracking-widest transition-all text-sm uppercase">
            Call Your Studio
          </a>
        </div>
      </div>
    </section>

    <!-- About Preview Section -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-5xl font-bold mb-8 text-gray-900 serif">Expert Visual Storytellers</h2>
          <p class="text-lg md:text-xl text-gray-600 leading-relaxed italic mb-8">
            "Your Studio is a professional photography service in Your City specializing in weddings, events, portraits, and candid photography."
          </p>
          <p class="text-gray-500 mb-10 leading-loose">
            With over a decade of experience, our team of dedicated photographers near Your Area brings a creative lens to every project. Whether it's the intimate moments of a wedding or the professional atmosphere of a corporate gala, we ensure every shot tells a unique story.
          </p>
          <a routerLink="/about" class="text-amber-700 font-bold uppercase tracking-widest border-b-2 border-amber-700 pb-1 hover:text-amber-900 hover:border-amber-900 transition-all">
            Learn Our Story
          </a>
        </div>
      </div>
    </section>

    <!-- Services Grid Section -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-6 text-center mb-16">
        <h2 class="text-sm uppercase tracking-[0.3em] text-amber-600 font-bold mb-4">What We Offer</h2>
        <h3 class="text-3xl md:text-5xl font-bold text-gray-900 serif">Our Professional Services</h3>
      </div>
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <article *ngFor="let service of services" class="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
          <div class="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-6 text-amber-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h4 class="text-xl font-bold mb-4 text-gray-900 serif">{{ service.title }}</h4>
          <p class="text-gray-600 text-sm leading-relaxed">{{ service.desc }}</p>
        </article>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-24 bg-white border-y border-gray-100">
      <div class="container mx-auto px-6 text-center">
        <div class="inline-flex items-center space-x-2 text-amber-500 mb-6">
          <span class="text-2xl font-bold">4.9 ★</span>
          <span class="text-gray-400 text-sm">(8 Reviews)</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-16 serif">Loved by Our Clients</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <article *ngFor="let review of reviews" class="text-left bg-gray-50 p-10 rounded-lg relative">
            <div class="absolute -top-4 left-10 text-6xl text-amber-200 serif">"</div>
            <p class="text-lg text-gray-700 italic mb-8 relative z-10 leading-relaxed">
              {{ review.content }}
            </p>
            <div class="flex items-center space-x-4">
              <div class="w-10 h-10 bg-amber-600 rounded-full"></div>
              <div>
                <h5 class="font-bold text-gray-900">{{ review.author }}</h5>
                <p class="text-xs text-gray-400 uppercase tracking-widest">Verified Client</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gray-950 text-white text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-5xl font-bold mb-8 serif italic">Ready to Capture Memories?</h2>
        <p class="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
          Don't let precious moments fade away. Contact Your Studio for the best photography services in Your City.
        </p>
        <a routerLink="/contact" class="inline-block bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-[0.2em] transition-all">
          Start a Conversation
        </a>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit {
  services = [
    { title: 'Wedding Photography', desc: 'Capturing the magic of your special day with a blend of candid and cinematic shots.' },
    { title: 'Portrait Sessions', desc: 'Professional portrait photography for individuals, families, and creative professionals.' },
    { title: 'Event Coverage', desc: 'Comprehensive coverage for corporate events, parties, and commercial gatherings.' },
    { title: 'Outdoor Shoots', desc: 'Utilizing natural light and breathtaking landscapes in Your City for stunning visuals.' }
  ];

  reviews = [
    { id: '1', author: 'John Doe', content: 'Incredible experience with Your Studio. They captured our wedding perfectly in Your City.' },
    { id: '2', author: 'Jane Smith', content: 'Professional and talented photographers. Highly recommended for corporate events.' }
  ];

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Professional Photography Studio in Your City',
      description: 'Your Studio is a premier photography service in Your City specializing in weddings, portraits, and events. Book your session today for professional visual storytelling.',
      keywords: 'best photographer your city, wedding photography services, professional studio near me'
    });
  }
}

