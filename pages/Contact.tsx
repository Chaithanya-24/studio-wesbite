
import React, { useState } from 'react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Wedding',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted to Your Studio:', formData);
    setIsSubmitted(true);
    // Logic for API submission would go here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Contact Your Studio Photography | Book Your Session"
        description="Get in touch with Your Studio for professional photography in Your City. Inquire about weddings, portraits, or events."
      />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h1 className="text-5xl font-bold mb-8">Let's Create <br /><span className="serif italic">Something Beautiful</span></h1>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              We're excited to hear about your upcoming project or special day. Contact Your Studio for any inquiries regarding photography services in Your City and the surrounding area.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-lg text-amber-600 mr-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                  <p className="text-gray-500 text-sm italic">123 Sample Street, Your City, 000000</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-lg text-amber-600 mr-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-500 text-sm">+91 90000 00000</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-lg text-amber-600 mr-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-500 text-sm">hello@yourstudio.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 shadow-2xl border border-gray-100 relative">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold">Thank You!</h3>
                <p className="text-gray-500">Your message has been received. Our team at Your Studio will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-amber-600 font-bold uppercase tracking-widest text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-0 border-b border-gray-200 focus:border-amber-600 focus:ring-0 py-3 text-gray-900 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-0 border-b border-gray-200 focus:border-amber-600 focus:ring-0 py-3 text-gray-900 transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-0 border-b border-gray-200 focus:border-amber-600 focus:ring-0 py-3 text-gray-900 transition-colors"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Inquiry Type</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-0 border-b border-gray-200 focus:border-amber-600 focus:ring-0 py-3 text-gray-900 transition-colors"
                  >
                    <option value="Wedding">Wedding Photography</option>
                    <option value="Portrait">Portrait Session</option>
                    <option value="Event">Event Coverage</option>
                    <option value="Commercial">Commercial / Branding</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-0 border-b border-gray-200 focus:border-amber-600 focus:ring-0 py-3 text-gray-900 transition-colors"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gray-900 text-white py-5 font-bold uppercase tracking-widest hover:bg-amber-600 transition-all duration-300 rounded-sm"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
