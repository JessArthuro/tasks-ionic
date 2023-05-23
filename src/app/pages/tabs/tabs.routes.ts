import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('../tab1/tab1.page').then((m) => m.Tab1Page),
          },
          {
            path: 'add/:listId',
            loadComponent: () =>
              import('../add/add.page').then((m) => m.AddPage),
          },
        ],
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('../tab2/tab2.page').then((m) => m.Tab2Page),
          },
          {
            path: 'add/:listId',
            loadComponent: () =>
              import('../add/add.page').then((m) => m.AddPage),
          },
        ],
      },
      // {
      //   path: 'tab1',
      //   loadComponent: () =>
      //     import('../tab1/tab1.page').then((m) => m.Tab1Page),
      // },
      // {
      //   path: 'tab2',
      //   loadComponent: () =>
      //     import('../tab2/tab2.page').then((m) => m.Tab2Page),
      // },
      // {
      //   path: 'add/:listId',
      //   loadComponent: () => 
      //      import('../add/add.page').then( m => m.AddPage)
      // },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
