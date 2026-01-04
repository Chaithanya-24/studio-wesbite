import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pt-32 pb-24">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-7xl font-bold mb-12 text-gray-900 animate-fade-in">
            Our Passion for <br /> <span class="serif italic">Visual Excellence</span>
          </h1>
          
          <!-- Main About Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
            <div class="animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=600&h=800" 
                alt="Lead photographer at Your Studio during a high-end shoot" 
                class="rounded shadow-2xl w-full" 
                loading="lazy" 
              />
            </div>
            <div class="space-y-6">
              <h2 class="text-3xl font-bold text-gray-800 serif">Experienced Professional Photographers</h2>
              <p class="text-gray-600 leading-relaxed">
                Founded on the belief that every moment is a piece of art, Your Studio has been providing premium photography services to the Your City community for over 10 years.
              </p>
              <p class="text-gray-600 leading-relaxed">
                Our journey started in a small basement studio, driven by an obsession with lighting and composition. Today, we are recognized as a leading name for wedding and event photography services near Your Area.
              </p>
              <div class="pt-4 grid grid-cols-2 gap-6">
                <div>
                  <h4 class="text-4xl font-bold text-amber-600">500+</h4>
                  <p class="text-xs uppercase tracking-widest text-gray-400">Weddings</p>
                </div>
                <div>
                  <h4 class="text-4xl font-bold text-amber-600">1k+</h4>
                  <p class="text-xs uppercase tracking-widest text-gray-400">Portraits</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Why Choose Us Section -->
          <section class="bg-gray-50 p-12 rounded-lg border border-gray-100 mb-24">
            <h2 class="text-3xl font-bold mb-8 text-center serif">Why Choose Your Studio?</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div *ngFor="let item of whyChooseUs" class="space-y-2">
                <h3 class="font-bold text-gray-900 flex items-center">
                  <span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  {{ item.title }}
                </h3>
                <p class="text-sm text-gray-600 pl-5">{{ item.desc }}</p>
              </div>
            </div>
          </section>

          <!-- Team Section -->
          <div class="text-center">
            <h2 class="text-3xl font-bold mb-8 serif">Meet the Visionaries</h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div *ngFor="let member of team" class="group cursor-pointer">
                <div class="relative overflow-hidden mb-4 aspect-[3/4]">
                  <img [src]="member.img" [alt]="'Professional photographer ' + member.name + ' at Your Studio'" 
                       class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 class="font-bold text-xl uppercase tracking-widest">{{ member.name }}</h3>
                <p class="text-sm text-amber-600">{{ member.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent implements OnInit {
  whyChooseUs = [
    { title: 'Personalized Approach', desc: 'We take the time to understand your vision before we even pick up the camera.' },
    { title: 'Premium Equipment', desc: 'Utilizing state-of-the-art Sony and Canon mirrorless systems for ultra-crisp results.' },
    { title: 'Fast Delivery', desc: 'Get your fully edited high-resolution gallery within 14 days of your session.' },
    { title: 'Artistic Vision', desc: 'Our unique editing style brings a cinematic feel to every photograph we deliver.' }
  ];

  team = [
    { id: '1', name: 'Alex Rivera', role: 'Lead Wedding Artist', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500' },
    { id: '2', name: 'Sarah Chen', role: 'Portrait Specialist', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=500' },
    { id: '3', name: 'Marcus Thorne', role: 'Event Director', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500' }
  ];

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Experienced Professional Photographers in Your City',
      description: 'Learn more about Your Studio, a professional photography team dedicated to excellence in Your City. Our history, vision, and team.',
      keywords: 'about photography studio, professional photographers your city, photography team'
    });
  }
}

