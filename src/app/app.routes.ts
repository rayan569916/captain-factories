import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Captain Factories — Built in the Kingdom, delivered to site',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    title: 'About — Captain Factories',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'factories',
    title: 'Our factories — Captain Factories',
    loadComponent: () => import('./pages/factories/factories').then((m) => m.Factories),
  },
  {
    path: 'factories/:slug',
    title: 'Factory — Captain Factories',
    loadComponent: () =>
      import('./pages/factory-detail/factory-detail').then((m) => m.FactoryDetail),
  },
  {
    path: 'products',
    title: 'Products — Captain Factories',
    loadComponent: () => import('./pages/products/products').then((m) => m.Products),
  },
  {
    path: 'news',
    title: 'News — Captain Factories',
    loadComponent: () => import('./pages/news/news').then((m) => m.News),
  },
  {
    path: 'contact',
    title: 'Request a quote — Captain Factories',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    title: 'Page not found — Captain Factories',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
