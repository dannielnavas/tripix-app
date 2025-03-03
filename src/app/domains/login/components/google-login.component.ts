import { Component, inject, signal } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-google-login',
  imports: [],
  template: '<button (click)="googleLogin()">Google-Login</button>',
  styleUrl: './google-login.component.scss',
})
export class GoogleLoginComponent {
  user = signal<User | undefined>(undefined);

  authService: AuthService = inject(AuthService);
  router = inject(Router);

  async googleLogin(): Promise<void> {
    try {
      this.user.set(await this.authService.googleLogin());
      console.log('Google-Login user:', this.user());
      if (this.user()) {
        this.router.navigateByUrl('/generate');
      }
    } catch (error) {
      console.error('Google-Login error:', error);
    }
  }
}
