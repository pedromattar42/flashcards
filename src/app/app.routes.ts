import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'baralho',
    loadChildren: () =>
      import('./pages/decks/decks.routes').then((m) => m.DECKS_ROUTES),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login/login.component').then((m) => m.LoginComponent),
  }
];
