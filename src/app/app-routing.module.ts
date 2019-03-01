import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './mainHome/home.module#HomeModule'
  },
  {
    path: 'top-stories',
    loadChildren: './top-audicles/top-audicles.module#TopAudiclesModule'
  },
  {
    path: 'results',
    loadChildren: './results/results.module#ResultsModule'
  },
  {
    path: 'audpress',
    loadChildren: './audpress/audpress.module#AudpressModule'
  },
  {
    path: 'audpress-dashboard',
    loadChildren: './audpress-creator/audpress-creator.module#AudpressCreatorModule'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }
];


