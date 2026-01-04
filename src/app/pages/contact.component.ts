import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="pt-32 pb-24">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <!-- Info Side -->
          <div class="animate-fade-in">
            <h1 class="text-5xl font-bold mb-8">
              Let's Create <br /><span class="serif italic text-amber-600">Something Beautiful</span>
            </h1>
            <p class="text-gray-600 text-lg mb-12 leading-relaxed">
              We're excited to hear about your upcoming project or special day. Contact Your Studio for any inquiries regarding photography services in Your City and the surrounding area.
            </p>

            <div class="space-y-8">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-lg text-amber-600 mr-6 flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-1">Our Location</h4>
                  <p class="text-gray-500 text-sm italic">123 Sample Street, Your City, 000000</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-lg text-amber-600 mr-6 flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-1">Phone</h4>
                  <p class="text-gray-500 text-sm">+91 90000 00000</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-lg text-amber-600 mr-6 flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-1">Email</h4>
                  <p class="text-gray-500 text-sm">hello&#64;yourstudio.com</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Form Side -->
          <div class="bg-white p-8 md:p-12 shadow-2xl border border-gray-100 relative rounded-lg animate-fade-in-up">
            
            <div *ngIf="submitted" class="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fade-in py-12">
              <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-3xl font-bold serif">Thank You!</h3>
              <p class="text-gray-500">Your message has been received. Our team at Your Studio will get back to you within 24 hours.</p>
              <button (click)="submitted = false; contactForm.reset()" 
                      class="text-amber-600 font-bold uppercase tracking-widest text-sm hover:text-amber-700 transition-colors">
                Send Another Message
              </button>
            </div>

            <form *ngIf="!submitted" [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <div>
                <label class="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Full Name</label>
                <input formControlName="name" 
                       class="w-full bg-gray-50 border-0 border-b border-gray-200 focus:border-amber-600 focus:ring-0 py-3 text-gray-900 transition-colors"
                       placeholder="Enter your name">
                <p *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched" 
                   class="text-red-500 text-xs mt-2 font-medium italic">Please provide your name.</p>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Email Address</label>
                  <input formControlName="email" type="email" 
                         class="w-full bg-gray-50 border-0 border-b border-gray-200 focus:border-amber-600 focus:ring-0 py-3 text-gray-900 transition-colors"
                         placeholder="email@example.com">
                  <p *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" 
                     class="text-red-500 text-xs mt-2 font-medium italic">A valid email is required.</p>
                </div>
                <div>
                  <label class="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Phone Number</label>
                  <input formControlName="phone" type="tel" 
                         class="w-full bg-gray-50 border-0 border-b border-gray-200 focus:border-amber-600 focus:ring-0 py-3 text-gray-900 transition-colors"
                         placeholder="+91 00000 00000">
                </div>
              </div>

              <div>
                <label class="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Inquiry Type</label>
                <select formControlName="service" 
                        class="w-full bg-gray-50 border-0 border-b border-gray-200 focus:border-amber-600 focus:ring-0 py-3 text-gray-900 transition-colors">
                  <option value="Wedding">Wedding Photography</option>
                  <option value="Portrait">Portrait Session</option>
                  <option value="Event">Event Coverage</option>
                  <option value="Commercial">Commercial / Branding</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label class="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Your Message</label>
                <textarea formControlName="message" rows="4" 
                          class="w-full bg-gray-50 border-0 border-b border-gray-200 focus:border-amber-600 focus:ring-0 py-3 text-gray-900 transition-colors"
                          placeholder="Tell us about your project..."></textarea>
                <p *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched" 
                   class="text-red-500 text-xs mt-2 font-medium italic">Please enter a message.</p>
              </div>

              <button type="submit" 
                      [disabled]="contactForm.invalid"
                      class="w-full bg-gray-900 text-white py-5 font-bold uppercase tracking-widest hover:bg-amber-600 transition-all duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private seo: SeoService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      service: ['Wedding'],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Contact Your Studio Photography | Book Your Session',
      description: 'Get in touch with Your Studio for professional photography in Your City. Inquire about weddings, portraits, or events.',
      keywords: 'contact photographer, book photography session, photography inquiry'
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted to Your Studio:', this.contactForm.value);
      this.submitted = true;
    }
  }
}

