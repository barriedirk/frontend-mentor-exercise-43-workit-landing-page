import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Workit - Innovative Analytics Platform',
    loadComponent: () =>
      import('./shared/layout/marketing/marketing').then((m) => m.Marketing),
    children: [
      {
        path: '',
        title: 'Workit - Home',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
