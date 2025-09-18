import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./components/pages/home-page/home-page.component').then(m => m.HomePageComponent)
  },
  {
    path: 'chapters',
    loadComponent: () => import('./components/pages/chapters-page/chapters-page.component').then(m => m.ChaptersPageComponent)
  },
  {
    path: '1-introducao-cannabis',
    loadComponent: () => import('./components/pages/chapter1-page/chapter1-page.component').then(m => m.Chapter1PageComponent)
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
    redirectTo: 'home'
  }
];
