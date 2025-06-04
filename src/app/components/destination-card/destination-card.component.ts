import { Component, computed, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { UnsplashService } from '../../domains/shared/services/images/unsplash.service';

interface Destination {
  image: string;
  name: string;
  country: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
}

@Component({
  selector: 'app-destination-card',
  imports: [],
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.scss'],
})
export class DestinationCardComponent {
  private readonly UnsplashService = inject(UnsplashService);

  $destination = input.required<Destination>({ alias: 'destination' });

  unsplashResource = rxResource({
    request: () => ({
      image: this.$destination().country,
    }),
    loader: ({ request }) => this.UnsplashService.getImage(request.image),
  });

  $destinationImage = computed(() => {
    console.log(
      'computed',
      this.unsplashResource.value()?.results[0]?.urls?.full
    );
    return this.unsplashResource.value()?.results[0]?.urls?.full;
  });

  get stars(): number[] {
    return Array(Math.floor(this.$destination().rating)).fill(0);
  }

  get emptyStars(): number[] {
    return Array(5 - Math.floor(this.$destination().rating)).fill(0);
  }
}
