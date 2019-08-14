import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  public filterTripDest: string = '';
  public filterTrip$ = new Subject<string>();

  constructor(private service: TripService, private toastr: ToastrService) { 
    this.filterTrip$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(value => value.toLowerCase())
      )
      .subscribe(
        value => this.filterTripDest = value);
  }

  ngOnInit() {
    this.service.refreshList();
  }

  onDelete(TripId) {
    if(confirm('Wil je zeker deze CityTripp verwijderen?')) {
      this.service.deleteTrip(TripId).subscribe(
        res => {
          this.service.refreshList();
          this.toastr.warning('Succesvol verwijderd!', 'Mijn CityTripps')
        },
        err => {
          console.log(err);
        }
      )
    }
  }

  applyFilter(filter:string) {
    this.filterTripDest = filter;
  }
}
