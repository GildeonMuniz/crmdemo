import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { featureGuard } from './guards/feature.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard, featureGuard]
  },
  {
    path: 'leads',
    loadComponent: () => import('./pages/leads-list/leads-list.component').then(m => m.LeadsListComponent),
    canActivate: [authGuard, featureGuard]
  },
  {
    path: 'leads/:id',
    loadComponent: () => import('./pages/lead-detail/lead-detail.component').then(m => m.LeadDetailComponent),
    canActivate: [authGuard, featureGuard]
  },
  {
    path: 'analytics',
    loadComponent: () => import('./pages/analytics/analytics.component').then(m => m.AnalyticsComponent),
    canActivate: [authGuard, featureGuard]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
