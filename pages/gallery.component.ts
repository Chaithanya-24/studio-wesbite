
import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pt-32 pb-24 container mx-auto px-6">
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold mb-4 serif">Our Portfolio</h1>
        <p class="text-gray-500 max-w-2xl mx-auto">Capturing the soul of Your City through our lens. Explore our latest sessions across weddings, portraits, and events.</p>
      </div>

      <div class="flex justify-center gap-4 mb-16 flex-wrap">
        <button *ngFor="let cat of categories" 
                (click)="filter.set(cat)"
                [class.bg-amber-600]="filter() === cat"
                [class.text-white]="filter() === cat"
                [class.border-amber-600]="filter() === cat"
                class="px-8 py-2 rounded-full border border-gray-200 text-sm font-bold tracking-widest uppercase transition-all hover:border-amber-600">
          {{ cat }}
        </button>
      </div>

      <div class="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        <div *ngFor="let img of filteredImages()" class="relative group overflow-hidden bg-gray-50 rounded-lg break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500">
          <img [src]="img.url" [alt]="img.alt" class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
            <span class="text-white font-bold uppercase tracking-[0.2em] text-xs">{{ img.category }}</span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class GalleryComponent implements OnInit {
  filter = signal('All');
  categories = ['All', 'Wedding', 'Portrait', 'Event', 'Outdoor'];
  
  images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800', alt: 'Elegant wedding reception decor by Your Studio', category: 'Wedding' },
    { id: 2, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800', alt: 'Professional studio fashion portrait', category: 'Portrait' },
    { id: 3, url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800', alt: 'Corporate conference coverage in Your City', category: 'Event' },
    { id: 4, url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800', alt: 'Outdoor lifestyle sunset shoot', category: 'Outdoor' },
    { id: 5, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800', alt: 'Candid wedding moment', category: 'Wedding' },
    { id: 6, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800', alt: 'Corporate executive headshot', category: 'Portrait' }
  ];

  filteredImages = computed(() => {
    const f = this.filter();
    return f === 'All' ? this.images : this.images.filter(i => i.category === f);
  });

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Photography Portfolio | Your Studio Gallery',
      description: 'Explore our latest work in wedding, event, and portrait photography. High-quality imagery from Your City\'s best studio.'
    });
  }
}
