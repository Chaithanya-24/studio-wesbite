
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { GalleryImage } from '../types';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const images: GalleryImage[] = [
    // Wedding - High-end cinematic wedding photography
    { 
      id: 'w1', 
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop', 
      alt: 'Luxury wedding reception decor and table setting by Your Studio', 
      category: 'Wedding' 
    },
    { 
      id: 'w2', 
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop', 
      alt: 'Candid cinematic moment of bride and groom by Your Studio', 
      category: 'Wedding' 
    },
    { 
      id: 'w3', 
      url: 'https://images.unsplash.com/photo-1519225495045-39560666ec45?q=80&w=1200&auto=format&fit=crop', 
      alt: 'Fine art bridal portrait capturing elegant details', 
      category: 'Wedding' 
    },
    
    // Event - Professional corporate and social coverage
    { 
      id: 'e1', 
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop', 
      alt: 'Professional corporate seminar and networking event coverage', 
      category: 'Event' 
    },
    { 
      id: 'e2', 
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop', 
      alt: 'Dynamic live concert and festival atmosphere photography', 
      category: 'Event' 
    },
    { 
      id: 'e3', 
      url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop', 
      alt: 'Vibrant social gala and party photography in Your City', 
      category: 'Event' 
    },

    // Portrait - High-end studio and creative portraits
    { 
      id: 'p1', 
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop', 
      alt: 'Creative fashion studio portrait for individual branding', 
      category: 'Portrait' 
    },
    { 
      id: 'p2', 
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop', 
      alt: 'Professional corporate headshot for executive profiles', 
      category: 'Portrait' 
    },
    { 
      id: 'p3', 
      url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop', 
      alt: 'Artistic individual portrait session by Your Studio', 
      category: 'Portrait' 
    },

    // Outdoor - Nature and lifestyle photography
    { 
      id: 'o1', 
      url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop', 
      alt: 'Breathtaking outdoor landscape photography session at dawn', 
      category: 'Outdoor' 
    },
    { 
      id: 'o2', 
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop', 
      alt: 'Mountain lifestyle photography and adventure shoots', 
      category: 'Outdoor' 
    },
    { 
      id: 'o3', 
      url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop', 
      alt: 'Scenic outdoor lifestyle shoot in Your Area', 
      category: 'Outdoor' 
    },
  ];

  const categories = ['All', 'Wedding', 'Portrait', 'Event', 'Outdoor'];
  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  const fallbackImage = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop';

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Photography Portfolio | Your Studio Gallery"
        description="Explore the stunning photography portfolio of Your Studio. Professional wedding, portrait, and event photography highlights from Your City."
      />

      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4 text-center">Our Portfolio</h1>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          A collection of our finest work across weddings, events, and portraits. We capture the essence of every moment with precision and artistry in Your City.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full border text-sm font-semibold tracking-wide transition-all duration-300 ${
                filter === cat 
                ? 'bg-amber-600 border-amber-600 text-white shadow-lg shadow-amber-600/20' 
                : 'border-gray-200 text-gray-500 hover:border-amber-600 hover:text-amber-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              className="relative group overflow-hidden bg-gray-100 rounded-lg break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100/50"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== fallbackImage) {
                    target.src = fallbackImage;
                  }
                }}
              />
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-bold mb-2 block">
                    {img.category}
                  </span>
                  <h3 className="text-xl font-bold text-white serif tracking-wide">
                    Your Studio Signature
                  </h3>
                  <p className="text-white/60 text-xs mt-2 italic">
                    Shot on Professional Gear
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-32">
            <div className="text-amber-200 text-6xl mb-4 opacity-50">📷</div>
            <p className="text-gray-400 font-medium italic">
              No images found in the "{filter}" category.
            </p>
          </div>
        )}

        {/* Portfolio CTA */}
        <div className="mt-24 text-center border-t border-gray-100 pt-16">
          <p className="text-gray-500 mb-6 italic">Like what you see?</p>
          <a 
            href="#/contact" 
            className="inline-block bg-gray-900 text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-amber-600 transition-colors"
          >
            Book Your Session
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
