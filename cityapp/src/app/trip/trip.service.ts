import { Injectable } from '@angular/core';
import { Trip } from './trip.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  formData: Trip;
  readonly BaseURI = 'http://localhost:62999/api';
  list: Trip[];

  constructor(private http: HttpClient) { }

  postTrip(formData: Trip) {
    return this.http.post(this.BaseURI + '/Trip', formData);
  }

  refreshList() {
    return this.http.get(this.BaseURI + '/Trip')
      .toPromise()
      .then(res => this.list = res as Trip[]);
  }
}
