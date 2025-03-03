import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';

const redirectUnauthorizedToLanding = () =>
  redirectUnauthorizedTo(['auth', 'login']);

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./domains/landing/pages/landing.component').then(
        (m) => m.LandingComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./domains/login/pages/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'generate',
    loadComponent: () =>
      import('./domains/generate/pages/generate.component').then(
        (m) => m.GenerateComponent
      ),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLanding },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
