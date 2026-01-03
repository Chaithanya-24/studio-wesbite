
import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const serviceList = [
    {
      title: 'Wedding Photography',
      price: 'Starting at ₹50,000',
      description: 'Full day coverage including pre-wedding sessions, cinematic editing, and high-resolution digital galleries.',
      features: ['2 Photographers', '1000+ Raw Photos', '200 Edited Images', 'Physical Album Option']
    },
    {
      title: 'Corporate Events',
      price: 'Starting at ₹15,000',
      description: 'Professional coverage for seminars, conferences, and office culture shoots in Your City.',
      features: ['Candid Shots', 'Keynote Coverage', 'Next-Day Preview', 'Commercial Rights']
    },
    {
      title: 'Family & Individual Portraits',
      price: 'Starting at ₹5,000',
      description: 'Elegant studio or outdoor portraits capturing personality and professional brand identity.',
      features: ['1 Hour Session', 'Multiple Outfits', '10 Retouched Images', 'Print Release']
    },
    {
      title: 'Commercial & Product',
      price: 'Contact for Quote',
      description: 'High-end imagery for e-commerce, advertising, and branding campaigns across Your Area.',
      features: ['White Background', 'Lifestyle Setting', 'High-Res TIFFs', 'Batch Editing']
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Professional Photography Services in Your City"
        description="Browse our range of photography services including weddings, corporate events, and personal portraits at Your Studio."
      />
      
      <div className="container mx-auto px-6">
        <header className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Our Services & Pricing</h1>
          <p className="text-gray-500 text-lg">
            Transparent pricing and premium quality for all your visual needs. Each package is customizable to fit your specific requirements.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {serviceList.map((service, idx) => (
            <article key={idx} className="group bg-white border border-gray-100 p-8 md:p-12 hover:border-amber-200 transition-colors shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                <span className="text-amber-600 font-bold whitespace-nowrap text-sm tracking-widest">{service.price}</span>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-4 mb-10">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-block w-full text-center border border-gray-900 py-4 font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all text-xs">
                Inquire Now
              </Link>
            </article>
          ))}
        </div>

        <section className="mt-24 bg-amber-50 p-12 text-center rounded">
          <h3 className="text-2xl font-bold mb-4">Custom Requirements?</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We understand that some projects don't fit into a box. If you have a specific vision or large-scale project in Your City, reach out for a custom proposal.
          </p>
          <Link to="/contact" className="bg-gray-900 text-white px-10 py-4 font-bold uppercase tracking-widest text-xs">
            Request Custom Quote
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Services;
