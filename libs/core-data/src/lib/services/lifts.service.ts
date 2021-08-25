import { mapTo } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lift } from '@exercises/api-interfaces';

export const BASE_URL = 'https://db-30x30.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class LiftsService {
  private model = 'lifts';
  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Lift[]>(this.getUrl());
  }

  find(id: string) {
    return this.httpClient.get<Lift>(this.getUrlById(id));
  }

  create(lift: Lift) {
    return this.httpClient.post<Lift>(this.getUrl(), lift);
  }

  update(lift: Lift) {
    return this.httpClient.patch<Lift>(this.getUrlById(lift.id), lift);
  }

  delete(lift: Lift) {
    return this.httpClient
      .delete<Lift>(this.getUrlById(lift.id))
      .pipe(mapTo(lift));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
