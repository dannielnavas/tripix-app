import { Component } from '@angular/core';
import { GoogleLoginComponent } from '../components/google-login.component';

@Component({
  selector: 'app-login',
  imports: [GoogleLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
