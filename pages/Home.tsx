
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const services = [
    { title: 'Wedding Photography', desc: 'Capturing the magic of your special day with a blend of candid and cinematic shots.' },
    { title: 'Portrait Sessions', desc: 'Professional portrait photography for individuals, families, and creative professionals.' },
    { title: 'Event Coverage', desc: 'Comprehensive coverage for corporate events, parties, and commercial gatherings.' },
    { title: 'Outdoor Shoots', desc: 'Utilizing natural light and breathtaking landscapes in Your City for stunning visuals.' },
  ];

  const reviews = [
    { id: '1', author: 'John Doe', content: 'Incredible experience with Your Studio. They captured our wedding perfectly in Your City.', rating: 5 },
    { id: '2', author: 'Jane Smith', content: 'Professional and talented photographers. Highly recommended for corporate events.', rating: 5 },
  ];

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Professional Photography Studio in Your City"
        description="Your Studio is a premier photography service in Your City specializing in weddings, portraits, and events. Book your session today for professional visual storytelling."
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920" 
            alt="Cinematic wedding photography by Your Studio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in">
            Professional Photography <br /> <span className="text-amber-400">Studio in Your City</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 font-light">
            Capturing the timeless moments that matter most. We specialize in high-quality visual storytelling for every occasion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-sm font-semibold tracking-widest transition-all text-sm uppercase"
            >
              Book a Photography Session
            </Link>
            <a 
              href="tel:+919000000000" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-sm font-semibold tracking-widest transition-all text-sm uppercase"
            >
              Call Your Studio
            </a>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">Expert Visual Storytellers</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed italic mb-8">
              "Your Studio is a professional photography service in Your City specializing in weddings, events, portraits, and candid photography."
            </p>
            <p className="text-gray-500 mb-10 leading-loose">
              With over a decade of experience, our team of dedicated photographers near Your Area brings a creative lens to every project. Whether it's the intimate moments of a wedding or the professional atmosphere of a corporate gala, we ensure every shot tells a unique story.
            </p>
            <Link to="/about" className="text-amber-700 font-bold uppercase tracking-widest border-b-2 border-amber-700 pb-1 hover:text-amber-900 hover:border-amber-900 transition-all">
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-amber-600 font-bold mb-4">What We Offer</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">Our Professional Services</h3>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <article key={idx} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-6 text-amber-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">{s.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 text-amber-500 mb-6">
            <span className="text-2xl font-bold">4.9 ★</span>
            <span className="text-gray-400 text-sm">(8 Reviews)</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-16">Loved by Our Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {reviews.map((r) => (
              <article key={r.id} className="text-left bg-gray-50 p-10 rounded-lg relative">
                <div className="absolute -top-4 left-10 text-6xl text-amber-200 serif">“</div>
                <p className="text-lg text-gray-700 italic mb-8 relative z-10 leading-relaxed">
                  {r.content}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-amber-600 rounded-full"></div>
                  <div>
                    <h5 className="font-bold text-gray-900">{r.author}</h5>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Verified Client</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 bg-gray-950 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 serif italic">Ready to Capture Memories?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            Don't let precious moments fade away. Contact Your Studio for the best photography services in Your City.
          </p>
          <Link to="/contact" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-[0.2em] transition-all">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
