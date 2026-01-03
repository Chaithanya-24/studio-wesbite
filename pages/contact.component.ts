
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="pt-32 pb-24 container mx-auto px-6">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 class="text-5xl font-bold mb-8 serif">Let's Create <br /><span class="italic text-amber-600">Something Beautiful</span></h1>
          <p class="text-gray-600 text-lg mb-12 leading-relaxed">
            Contact Your Studio for inquiries regarding professional photography services in Your City. We look forward to hearing about your project.
          </p>
          <div class="space-y-8">
            <div class="flex items-start space-x-6">
               <div class="text-amber-600 font-bold">📍</div>
               <div>
                  <p class="font-bold text-gray-900 uppercase tracking-widest text-xs mb-1">Visit Our Studio</p>
                  <p class="text-gray-500">123 Sample Street, Your City, 000000</p>
               </div>
            </div>
            <div class="flex items-start space-x-6">
               <div class="text-amber-600 font-bold">📞</div>
               <div>
                  <p class="font-bold text-gray-900 uppercase tracking-widest text-xs mb-1">Call Us</p>
                  <p class="text-gray-500">+91 90000 00000</p>
               </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-12 shadow-2xl border border-gray-100 rounded-lg">
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" *ngIf="!submitted" class="space-y-6">
            <div>
              <label class="block text-xs uppercase font-bold text-gray-400 mb-2 tracking-widest">Full Name</label>
              <input formControlName="name" class="w-full border-0 border-b border-gray-200 focus:border-amber-600 focus:ring-0 py-4 transition-all">
              <p *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched" class="text-red-500 text-xs mt-2 font-medium italic">Please provide your name.</p>
            </div>
            <div>
              <label class="block text-xs uppercase font-bold text-gray-400 mb-2 tracking-widest">Email Address</label>
              <input formControlName="email" type="email" class="w-full border-0 border-b border-gray-200 focus:border-amber-600 focus:ring-0 py-4 transition-all">
              <p *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" class="text-red-500 text-xs mt-2 font-medium italic">A valid email is required.</p>
            </div>
            <div>
              <label class="block text-xs uppercase font-bold text-gray-400 mb-2 tracking-widest">Message</label>
              <textarea formControlName="message" rows="4" class="w-full border-0 border-b border-gray-200 focus:border-amber-600 focus:ring-0 py-4 transition-all"></textarea>
            </div>
            <button type="submit" [disabled]="contactForm.invalid" 
                    class="w-full bg-gray-900 text-white py-5 font-bold uppercase tracking-[0.2em] hover:bg-amber-600 transition-all disabled:opacity-50 text-sm">
              Send Inquiry
            </button>
          </form>
          
          <div *ngIf="submitted" class="text-center py-20 animate-fade-in">
            <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">✓</div>
            <h3 class="text-3xl font-bold mb-4 serif">Inquiry Sent!</h3>
            <p class="text-gray-500">We've received your message and will respond within 24 hours.</p>
            <button (click)="submitted = false" class="mt-10 text-amber-600 font-bold uppercase tracking-widest text-xs border-b border-amber-600">Send Another</button>
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
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Contact Your Studio Photography | Book Your Session',
      description: 'Get in touch with the best professional photographers in Your City. Request a quote for your wedding or event today.'
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Studio Inquiry Received:', this.contactForm.value);
      this.submitted = true;
      this.contactForm.reset();
    }
  }
}
