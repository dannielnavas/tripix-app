import { inject, Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly firebaseAuth = inject(Auth);

  async googleLogin(): Promise<User> {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    try {
      const result = await signInWithPopup(this.firebaseAuth, provider);
      const user = result.user;
      if (!user) {
        throw new Error('Google-Login error');
      }
      return user;
    } catch (error) {
      console.error('Google-Login error:', error);
      throw error;
    }
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth).then(() => {
      sessionStorage.clear();
    });
    return from(promise);
  }
}
