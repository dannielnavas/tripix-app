import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-generate',
  imports: [ReactiveFormsModule],
  templateUrl: './form-generate.component.html',
  styleUrl: './form-generate.component.scss',
})
export class FormGenerateComponent {
  formGenerate!: FormGroup;

  readonly formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGenerate = this.formBuilder.group({
      date: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      budget: ['', [Validators.required]],
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.formGenerate.valid) {
      console.log('Form is valid');
    } else {
      console.log('Form is invalid');
    }
  }
}
