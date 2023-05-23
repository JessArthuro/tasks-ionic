import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },
  // {
  //   path: 'add',
  //   loadComponent: () => import('./pages/add/add.page').then( m => m.AddPage)
  // },
];
