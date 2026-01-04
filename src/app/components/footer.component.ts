import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-gray-950 text-gray-400 py-16">
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <!-- Brand Column -->
        <div class="md:col-span-1">
          <h3 class="text-white text-xl font-bold serif mb-6 tracking-widest">YOUR STUDIO</h3>
          <p class="text-sm leading-relaxed mb-6">
            Capturing timeless moments and emotions across Your City. Dedicated to professional storytelling through high-quality photography.
          </p>
          <div class="flex space-x-4">
            <a *ngFor="let social of socials" 
               [href]="social.url" 
               target="_blank"
               class="hover:text-amber-500 transition-colors text-sm">
              {{ social.name }}
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h4>
          <ul class="space-y-4 text-sm">
            <li><a routerLink="/about" class="hover:text-white transition-colors">About Us</a></li>
            <li><a routerLink="/services" class="hover:text-white transition-colors">Our Services</a></li>
            <li><a routerLink="/gallery" class="hover:text-white transition-colors">Portfolio</a></li>
            <li><a routerLink="/contact" class="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-white text-sm font-bold uppercase tracking-widest mb-6">Services</h4>
          <ul class="space-y-4 text-sm">
            <li>Wedding Photography</li>
            <li>Portrait Sessions</li>
            <li>Corporate Events</li>
            <li>Lifestyle & Outdoor</li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-white text-sm font-bold uppercase tracking-widest mb-6">Contact Info</h4>
          <ul class="space-y-4 text-sm">
            <li>123 Sample Street, Your City, 000000</li>
            <li>+91 90000 00000</li>
            <li>hello&#64;yourstudio.com</li>
          </ul>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="container mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-xs tracking-widest uppercase">
        &copy; {{ currentYear }} YOUR STUDIO PHOTOGRAPHY. ALL RIGHTS RESERVED.
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socials = [
    { name: 'Instagram', url: '#' },
    { name: 'Facebook', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'LinkedIn', url: '#' }
  ];
}

