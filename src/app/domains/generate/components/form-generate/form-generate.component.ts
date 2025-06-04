
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-generate',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-generate.component.html',
  styleUrl: './form-generate.component.scss',
})
export class FormGenerateComponent {
  formGenerate!: FormGroup;
  countries: string[] = ['Spain', 'Mexico', 'Argentina', 'Colombia', 'Chile'];
  cities: { [key: string]: string[] } = {
    Spain: ['Madrid', 'Barcelona', 'Valencia'],
    Mexico: ['Mexico City', 'Guadalajara', 'Monterrey'],
    Argentina: ['Buenos Aires', 'Cordoba', 'Rosario'],
    Colombia: ['Bogota', 'Medellin', 'Cali'],
    Chile: ['Santiago', 'Valparaiso', 'Concepcion'],
  };
  filteredCountries: string[] = [];
  filteredCities: string[] = [];
  showCountryDropdown = false;
  showCityDropdown = false;

  readonly formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.initForm();
    this.setupAutocompleteListeners();
  }

  initForm() {
    this.formGenerate = this.formBuilder.group({
      dateRange: this.formBuilder.group({
        start: ['', Validators.required],
        end: ['', Validators.required],
      }),
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      budget: ['', [Validators.required]],
    });
  }

  setupAutocompleteListeners() {
    this.formGenerate.get('country')?.valueChanges.subscribe((value) => {
      this.filteredCountries = this._filterCountries(value || '');
    });

    this.formGenerate.get('city')?.valueChanges.subscribe((value) => {
      const country = this.formGenerate.get('country')?.value;
      this.filteredCities = this._filterCities(value || '', country);
    });
  }

  private _filterCountries(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter((country) =>
      country.toLowerCase().includes(filterValue)
    );
  }

  private _filterCities(value: string, country: string): string[] {
    const filterValue = value.toLowerCase();
    const availableCities = this.cities[country] || [];
    return availableCities.filter((city) =>
      city.toLowerCase().includes(filterValue)
    );
  }

  onCountryInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.filteredCountries = this._filterCountries(value);
    this.showCountryDropdown = true;
  }

  onCityInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const country = this.formGenerate.get('country')?.value;
    this.filteredCities = this._filterCities(value, country);
    this.showCityDropdown = true;
  }

  selectCountry(country: string) {
    this.formGenerate.patchValue({ country });
    this.showCountryDropdown = false;
  }

  selectCity(city: string) {
    this.formGenerate.patchValue({ city });
    this.showCityDropdown = false;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.formGenerate.valid) {
      console.log('Form is valid', this.formGenerate.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
