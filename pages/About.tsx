
import React from 'react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Experienced Professional Photographers in Your City"
        description="Learn more about Your Studio, a professional photography team dedicated to excellence in Your City. Our history, vision, and team."
      />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 text-gray-900">Our Passion for <br /> <span className="serif italic">Visual Excellence</span></h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=600&h=800" 
                alt="Lead photographer at Your Studio during a high-end shoot" 
                className="rounded shadow-2xl w-full" 
                loading="lazy" 
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Experienced Professional Photographers</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded on the belief that every moment is a piece of art, Your Studio has been providing premium photography services to the Your City community for over 10 years.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our journey started in a small basement studio, driven by an obsession with lighting and composition. Today, we are recognized as a leading name for wedding and event photography services near Your Area.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-4xl font-bold text-amber-600">500+</h4>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Weddings</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-amber-600">1k+</h4>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Portraits</p>
                </div>
              </div>
            </div>
          </div>

          <section className="bg-gray-50 p-12 rounded-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Your Studio?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: 'Personalized Approach', desc: 'We take the time to understand your vision before we even pick up the camera.' },
                { title: 'Premium Equipment', desc: 'Utilizing state-of-the-art Sony and Canon mirrorless systems for ultra-crisp results.' },
                { title: 'Fast Delivery', desc: 'Get your fully edited high-resolution gallery within 14 days of your session.' },
                { title: 'Artistic Vision', desc: 'Our unique editing style brings a cinematic feel to every photograph we deliver.' }
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="font-bold text-gray-900 flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 pl-5">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-8">Meet the Visionaries</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { id: '1', name: 'Alex Rivera', role: 'Lead Wedding Artist', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500' },
                { id: '2', name: 'Sarah Chen', role: 'Portrait Specialist', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=500' },
                { id: '3', name: 'Marcus Thorne', role: 'Event Director', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500' }
              ].map((member) => (
                <div key={member.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                    <img src={member.img} alt={`Professional photographer ${member.name} at Your Studio`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="font-bold text-xl uppercase tracking-widest">{member.name}</h3>
                  <p className="text-sm text-amber-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
