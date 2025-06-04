import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface SearchCriteria {
  startDate: string;
  endDate: string;
  city: string;
  country: string;
  budget: number;
}

@Component({
  selector: 'app-search-form',
  imports: [FormsModule],
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  @Output() search = new EventEmitter<SearchCriteria>();

  searchCriteria: SearchCriteria = {
    startDate: '',
    endDate: '',
    city: '',
    country: '',
    budget: 0,
  };

  popularDestinations = ['Paris', 'Bali', 'Tokyo', 'New York', 'Maldives'];

  onSubmit() {
    this.search.emit(this.searchCriteria);
  }
}
