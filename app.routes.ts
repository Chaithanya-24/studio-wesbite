
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery.component').then(m => m.GalleryComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
