import { Component, computed, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { IUnsplashResponse } from '../../domains/shared/models/unsplash.model';
import { UnsplashService } from '../../domains/shared/services/images/unsplash.service';

interface SpecialOffer {
  image: string;
  title: string;
  duration: string;
  rating: number;
  reviews: number;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
}

@Component({
  selector: 'app-special-offer-card',
  imports: [],
  templateUrl: './special-offer-card.component.html',
  styleUrls: ['./special-offer-card.component.scss'],
})
export class SpecialOfferCardComponent {
  private readonly unsplashService = inject(UnsplashService);
  readonly $offer = input.required<SpecialOffer>({ alias: 'offer' });

  unsplashResource = rxResource<IUnsplashResponse, { images: string }>({
    params: () => ({
      images: this.$offer().title,
    }),
    stream: ({ params }) => this.unsplashService.getImage(params.images),
    defaultValue: {
      total: 0,
      total_pages: 0,
      results: [],
    },
  });

  $destinationImage = computed(() => {
    console.log(
      'computed',
      this.unsplashResource.value()?.results[0]?.urls?.full
    );
    return this.unsplashResource.value()?.results[0]?.urls?.full;
  });

  get stars(): number[] {
    return Array(Math.floor(this.$offer().rating)).fill(0);
  }

  get emptyStars(): number[] {
    return Array(5 - Math.floor(this.$offer().rating)).fill(0);
  }
}
