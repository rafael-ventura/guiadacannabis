import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/pages/home-page/home-page.component').then(m => m.HomePageComponent)
  },
  {
    path: 'chapters',
    loadComponent: () => import('./components/pages/chapters-page/chapters-page.component').then(m => m.ChaptersPageComponent)
  },
  {
    path: 'chapters/:id',
    loadComponent: () => import('./components/chapters/chapter-01/chapter-01.component').then(m => m.Chapter01Component)
  },
  {
    path: 'search',
    loadComponent: () => import('./components/pages/search-page/search-page.component').then(m => m.SearchPageComponent)
  },
  {
    path: 'team',
    loadComponent: () => import('./components/pages/team-page/team-page.component').then(m => m.TeamPageComponent)
  },
  {
    path: 'settings',
    loadComponent: () => import('./components/pages/settings-page/settings-page.component').then(m => m.SettingsPageComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
