import { Component, signal } from '@angular/core';
import { DestinationCardComponent } from '../../../components/destination-card/destination-card.component';
import { SearchFormComponent } from '../../../components/search-form/search-form.component';
import { SpecialOfferCardComponent } from '../../../components/special-offer-card/special-offer-card.component';

@Component({
  selector: 'app-generate',
  imports: [
    SearchFormComponent,
    DestinationCardComponent,
    SpecialOfferCardComponent,
  ],
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss'],
})
export class GenerateComponent {
  $destinations = signal([
    {
      image: '',
      name: 'Paris',
      country: 'France',
      price: 1200,
      rating: 5.0,
      reviews: 120,
      description:
        'Experience the city of love with its iconic Eiffel Tower and world-class cuisine.',
    },
    {
      image: '',
      name: 'Santorini',
      country: 'Greece',
      price: 1800,
      rating: 4.8,
      reviews: 95,
      description:
        'Stunning white buildings, blue domes, and breathtaking sunsets over the Aegean Sea.',
    },
    {
      image: '',
      name: 'Bali',
      country: 'Indonesia',
      price: 950,
      rating: 4.7,
      reviews: 210,
      description:
        'Tropical paradise with lush rice terraces, sacred temples, and vibrant beach culture.',
    },
    {
      image: '',
      name: 'Tokyo',
      country: 'Japan',
      price: 1500,
      rating: 4.9,
      reviews: 180,
      description:
        'Blend of ultramodern and traditional, with vibrant street life and cutting-edge technology.',
    },
  ]);

  $specialOffers = signal([
    {
      image: '',
      title: 'Maldives Luxury Escape',
      duration: '7 days in paradise',
      rating: 5.0,
      reviews: 250,
      description:
        'Overwater bungalows, crystal clear waters, and white sand beaches. All-inclusive luxury package.',
      originalPrice: 3200,
      discountedPrice: 2240,
      discount: 30,
    },
    {
      image: '',
      title: 'Swiss Alps Adventure',
      duration: '5 days of mountain exploration',
      rating: 4.8,
      reviews: 185,
      description:
        'Breathtaking mountain views, skiing, hiking, and luxury chalets. Includes equipment rental.',
      originalPrice: 1800,
      discountedPrice: 1350,
      discount: 25,
    },
  ]);

  onSearch(searchCriteria: any) {
    console.log('Search criteria:', searchCriteria);
    // Implementar la lógica de búsqueda aquí
  }
}
