import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../services/seo.service';

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: 'Wedding' | 'Portrait' | 'Event' | 'Outdoor';
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-32 pb-24">
      <div class="container mx-auto px-6">
        <!-- Header -->
        <div class="text-center mb-16 animate-fade-in">
          <h1 class="text-5xl font-bold mb-4 serif">Our Portfolio</h1>
          <p class="text-gray-500 max-w-2xl mx-auto">
            A collection of our finest work across weddings, events, and portraits. We capture the essence of every moment with precision and artistry in Your City.
          </p>
        </div>

        <!-- Category Filters -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          @for (cat of categories; track cat) {
            <button (click)="filter.set(cat)"
                    [ngClass]="{'bg-amber-600 border-amber-600 text-white shadow-lg': filter() === cat}"
                    class="px-8 py-2.5 rounded-full border text-sm font-semibold tracking-wide transition-all duration-300 border-gray-200 hover:border-amber-600 hover:text-amber-600">
              {{ cat }}
            </button>
          }
        </div>

        <!-- Masonry Grid -->
        <div class="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          @for (img of filteredImages(); track img.id) {
            <div class="relative group overflow-hidden bg-gray-100 rounded-lg break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <img [src]="img.url" 
                   [alt]="img.alt" 
                   class="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                   loading="lazy"
                   (error)="onImageError($event)">
              
              <!-- Overlay with details -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span class="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2 block">
                    {{ img.category }}
                  </span>
                  <h3 class="text-xl font-bold text-white serif tracking-wide">
                    Your Studio Signature
                  </h3>
                  <p class="text-white/60 text-xs mt-2 italic">
                    Shot on Professional Gear
                  </p>
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Empty State -->
        @if (filteredImages().length === 0) {
          <div class="text-center py-32">
            <div class="text-amber-200 text-6xl mb-4 opacity-50">📷</div>
            <p class="text-gray-400 font-medium italic">
              No images found in the "{{ filter() }}" category.
            </p>
          </div>
        }

        <!-- Portfolio CTA -->
        <div class="mt-24 text-center border-t border-gray-100 pt-16">
          <p class="text-gray-500 mb-6 italic">Like what you see?</p>
          <a routerLink="/contact" 
             class="inline-block bg-gray-900 text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-amber-600 transition-colors">
            Book Your Session
          </a>
        </div>
      </div>
    </div>
  `
})
export class GalleryComponent implements OnInit {
  filter = signal<string>('All');
  categories = ['All', 'Wedding', 'Portrait', 'Event', 'Outdoor'];
  fallbackImage = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop';
  
  images: GalleryImage[] = [
    { id: 'w1', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop', alt: 'Luxury wedding reception decor and table setting by Your Studio', category: 'Wedding' },
    { id: 'w2', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop', alt: 'Candid cinematic moment of bride and groom by Your Studio', category: 'Wedding' },
    { id: 'w3', url: 'https://images.unsplash.com/photo-1519225495045-39560666ec45?q=80&w=1200&auto=format&fit=crop', alt: 'Fine art bridal portrait capturing elegant details', category: 'Wedding' },
    { id: 'e1', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop', alt: 'Professional corporate seminar and networking event coverage', category: 'Event' },
    { id: 'e2', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop', alt: 'Dynamic live concert and festival atmosphere photography', category: 'Event' },
    { id: 'e3', url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop', alt: 'Vibrant social gala and party photography in Your City', category: 'Event' },
    { id: 'p1', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop', alt: 'Creative fashion studio portrait for individual branding', category: 'Portrait' },
    { id: 'p2', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop', alt: 'Professional corporate headshot for executive profiles', category: 'Portrait' },
    { id: 'p3', url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop', alt: 'Artistic individual portrait session by Your Studio', category: 'Portrait' },
    { id: 'o1', url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop', alt: 'Breathtaking outdoor landscape photography session at dawn', category: 'Outdoor' },
    { id: 'o2', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop', alt: 'Mountain lifestyle photography and adventure shoots', category: 'Outdoor' },
    { id: 'o3', url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop', alt: 'Scenic outdoor lifestyle shoot in Your Area', category: 'Outdoor' }
  ];

  filteredImages = computed(() => {
    const currentFilter = this.filter();
    return currentFilter === 'All' ? this.images : this.images.filter(img => img.category === currentFilter);
  });

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Photography Portfolio | Your Studio Gallery',
      description: 'Explore the stunning photography portfolio of Your Studio. Professional wedding, portrait, and event photography highlights from Your City.',
      keywords: 'photography portfolio, wedding gallery, portrait photography examples'
    });
  }

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    if (target.src !== this.fallbackImage) {
      target.src = this.fallbackImage;
    }
  }
}
