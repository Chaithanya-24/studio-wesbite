
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop" 
             alt="Professional wedding photography by Your Studio" 
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
            Book a Session
          </a>
          <a href="tel:+919000000000" class="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-sm font-semibold tracking-widest transition-all text-sm uppercase">
            Call Your Studio
          </a>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-6 max-w-4xl text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-8 text-gray-900 serif">Expert Visual Storytellers</h2>
        <p class="text-lg md:text-xl text-gray-600 italic mb-10 leading-relaxed">
          "Your Studio is a premier photography service in Your City specializing in weddings, events, and cinematic portraits."
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div *ngFor="let s of services" class="p-8 border border-gray-50 hover:shadow-xl transition-all">
            <h3 class="text-xl font-bold mb-4 serif">{{ s.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit {
  services = [
    { title: 'Weddings', desc: 'Emotional, candid, and cinematic coverage of your special day.' },
    { title: 'Portraits', desc: 'Professional headshots and creative individual portraits.' },
    { title: 'Events', desc: 'Comprehensive coverage for corporate and social gatherings.' }
  ];

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Professional Photography Studio in Your City',
      description: 'Your Studio provides high-end wedding, portrait, and event photography services in Your City. Capturing memories with precision and art.',
      keywords: 'best photographer your city, wedding photography services, professional studio near me'
    });
  }
}
