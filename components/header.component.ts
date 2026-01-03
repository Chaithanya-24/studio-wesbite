
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header [ngClass]="{'bg-white shadow-md py-4': isScrolled, 'bg-transparent py-6': !isScrolled}"
            class="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div class="container mx-auto px-6 flex justify-between items-center">
        <a routerLink="/" class="text-2xl font-bold serif tracking-tight"
           [ngClass]="{'text-gray-900': isScrolled || !isHome, 'text-white': !isScrolled && isHome}">
          YOUR STUDIO
        </a>

        <nav class="hidden md:flex space-x-8">
          <a *ngFor="let link of navLinks" 
             [routerLink]="link.path"
             routerLinkActive="text-amber-600 font-bold"
             [routerLinkActiveOptions]="{exact: true}"
             class="text-sm font-medium uppercase tracking-widest transition-colors hover:text-amber-600"
             [ngClass]="{'text-gray-900': isScrolled || !isHome, 'text-white': !isScrolled && isHome}">
            {{ link.label }}
          </a>
        </nav>

        <button (click)="isMenuOpen = !isMenuOpen" class="md:hidden" 
                [ngClass]="{'text-gray-900': isScrolled || !isHome, 'text-white': !isScrolled && isHome}">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div *ngIf="isMenuOpen" class="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 md:hidden animate-fade-in">
        <button (click)="isMenuOpen = false" class="absolute top-6 right-6 text-gray-900">
           <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <a *ngFor="let link of navLinks" 
           [routerLink]="link.path" 
           (click)="isMenuOpen = false"
           class="text-2xl font-semibold serif tracking-wide text-gray-900 hover:text-amber-600">
          {{ link.label }}
        </a>
      </div>
    </header>
  `
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;
  navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  constructor(private router: Router) {}

  get isHome() {
    return this.router.url === '/';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
