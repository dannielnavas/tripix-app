import { Component } from '@angular/core';
import { FormGenerateComponent } from '../components/form-generate/form-generate.component';

@Component({
  selector: 'app-generate',
  imports: [FormGenerateComponent],
  templateUrl: './generate.component.html',
  styleUrl: './generate.component.scss',
})
export class GenerateComponent {}
