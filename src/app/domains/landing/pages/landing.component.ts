import { Component } from '@angular/core';
import { BannerComponent } from '../components/banner/banner.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-landing',
  imports: [HeaderComponent, BannerComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
