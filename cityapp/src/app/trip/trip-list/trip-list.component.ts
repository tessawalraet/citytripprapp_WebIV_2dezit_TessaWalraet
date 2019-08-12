import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { Trip } from '../trip.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  constructor(private service: TripService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  onUpdate(trip: Trip) {
    this.service.formData = Object.assign({}, trip);
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
}
