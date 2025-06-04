import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUnsplashResponse } from '../../models/unsplash.model';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://api.unsplash.com/search/photos';

  getImage(city: string): Observable<IUnsplashResponse> {
    const url = new URL(this.apiUrl);
    url.searchParams.append('page', '1');
    url.searchParams.append('query', city);
    url.searchParams.append(
      'client_id',
      'FJM3Kg8a1eAlXCMPS8UAeBGHLczPvPfBkRp_-T6Wi4s'
    );

    return this.http.get<IUnsplashResponse>(url.toString());
  }
}
