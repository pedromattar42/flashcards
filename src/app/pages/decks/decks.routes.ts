import { Routes } from '@angular/router';

export const DECKS_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'meus-baralhos',
      },
      {
        path: 'meus-baralhos',
        loadComponent: () =>
          import('./deck/deck.component').then((m) => m.DeckComponent),
      },
      {
        path: 'visualizar/:id',
        loadComponent: () =>
          import('./deck-view/deck-view.component').then(
            (m) => m.DeckViewComponent
          ),
      },
      {
        path: 'estudar/:id',
        loadComponent: () =>
          import('./study/study.component').then((m) => m.StudyComponent),
      },
    ],
  },
];
