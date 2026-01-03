
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-950 text-gray-400 py-16">
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h3 class="text-white text-xl font-bold serif mb-6 tracking-widest">YOUR STUDIO</h3>
          <p class="text-sm leading-relaxed">Professional storytelling through high-quality photography in Your City.</p>
        </div>
        <div>
          <h4 class="text-white text-sm font-bold uppercase mb-6 tracking-widest">Contact</h4>
          <p class="text-sm">123 Sample Street, Your City</p>
          <p class="text-sm">+91 90000 00000</p>
        </div>
        <div>
          <h4 class="text-white text-sm font-bold uppercase mb-6 tracking-widest">Follow Us</h4>
          <div class="flex justify-center md:justify-start space-x-6">
            <a href="#" class="hover:text-amber-500">Instagram</a>
            <a href="#" class="hover:text-amber-500">Facebook</a>
          </div>
        </div>
      </div>
      <div class="text-center mt-12 pt-8 border-t border-gray-900 text-xs uppercase tracking-widest">
        &copy; 2024 YOUR STUDIO PHOTOGRAPHY. ALL RIGHTS RESERVED.
      </div>
    </footer>
  `
})
export class FooterComponent {}
